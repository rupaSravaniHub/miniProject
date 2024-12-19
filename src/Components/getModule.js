import '../style/addModule.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "../App";
const GetModule = () => {
    const [add] = useContext(Context); 
    const [result,setResult] = useState({})
    const [configFields, setConfigFields] = useState([{ input: '', value: '' }]);
    useEffect(() => {
        const fetchModuleData = async () => {
            
            try {
                const response = await axios.get('http://localhost:8085/getModulebyId', {
                    params: {
                        module_id: add,
                    },
                });

                const data = response.data || {};
                setResult(data);
                console.log(data.module_name)
                // if (data.config1) {
                //     const parsedConfig = JSON.parse(data.config1);
                //     setConfigFields(parsedConfig || []);
                // }

            } catch (error) {console.error('Error fetching data:', error);}
        };

        if (add) {
            fetchModuleData();
        }
    }, [add]);

    return (
        <>
            <div className="addModBody" style={{ marginTop: '20px' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name<span style={{ color: 'red' }}>*</span></td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Here"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Description<span style={{ color: 'red' }}>*</span></td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Here"
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
            </div>
        </>
    );
};

export default GetModule;
