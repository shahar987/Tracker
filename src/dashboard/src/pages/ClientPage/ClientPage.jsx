import React from 'react';
import ClientsStatusDiagram from "../../components/ClientsStatusDiagram/ClientsStatusDiagram"
import { useLocation } from "react-router-dom";

const ClientPage = () => {
  const location = useLocation();
  const pcName = location.state.name
  const pcIp = location.state.ip

  return (
    <div>
      <ClientsStatusDiagram pcName= {pcName} pcIp={pcIp}/>
    </div>
  )
}

export default ClientPage