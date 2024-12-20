import '../../style/addModule.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "../../App";

const UpdateModuleData = () => {
    const [updatemoduleId] = useContext(Context); 
    const [moduleName, setModuleName] = useState('');
    const [moduleDes, setModuleDes] = useState('');
    const [result, setResult] = useState();
   
    useEffect(() => {
        const fetchModuleData = async () => {
           
            try {
                const response = await axios.get('http://localhost:8085/getModulebyId', {
                    params: {
                        module_id: updatemoduleId,
                    },
                });
                
                setResult(response.data);
                console.log(result)
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (updatemoduleId) {
            fetchModuleData();
        }
    }, [updatemoduleId]);

   
    const updateModule = async () => {};

    return (
        <>
            <div className="addModBody" style={{ marginTop: '20px' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Name<span style={{ color: 'red' }}>*</span>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Here"
                                    value={moduleName}
                                    onChange={(e) => setModuleName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description<span style={{ color: 'red' }}>*</span>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Here"
                                    value={moduleDes}
                                    onChange={(e) => setModuleDes(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="config">
                    <span>Configuration </span>
                    <i
                        style={{ color: 'rgb(2, 105, 165)', fontSize: '24px' }}
                        className="bi bi-plus"
                    />
                </div>

                <table>
                    <tbody>
                            <tr>
                                <td>Input</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Enter Here"
                                    />
                                </td>
                                <td>Value</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Enter Here"
                                    />
                                </td>
                            </tr>
                    </tbody>
                </table>
                <center>
                    <button
                        style={{
                            backgroundColor: 'rgb(2, 105, 165)',
                            color: 'white',
                            border: 'none',
                            width: '100px',
                            marginTop: '25px',
                            padding: '10px',
                        }}
                        onClick={updateModule}
                    >Update
                    </button>
                </center>
            </div>
        </>
    );
};

export default UpdateModuleData;
