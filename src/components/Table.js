import React, { useState } from "react"

  const SearchUser = () => {
    const [users, setUsers] = useState([])
  
    const fetchData = e => {
      const query = e.target.value
      fetch(`https://sheet.best/api/sheets/20e4d466-bf11-4fca-840a-1734536fd4be/name/${query}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
  return (
    <div className='tablecontainer'> 
    <div className="searchbar">
    <input onChange={fetchData} label="Search User" defaultValue="9530" />
    </div>
    <hr  />
    {users.length > 0 && (
<table> 
{users.map(user => (
            <h3>Name:  {user.name}</h3> ))}
           {users.map(user => (
           <h3>Department:  {user.dept}</h3>))}            
    <tr> 
        <th class="border1"></th>
        <th></th> 
        <th>Mark</th> 
        
    </tr> 
           
    <tr> 
        <th rowspan="3">Skill Training</th> 
        <th>Foundation Course</th> 
        {users.map(user => ( 
        <th>{user.fc}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Technical Course / FIS</th> 
        {users.map(user => ( 
        <th>{user.tc}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Faculty Interview</th> 
        {users.map(user => ( 
        <th>{user.interview}</th> 
        ))}
    </tr>
    <tr> 
        <th rowspan="4">Resource Utilization/Industry Relationship</th> 
        <th>Online Courses</th> 
        {users.map(user => ( 
        <th>{user.oc}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Internship</th> 
        {users.map(user => ( 
        <th>{user.internship}</th> 
        ))}
    </tr> 
    <tr> 
        <th>In plant Training</th> 
        {users.map(user => ( 
        <th>{user.ipt}</th> 
        ))}
    </tr>
    <tr> 
        <th>Interaction with HR</th> 
        {users.map(user => ( 
        <th>{user.ihr}</th> 
        ))}
    </tr>
    <tr> 
        <th rowspan="6">Student Achievements</th> 
        <th>Project Presentation</th> 
        {users.map(user => ( 
        <th>{user.projectp}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Paper Presentation</th> 
        {users.map(user => ( 
        <th>{user.paperp}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Journal Publications</th> 
        {users.map(user => ( 
        <th>{user.jp}</th> 
        ))}
    </tr>
    <tr> 
        <th>Patent</th> 
        {users.map(user => ( 
        <th>{user.patent}</th> ))}
         
    </tr>
    <tr> 
        <th>Consultancy</th> 
        {users.map(user => ( 
        <th>{user.consultancy}</th> 
        ))}
    </tr>
    <tr> 
        <th>Product Development</th> 
        {users.map(user => ( 
        <th>{user.pd}</th> 
        ))}
    </tr>
    <tr> 
        <th rowspan="4">Add On Activities</th> 
        <th>Assignment Series</th> 
        {users.map(user => ( 
        <th>{user.as}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Video Logs </th> 
        {users.map(user => ( 
        <th>{user.vl}</th> 
        ))}
    </tr> 
    <tr> 
        <th>Sports Activities</th> 
        {users.map(user => ( 
        <th>{user.sport}</th> 
        ))}
    </tr>
    <tr> 
        <th>Outreach Activities</th> 
        {users.map(user => ( 
        <th>{user.out}</th> 
        ))}
    </tr>
</table>
)}
</div>
  )
}
export default SearchUser
