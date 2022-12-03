import * as React from 'react';
import {Button, Box} from '@mui/material';
import { DataGrid, GridColDef, GridRowId, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import CreateTeamModal from '../CreateTeamModal/createTeamModal';
import RemoveTeamModal from '../RemoveTeamModal/RemoveTeamModal';
import ManageTeamModal from '../ManageTeamModal/manageTeamModal'

import './TeamGrid.css';

const ODD_OPACITY = 0.2;

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
    },
    {
        field: 'section',
        headerName: 'Section',
        width: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        
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
];

let loadedRows = [];

const rowsmock = [
    { id: 1, teamNumber: '2100', section: 'JDA', project: 'G.O.L.I.A.T.H.', client: 'Tony Stark', professor: 'Elizabeth Olsen'},
    { id: 2, teamNumber: '2101', section: 'JDA', project: 'Helius', client: 'Carol Denvers', professor: 'Elizabeth Olsen' },
    { id: 3, teamNumber: '2102', section: 'JDA', project: 'Insight', client: 'Peter Parker', professor: 'Elizabeth Olsen' },
    { id: 4, teamNumber: '2103', section: 'JDA', project: 'Reclamation', client: 'Stephen Strange', professor: 'Elizabeth Olsen' },
    { id: 5, teamNumber: '2104', section: 'JDA', project: 'Phase 2', client: 'Peter Quill', professor: 'Elizabeth Olsen' },
    { id: 6, teamNumber: '2105', section: 'JDF', project: 'Avengers Initiative', client: 'Steve Rogers', professor: 'Chris Evans' },
    { id: 7, teamNumber: '2106', section: 'JDF', project: 'Blizzard', client: 'Bucky Barnes', professor: 'Chris Evans' },
    { id: 8, teamNumber: '2107', section: 'JDF', project: 'Pegasus', client: 'Bruce Banner', professor: 'Chris Evans' },
    { id: 9, teamNumber: '2108', section: 'JIA', project: 'Venom', client: 'Eddie Brock', professor: 'Mark Ruffalo' },
    { id: 10, teamNumber: '2109', section: 'JIA', project: 'Project Alpha', client: 'Steve Rogers', professor: 'Mark Ruffalo' },
    { id: 11, teamNumber: '2110', section: 'JIA', project: 'Phase 4', client: 'Tony Stark', professor: 'Mark Ruffalo' },
    { id: 12, teamNumber: '2111', section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo' },
    { id: 13, teamNumber: '2112', section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo' },
    { id: 14, teamNumber: '2113', section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo' },

];

const createNewRow = (prevRows: {
    id: number;
    teamNumber: string;
    section: string;
    project: string;
    client: string;
    professor: string;
}[], teamNumber: string,
    section: string,
    project: string,
    client: string,
    professor: string) => {
    
        return { id: prevRows.length + 1, 
        teamNumber: teamNumber, 
        section: section, 
        project: project, 
        client: client, 
        professor: professor }
}

export default function TeamGrid() {
    const [rows, setRows] = React.useState(() => rowsmock);
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [selectedTeam, setSelectedTeam] = React.useState([{
        teamNumber: '',
        section: '',
        project: '',
        client: '',
        professor: ''
    }]);
    const [manageDisabled, setManageDisabled] = React.useState(true);

    const deleteTeams = () => {
        for (let i = 0; i < selectionModel.length; i++) {
            fetch('http://localhost:3001/deleteTeam/' + selectionModel[i], {
                method: 'DELETE',
            }).then(response => {
                return response.text();
            }).then(data => {
                getTeams();
            });
        }
    };

    function checkDisableManage() {
        if (selectedTeam == null 
            || selectedTeam.length == 0
            || selectedTeam.length > 1
            || selectedTeam[0].teamNumber == '') {
            setManageDisabled(true)
        } else {
            setManageDisabled(false)
        }
    }

    const getCreateTeamInfo = (
        teamNumber: string, 
        section: string, 
        project: string, 
        client: string, 
        professor: string) => {
        
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
    }
    
    const getTeams = () => {
        fetch('http://localhost:3001/getTeams').then(response => {
            return response.text();
        }).then(data => {
            var newJson = data.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
            newJson = newJson.replace(/'/g, '"');
            newJson = newJson.replaceAll("team_number", "teamNumber");
            loadedRows = JSON.parse(newJson);
            setRows(loadedRows);
        });
    }

    React.useEffect(() => {
        getTeams();
    }, []);

    React.useEffect(() => {
        checkDisableManage();
    });

    return (
        <div className="main_content">
            <div className="top_buttons">
                <CreateTeamModal getCreateTeamInfo={getCreateTeamInfo} />

                <Button variant="contained" onClick={() => {
                    // TODO: Handle import from excel click here
                    console.log('import from excel clicked')
                    }}
                >
                    Import From Excel
                </Button>
                        
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

            <div className="bottom_buttons">

                <div className="bottom_buttons_group">
                    <Button variant="contained" onClick={() => {
                        // TODO: Handle click here
                        console.log('copy emails clicked')
                    }}
                    >
                        Copy Emails to Clipboard
                    </Button>

                    <Button variant="contained" onClick={() => {
                        // TODO: Handle click here
                        console.log('export to excel clicked')
                    }}
                    >
                        Export to Excel
                    </Button>
                </div>

                <div className="bottom_buttons_group">
                    <ManageTeamModal rows={rows} selectionModel={selectionModel} manageDisabled={manageDisabled} />
                    <RemoveTeamModal deleteTeams={deleteTeams}/>
                </div>
            </div>
        </div>
    );
}
