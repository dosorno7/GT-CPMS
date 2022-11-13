import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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

export default function CreateClientModal( {getCreateClientInfo}: any) {
    const [open, setOpen] = React.useState(false);
    const [clientStatus, setClientStatus] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [organization, setOrganization] = React.useState('');
    const [email, setEmail] = React.useState('');


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCreateClick = () => {
        getCreateClientInfo(firstName, lastName, organization, email, clientStatus);
        handleClose();
    }

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const handleOrganizationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(event.target.value);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleClientStatusChange = (event: SelectChangeEvent) => {
        setClientStatus(event.target.value);
    }
    
    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Create Client
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create New Client
                    </Typography>

                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2}}>
                        <TextField
                            label="First Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleFirstNameChange}
                        />

                        <TextField
                            label="Last Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleLastNameChange}
                        />

                        <TextField
                            label="Client Organization"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleOrganizationChange}
                        />

                        <TextField
                            label="Email"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleEmailChange}
                        />

                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={clientStatus}
                            onChange={handleClientStatusChange}
                            label="Client Status"
                            style={{padding: 10, width: 220, height: 53, marginLeft: 8, marginBottom: 15, marginTop: 8}}
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Prospective">Prospective</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                    </Typography>
                    <Button variant="contained" onClick={() => { handleCreateClick() }}>
                        Create Client
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}

