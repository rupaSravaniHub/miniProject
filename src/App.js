import Main from './Components/Home/mainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import AllModules from './Components/Modules/getModules';

export const Context = React.createContext();
function App() {
  const [modulesList, setmodulesList] = useState(true);
  const [addModule, setaddmodule] = useState(false);
  const [rolesList, setrolesList] = useState(false);
  const [addRole, setaddRole] = useState(false);
  const [staffPage, setStaffPage] = useState(false);
  const [addStaffMem, setAddStaffMem] = useState(false);
  // to update Module
  const [updatemoduleId, setUpdateModuleId] = useState('');
  const [ updateModuleForm,setUpdateModuleForm]=useState(false);
  // to view module
  const [viewModuleID,setaddModuleId] =useState('')
  const [viewModule, setviewModule] = useState(false);
  // to view Role
  const [viewroleId, setViewRoleId] = useState('');
    const [viewrole, setviewrole] = useState(false);
// to update role
    const [updateRoleId, setUpdateRoleId] = useState('');
    const [updateviewrole, setUpdateviewrole] = useState(false);

    const getRoles = () => {
      setmodulesList(false);
      setaddmodule(false);
      setaddRole(false);
      setrolesList(true);
      setviewrole(false);
      setUpdateviewrole(false);
  };

  
  return (
    <div className="App">

      <Context.Provider value={
        { modulesList, setmodulesList, addModule, setaddmodule, rolesList, setrolesList,addRole, setaddRole,updatemoduleId,
          setUpdateModuleId,viewroleId,setViewRoleId,viewrole,setviewrole,updateRoleId,setUpdateRoleId,updateviewrole,
          setUpdateviewrole,getRoles,setAddStaffMem,addStaffMem,
          viewModuleID,setaddModuleId,viewModule,setviewModule, updateModuleForm,setUpdateModuleForm,setStaffPage,staffPage
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
