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
      <p>{completedAssignments.length} of {assignments.length} completed</p>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment}>
            <input
              type="checkbox"
              checked={completedAssignments.includes(assignment)}
              onChange={() => {
                if (completedAssignments.includes(assignment)) {
                  setCompletedAssignments((previous) =>
                    previous.filter((item) => item !== assignment)
                  )
                } else {
                  setCompletedAssignments((previous) => [
                    ...previous,
                    assignment
                  ])
                }
              }}
            />
            {assignment}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
