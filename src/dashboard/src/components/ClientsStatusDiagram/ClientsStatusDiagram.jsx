import * as React from 'react';
import { useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from "material-ui-search-bar";
import "./ClientsStatusDiagram.scss";
import viIcon from "../../assets/icons/viIcon.png"
import xIcon from "../../assets/icons/xIcon.png";
import axios from 'axios';


/*Get the current date*/
function getDate(){
    let separator = "/"
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`;
}


const ClientsStatusDiagram = (props)  => {
    const [searched, setSearched] = useState("");
    const [rows, setRows] = useState([]);
    const [finalRows , setFinalRows] = useState([]);
    
    useEffect(() => axios.get(`http://127.0.0.1:8000/checkNameAndResult/mix/?client_name=${props.pcName}`).then((response) => {
        setRows(response.data)
        setFinalRows(response.data)
    }) , [props.pcName])

    const requestSearch = (searchedVal) => {
        const filteredRows = rows.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
    setFinalRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };


    return (
    <>
    <div>
    <h1 id="clientName">{props.pcName}</h1>
    <h1 id="ip">Ip Address: {props.pcIp}</h1>
    <br></br>
    <br></br>
    <h1 id="date">Last Update: {getDate()}</h1>
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
        </TableRow>
        </TableHead>
        <TableBody>

        {finalRows.map((row) => (
            
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >                
                <TableCell component="th" scope="row" key= {row.name}>
                {row.name}
                </TableCell>
                <TableCell align="left" >
                    {row.standard ?(
                    <img src={viIcon} alt="viIcon" width={47} />
                    ) : (<img src={xIcon} alt="viIcon" width={50} /> )
                    }</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
    </>
    );
}

export default ClientsStatusDiagram;
