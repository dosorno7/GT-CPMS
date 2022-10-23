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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let teamNumber = '';
    let section = '';
    let projName = '';
    let clientName = '';
    let activeStatus = '';

    //Event Handlers
    const handleCreateClick = (
        teamNumber: string,
        section: string,
        projName: string,
        clientName: string,
        activeStatus: string) => {

        getCreateProjectInfo(teamNumber, section, projName, clientName, activeStatus); 
        handleClose();
    }

    const handleTeamNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        teamNumber = event.target.value;
    }

    const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        section = event.target.value;
    }

    const handleProjNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        projName = event.target.value;
    }

    const handleClientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clientName = event.target.value;
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        activeStatus = event.target.value;
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
                            label="Project Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleProjNameChange}
                        />
                        <TextField
                            label="Client Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleClientNameChange}
                        />
                        <TextField 
                            label="Team Number" 
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }} 
                            margin="normal" 
                            onChange={handleTeamNumberChange}
                        />
                        <TextField
                            label="Section"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleSectionChange}
                        />
                        <TextField
                            label="Activity Status (Active/Not Active)"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleStatusChange}
                        />
                    </Typography>
                    <Button variant="contained" onClick={() => { handleCreateClick(teamNumber, section, projName, clientName, activeStatus) }}>
                        Create Project
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}