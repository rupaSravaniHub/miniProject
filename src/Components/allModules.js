import { useContext, useState, useEffect } from "react";
import { Context } from "../App";
import '../style/allModules.css';
import axios from "axios";
import UpdateModuleData from "./updateModule";

const AllModules = () => {
    const { modulesList, setmodulesList, addModule, setaddmodule,updatemoduleId,setUpdateModuleId } = useContext(Context);

    const addModuleHandle = () => {
        setaddmodule(true);
        setmodulesList(false);
    };

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10); 
    const [output, setOutput] = useState([]);

   
    useEffect(() => {
        const fetchModules = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getAllModules', {
                    params: {
                        page: page,
                        limit: limit
                    }
                });
                console.log("output",output)
                setOutput(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchModules(); 
    }, [page, limit]);  


    // const [add,setaddModuleId] =useContext(Context);
    // const [viewModule,setviewModule] =useContext(Context);
    const AddModule = (moduleId) => 
        {
            // setaddModuleId(moduleId);
            // setviewModule(true);
        }
    // const [setUpdateForm] = useContext(Context); 
    const updateModule = (moduleId) => 
        {
            setUpdateModuleId(moduleId);
            // setUpdateForm(true);
        }
    const deleteModule =async (moduleId) => 
    {
        try {
            const response = await axios.delete('http://localhost:8085/delById', {
                params: {
                    module_id: moduleId
                }
                
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div className="allModulesDiv">
            <button 
                style={{ backgroundColor: 'rgb(2, 105, 165)' }} 
                className="btn mt-2 ms-auto"
                onClick={addModuleHandle}
            >
                <i style={{ color: 'white' }} className="bi bi-plus"></i>
                <span style={{ color: 'white' }}>Add</span>
            </button>

            <table className="table mt-1">
                <thead className="table-light">
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">ModuleName</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {output.map((data, index) => (
                        <tr key={index}> 
                            <th scope="row">{data.module_id}</th>
                            <td>{data.module_name}</td>
                            <td>{data.description}</td>
                            <td>
                                <i className="bi bi-eye"  onClick={() => AddModule(data.module_id)}> </i>
                                <i className="bi bi-pencil" onClick={() => updateModule(data.module_id)}> </i>
                                <i className="bi bi-trash" onClick={() => deleteModule(data.module_id)}></i>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex">
                <div className="pages d-flex align-items-center" style={{ gap: "1rem" }}>
                    <span>Show</span>
                    <input
                        type="number"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        min="1"
                        max="10"
                        style={{ marginLeft: "10px" }}
                    />
                    <span>Entries</span>
                </div>
                
                <div className='paginationButtons ms-auto'>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage(1)} 
                    >
                        <i className="bi bi-chevron-double-left"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage(1)}
                    >
                        1
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage(2)}
                    >
                        2
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage(3)}
                    >
                        3
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage(10)}
                    >
                        10
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage((prevPage) => prevPage + 1)}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => setPage(10)}
                    >
                        <i className="bi bi-chevron-double-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllModules;
