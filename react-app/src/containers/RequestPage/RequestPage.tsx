import React from 'react';
import logo from './logo.svg';
import './RequestPage.css';
import { useState } from 'react';
import '../App.css';

function RequestPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [access, setAccess] = useState("");

  const handleSubmit = () => {
    alert(`The name you entered was: ${firstName} ${lastName}\nThe email you entered was: ${email}\nThe access you chose was: ${access}`)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Request Access
        <form onSubmit={handleSubmit}>
          <div className='Dropdown'>
            <label>
              First Name:
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='textbox'/>
            </label>
            <label>
              Last Name:
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='textbox'/>
            </label>
            <label>
              Preferred Email (GT if Applicable):
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='textbox'/>
            </label>
            <label>
              Select Access:
              <select className='textbox' name='access'> 
                <option value="instructor">Instructor</option>
                <option value="administrator">Administrator</option>
                <option selected value="client">Client</option>
                <option value="student">Student</option>
              </select>
            </label>
            <input type="submit" className='textbox' />
          </div>
        </form>
      </header>
    </div>
  );
}

export default RequestPage;
