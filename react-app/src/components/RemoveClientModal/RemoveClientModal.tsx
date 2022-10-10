import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './RemoveClientModal.css';

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

export default function RemoveClientModal( {deleteClients}: any ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleYes = () => { deleteClients(); setOpen(false); }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Delete Selected Clients
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure that you want to delete these client(s)?
                    </Typography>
                    <div className="option_buttons">
                        <Button variant="contained" onClick={handleYes}>
                            Yes
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            No
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}