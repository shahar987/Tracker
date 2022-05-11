import React from 'react';
import ClientDataTable from "../../components/ClientsStatusDiagram/ClientsStatusDiagram"
import { useLocation } from "react-router-dom";


const ClientPage = () => {
  const location = useLocation();
  const pcName = location.state.name
  const pcIp = location.state.ip

  return (
    <div>
    <ClientDataTable pcName= {pcName} pcIp={pcIp}/>
    </div>
  )
}

export default ClientPage