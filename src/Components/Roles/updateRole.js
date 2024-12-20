import '../../style/addModule.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../App';

const UpdateRole = () => {
    const [viewRoleResult, setviewRoleResult] = useState({});
    const { updateRoleId,getRoles } = useContext(Context);
    const [updateRole, setUpdateRole] = useState('');

    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getRolelebyId', {
                    params: { role_id: updateRoleId },
                });
                setviewRoleResult(response.data);
                setUpdateRole(response.data.role_name); 
               
            } catch (error) {
                console.error('There was an error fetching role data!', error);
            }
        };

        if (updateRoleId) {
            getData();
        }
    }, [updateRoleId]);

   
    const Update = async () => {
        try {
            const response = await axios.put(
                'http://localhost:8085/updateRolebyId',
                {
                    role_id: updateRoleId,
                    role_name: updateRole, 
                },
                {
                    params: { role_id: updateRoleId },
                }
            );
            console.log('Updated role:', response.data);
            setUpdateRole('')
            getRoles();
        } catch (error) {
            console.error('There was an error updating the role!', error);
        }
    };

    return (
        <div className="addModBody" style={{ marginTop: '20px' }}>
            <table>
                <tbody>
                    <tr>
                        <td>RoleName<span style={{ color: 'red' }}>*</span></td>
                        <td>
                            <input
                                type="text"
                                value={updateRole} 
                                onChange={(e) => setUpdateRole(e.target.value)} 
                            />
                        </td>
                        <td>
                            <button
                                style={{
                                    backgroundColor: 'rgb(2, 105, 165)',
                                    color: 'white',
                                    border: 'none',
                                    width: 'auto',
                                    padding: '10px',
                                }}
                                onClick={Update}
                            >
                                UpdateRole
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UpdateRole;
