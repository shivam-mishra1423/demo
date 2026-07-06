# 🎓 Student Manager App

A **Student Manager App** built with **React (Vite)** that demonstrates core React concepts including **State Hooks (`useState`)**, **Rendering**, and the **Component Lifecycle (`useEffect`)**.

## 🌐 Live Demo

**Live Application:** https://studentmngmt.vercel.app

---

# 📂 Folder Structure

```text
student-manager-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx         → Entry point of the React application
    ├── App.jsx          → Parent component that contains all state and business logic
    ├── StudentForm.jsx  → Child component that renders the student form
    ├── StudentList.jsx  → Child component that renders the list of students
    ├── StudentCard.jsx  → Child component that displays a single student's details
    ├── App.css          → Application styles
    └── index.css        → Global styles
```

---

# 🧩 Component Breakdown (Interview Perspective)

## 1. `App.jsx` — Parent / Container Component

* This component manages the entire application state, including:

  * `students`
  * `firstName`
  * `lastName`
  * `age`
  * `rollNo`
  * `city`
  * `error`
  * `searchRollNo`
  * `editRollNo`
* It contains all business logic such as:

  * `handleAddOrUpdate`
  * `handleDelete`
  * `handleEdit`
* It passes data and functions to child components through **props**.
* **Interview Term:** This pattern is called **Lifting State Up**, where shared state is kept in the parent component so multiple child components can access and update it.

---

## 2. `StudentForm.jsx` — Presentational Component

* Displays the form with:

  * First Name
  * Last Name
  * Age
  * Roll Number
  * City
  * Add/Update Button
* It does not maintain its own state.
* All values and setter functions are received via **props**.
* This is known as a **Controlled Component**, because every input field is controlled by React state rather than the DOM.

---

## 3. `StudentList.jsx` — List Component

* Receives the `students` array through props.
* Uses the `.map()` method to iterate over the array.
* Renders one `StudentCard` component for each student.
* It does not contain the card UI itself—it simply delegates the rendering responsibility to `StudentCard`.

---

## 4. `StudentCard.jsx` — Reusable Presentational Component

* Displays the details of a single student:

  * Name
  * Age
  * Roll Number
  * City
* Contains **Edit** and **Delete** buttons.
* Calls `onEdit` and `onDelete` functions received through props.
* It is a small, focused, and reusable component that can be rendered multiple times.

---

# 🔄 Data Flow (Props Down, Events Up)

```text
App (State is stored here)
 │
 ├──> StudentForm
 │       (Receives values, setter functions, and submit handler)
 │
 │       User types in an input
 │               ↓
 │       setFirstName() / other setters
 │               ↓
 │        App state updates
 │               ↓
 │          UI re-renders
 │
 └──> StudentList
         (Receives students array, onEdit, and onDelete)
                 │
                 ▼
           StudentCard
                 │
                 ├── Edit Button → handleEdit()
                 └── Delete Button → handleDelete()
```

**React Principle:**

> **Data flows downward through props, while events flow upward through callback functions.**

---

# 🚀 How to Run the Project

### Step 1

Extract the project folder.

### Step 2

Open the terminal inside the project directory.

```bash
cd student-manager-app
```

### Step 3

Install all dependencies.

```bash
npm install
```

### Step 4

Start the development server.

```bash
npm run dev
```

### Step 5

Open the URL displayed in the terminal (usually):

```text
http://localhost:5173
```

---

# 🧠 React Concepts Used

| Concept                  | Usage                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `useState`               | Manages students array, input fields, error messages, search value, and edit state |
| Re-rendering             | Whenever state changes, React automatically updates the UI                         |
| `useEffect` (Mount)      | Executes once when the component is first rendered                                 |
| `useEffect` (Dependency) | Executes whenever the `students` state changes                                     |

---

# ✅ Features Implemented

### Add Student

Users can enter student information through the form and add it to the list.

### Display Student List

The application displays all students using the `.map()` method.

### Delete Student

Each student card contains a Delete button that removes the student using the `filter()` method.

### Edit Student (Bonus)

Clicking the Edit button loads the student's data back into the form.

After making changes, clicking **Update** replaces the existing student information instead of creating a new record.

### Empty Field Validation (Bonus)

The form cannot be submitted unless all required fields are completed.

### Duplicate Roll Number Validation (Bonus)

Students cannot be added if another student already has the same roll number.

### Search by Roll Number (Bonus)

Users can instantly search for a student by entering a roll number in the search box.

---

# 🔥 Future Improvements

* Store student data using **Local Storage** so that it persists after refreshing the page.
* Connect the application to a backend using **Node.js**, **Express.js**, and **MongoDB**.
* Implement pagination for large student lists.
* Add sorting functionality.
* Further modularize the project by splitting the form and card into separate reusable components (`StudentForm.jsx`, `StudentCard.jsx`).
