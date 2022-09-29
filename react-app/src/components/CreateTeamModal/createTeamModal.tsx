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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateTeamModal( {getCreateTeamInfo}: any ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const teamNumber = 'blah';
    const section = 'test';
    const projName = 'yo';
    const clientName = 'ok';
    const profName = 'cool';

    const handleCreateClick = (
        teamNumber: string,
        section: string,
        projName: string,
        clientName: string,
        profName: string) => {

        getCreateTeamInfo(teamNumber, section, projName, clientName, profName); 
        handleClose();
    }



    return (
        <div>
            <Button variant="contained" onClick={handleOpen}
            >
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Put text inputs here for:
                        Team Number,
                        Section,
                        Project Name,
                        Client Name,
                        Professor Name,
                        Any other info needed in database? Client emails? Students?

                        <Button variant="contained" onClick={() => {handleCreateClick(teamNumber, section, projName, clientName, profName)}}>
                            Create Team
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}