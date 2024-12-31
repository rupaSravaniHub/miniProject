import '../../style/addModule.css';
import { useState } from 'react';
import axios from 'axios';

const AddModule = () => {
    const [moduleName, setModuleName] = useState('');
    const [moduleDes, setModuleDes] = useState('');
    const [configFields, setConfigFields] = useState([{ input: '', value: '' }]);
    const [data, setData] = useState(null);

    const addConfigDetails = () => {
        setConfigFields([...configFields, { input: '', value: '' }]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedFields = [...configFields];
        updatedFields[index][field] = value;
        setConfigFields(updatedFields);
    };
    const postData = async () => {
        
        const configFieldsString = JSON.stringify(configFields);
        const currentDateTime = new Date().toISOString();
    
        try {
            const response = await axios.post('http://localhost:8085/addModule', {
                module_name: moduleName,
                description: moduleDes,
                config1: configFieldsString,
                created_at:currentDateTime
            });
            setData(response.data);
            console.log("postedData", data); 
            setModuleName('');
        setModuleDes('');
        setConfigFields([{ input: '', value: '' }]);
        console.log("format",configFieldsString)
        } catch (error) {
            console.error('There was an error!', error);
        }
    }
    
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
                                    value={moduleName}
                                    onChange={(e) => setModuleName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Description<span style={{ color: 'red' }}>*</span></td>
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
                        onClick={addConfigDetails}
                    />
                </div>

                <table>
                    <tbody>
                        {configFields.map((field, index) => (
                            <tr key={index}>
                                <td>Input</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Enter Here"
                                        value={field.input}
                                        onChange={(e) => handleInputChange(index, 'input', e.target.value)}
                                    />
                                </td>
                                <td>Value</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Enter Here"
                                        value={field.value}
                                        onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <center>
                    <button style={{
                        backgroundColor: 'rgb(2, 105, 165)', color: 'white', border: 'none',
                        width: '100px', marginTop: '25px', padding: '10px'
                    }} onClick={postData}>
                        AddModule</button>
                </center>
            </div>
        </>
    );
};

export default AddModule;
