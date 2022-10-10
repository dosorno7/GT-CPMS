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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let clientName = '';
    let clientOrg = '';
    let contactInfo = '';

    const handleCreateClick = (
        clientName: string,
        clientOrg: string,
        contactInfo: string,
        clientStatus: string
    ) => {
        getCreateClientInfo(clientName, clientOrg, contactInfo, clientStatus);
        handleClose();
    }

    const handleClientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clientName = event.target.value;
    }

    const handleClientOrgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clientOrg = event.target.value;
    }

    const handleContactInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        contactInfo = event.target.value;
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
                            onChange={handleClientNameChange}
                        />

                        <TextField
                            label="Client Organization"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleClientOrgChange}
                        />

                        <TextField
                            label="Contact Information"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleContactInfoChange}
                        />

                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={clientStatus}
                            onChange={handleClientStatusChange}
                            label="Client Status"
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Prospective">Prospective</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                    </Typography>
                    <Button variant="contained" onClick={() => { handleCreateClick(clientName, clientOrg, contactInfo, clientStatus) }}>
                        Create Client
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}

