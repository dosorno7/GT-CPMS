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
    const [disabled, setDisabled] = React.useState(true);

    const [teamNumber, setTeamNumber] = React.useState('');
    const [section, setSection] = React.useState('');
    const [projName, setProjName] = React.useState('');
    const [clientName, setClientName] = React.useState('');
    const [profName, setProfName] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        formValidation()
    });


    //Event Handlers
    function handleCreateClick() {
        getCreateTeamInfo(teamNumber, section, projName, clientName, profName);
        setTeamNumber('')
        setSection('')
        setProjName('')
        setClientName('')
        setProfName('') 
        handleClose();
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
        if (teamNumber != '' && section != ''&& projName != '' && clientName != '' && profName != '')
            setDisabled(false)
        else 
            setDisabled(true)
    }

    function formHelperText(input: any) {
        if (input == '')
            return 'This field cannot be empty'
        else
            return ''
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
                            error={teamNumber == ''}
                            helperText={formHelperText(teamNumber)}
                        />
                        <TextField
                            label="Section"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleSectionChange}
                            error={section == ''}
                            helperText={formHelperText(section)}
                        />
                        <TextField
                            label="Project Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleProjNameChange}
                            error={projName == ''}
                            helperText={formHelperText(projName)}
                        />
                        <TextField
                            label="Client Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleClientNameChange}
                            error={clientName == ''}
                            helperText={formHelperText(clientName)}
                        />
                        <TextField
                            label="Professor Name"
                            id="standard-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            onChange={handleProfNameChange}
                            error={profName == ''}
                            helperText={formHelperText(profName)}
                        />
                    </Typography>
                    <Button variant="contained" disabled={disabled} onClick={() => { handleCreateClick() }}>
                        Create Team
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}