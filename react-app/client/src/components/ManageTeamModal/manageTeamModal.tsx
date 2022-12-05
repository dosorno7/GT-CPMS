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

let names = '';

export default function ManageTeamModal(props: {
    rows: {
        teamNumber: string,
        section: string,
        project: string,
        client: string,
        professor: string,
        students: {
            teamNumber: string,
            name: string,
            email: string
        }[]
    }[]; selectionModel: string | any[]; 
    manageDisabled: boolean;
    getUpdateInfo: any}) {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [selectedTeam, setSelectedTeam] = React.useState([{
        teamNumber: '',
        section: '',
        project: '',
        client: '',
        professor: '',
        students: [{
            teamNumber: '',
            name: '',
            email: ''
        }]
    }])

    const handleOpen = () => {
        setSelectedTeam(props.rows.filter((r: any) => props.selectionModel.includes(r.id)))
        console.log(selectedTeam[0]);
        setOpen(true);
    }

    const handleNames = (students: {
            teamNumber: string,
            name: string,
            email: string
        }[]) => {
        names = '';
        for (let i = 0; i < students.length; i++) {
            if (i != students.length - 1) {
                names = names + students[i].name + ', ';
            } else {
                names = names + students[i].name;
            }
        }
        console.log(names);
        return names;
    }

    const handleUpdate = () => {
        setOpen(false);
        setOpen2(true);
    }

    const handleClose = () => setOpen(false);
    
    const handleClose2 = () => setOpen2(false);

    const [updateSection, setUpdateSection] = React.useState(selectedTeam[0].section);
    const [updateProject, setUpdateProject] = React.useState(selectedTeam[0].project);
    const [updateClient, setUpdateClient] = React.useState(selectedTeam[0].client);
    const [updateProfessor, setUpdateprofessor] = React.useState(selectedTeam[0].professor);

    const handleUpdateSection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateSection(event.target.value);
    }

    const handleUpdateClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateClient(event.target.value);
    }

    const handleUpdateProject = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateProject(event.target.value);
    }

    const handleUpdateProf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateprofessor(event.target.value);
    }

    const handleUpdateClick = () => {
        props.getUpdateInfo(updateSection, updateProject, updateClient, updateProfessor);
        setUpdateSection('');
        setUpdateClient('');
        setUpdateProject('');
        setUpdateprofessor('');
        handleClose2();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen} disabled={props.manageDisabled}
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
                        <b>Section: </b>  {selectedTeam[0].section} <br/>
                        <b>Project: </b>  {selectedTeam[0].project} <br />
                        <b>Client: </b>  {selectedTeam[0].client} <br />
                        <b>Professor: </b>  {selectedTeam[0].professor} <br />
                        <b>Students: </b> {handleNames(selectedTeam[0].students)}
                    </Typography>
                    <Button variant="contained" style={{ float: "left"}} onClick={() => { handleUpdate() }}>
                        Update Client
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
                        Team {selectedTeam[0].teamNumber}
                    </Typography>
                    <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
                        <b>Section: </b>  <TextField label={selectedTeam[0].section} onChange={handleUpdateSection} size="small" /> <br/>
                        <b>Project: </b>  <TextField label={selectedTeam[0].project} onChange={handleUpdateProject} size="small" /> <br />
                        <b>Client: </b>  <TextField label={selectedTeam[0].client} onChange={handleUpdateClient} size="small" /> <br />
                        <b>Professor: </b>  <TextField label={selectedTeam[0].professor} onChange={handleUpdateProf} size="small" /> <br />
                        <b>Students: </b> {handleNames(selectedTeam[0].students)}
                    </Typography>
                    <Button variant="contained" style={{ float: "left"}} onClick={() => { handleUpdateClick() }}>
                        Update
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}