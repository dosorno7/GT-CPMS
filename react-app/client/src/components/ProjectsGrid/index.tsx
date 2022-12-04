import * as React from 'react';
import {Button, Box} from '@mui/material';
import RemoveProjectsModal from '../RemoveProjectsModal/RemoveProjectsModal';
import { DataGrid, GridColDef, GridRowId, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import CreateProjectModal from '../CreateProjectModal/createProjectModal';
import ManageProjectModal from '../ManageProjectModal/manageProjectModal';

import './ProjectsGrid.css';

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

const projectsColumns: GridColDef[] = [
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
        field: 'section',
        headerName: 'Section',
        width: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center',

    },
    {   
        field: 'teamAssigned', 
        headerName: 'Team Assigned', 
        width: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
    },
    {
        field: 'organization',
        headerName: 'Organization',
        width: 250,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        flex: 1,
    },
];

let loadedRows = [];

const projectsRows = [
    { id: 1, client: 'Tony Stark', section: 'JDA', organization: 'Mock Org name', teamAssigned: '2100', status: 'Active'},
    { id: 2, client: 'Carol Denvers', section: 'JDA', organization: 'Mock Org name', teamAssigned: '2101', status: 'Active' },
    { id: 3, client: 'Stephen Strange', section: 'JDA', organization: 'Mock Org name', teamAssigned: '2102', status: 'Active' },
    { id: 4, client: 'Peter Quill', section: 'JDA', organization: 'Mock Org name', teamAssigned: '2103', status: 'Active' },
    { id: 5, client: 'Steve Rogers', section: 'JDA', organization: 'Mock Org name', teamAssigned: '2104', status: 'Active' },
    { id: 6, client: 'Bucky Barnes', section: 'JDA', organization: 'Mock Org name', teamAssigned: '2105', status: 'Active' },
    { id: 7, client: 'Bruce Banner', section: 'JIA', organization: 'Mock Org name', teamAssigned: '0', status: 'Unassigned' },
    { id: 8, client: 'Eddie Brock', section: 'JIA', organization: 'Mock Org name', teamAssigned: '0', status: 'Unassigned' },
    { id: 9, client: 'Pepper Potts', section: 'JIA', organization: 'Mock Org name', teamAssigned: '0', status: 'Unassigned' },
    { id: 10, client: 'Nick Fury', section: 'JDF', organization: 'Mock Org name', teamAssigned: '0', status: 'Completed' },
    { id: 11, client: 'Peter Parker', section: 'JDF', organization: 'Mock Org name', teamAssigned: '0', status: 'Completed' }
];

const createNewRow = (prevRows: {
    id: number;
    teamAssigned: string;
    section: string;
    organization: string;
    client: string;
    status: string;
}[], teamAssigned: string,
    section: string,
    organization: string,
    client: string, 
    status: string) => {
    
        return { id: prevRows.length + 1, 
        teamAssigned: teamAssigned, 
        section: section, 
        organization: organization, 
        client: client,
        status: status }
}

export default function ProjectsGrid() {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [rows, setRows] = React.useState(() => projectsRows);
    const [selectedProject, setSelectedProject] = React.useState([{
        teamAssigned: '',
        section: '',
        organization: '',
        client: '',
        status: ''
    }]);
    const [manageDisabled, setManageDisabled] = React.useState(true);

    function checkDisableManage() {
        if (selectedProject == null
            || selectedProject.length == 0
            || selectedProject.length > 1
            || selectedProject[0].client == '') {
            setManageDisabled(true)
        } else {
            setManageDisabled(false)
        }
    }

    const deleteProjects = () => {
        for (let i = 0; i < selectionModel.length; i++) {
            fetch('http://localhost:3001/deleteProject/' + selectionModel[i], {
                method: 'DELETE',
            }).then(response => {
                return response.text();
            }).then(data => {
                getProjects();
            });
        }
    };

    const getCreateProjectInfo = (
        teamAssigned: string, 
        section: string, 
        organization: string, 
        client: string,
        status: string ) => {
        
        console.log("Creating a new project.");

        if (String(teamAssigned).length == 0 || section.length == 0 || organization.length == 0 || client.length == 0|| status.length == 0) {
            console.log("Failed to create team"); 
        } else {
            fetch('http://localhost:3001/createProject', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({teamAssigned, section, organization, client, status}),
            }).then(response => {
                return response.text();
            }).then(data => {
                getProjects();
            });
        }
    }

    const getProjects = () => {
        fetch('http://localhost:3001/getProjects').then(response => {
            return response.text();
        }).then(data => {
            var newJson = data.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
            newJson = newJson.replace(/'/g, '"');
            newJson = newJson.replaceAll("team_number", "teamAssigned").replaceAll("client_name", "client");
            loadedRows = JSON.parse(newJson);
            setRows(loadedRows);
        });
    }

    React.useEffect(() => {
        getProjects();
    }, []);

    React.useEffect(() => {
        checkDisableManage();
    })

    return (
        <div className="main_content">
            <div className="top_buttons">
            <CreateProjectModal getCreateProjectInfo={getCreateProjectInfo} />

                <Button variant="contained" onClick={() => {
                    // TODO: Handle import from Excel click here
                    console.log('Import from Excel clicked')
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
                    columns={projectsColumns}
                    pageSize={10}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    sx = {{
                        border: 2
                    }}
                    selectionModel={selectionModel}
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                        setSelectedProject(rows.filter((r: any) => newSelectionModel.includes(r.id)));
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
                        console.log('Copy emails clicked')
                    }}
                    >
                        Copy Emails to Clipboard
                    </Button>

                    <Button variant="contained" onClick={() => {
                        // TODO: Handle click here
                        console.log('Export to excel clicked')
                    }}
                    >
                        Export to Excel
                    </Button>
                </div>

                <div className="bottom_buttons_group">
                    <ManageProjectModal rows={rows} selectionModel={selectionModel} manageDisabled={manageDisabled} />
                    <RemoveProjectsModal deleteProjects={deleteProjects} selectionModel={selectionModel} />
                </div>
            </div>
        </div>
    );
};