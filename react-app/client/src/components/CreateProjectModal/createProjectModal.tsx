import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField'

import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateProjectModal( {getCreateProjectInfo}: any ) {
    const [open, setOpen] = React.useState(false);
    const [faultyInput, setFaultyInput] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const[organization, setOrganization] = React.useState(''); 
    const[teamNumber, setTeamNumber] = React.useState(''); 
    const[clientName, setClientName] = React.useState(''); 
    const[activeStatus, setActiveStatus] = React.useState(''); 
    const[section, setSection] = React.useState('')

    let section_dict = ["JIA", "JDA", "JDF"];
    let words = ["Active", "Unassigned", "Completed"]

    //Event Handlers
    const handleCreateClick = (
        teamNumber: string,
        section: string,
        organization: string,
        clientName: string,
        activeStatus: string) => {
        
        getCreateProjectInfo(teamNumber, section, organization, clientName, activeStatus);
        if (teamNumber.length == 0 || section.length == 0 || organization.length == 0 || clientName.length == 0|| activeStatus.length == 0) {
            console.warn("Inputs are wrong");
            setFaultyInput(true);
            var val = document.getElementById("modal-modal-error")
            if (val != null){
                val.textContent = "Invalid inputs provided";
            }
        } else {
            setFaultyInput(false);
            handleClose();
        }
    }

    const handleTeamNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(Number(event.target.value))) {
            setTeamNumber(event.target.value);
        } else {
            setTeamNumber("");
        }
    }

    const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //Add valid section dictionary in db later to replace this code
        console.log(event.target.value in section_dict)
        if(section_dict.indexOf(event.target.value) > -1) {
            setSection(event.target.value);
        } else {
            setSection("");
        }
    }

    const handleorganizationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(event.target.value)
    }

    const handleClientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.length - (event.target.value.indexOf(" ") + 1) > 0  && event.target.value.indexOf(" ") >= 0) {
            setClientName(event.target.value);
        } else {
            setClientName("");
        }
        
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
        console.log(words.indexOf(event.target.value))
        if(words.indexOf(event.target.value) > -1) {
            setActiveStatus(event.target.value);
        } else {
            setActiveStatus("");
        }
    }


    React.useEffect(() => {
        validIn()
    });

    function validIn() {
        if (teamNumber.length == 0 || section.length == 0 || organization.length == 0 || clientName.length == 0|| activeStatus.length == 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }

    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Create Project
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create New Project
                    </Typography>

                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            label="Organizaton Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleorganizationChange}
                            error={organization === ''}
                            helperText = {organization === '' ? ("This field cannot be empty") : ''}
                        />
                        <TextField
                            label="Client Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleClientNameChange}
                            error={clientName === ''}
                            helperText = {clientName === '' ? ('Please enter a valid (First Last) name') : ''}

                        />  
                        <TextField 
                            label="Team Number" 
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }} 
                            margin="normal" 
                            onChange={handleTeamNumberChange}
                            error={teamNumber === ''}
                            helperText = {teamNumber === '' ? ('Please enter a valid number') : ''}
                        />
                        <TextField
                            label="Section"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleSectionChange}
                            error={section === ''}
                            helperText = {section === '' ? ('Please enter a valid section') : ''}
                        />
                        <TextField
                            label="Activity Status (Active/Not Active)"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleStatusChange}
                            error={activeStatus === ''}
                            helperText = {activeStatus === '' ? ('Please enter one of: Active, Unassigned, or Completed') : ''}
                        />
                    </Typography>
                    <Button variant="contained" disabled={disabled} onClick={() => { handleCreateClick(teamNumber, section, organization, clientName, activeStatus) }}>
                        Create Project
                    </Button>

                    <Typography id="modal-modal-error" variant="h6" component="h2">
                        
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
