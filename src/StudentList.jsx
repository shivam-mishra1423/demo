import StudentCard from './StudentCard'

// 🧩 StudentList Component
// Kaam: students array ko .map() se loop karke har student ke liye
// ek StudentCard render karna
// Interview point: Ye "Container-ish list component" hai — khud render nahi
// karta, StudentCard ko data + functions pass karke kaam usko sonpta hai

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <p className="empty-msg">No students found.</p>
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.rollNo}
          student={student}
          onEdit={() => onEdit(student)}
          onDelete={() => onDelete(student)}
        />
      ))}
    </div>
  )
}

export default StudentList
