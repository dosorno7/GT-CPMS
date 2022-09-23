import * as React from 'react';
import {Button, Box} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, gridClasses, useGridApiRef } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import './DataGrid.css';


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

const rows = [
    { id: 1, teamNumber: 2100, section: 'JDA', project: 'G.O.L.I.A.T.H.', client: 'Tony Stark', professor: 'Elizabeth Olsen'},
    { id: 2, teamNumber: 2101, section: 'JDA', project: 'Helius', client: 'Carol Denvers', professor: 'Elizabeth Olsen' },
    { id: 3, teamNumber: 2102, section: 'JDA', project: 'Insight', client: 'Peter Parker', professor: 'Elizabeth Olsen' },
    { id: 4, teamNumber: 2103, section: 'JDA', project: 'Reclamation', client: 'Stephen Strange', professor: 'Elizabeth Olsen' },
    { id: 5, teamNumber: 2104, section: 'JDA', project: 'Phase 2', client: 'Peter Quill', professor: 'Elizabeth Olsen' },
    { id: 6, teamNumber: 2105, section: 'JDF', project: 'Avengers Initiative', client: 'Steve Rogers', professor: 'Chris Evens' },
    { id: 7, teamNumber: 2106, section: 'JDF', project: 'Blizzard', client: 'Bucky Barnes', professor: 'Chris Evens' },
    { id: 8, teamNumber: 2107, section: 'JDF', project: 'Pegasus', client: 'Bruce Banner', professor: 'Chris Evens' },
    { id: 9, teamNumber: 2108, section: 'JIA', project: 'Venom', client: 'Eddie Brock', professor: 'Mark Ruffalo' },
    { id: 10, teamNumber: 2109, section: 'JIA', project: 'Project Alpha', client: 'Steve Rogers', professor: 'Mark Ruffalo' },
    { id: 11, teamNumber: 2110, section: 'JIA', project: 'Phase 4', client: 'Tony Stark', professor: 'Mark Ruffalo' },
    { id: 12, teamNumber: 2111, section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo' },
    { id: 13, teamNumber: 2112, section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo' },
    { id: 14, teamNumber: 2113, section: 'JIA', project: 'Unassigned', client: 'Unassigned', professor: 'Mark Ruffalo' },

];

export default function TeamGrid() {

    const apiRef = useGridApiRef();

    const handleCreateTeam = () => {
        //apiRef.current.updateRows([{id: 15, teamNumer: 3000, section: 'XXX', project: 'X', client: 'X', professor: 'X'}]);
        console.log('debug')
    }

    return (
        <div className="main_content">
            <div className="top_buttons">
                <Button variant="contained" onClick={handleCreateTeam}
                >
                    Create Team
                </Button>

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
                pageSize={10}
                rowsPerPageOptions={[6]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                sx = {{
                    border: 2
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
                    <Button variant="contained" onClick={() => {
                        // TODO: Handle click here
                        console.log('manage team clicked')
                    }}
                    >
                        Manage Selected Team
                    </Button>
                    <Button variant="contained" onClick={() => {
                        // TODO: Handle click here
                        console.log('delete team clicked')
                    }}
                    >
                        Delete Selected Teams
                    </Button>
                </div>
            </div>
        </div>
    );
}
