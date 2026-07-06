// 🧩 StudentCard Component
// Kaam: EK single student ki details dikhana + Edit/Delete button
// Interview point: Ye "reusable component" hai — StudentList isko loop me
// baar-baar use karta hai, har student ke liye ek card

function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.firstName} {student.lastName}</h3>
        <p>Age: {student.age}</p>
        <p>Roll No: {student.rollNo}</p>
        <p>City: {student.city}</p>
      </div>
      <div className="student-actions">
        <button className="btn-edit" onClick={onEdit}>
          Edit
        </button>
        <button className="btn-delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default StudentCard
