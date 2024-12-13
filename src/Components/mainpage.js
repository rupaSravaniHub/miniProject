import '../style/mainpage.css';
import AddModule from './addModule'
import AllModules from './allModules';
import { useContext } from "react";
import { Context } from "../App";
const Main = () => {
    const { modulesList, setmodulesList, addModule, setaddmodule }=useContext(Context);
   
    const getModules = () => {
        setaddmodule(false);
        setmodulesList(true);
    }
    return (
        <>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-2 text-center" id="menuBar">
                        <div className="menuItems mt-5">
                            <span onClick={getModules}><i className="bi bi-app" ></i> Module</span><br />
                            <span><i className="bi bi-person"></i> Roles</span><br />
                            <span><i className="bi bi-people"></i> Staff</span>
                        </div>
                    </div>

                    <div className="col-10" id="headerBar">
                        <h3 style={{ color: 'black' }}>Staff Management</h3>
                        <span className="fw-lighter">Administration/ <span className="fw-bold">Staff</span></span>

                    </div>
                    <div className="col-10 " id="bodyDiv">
                    {modulesList && <>
                        <AllModules></AllModules>
                        </>}
                    {addModule && <>
                        <AddModule></AddModule>
                        </>}
                    </div>

                </div>
            </div>
        </>
    );
}
export default Main;