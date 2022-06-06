import { useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper/index';
import Button from '@mui/material/Button';
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
    const [rows, setRows] = useState([]);
    const [finalRows , setFinalRows] = useState([]);

    function refreshPage() {
        window.location.reload(false);
      }
    
    async function fixFirewall(){
        await axios.post(`http://127.0.0.1:80/firewall`).then((response) => {
                console.log('2');
        })
        
        await axios.get(`http://127.0.0.1:80/checkNameAndResult/mix/?client_name=${props.pcName}`).then((response) => {
            setRows(response.data)
            setFinalRows(response.data)
            
        })
        refreshPage()
    }

    useEffect(() => axios.get(`http://127.0.0.1:80/checkNameAndResult/mix/?client_name=${props.pcName}`).then((response) => {
        setRows(response.data)
        setFinalRows(response.data)
    }) , [props.pcName])


    return (
        
    <div>
    <h1 id="clientName">{props.pcName}</h1>
    <h1 id="ip">Ip Address: {props.pcIp}</h1>
    <br></br>
    <br></br>
    <h1 id="date">Last Update: {getDate()}</h1>
    <br></br>
    <br></br>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table" style={{borderColor: "black", width:900, margin:'auto', backgroundColor: "#eeeeee", textSizeAdjust:200}}>
        <TableHead>
        <TableRow>
            <TableCell><b>Standard name</b></TableCell>
            <TableCell align="left"><b>Follow standard</b></TableCell>
            <TableCell align="left"><b>Click to fix</b></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>

        {finalRows.map((row) => (
            
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >                
                <TableCell component="th" scope="row" key= {row.name} >
                {row.name}
                </TableCell>
                <TableCell align="left" >
                    {row.standard ?(
                    <img src={viIcon} alt="viIcon" width={47} />
                    ) : (<img src={xIcon} alt="viIcon" width={50} /> )
                    }</TableCell>
                <TableCell>
                    <Button variant="contained" onClick={()=>fixFirewall()}>fix</Button>
                </TableCell>
                </TableRow>
            
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
    );
}

export default ClientsStatusDiagram;
