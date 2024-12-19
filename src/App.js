import Main from './Components/mainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import AllModules from './Components/allModules';

export const Context = React.createContext();
function App() {
  const [modulesList, setmodulesList] = useState(true);
  const [addModule, setaddmodule] = useState(false);
  const [rolesList, setrolesList] = useState(false);
  const [addRole, setaddRole] = useState(false);
  const [updatemoduleId, setUpdateModuleId] = useState(null);
  const [add,setaddModuleId] =useState('')
  // const [viewModule, setviewModule] = useState(false);
  return (
    <div className="App">

      <Context.Provider value={
        { modulesList, setmodulesList, addModule, setaddmodule, rolesList, setrolesList,addRole, setaddRole,updatemoduleId,
          setUpdateModuleId,
          // add,setaddModuleId,viewModule,setviewModule
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
