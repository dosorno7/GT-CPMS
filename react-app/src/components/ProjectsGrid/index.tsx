import * as React from 'react';
import {Button, Box} from '@mui/material';
import RemoveProjectsModal from '../RemoveProjectsModal/RemoveProjectsModal';
import { DataGrid, GridColDef, GridRowId, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';

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

const projectsRows = [
    { id: 1, client: 'Tony Stark', section: 'JDA', organization: 'Mock Org name', teamAssigned: 2100, status: 'Active'},
    { id: 2, client: 'Carol Denvers', section: 'JDA', organization: 'Mock Org name', teamAssigned: 2101, status: 'Active' },
    { id: 3, client: 'Stephen Strange', section: 'JDA', organization: 'Mock Org name', teamAssigned: 2102, status: 'Active' },
    { id: 4, client: 'Peter Quill', section: 'JDA', organization: 'Mock Org name', teamAssigned: 2103, status: 'Active' },
    { id: 5, client: 'Steve Rogers', section: 'JDA', organization: 'Mock Org name', teamAssigned: 2104, status: 'Active' },
    { id: 6, client: 'Bucky Barnes', section: 'JDA', organization: 'Mock Org name', teamAssigned: 2105, status: 'Active' },
    { id: 7, client: 'Bruce Banner', section: 'JIA', organization: 'Mock Org name', teamAssigned: 0, status: 'Unassigned' },
    { id: 8, client: 'Eddie Brock', section: 'JIA', organization: 'Mock Org name', teamAssigned: 0, status: 'Unassigned' },
    { id: 9, client: 'Pepper Potts', section: 'JIA', organization: 'Mock Org name', teamAssigned: 0, status: 'Unassigned' },
    { id: 10, client: 'Nick Fury', section: 'JDF', organization: 'Mock Org name', teamAssigned: 0, status: 'Completed' },
    { id: 11, client: 'Peter Parker', section: 'JDF', organization: 'Mock Org name', teamAssigned: 0, status: 'Completed' }
];

export default function ProjectsGrid() {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [rows, setRows] = React.useState(() => projectsRows);

    const deleteProjects = () => {
        setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
    };

    return (
        <div className="main_content">
            <div className="top_buttons">
                <Button variant="contained" onClick={() => {
                    // TODO: Handle Create Project click here
                    console.log('Create project clicked')
                }}
                >
                    Create Project
                </Button>

                <Button variant="contained" onClick={() => {
                    // TODO: Handle import from Excel click here
                    console.log('Import from Excel clicked')
                }}
                >
                    Import From Excel
                </Button>
                
                {/* TODO: Filtering goes here! */}
            </div>

            <Box 
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
                    onSelectionModelChange={setSelectionModel}
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
                    <Button variant="contained" onClick={() => {
                        // TODO: Handle click here
                        console.log('Manage project clicked')
                    }}
                    >
                        Manage Selected Project
                    </Button>
                    <RemoveProjectsModal deleteProjects={deleteProjects}/>
                </div>
            </div>
        </div>
    );
};