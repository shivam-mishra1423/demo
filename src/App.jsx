import { useState, useEffect } from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import './App.css'

// 🧩 App Component (Parent / Container Component)
// Kaam: SAARA state yahin store hota hai, aur niche StudentForm + StudentList
// ko props ke through data + functions bheje jaate hain.
// Interview point: Ye pattern "Lifting State Up" kehlata hai —
// child components ke paas apna state nahi, sab parent (App) control karta hai.

function App() {
  // Step 1: students array state
  const [students, setStudents] = useState([])

  // Step 2: separate state for each input field
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [city, setCity] = useState('')

  // Bonus: error message state (for validation)
  const [error, setError] = useState('')

  // Bonus: search by roll no
  const [searchRollNo, setSearchRollNo] = useState('')

  // Bonus: track which student is being edited (rollNo) or null if adding new
  const [editRollNo, setEditRollNo] = useState(null)

  // Lifecycle: runs once when component mounts
  useEffect(() => {
    console.log('Component loaded')
  }, [])

  // Lifecycle: runs whenever students array changes
  useEffect(() => {
    console.log('Students updated:', students)
  }, [students])

  // Helper: clear all input fields
  const clearInputs = () => {
    setFirstName('')
    setLastName('')
    setAge('')
    setRollNo('')
    setCity('')
    setEditRollNo(null)
  }

  // Add / Update logic — passed down to StudentForm as onSubmit
  const handleAddOrUpdate = () => {
    // Bonus: empty field validation
    if (!firstName.trim() || !lastName.trim() || !age.trim() || !rollNo.trim() || !city.trim()) {
      setError('⚠️ Please fill all fields before submitting.')
      return
    }

    // Bonus: duplicate roll number validation (skip check for the student being edited)
    const isDuplicate = students.some(
      (s) => s.rollNo === rollNo && s.rollNo !== editRollNo
    )
    if (isDuplicate) {
      setError('⚠️ This Roll No already exists. Please use a unique Roll No.')
      return
    }

    setError('')

    const studentObj = { firstName, lastName, age, rollNo, city }

    if (editRollNo !== null) {
      // Update existing student (match by original rollNo)
      setStudents(
        students.map((s) => (s.rollNo === editRollNo ? studentObj : s))
      )
    } else {
      // Add new student
      setStudents([...students, studentObj])
    }

    clearInputs()
  }

  // Delete logic — passed down to StudentList/StudentCard
  const handleDelete = (studentToDelete) => {
    setStudents(students.filter((s) => s.rollNo !== studentToDelete.rollNo))
    if (editRollNo === studentToDelete.rollNo) clearInputs()
  }

  // Edit logic — loads values back into the form
  const handleEdit = (studentToEdit) => {
    setFirstName(studentToEdit.firstName)
    setLastName(studentToEdit.lastName)
    setAge(studentToEdit.age)
    setRollNo(studentToEdit.rollNo)
    setCity(studentToEdit.city)
    setEditRollNo(studentToEdit.rollNo)
    setError('')
  }

  // Bonus: filter students by search roll no
  const displayedStudents = searchRollNo.trim()
    ? students.filter((s) => s.rollNo.includes(searchRollNo.trim()))
    : students

  return (
    <div className="container">
      <h1>🎓 Student Manager App</h1>

      {/* Form Component */}
      <StudentForm
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        age={age} setAge={setAge}
        rollNo={rollNo} setRollNo={setRollNo}
        city={city} setCity={setCity}
        error={error}
        isEditing={editRollNo !== null}
        onSubmit={handleAddOrUpdate}
        onCancel={clearInputs}
      />

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search by Roll No"
          value={searchRollNo}
          onChange={(e) => setSearchRollNo(e.target.value)}
        />
      </div>

      {/* List Component */}
      <div className="list-section">
        <h2>Student List ({displayedStudents.length})</h2>
        <StudentList
          students={displayedStudents}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
