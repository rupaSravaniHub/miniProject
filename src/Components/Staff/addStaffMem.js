import { useState} from "react";
import axios from 'axios';


export const AddStaffMember = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: {
            city: "",
            state: "",
            country: "",
            pincode: "",
        },
        position: "",
        department: "",
        joinDate: "",
        salary: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target; //Object destructuring
        if (["city", "state", "country", "pincode"].includes(name)) {
            setFormData({
                ...formData,
                address: {
                    ...formData.address,
                    [name]: value,
                },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        try{
            const saveStaffMemDetails = await axios.post('http://localhost:8085/saveData', formData);
            console.log('Data saved successfully:', saveStaffMemDetails.data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };

    return (
        <div
            className="container mt-4"
            style={{
                maxHeight: '500px', 
                overflowY: 'auto',
                scrollbarWidth: 'thin'
            }}
        >
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">
                        Gender
                    </label>
                    <select
                        className="form-select"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <fieldset className="col-12">
                    <legend>Address</legend>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.address.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="state" className="form-label">
                            State
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"
                            value={formData.address.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="country" className="form-label">
                            Country
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            value={formData.address.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pincode" className="form-label">
                            Pincode
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="pincode"
                            name="pincode"
                            value={formData.address.pincode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </fieldset>
                <div className="col-md-6">
                    <label htmlFor="position" className="form-label">
                        Position
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="department" className="form-label">
                        Department
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="joinDate" className="form-label">
                        Join Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="joinDate"
                        name="joinDate"
                        value={formData.joinDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="salary" className="form-label">
                        Salary
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}