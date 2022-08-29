import React from 'react'
import './listcss.css';
function Listview() {
  const persons = [
    {
      name: 'The "React Way" to Render a List'
    },
    {
      name: 'Use Array.map'
    },
    {
      name: 'Not a For Loop'
    },
    {
      name: 'Give each item a Unique Key'
    },
    {
      name: 'Avoid using array index as the key'
    }
  ]

  const personList = persons.map(person => (


    <center>
      <form>

        <h2>{person.name}</h2>
      </form>
    </center>


  ))
  return <div>{personList}

  </div>
}
export default Listview
