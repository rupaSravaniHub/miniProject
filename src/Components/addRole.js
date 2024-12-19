import '../style/addModule.css';
import { useState } from 'react';
import axios from 'axios';

const AddRole = () => {
    const [role, setRole] = useState('');
    const [data, setData] = useState(null);

    const postData = async () => {
    
        try {
            const response = await axios.post('http://localhost:8085/addrole', {
                role_name: role,
            });
            setData(response.data);
            console.log("postedData", data); 
            setRole('');
        } catch (error) {
            console.error('There was an error posting role!', error);
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
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </td>
                            <td>
                                 <button style={{
                        backgroundColor: 'rgb(2, 105, 165)', color: 'white', border: 'none',
                        width: '100px', padding: '10px'
                    }} onClick={postData}>
                        AddRole</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                
                
                   
                
            </div>
        </>
    );
};

export default AddRole;
