import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Modal from '@mui/material/Modal';
import { FormHelperText, MenuItem } from '@mui/material';


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
    const [organization, setOrganization] = React.useState('');
    const [teamNumber, setTeamNumber] = React.useState('');
    const [clientName, setClientName] = React.useState('');
    const [activeStatus, setActiveStatus] = React.useState('');
    const [section, setSection] = React.useState('')
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOrganization('');
        setTeamNumber('');
        setSection('');
        setClientName('');
        setClientName('');
        setActiveStatus('');
        setOpen(false);
    }

    //Event Handlers
    const handleCreateClick = (
        teamNumber: string,
        section: string,
        organization: string,
        clientName: string,
        activeStatus: string) => {
        
        getCreateProjectInfo(teamNumber, section, organization, clientName, activeStatus);
        handleClose();
    }

    const handleTeamNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeamNumber(event.target.value);
    }

    const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSection(event.target.value);
    }

    const handleorganizationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(event.target.value)
    }

    const handleClientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClientName(event.target.value);        
    }

    const handleStatusChange = (event: SelectChangeEvent) => {  
        setActiveStatus(event.target.value);
    }


    React.useEffect(() => {
        formValidation()
    });

    function formValidation() {
        if (
            teamNumber != '' && teamNumber.match(/^[0-9]+$/) != null
            && section != '' && section.toUpperCase() == section 
            && organization != ''
            && clientName != ''
            && activeStatus != '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }

    function sectionHelperText() {
        if (section === '') {
            return 'Required *';
        }
        if (section.toUpperCase() !== section) {
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
                            label="Organization Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleorganizationChange}
                            helperText = {organization === '' ? ("Required *") : ''}
                        />
                        <TextField
                            label="Client Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleClientNameChange}
                            helperText = {clientName === '' ? ('Required *') : ''}

                        />  
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
                            helperText = {sectionHelperText()}
                        />
                        <FormControl style={{ marginBottom: 15, marginLeft: 8, marginTop: 8 }}>
                            <InputLabel id="select-label">Activity Status</InputLabel>
                            <Select
                                value={activeStatus}
                                onChange={handleStatusChange}
                                label="Activity Status"
                                style={{ padding: 10, width: 220, height: 53 }}
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Unassigned">Unassigned</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                            </Select>
                            <FormHelperText>{activeStatus === '' ? ('Required *') : ''}</FormHelperText>
                        </FormControl>
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
