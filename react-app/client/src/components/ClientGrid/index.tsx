import * as React from 'react';
import { Button, Box } from '@mui/material';
import RemoveClientModal from '../RemoveClientModal/RemoveClientModal';
import { DataGrid, GridColDef, GridRowId, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import CreateClientModal from '../CreateClientModal/createClientModal';
import ManageClientModal from '../ManageClientModal/manageClientModal'
import { ExportCSV } from '../../ExcelFunctionality/ExportToCSV';

import './ClientGrid.css';

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

const clientColumns: GridColDef[] = [
    {   
        field: 'clientName', 
        headerName: 'Client Name', 
        width: 250,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        align: 'center', 
        flex: 1,
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
        field: 'email',
        headerName: 'Email',
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

const clientRows = [
    { id: 1, clientName: 'Tony Stark', organization: 'Mock Organization Name', email: 'tstark@me.com', status: 'Active'},
    { id: 2, clientName: 'Carol Denvers', organization: 'Mock Organization Name', email: 'cdanvers@aol.com', status: 'Active'},
    { id: 3, clientName: 'Peter Parker', organization: 'Mock Organization Name', email: 'pparker@gmail.com', status: 'Active' },
    { id: 4, clientName: 'Stephen Strange', organization: 'Mock Organization Name', email: 'drstrange@yahoo.com', status: 'Active' },
    { id: 5, clientName: 'Peter Quill', organization: 'Mock Organization Name', email: 'NA', status: 'Active' },
    { id: 6, clientName: 'Steve Rogers', organization: 'Mock Organization Name', email: 'cap@gmail.com', status: 'Active' },
    { id: 7, clientName: 'Bucky Barnes', organization: 'Mock Organization Name', email: 'wsbarnes@aol.com', status: 'Active' },
    { id: 8, clientName: 'Bruce Banner', organization: 'Mock Organization Name', email: 'banner@aol.com', status: 'Prospective' },
    { id: 9, clientName: 'Eddie Brock', organization: 'Mock Organization Name', email: 'symbrock@aol.com', status: 'Propsective' },
    { id: 10, clientName: 'Pepper Potts', organization: 'Mock Organization Name', email: 'pottsceo@aol.com', status: 'Inactive' },
    { id: 11, clientName: 'Nick Fury', organization: 'Mock Organization Name', email: 'NA', status: 'Inactive' }
];

const createNewRow = (prevRows: {
    id: number;
    clientName: string;
    organization: string;
    email: string;
    status: string;
}[], clientName: string,
    organization: string,
    email: string,
    status: string) => {

    return {
        id: prevRows.length + 1,
        clientName: clientName,
        organization: organization,
        email: email,
        status: status,
    }
}

export default function ClientGrid() {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [rows, setRows] = React.useState(() => clientRows);
    const [selectedClient, setSelectedClient] = React.useState([{
        clientName: '',
        organization: '',
        email: '',
        status: ''
    }]);
    const [manageDisabled, setManageDisabled] = React.useState(true)

    const deleteClients = () => {
        for (let i = 0; i < selectionModel.length; i++) {
            fetch('http://localhost:3001/deleteClient/' + selectionModel[i], {
                method: 'DELETE',
            }).then(response => {
                return response.text();
            }).then(data => {
                getClients();
            });
        }
    };

    function checkDisableManage() {
        if (selectedClient == null
            || selectedClient.length == 0
            || selectedClient.length > 1
            || selectedClient[0].clientName == '') {
            setManageDisabled(true)
        } else {
            setManageDisabled(false)
        }
    }


    const getCreateClientInfo = (
        clientName: string,
        organization: string,
        email: string,
        status: string) => {

        console.log("Creating a new client.");

        fetch('http://localhost:3001/createClient', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, clientName, organization, status}),
        }).then(response => {
            return response.text();
        }).then(data => {
            getClients();
        });
    }

    const getClients = () => {
        fetch('http://localhost:3001/getClients').then(response => {
            return response.text();
        }).then(data => {
            var newJson = data.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
            newJson = newJson.replace(/'/g, '"');
            newJson = newJson.replaceAll("client_name", "clientName");
            loadedRows = JSON.parse(newJson);
            setRows(loadedRows);
        });
    }

    React.useEffect(() => {
        getClients();
    }, []);

    React.useEffect(() => {
        checkDisableManage();
    })

    return (
        <div className="main_content">
            <div className="top_buttons">
                <CreateClientModal getCreateClientInfo={getCreateClientInfo} />

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
                    columns={clientColumns}
                    pageSize={11}
                    rowsPerPageOptions={[11]}
                    checkboxSelection
                    experimentalFeatures={{ newEditingApi: true }}
                    selectionModel={selectionModel}
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                        setSelectedClient(rows.filter((r: any) => newSelectionModel.includes(r.id)));
                    }}
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

                    <ExportCSV csvData={rows} fileName="ClientExport" chooseRows={selectionModel}/>
                </div>

                <div className="bottom_buttons_group">
                    <ManageClientModal rows={rows} selectionModel={selectionModel} manageDisabled={manageDisabled} />
                    <RemoveClientModal deleteClients={deleteClients}/>
                </div>
            </div>
        </div>
    );
};