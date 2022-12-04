import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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

export default function ManageClientModal(props: {
    rows: {
        clientName: string,
        organization: string,
        email: string,
        status: string
    }[]; selectionModel: string | any[];
    manageDisabled: boolean;
    getUpdateInfo: any}) {

    const [open, setOpen] = React.useState(false);
    const [selectedClient, setSelectedClient] = React.useState([{
        clientName: '',
        organization: '',
        email: '',
        status: ''
    }]);
    const [updateName, setUpdateName] = React.useState(selectedClient[0].clientName);
    const [updateOrg, setUpdateOrg] = React.useState(selectedClient[0].organization);
    const [updateEmail, setUpdateEmail] = React.useState(selectedClient[0].email);


    const handleOpen = () => {
        setSelectedClient(props.rows.filter((r: any) => props.selectionModel.includes(r.id)))
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleUpdateClick = () => {
        props.getUpdateInfo(updateName, updateOrg, updateEmail);
        setUpdateName('');
        setUpdateOrg('');
        setUpdateEmail('');
        handleClose();
    }

    const handleUpdateNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateName(event.target.value);
    }

    const handleUpdateOrgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateOrg(event.target.value);
    }

    const handleUpdateEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateEmail(event.target.value);
    }


    return (
        <div>
            <Button variant="contained" onClick={handleOpen} disabled={props.manageDisabled}
            >
                Manage Selected Client
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Client - {selectedClient[0].clientName}
                    </Typography>

                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }} >
                        <b>Client Name: </b>  <TextField label={selectedClient[0].clientName} onChange={handleUpdateNameChange} size="small" /> <br/>
                        <b>Organization: </b>  <TextField label={selectedClient[0].organization} onChange={handleUpdateOrgChange} size="small"/>  <br />
                        <b>Email: </b> <TextField label={selectedClient[0].email} onChange={handleUpdateEmailChange} size="small"/>  <br />
                        <b>Status: </b>  {selectedClient[0].status} <br />
                    </Typography>

                    <Button variant="contained" style={{ float: "left"}} onClick={() => { handleUpdateClick() }}>
                        Update Client
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

