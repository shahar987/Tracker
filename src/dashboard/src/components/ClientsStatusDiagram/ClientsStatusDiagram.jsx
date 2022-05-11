import * as React from 'react';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from "material-ui-search-bar";
import "./ClientsStatusDiagram.scss";
import viIcon from "../../assets/icons/viIcon.png";
import xIcon from "../../assets/icons/xIcon.png";
import axios from 'axios';

//TODO: add get request to be api for ip:str and last update:date and pass name:str in header
//TODO: add get request to be api for check name:str ,result:bool and notes:str(optional) 

let originalRows = [];

/*create data to table*/
function createData(name, followStandard, notes) {
    return { name: name, followStandard: followStandard, notes: notes};
}




/*Check if the test follow the standard*/
function checkData(name, followStandard, notes){
    if (followStandard === true){
        originalRows.push(createData(name, <img src={viIcon} alt="viIcon" width={50} />, notes))
    }
    else{
    originalRows.push(createData(name, <img src={xIcon} alt="viIcon" width={50} />, notes))
    }

}

checkData('system version is up to date', true, "-");
checkData('firewall is on', false, "-");
checkData('chrome version is up to date', true, "-");
checkData('antivirus is installed', false, "-");
checkData('antivirus version is up to date', false, "-");
checkData('password change policy is on', true, "-");

function uniteData(checks, checksStatus){
    
}

export default function ClientDataTable(props) {
    const [checks, setChecks] = React.useState(null);
    const [checksStatus, setChecksStatus] = React.useState(null)
    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/checks`).then((response) => {
            setChecks(response.data);
            
        });
    }, []);

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/client/status?client_name=shahar-pc`).then((response) => {
            setChecksStatus(response.data);
            
        });
    }, []);
    
    console.log(checks)
    console.log(checksStatus)

    uniteData(checks,checksStatus)

    const requestSearch = (searchedVal) => {
        const filteredRows = originalRows.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });


    setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };


    return (
    <div>
    <h1 id="clientName">{props.pcName}</h1>
    <text id="ip">Ip Address: {props.pcIp}</text>
    <br></br>
    <br></br>
    <date id="date">Last Update: {date}</date>
    <br></br>
    <br></br>
    <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            id="searchBar"
            style={{
            margin: '0 auto',
            maxWidth: 900,
            backgroundColor: "#999999"
            }}
            />
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table" style={{borderColor: "black", width:900, margin:'auto', backgroundColor: "#eeeeee", textSizeAdjust:200}}>
        <TableHead>
        <TableRow>
            <TableCell>Standard name</TableCell>
            <TableCell align="left">Follow standard</TableCell>
            <TableCell align="left">notes</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" key= {row.name}>
                {row.name}
                </TableCell>
                <TableCell align="left">{row.followStandard}</TableCell>
                <TableCell align="left">{row.notes}</TableCell>

            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
    );
}