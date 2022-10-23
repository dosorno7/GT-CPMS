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

export default function CreateTeamModal( {getCreateTeamInfo}: any ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [formValues, setFormValues] = React.useState([{ studentName: "", studentEmail: ""}])
    
    let handleRowChange = () => {
        let newFormValues = [...formValues];
        // newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
        
    let addFormFields = () => {
        setFormValues([...formValues, { studentName: "", studentEmail: "" }])
    }

    let teamNumber = '';
    let section = '';
    let projName = '';
    let clientName = '';
    let profName = '';

    let studentName = '';
    let studentEmail = '';

    //Event Handlers
    const handleCreateClick = (
        teamNumber: string,
        section: string,
        projName: string,
        clientName: string,
        profName: string) => {

        getCreateTeamInfo(teamNumber, section, projName, clientName, profName); 
        handleOpen2();
        handleClose();
    }

    const handleStudentsClick = (
        studentName: string,
        studentEmail: string) => {
            handleClose2();
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

    const handleProfNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        profName = event.target.value;
    }

    const handleStudentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        studentName = event.target.value;
    }

    const handleStudentEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        studentEmail = event.target.value;
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
                <Box sx={style}>
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
                        />
                        <TextField
                            label="Section"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleSectionChange}
                        />
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
                            label="Professor Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleProfNameChange}
                        />
                    </Typography>
                    <Button variant="contained" onClick={() => { handleCreateClick(teamNumber, section, projName, clientName, profName) }}>
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
                    <Button variant="contained" onClick={() => addFormFields()}>Add Student</Button>
                    <Button variant="contained" onClick={() => { handleStudentsClick(studentName, studentEmail) }}>
                        Create Team
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}