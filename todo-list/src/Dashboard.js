import React from 'react';

function Dashboard (props){
  const hanldeLogout = () =>{
    props.history.push('/login');
  }
  return(
    <div>
      Welcome User ! <br/ > <br/>
      <input type="button" onClick={hanldeLogout} value="logout"/>
    </div>
  );
}

export default Dashboard;