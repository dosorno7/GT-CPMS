import React from 'react';
import logo from './logo.svg';
import './RequestPage.css';
import { useState } from 'react';
import '../App.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';

function RequestPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [access, setAccess] = useState("");

  const handleSubmit = () => {
    if (firstName == "") {
      alert('Please Enter a First Name')
    }
    if (lastName == "") {
      alert('Please Enter a Last Name')
    }
    if (email == "") {
      alert('Please Enter an Email')
    }
    if (access == "") {
      alert('Please Select Access')
    }
    if (firstName != "" && lastName != "" && email != "" && access != "") {
          alert(`The name you entered was: ${firstName} ${lastName}\nThe email you entered was: ${email}\nThe access you chose was: ${access}`)
    }
  }

  const handleAccessChange = (event: SelectChangeEvent) => {  
    setAccess(event.target.value);
  }
  
  return (
    <div className="body">
      <header className="header">
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
              <Select
                  value={access}
                  onChange={handleAccessChange}
                  label="Activity Status"
                  style={{ padding: 10, width: 220, height: 25 }}
              >
                <MenuItem value="instructor">Instructor</MenuItem>
                <MenuItem value="administrator">Administrator</MenuItem>
                <MenuItem value="client">Client</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </label>
            <input type="submit" className='textbox' />
          </div>
        </form>
      </header>
    </div>
  );
}

export default RequestPage;
