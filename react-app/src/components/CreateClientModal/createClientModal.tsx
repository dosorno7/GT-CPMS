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
import { FormHelperText } from '@mui/material';

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
    const [disabled, setDisabled] = React.useState(true);



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

    React.useEffect(() => {
        formValidation()
    });

    function formValidation() {
        if (firstName != '' 
            && lastName != ''
            && organization != ''
            && email != '')
            setDisabled(false)
        else
            setDisabled(true)
    }

    function genericHelperText(input: any) {
        if (input == '')
            return 'This field cannot be empty'
        else
            return ''
    }

    function emailHelperText() {
        if (email == '') {
            return 'This field cannot be empty'
        } else if (!(email.includes('@') && (email.includes('.com') || email.includes('.edu')
            || email.includes('.net')
            || email.includes('.org')))) {
                return 'Please enter a valid email (ex. burdell5@gatech.edu)'
        } else {
            return ''
        }
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
                            error={firstName == ''}
                            helperText={genericHelperText(firstName)}
                            onChange={handleFirstNameChange}
                        />

                        <TextField
                            label="Last Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            error={lastName == ''}
                            helperText={genericHelperText(lastName)}
                            onChange={handleLastNameChange}
                        />

                        <TextField
                            label="Client Organization"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            error={organization == ''}
                            helperText={genericHelperText(organization)}
                            onChange={handleOrganizationChange}
                        />

                        <TextField
                            label="Email"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            error={email == '' 
                            || !(email.includes('@') 
                                        && (email.includes('.com') 
                                        || email.includes('.edu') 
                                        || email.includes('.net') 
                                        || email.includes('.org')))}
                            helperText={emailHelperText()}
                            onChange={handleEmailChange}
                        />
                    <FormControl>
                        <InputLabel id="select-label">Client Status</InputLabel>
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
                    </FormControl>
                        
                    </Typography>
                    <Button variant="contained" disabled={disabled} onClick={() => { handleCreateClick() }}>
                        Create Client
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}

