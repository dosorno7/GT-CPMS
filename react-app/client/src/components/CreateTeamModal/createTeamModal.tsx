import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal';


let style1 = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  opacity: '100%',
};

let style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    opacity: '100%',
}


export default function CreateTeamModal( {getCreateTeamInfo}: any ) {
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const [teamNumber, setTeamNumber] = React.useState('');
  const [section, setSection] = React.useState('');
  const [projName, setProjName] = React.useState('');
  const [clientName, setClientName] = React.useState('');
  const [profName, setProfName] = React.useState('');
  const [studentName, setStudentName] = React.useState('');
  const [studentEmail, setStudentEmail] = React.useState('');

  const handleOpen = () => {
    style1.opacity = '100%';
    setOpen(true);
  }
  const handleClose = () => {
    setTeamNumber('');
    setProjName('');
    setClientName('');
    setProfName('');
    setOpen(false);
  }

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  }
  const handleClose2 = () => {
    handleClose();
    setOpen2(false);
  }

  const [formValues, setFormValues] = React.useState([{ name: studentName, email: studentEmail}])

  let handleRowChange = () => {
      let newFormValues = [...formValues];
      setFormValues(newFormValues);
  }

  const addFormFields = () => {
      setFormValues([...formValues, { name: studentName, email: studentEmail }])
  }

  React.useEffect(() => {
      formValidation()
  });

  //Event Handlers
  const handleStudentsClick = () => {
        formValues.push({name: studentName, email: studentEmail})
        setFormValues([...formValues, { name: studentName, email: studentEmail }])
        formValues.shift()
        console.log(formValues)
        handleClose2();
        handleCreateClick();
    }

  function handleCreateClick() {
      getCreateTeamInfo(teamNumber, section, projName, clientName, profName, formValues); 
      handleClose();
      setStudentEmail('');
      setStudentName('');
      setFormValues([{ name: "", email: ""}])
      style1 = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        opacity: '100%',
    };
  }

  function handleNext() {
    handleOpen2();
    style1 = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        opacity: '0%',
    };
  }
  
  function handleBack() {
    setOpen2(false);
    style1 = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        opacity: '100%',
    };
    setTeamNumber(teamNumber)
    setSection(section)
    setProjName(projName)
    setClientName(clientName)
    setProfName(profName)
  }

  function handleTeamNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
      setTeamNumber(event.target.value);
  }

  function handleSectionChange(event: React.ChangeEvent<HTMLInputElement>) {
      setSection(event.target.value);
  }

  function handleProjNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setProjName(event.target.value);
  }

  function handleClientNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setClientName(event.target.value);
  }

  function handleProfNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setProfName(event.target.value);
  }

  function formValidation() {        
      if (teamNumber != '' && teamNumber.match(/^[0-9]+$/) != null
          && section != '' && section.toUpperCase() == section
          && projName != '' 
          && clientName != '' 
          && profName != '')
          setDisabled(false)
      else 
          setDisabled(true)
  }

  function sectionHelperText() {
      if (section == '') {
          return 'Required *';
      }
      if (section.toUpperCase() != section) {
          return 'Section code cannot contain lowercase characters';
      }
      return '';
  }

  function teamNumberHelperText() {
      if (teamNumber == '') {
          return 'Required *';
      }
      if (teamNumber.match(/^[0-9]+$/) == null) {
          return 'Team number must only contain numbers';
      }
      return '';
  }

  function genericHelperText(input: any) {            
      if (input == '')
          return 'Required *'
      else
          return ''
  }

  const handleStudentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setStudentName(event.target.value);
  }

  const handleStudentEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setStudentEmail(event.target.value);
  }

  return (
      <div>
          <Button variant="contained" onClick={handleOpen}>
              Create Team
          </Button>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style1}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Create New Team
                  </Typography>
                  <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                      <TextField 
                          label="Team Number" 
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '25ch' }} 
                          margin="normal" 
                          onChange={handleTeamNumberChange}
                          error={teamNumber.match(/^[0-9]+$/) == null && teamNumber != ''}
                          helperText={teamNumberHelperText()}
                      />
                      <TextField
                          label="Section"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          margin="normal"
                          onChange={handleSectionChange}
                          error={section.toUpperCase() != section}
                          helperText={sectionHelperText()}
                      />
                      <TextField
                          label="Project Name"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          margin="normal"
                          onChange={handleProjNameChange}
                          helperText={genericHelperText(projName)}
                      />
                      <TextField
                          label="Client Name"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          margin="normal"
                          onChange={handleClientNameChange}
                          helperText={genericHelperText(clientName)}
                      />
                      <TextField
                          label="Professor Name"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '25ch' }}
                          margin="normal"
                          onChange={handleProfNameChange}
                          helperText={genericHelperText(profName)}
                      />
                  </Typography>
                  <Button variant="contained" disabled={disabled} onClick={() => { handleNext() }}>
                      Next
                  </Button>
              </Box>
          </Modal>
          <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                <Button variant="contained" onClick={() => { handleBack() }}>
                      Back
                </Button>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Enter Student Information
                  </Typography>
                  <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                      {formValues.map((element, index) => (
                          <div>
                          <TextField 
                              label="Student Name" 
                              id="standard-start-adornment"
                              sx={{ m: 1, width: '25ch' }} 
                              margin="normal" 
                              onChange={handleStudentNameChange}
                          />
                          <TextField 
                              label="Student Email" 
                              id="standard-start-adornment"
                              sx={{ m: 1, width: '25ch' }} 
                              margin="normal" 
                              onChange={handleStudentEmailChange}
                          />
                      </div>
                      ))}
                  </Typography>
                  <div className="option_buttons">
                    <Button variant="contained" onClick={() => addFormFields()}>Add Student</Button>
                    <Button variant="contained" onClick={() => handleStudentsClick()}>
                        Create Team
                    </Button>
                  </div>
              </Box>
          </Modal>
      </div>
  );
}