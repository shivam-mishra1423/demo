// 🧩 StudentForm Component
// Kaam: Sirf form dikhana + input values parent (App) tak bhejna
// State: Ye component "controlled" hai — values aur onChange sab PROPS se aa rahe hain
// Interview point: Isko "Presentational / Dumb Component" bolte hain,
// kyunki isme koi apna state nahi hai (sirf props use ho rahe hain)

function StudentForm({
  firstName, setFirstName,
  lastName, setLastName,
  age, setAge,
  rollNo, setRollNo,
  city, setCity,
  error,
  isEditing,
  onSubmit,
  onCancel,
}) {
  return (
    <div className="form-card">
      <h2>{isEditing ? 'Edit Student' : 'Add Student'}</h2>

      <div className="form-grid">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="button-row">
        <button className="btn-primary" onClick={onSubmit}>
          {isEditing ? 'Update Student' : 'Add Student'}
        </button>
        {isEditing && (
          <button className="btn-secondary" onClick={onCancel}>
            Cancel Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default StudentForm
