import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./ClientTable.scss";
import viIcon from "../../../assets/icons/viIcon.png";
import xIcon from "../../../assets/icons/xIcon.png";


let rows = [];
let clientName = null;
let ipAddress = null;


function createData(name, followStandard, notes) {
    return { name, followStandard, notes};
}

function getDate(){
    const formatYmd = date => date.toISOString().slice(0, 10);
    const newDate = formatYmd(new Date());
    return newDate;
}

function checkData(name, followStandard, notes){
    if (followStandard === true){
        rows.push(createData(name,<img src={viIcon} alt="viIcon" width={50} />, notes ))
    }
    else{
    rows.push(createData(name,<img src={xIcon} alt="xIcon" width={57} />, notes ))
    }

}

checkData('system version is up to date', true, "-");
checkData('firewall is on', false, "-");
checkData('chrome version is up to date', true, "-");
checkData('antivirus is installed', false, "-");
checkData('antivirus version is up to date', false, "-");
checkData('password change policy is on', true, "-");
checkData('system version is up to date', true, "-");
checkData('firewall is on', false, "-");
checkData('chrome version is up to date', true, "-");

function updateClientInfo(dataClientName, dataIpAddress){
  clientName = dataClientName
  ipAddress = dataIpAddress
}

updateClientInfo("ShaharPc", "10.0.1.56")

export default function BasicTable() {
  return (
    <div>
    <h1 id="clientName">{clientName}</h1>
    <text id="ip">Ip Address: {ipAddress}</text>
    <br></br>
    <br></br>
    <date id="date">Last Update: {getDate()}</date>
    <br></br>
    <br></br>

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
                <TableCell component="th" scope="row">
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
