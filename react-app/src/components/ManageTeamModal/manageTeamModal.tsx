import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal';
import { DataGrid, GridColDef, GridRowId, gridClasses } from '@mui/x-data-grid';



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
// getManageTeamInfo will go in {}
export default function ManageTeamModal(props: {
    rows: {
        teamNumber: string,
        section: string,
        project: string,
        client: string,
        professor: string
    }[]; selectionModel: string | any[]; }) {
    const [open, setOpen] = React.useState(false);

    const [teamNumber, setTeamNumber] = React.useState('');
    const [section, setSection] = React.useState('');
    const [projName, setProjName] = React.useState('');
    const [clientName, setClientName] = React.useState('');
    const [profName, setProfName] = React.useState('');
    const [selectedTeam, setSelectedTeam] = React.useState([{
        teamNumber: '',
        section: '',
        project: '',
        client: '',
        professor: ''
    }])

    const handleOpen = () => {
        setSelectedTeam(props.rows.filter((r: any) => props.selectionModel.includes(r.id)))
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

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



    return (
        <div>
            <Button variant="contained" onClick={handleOpen}
            >
                Manage Selected Team
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Team {selectedTeam[0].teamNumber}
                    </Typography>
                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Team info will go here */}                        
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}