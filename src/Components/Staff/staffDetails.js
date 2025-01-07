import { useState, useEffect, axios, useContext } from "react";
import { Context } from "../../App";

export const StaffDetails = () =>
{
    const { setAddStaffMem,setStaffPage } = useContext(Context);
     const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [output, setOutput] = useState([]);

    useEffect(() => {
        const fetchStaffDetails = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getStaffDetails', {
                    params: {
                        page: page,
                        limit: limit
                    }
                });
                console.log("output", output)
                setOutput(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchStaffDetails();
    }, [page, limit]);

    // addStaffMembers Details
    const addMember = () => {
        setAddStaffMem(true)
        setStaffPage(false);
    };

    // delete staffMem
    const deleteMemDetails = async (staff_id) => {
        try {
            const response = await axios.delete('http://localhost:8085/delMemberById', {
                params: {
                    staff_id: staff_id
                }

            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // updateStaffMem
    const UpdateMemDetails = (staff_id) => {
       
    }
    
    // viewStaffMem
    const viewMemDetails = (staff_id) => {
        
    }

    return(
        <div className="allModulesDiv">
        <button
            style={{ backgroundColor: 'rgb(2, 105, 165)' }}
            className="btn mt-2 ms-auto"
            onClick={addMember}
        >
            <i style={{ color: 'white' }} className="bi bi-plus"></i>
            <span style={{ color: 'white' }}>Add</span>
        </button>

        <table className="table mt-1">
            <thead className="table-light">
                <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">Staff</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {output.map((data, index) => (
                    <tr key={index}>
                        <th scope="row">{data.staff_id}</th>
                        <td>{data.staffMem_name}</td>
                        <td>
                            <i className="bi bi-eye" onClick={() => viewMemDetails(data.staff_id)}> </i>
                            <i className="bi bi-pencil" onClick={() => UpdateMemDetails(data.staff_id)}> </i>
                            <i className="bi bi-trash" onClick={() => deleteMemDetails(data.staff_id)}></i>
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
                    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    type="button"
                    className="btn"
                >{page}
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                >
                    <i className="bi bi-chevron-right"></i>
                </button>

            </div>
        </div>
    </div>
    )
}