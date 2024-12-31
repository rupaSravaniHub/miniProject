import '../../style/addModule.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "../../App";

const GetModule = () => {
    const { viewModuleID } = useContext(Context);
    const [result, setResult] = useState({});
    const [configFields, setConfigFields] = useState([]);

    useEffect(() => {
        const fetchModuleData = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getModulebyId', {
                    params: {
                        module_id: viewModuleID,
                    },
                });

                const data = response.data || {};
                setResult(data);
                if (data.config1) {
                    setConfigFields(JSON.parse(data.config1));
                    console.log("configFields details:", configFields);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        console.log("configFields details",configFields);
        if (viewModuleID) {
            fetchModuleData();
        }
    }, [viewModuleID]);

    // 

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
                                    value={result.module_name || ''}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Description<span style={{ color: 'red' }}>*</span></td>
                            <td>
                                <input
                                    type="text"
                                    value={result.description || ''}
                                    readOnly
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="config">
                    <span>Configuration</span>
                    <i
                        style={{ color: 'rgb(2, 105, 165)', fontSize: '24px' }}
                        className="bi bi-plus"
                    />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Input</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {configFields.map((config, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        value={config.input}
                                        readOnly
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={config.value}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default GetModule;
