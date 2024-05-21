import { useEffect, useState } from 'react'

interface PersonInterface {
  name: string
  age: number
  skills: string[]
}

function App() {
  const [person, setPerson] = useState<PersonInterface | null>(null)

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPerson(data)
      })
  }, [])

  return (
    <div>
      {person && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <ul>
            {person.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default App
