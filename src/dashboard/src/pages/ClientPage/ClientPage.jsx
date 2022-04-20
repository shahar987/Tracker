import React from 'react';
import ClientDataTable from "../../components/ClientsStatusDiagram/ClientsStatusDiagram"
import { useLocation } from "react-router-dom";


const ClientPage = () => {
  const location = useLocation();
  const pcName = location.state.name
  return (
    <div>
    <ClientDataTable pcName= {pcName}/>
    </div>
  )
}

export default ClientPage