import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const assignments = [
    {
      id: "react-api-01",
      title: "React API Assignment",
      schoologyUrl: "",
      repoUrl: ""
    },
    {
      id: "participation-monday",
      title: "Daily Participation - Monday",
      schoologyUrl: "",
      repoUrl: ""
    },
    {
      id: "participation-wednesday",
      title: "Daily Participation - Wednesday",
      schoologyUrl: "",
      repoUrl: ""
    }
  ]

  const [completedAssignments, setCompletedAssignments] = useState(() => {
    const savedAssignments = localStorage.getItem("margin-completed-ids-week-10")

    return savedAssignments ? JSON.parse(savedAssignments) : []
  })

  useEffect(() => {
    localStorage.setItem(
      "margin-completed-ids-week-10",
      JSON.stringify(completedAssignments)
    )
  }, [completedAssignments])

  return (
    <main>
      <h1>Week 10 Assignments</h1>
      <p>Due Sunday at 11:59 PM</p>
      <h2>Assignments</h2>
      <p>{completedAssignments.length} of {assignments.length} completed</p>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <input
              type="checkbox"
              checked={completedAssignments.includes(assignment.id)}
              onChange={() => {
                if (completedAssignments.includes(assignment.id)) {
                  setCompletedAssignments((previous) =>
                    previous.filter((item) => item !== assignment.id)
                  )
                } else {
                  setCompletedAssignments((previous) => [
                    ...previous,
                    assignment.id
                  ])
                }
              }}
            />
            {assignment.title}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
