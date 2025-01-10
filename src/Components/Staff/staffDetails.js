import { useState, useEffect, useContext } from "react";
import { Context } from "../../App";
import axios from "axios";

export const StaffDetails = () => {
    const { setAddStaffMem, setStaffPage,setUpdateAddStaffMem,updateStaffMem,setViewStaffPage,
        ViewstaffPage,setViewstaffId ,setUpdateStaffId} = useContext(Context);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStaffDetails = async () => {
            setLoading(true);
            try {
                console.log("Fetching staff details...");
                const response = await axios.get('http://172.17.2.77:8085/getStaffMems', {
                    params: { page, limit }
                });
                console.log("Response from API:", response.data);
                setOutput(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchStaffDetails();
    }, [page, limit]);

    useEffect(() => {
        console.log("Staff Members:", output);
    }, [output]);

    const addMember = () => {
        setAddStaffMem(true);
        setStaffPage(false);
    };

    const deleteMemDetails = async (id) => {
        try {
            const response = await axios.delete('http://172.17.2.77:8085/delMemberById', {
                params: { id }
            });
            
            console.log('Deleted staff member:', response.data);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const UpdateMemDetails = (id) => {
        setUpdateAddStaffMem(true)
        setUpdateStaffId(id)
    };

    const viewMemDetails = (id) => {
        setViewStaffPage(true)
        setViewstaffId(id)
    };

    return (
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
                        {output && output.length > 0 ? (
                            output.map((data) => (
                                <tr key={output.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.firstName}</td>
                                    <td>
                                        <i className="bi bi-eye" onClick={() => viewMemDetails(data.id)}> </i>
                                        <i className="bi bi-pencil" onClick={() => UpdateMemDetails(data.id)}> </i>
                                        <i className="bi bi-trash" onClick={() => deleteMemDetails(data.id)}> </i>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No staff members available</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            

            <div className="d-flex">
                <div className="pages d-flex align-items-center" style={{ gap: "1rem" }}>
                    <span>Show</span>
                    <input
                        type="number"
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        min="1"
                        max="10"
                        style={{ marginLeft: "10px" }}
                    />
                    <span>Entries</span>
                </div>

                <div className="paginationButtons ms-auto">
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
                    >
                        {page}
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
    );
};
