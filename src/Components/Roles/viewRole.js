import '../../style/addModule.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../App';

const ViewRole = () => {
    const { viewroleId } = useContext(Context);
    const [viewRoleResult, setviewRoleResult] = useState({}); 

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getRolelebyId', {
                    params: { role_id: viewroleId }, 
                });
                setviewRoleResult(response.data); 
                console.log(response.data);
            } catch (error) {
                console.error('There was an error fetching role data!', error);
            }
        };

        if (viewroleId) {
            getData();
        }
    }, [viewroleId]);

    return (
        <>
            <div className="addModBody" style={{ marginTop: '20px' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>Role_id<span style={{ color: 'red' }}>*</span></td>
                            <td>
                                <input
                                    type="text"
                                    value={viewRoleResult.role_id || ''} 
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Role_name<span style={{ color: 'red' }}>*</span></td>
                            <td>
                                <input
                                    type="text"
                                    value={viewRoleResult.role_name || ''} 
                                    readOnly
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewRole;
