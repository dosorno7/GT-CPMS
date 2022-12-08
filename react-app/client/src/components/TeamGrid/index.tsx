import * as React from 'react';
import {Button, Box} from '@mui/material';
import { DataGrid, GridColDef, GridRowId, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import CreateTeamModal from '../CreateTeamModal/createTeamModal';
import RemoveTeamModal from '../RemoveTeamModal/RemoveTeamModal';
import ManageTeamModal from '../ManageTeamModal/manageTeamModal'
import { ExportCSV } from '../../ExcelFunctionality/ExportToCSV';
import Modal from '@mui/material/Modal';

import './TeamGrid.css';

const ODD_OPACITY = 0.2;
let emails = '';
let style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    opacity: '100%',
    borderRadius: '5px',
    textAlign: 'center',
};

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${theme.palette.mode === 'dark' ? '#f0f0f0' : '#303030'
            }`,
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

const columns: GridColDef[] = [
    {   
        field: 'teamNumber', 
        headerName: 'Team Number', 
        width: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center',
        flex: 1, 
    },
    {
        field: 'section',
        headerName: 'Section',
        width: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        flex: 1,
        
    },
    {
        field: 'project',
        headerName: 'Project',
        width: 250,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        flex: 1,
    },
    {
        field: 'client',
        headerName: 'Client',
        width: 250,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        flex: 1,
    },
    {
        field: 'professor',
        headerName: 'Professor',
        width: 250,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
    },
    {
        field: 'students',
        headerName: 'Students',
        width: 250,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        hide: true,
    },
];

let loadedRows: any[];
let loadedStudents: any[];

const rowsmock = [
    { id: 1, teamNumber: '2100', section: 'JDA', project: 'G.O.L.I.A.T.H.', client: 'Tony Stark', professor: 'Elizabeth Olsen', students:[{teamNumber: '2100', name: 'John Doe', email: 'jdoe@gatech.edu'}]},
    { id: 2, teamNumber: '2101', section: 'JDA', project: 'Helius', client: 'Carol Denvers', professor: 'Elizabeth Olsen', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 3, teamNumber: '2102', section: 'JDA', project: 'Insight', client: 'Peter Parker', professor: 'Elizabeth Olsen', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 4, teamNumber: '2103', section: 'JDA', project: 'Reclamation', client: 'Stephen Strange', professor: 'Elizabeth Olsen', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 5, teamNumber: '2104', section: 'JDA', project: 'Phase 2', client: 'Peter Quill', professor: 'Elizabeth Olsen', students:[{teamNumber: '', name: '', email: ''} ]},
    { id: 6, teamNumber: '2105', section: 'JDF', project: 'Avengers Initiative', client: 'Steve Rogers', professor: 'Chris Evans', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 7, teamNumber: '2106', section: 'JDF', project: 'Blizzard', client: 'Bucky Barnes', professor: 'Chris Evans', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 8, teamNumber: '2107', section: 'JDF', project: 'Pegasus', client: 'Bruce Banner', professor: 'Chris Evans', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 9, teamNumber: '2108', section: 'JIA', project: 'Venom', client: 'Eddie Brock', professor: 'Mark Ruffalo', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 10, teamNumber: '2109', section: 'JIA', project: 'Project Alpha', client: 'Steve Rogers', professor: 'Mark Ruffalo', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 11, teamNumber: '2110', section: 'JIA', project: 'Phase 4', client: 'Tony Stark', professor: 'Mark Ruffalo', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 12, teamNumber: '2111', section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 13, teamNumber: '2112', section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo', students:[{teamNumber: '', name: '', email: ''}] },
    { id: 14, teamNumber: '2113', section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo', students:[{teamNumber: '', name: '', email: ''}] },
];

const createNewRow = (prevRows: {
    id: number;
    teamNumber: string;
    section: string;
    project: string;
    client: string;
    professor: string;
    students: {
        name: string,
        email: string
    }[];
}[], teamNumber: string,
    section: string,
    project: string,
    client: string,
    professor: string,
    students: {
        name: string,
        email: string
    }[]
    ) => {
    
        return { id: prevRows.length + 1, 
        teamNumber: teamNumber, 
        section: section, 
        project: project, 
        client: client, 
        professor: professor,
        students: students }
}

export default function TeamGrid() {
    const [rows, setRows] = React.useState([{
        id: '',
        teamNumber: '',
        section: '',
        project: '',
        client: '',
        professor: '',
        students: [{teamNumber: '', name: '', email: ''}]
    }]);
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [selectedTeam, setSelectedTeam] = React.useState([{
        teamNumber: '',
        section: '',
        project: '',
        client: '',
        professor: '',
        students: [{teamNumber: '', name: '', email: ''}]
    }]);
    const [manageDisabled, setManageDisabled] = React.useState(true)
    const [manageDisabled2, setManageDisabled2] = React.useState(true)
    

    const deleteTeams = () => {
        for (let i = 0; i < selectionModel.length; i++) {
            let teamNumber = rows.filter(row => row.id == selectionModel[i])[0].teamNumber;

            fetch('http://localhost:3001/deleteTeam/' + selectionModel[i], {
                method: 'DELETE',
            }).then(response => {
                return response.text();
            }).then(data => {
                getTeams();
            });

            fetch('http://localhost:3001/deleteStudents/' + teamNumber, {
                method: 'DELETE',
            }).then(response => {
                return response.text();
            });
        }
    };

    function checkNumSelected() {
        return selectionModel.length
    }

    function checkDisableManage() {
        if (selectedTeam == null 
            || selectedTeam.length == 0
            || selectedTeam.length > 1
            || selectedTeam[0].teamNumber == '') {
            setManageDisabled(true)
        } else {
            setManageDisabled(false)
        }
        if (selectedTeam == null 
            || selectedTeam.length == 0
            || selectedTeam[0].teamNumber == '') {
            setManageDisabled2(true)
        } else {
            setManageDisabled2(false)
        }
    }

    const getCreateTeamInfo = (
        teamNumber: string, 
        section: string, 
        project: string, 
        client: string, 
        professor: string,
        students: {
            teamNumber: string,
            name: string,
            email: string
        }[]) => {

        console.log("Creating a new team.");

        fetch('http://localhost:3001/createTeam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({teamNumber, section, project, client, professor}),
        }).then(response => {
            return response.text();
        }).then(data => {
            getTeams();
        });

        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            let name = student.name;
            let email = student.email;

            fetch('http://localhost:3001/createStudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({teamNumber, name, email}),
            }).then(response => {
                return response.text();
            }).then(data => {
                getTeams();
            });
        }
    }
    
    const getTeams = () => {
        fetch('http://localhost:3001/getTeams').then(response => {
            return response.text();
        }).then(data => {
            var newJson = data.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
            newJson = newJson.replace(/'/g, '"');
            newJson = newJson.replaceAll("team_number", "teamNumber");
            loadedRows = JSON.parse(newJson);

            fetch('http://localhost:3001/getStudents').then(response => {
                return response.text();
            }).then(data => {
                var newJson = data.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
                newJson = newJson.replace(/'/g, '"');
                newJson = newJson.replaceAll("team_number", "teamNumber");
                loadedStudents = JSON.parse(newJson);
                
                for (let i = 0; i < loadedRows.length; i++) {
                    let filteredStudents = loadedStudents.filter(student => student.teamNumber == loadedRows[i].teamNumber);
                    loadedRows[i].students = filteredStudents;
                }

                setRows(loadedRows);
            });
        });
    }

    React.useEffect(() => {
        getTeams();
    }, []);

    const copyEmails = () => {
        setSelectedTeam(rows.filter((r: any) => selectionModel.includes(r.id)))
        emails = '';
        for (let i = 0; i < selectedTeam.length; i++) {
            if (i != selectedTeam.length - 1) {
                emails = emails + handleEmails(emails, selectedTeam[i].students) + '; ';
            } else {
                emails = emails + handleEmails(emails, selectedTeam[i].students)
            }
        }
        navigator.clipboard.writeText(emails);
        handleOpen2();
        console.log(emails);
    }

    const handleEmails = (emails: string, students: {
        name: string,
        email: string
    }[]) => {
        emails = '';
        for (let i = 0; i < students.length; i++) {
            if (i != students.length - 1) {
                emails = emails + students[i].email + ', ';
            } else {
                emails = emails + students[i].email;
            }
        }
        return emails;
    }

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
        setOpen2(true);
        setTimeout(() => setOpen2(false), 1150);
    }
    const handleClose2 = () => setOpen2(false);

    React.useEffect(() => {
        checkDisableManage();
    });

    return (
        <div className="main_content">
            <div className="top_buttons">
                <CreateTeamModal getCreateTeamInfo={getCreateTeamInfo} />

                        
                {/* TODO: Filtering goes here! */}
            </div>
        <Box className="grid"
            sx={{ 
                height: 500, 
                width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: 'rgba(0,0,0,0)',
                }, 
            }}>
            <StripedDataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[7]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                sx = {{
                    border: 2
                }}
                selectionModel={selectionModel}
                onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel);
                    setSelectedTeam(rows.filter((r: any) => newSelectionModel.includes(r.id)));
                }}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
            />
        </Box>
        <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                Emails Copied!
              </Box>
        </Modal>

            <div className="bottom_buttons">

                <div className="bottom_buttons_group">
                    <Button variant="contained" onClick={() => {
                        copyEmails()
                    }} disabled={manageDisabled2}
                    >
                        Copy Student Emails to Clipboard
                    </Button>

                    <ExportCSV csvData={rows} fileName="TeamsExport" chooseRows={selectionModel}/>
                </div>

                <div className="bottom_buttons_group">
                    <ManageTeamModal rows={rows} selectionModel={selectionModel} manageDisabled={manageDisabled} />
                    <RemoveTeamModal deleteTeams={deleteTeams} selectionModel={selectionModel} />
                </div>
            </div>
        </div>
    );
}
