import React, { Component } from 'react'
import { useState } from 'react';
import '../App.css';

export default class Name extends Component {
   // Constructor 
   constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}
_getName = () => () => {
  const [name, setName] = useState('');
}
_getDept = () => () => {
  const [dept, setDept] = useState('');
}

// ComponentDidMount is used to
// execute the code 
componentDidMount() {
    fetch(
"https://sheet.best/api/sheets/6fac28fb-d646-4dcf-b171-00f0c29a5df7")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
}
  render() {
    const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
            

    return (
      <div className='ui container'>

            <div className='form container'>
        <form className='ui form'>
        <label>Department <br />
          <select  onChange={''} className="ui field">
          <option value={null}>!--select--!</option>
          <option value="cse">CSE</option>
          <option value="mtec">MECH</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
          </select>
          </label>
          <br></br>
          <label>Name <br />
          {['name'].map(key => (
    <select key={key} value={key} onChange={''}>
      {this.state.items.map(({ [key]: value }) => <option key={value} value={value}>{value}</option>)}
    </select>
  ))} 
          
          </label>
          <div className='tablecontainer'> 
<table> 
    <caption>NAME: KANAGA BHARATH</caption> 
    <caption>DEPARTMENT: CIVIL</caption> 
    <tr> 
        <th class="border1"></th>
        <th></th> 
        <th>Mark</th> 
        
    </tr> 
    <tr> 
        <th rowspan="3">Skill Training</th> 
        <th>Foundation Course</th> 
        <th>289</th> 
        
    </tr> 
    <tr> 
        <th>Technical Course / FIS</th> 
        <th>-</th> 
        
    </tr> 
    <tr> 
        <th>Faculty Interview</th> 
        <th>100</th> 
         
    </tr>
    <tr> 
        <th rowspan="4">Resource Utilization/Industry Relationship</th> 
        <th>Online Courses</th> 
        <th>50</th> 
        
    </tr> 
    <tr> 
        <th>Internship</th> 
        <th>-</th> 
        
    </tr> 
    <tr> 
        <th>In plant Training</th> 
        <th>-</th> 
         
    </tr>
    <tr> 
        <th>Interaction with HR</th> 
        <th>-</th> 
         
    </tr>
    <tr> 
        <th rowspan="6">Student Achievements</th> 
        <th>Project Presentation</th> 
        <th>-</th> 
        
    </tr> 
    <tr> 
        <th>Paper Presentation</th> 
        <th>-</th> 
        
    </tr> 
    <tr> 
        <th>Journal Publications</th> 
        <th>-</th> 
         
    </tr>
    <tr> 
        <th>Patent</th> 
        <th>-</th> 
         
    </tr>
    <tr> 
        <th>Consultancy</th> 
        <th>-</th> 
         
    </tr>
    <tr> 
        <th>Product Development</th> 
        <th>-</th> 
         
    </tr>
    <tr> 
        <th rowspan="4">Add On Activities</th> 
        <th>Assignment Series</th> 
        <th>20</th> 
        
    </tr> 
    <tr> 
        <th>Video Logs </th> 
        <th>-</th> 
        
    </tr> 
    <tr> 
        <th>Sports Activities</th> 
        <th>100</th> 
         
    </tr>
    <tr> 
        <th>Outreach Activities</th> 
        <th>10</th> 
         
    </tr>
   
</table>

</div>
        </form>
        </div>
      </div>
    )
  }
}
