import { useState } from 'react'
import './App.css'

function App() {
  const assignments = [
    "React API Assignment",
    "Daily Participation - Monday",
    "Daily Participation - Wednesday"
  ]

  const [completedAssignments, setCompletedAssignments] = useState([])

  return (
    <main>
      <h1>Week 10 Assignments</h1>
      <p>Due Sunday at 11:59 PM</p>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment}>
            <input
              type="checkbox"
              checked={completedAssignments.includes(assignment)}
              onChange={() => console.log(assignment)}
            />
            {assignment}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
