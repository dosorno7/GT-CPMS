import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

export default function ManageClientModal(props: {
    rows: {
        clientName: string,
        organization: string,
        email: string,
        status: string
    }[]; selectionModel: string | any[];
    manageDisabled: boolean}) {

    const [open, setOpen] = React.useState(false);
    const [selectedClient, setSelectedClient] = React.useState([{
        clientName: '',
        organization: '',
        email: '',
        status: ''
    }]);

    const handleOpen = () => {
        setSelectedClient(props.rows.filter((r: any) => props.selectionModel.includes(r.id)))
        setOpen(true);
    }
    const handleClose = () => setOpen(false);


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

                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                        <b>Client Name: </b>  {selectedClient[0].clientName} <br/>
                        <b>Organization: </b>  {selectedClient[0].organization} <br />
                        <b>Email: </b>  {selectedClient[0].email} <br />
                        <b>Status </b>  {selectedClient[0].status} <br />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

