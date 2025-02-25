import '../../style/mainpage.css';
import AddModule from '../Modules/addModule';
import AllModules from '../Modules/getModules';
import GetRolesDetail from '../Roles/getRoles'
import { useContext } from "react";
import { Context } from "../../App";
import AddRole from '../Roles/addRole';
import GetModule from '../Modules/viewModule';
import ViewRole from '../Roles/viewRole';
import UpdateRole from '../Roles/updateRole';
import UpdateModuleData from '../Modules/updateModule';
import { StaffDetails } from '../Staff/staffDetails';
import { AddStaffMember } from '../Staff/addStaffMem';
import { ViewstaffPageDetails } from '../Staff/ViewstaffPage';
import { UpdateStaffDetails } from '../Staff/updateStaff';

const Main = () => {
    const { modulesList, setmodulesList, addModule, setaddmodule,rolesList, setrolesList,addRole, 
        setaddRole,viewModule,setviewModule,viewrole,setviewrole,updateviewrole,setUpdateviewrole, 
        updateModuleForm,setUpdateModuleForm,staffPage,setStaffPage,setAddStaffMem,addStaffMem,
        setUpdateAddStaffMem,updateStaffMem,setViewStaffPage,ViewstaffPage} 
        = useContext(Context);

    const getModules = () => {
        setmodulesList(true);
        setaddmodule(false);
        setaddRole(false);
        setrolesList(false);
        setviewrole(false);
        setUpdateviewrole(false);
        setviewModule(false);
        setUpdateModuleForm(false);
        setStaffPage(false);
        setUpdateAddStaffMem(false);
        setViewStaffPage(false);
    };

    const getRoles = () => {
        setmodulesList(false);
        setaddmodule(false);
        setaddRole(false);
        setrolesList(true);
        setviewrole(false);
        setUpdateviewrole(false);
        setUpdateModuleForm(false);
        setStaffPage(false);
        setUpdateAddStaffMem(false);
        setViewStaffPage(false);
    };

    const getStaffDetails = () => {
        setmodulesList(false);
        setaddmodule(false);
        setaddRole(false);
        setrolesList(true);
        setviewrole(false);
        setUpdateviewrole(false);
        setUpdateModuleForm(false);
        setrolesList(false);
        setStaffPage(true);
        setAddStaffMem(false)
        setUpdateAddStaffMem(false);
        setViewStaffPage(false);
    };

    if(viewrole || updateviewrole)
    {
        setrolesList(false);
    }

    if(viewModule || updateModuleForm)
    {
        setmodulesList(false);
    }
    
    if(updateStaffMem ||ViewstaffPage ||addRole ||addModule)
    {
        setStaffPage(false);
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row"> 
                   
                    <div className=" col-2 text-center" id="menuBar">
                        <div className="menuItems mt-5">
                            <span onClick={getModules}><i className="bi bi-app"></i> Module</span><br />
                            <span onClick={getRoles}><i className="bi bi-person"></i> Roles</span><br />
                            <span onClick={getStaffDetails}><i className="bi bi-people"></i> Staff</span>
                        </div>
                    </div>

                  
                    <div className=" col-10" id="headerBar">
                        <h3 style={{ color: 'black' }}>Staff Management</h3>
                        <span className="fw-lighter">Administration/ <span className="fw-bold">Staff</span></span>
                    </div>

                    
                    <div className=" col-10" id="bodyDiv">
                        {modulesList && <AllModules />}
                        {addModule && <AddModule />}
                        {rolesList && <GetRolesDetail/>}
                        {addRole && <AddRole/>}
                        {viewModule && <GetModule/>}
                        {updateModuleForm && <UpdateModuleData />}
                        {viewrole && <ViewRole/>}
                        {updateviewrole && <UpdateRole/>}
                        {staffPage && <StaffDetails></StaffDetails>}
                        {addStaffMem && <AddStaffMember></AddStaffMember>}
                        {updateStaffMem && <UpdateStaffDetails></UpdateStaffDetails>}
                        {ViewstaffPage && <ViewstaffPageDetails></ViewstaffPageDetails>}
                    </div>
                    </div>
              
            </div> 
        </>
    );
};

export default Main;
