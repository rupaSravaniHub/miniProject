import '../../style/addModule.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from "../../App";

const UpdateModuleData = () => {
    const { updatemoduleId } = useContext(Context);
    const [moduleName, setModuleName] = useState('');
    const [moduleDes, setModuleDes] = useState('');
    const [created_at, setcreated_at] = useState('');
    const [updateConfigFields, setupdateConfigFields] = useState([]);

    useEffect(() => {
        const fetchModuleData = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getModulebyId', {
                    params: {
                        module_id: updatemoduleId,
                    },
                });
                setModuleName(response.data.module_name);
                setModuleDes(response.data.description);
                setcreated_at(response.data.created_at);
                if (response.data.config1) {
                    setupdateConfigFields(JSON.parse(response.data.config1));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (updatemoduleId) {
            fetchModuleData();
        }
    }, [updatemoduleId]);

    const NewConfigDetails = () => {
        setupdateConfigFields([...updateConfigFields, { input: '', value: '' }]);
    };

    const updateModuleDetails = async () => {
        const configFieldsString = JSON.stringify(updateConfigFields);

        try {
            await axios.put('http://localhost:8085/updateModulebyId',
                {
                    module_name: moduleName,
                    description: moduleDes,
                    created_at: created_at,
                    config1: configFieldsString,
                },
                {
                    params: { module_id: updatemoduleId },
                }
            );
            setModuleName('');
            setModuleDes('');
            setcreated_at('');
            setupdateConfigFields([]);
        }
        catch (error) 
        {
            console.error('There was an error updating the Module!', error);
        }
    };

    return (
        <div className="addModBody" style={{ marginTop: '20px' }}>
            <table>
                <tbody>
                    <tr>
                        <td>Name<span style={{ color: 'red' }}>*</span></td>
                        <td>
                            <input
                                type="text"
                                value={moduleName}
                                onChange={(e) => { setModuleName(e.target.value) }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Description<span style={{ color: 'red' }}>*</span></td>
                        <td>
                            <input
                                type="text"
                                value={moduleDes}
                                onChange={(e) => { setModuleDes(e.target.value) }}
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
                    onClick={NewConfigDetails}
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
                    {updateConfigFields.map((config, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={config.input}
                                    onChange={(e) => {
                                        const updatedFields = [...updateConfigFields];
                                        updatedFields[index].input = e.target.value;
                                        setupdateConfigFields(updatedFields);
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={config.value}
                                    onChange={(e) => {
                                        const updatedFields = [...updateConfigFields];
                                        updatedFields[index].value = e.target.value;
                                        setupdateConfigFields(updatedFields);
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
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
                    onClick={updateModuleDetails}
                >
                    Update
                </button>
            </center>
        </div>
    );
};

export default UpdateModuleData;
