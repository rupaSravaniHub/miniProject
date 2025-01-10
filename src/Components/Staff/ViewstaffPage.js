
import { Context } from "../../App";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const ViewstaffPageDetails=() =>
{
    const {ViewstaffId} =useContext(Context)
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: {
            city: '',
            state: '',
            country: '',
            pincode: ''
        },
        position: '',
        department: '',
        joinDate: '',
        salary: ''
    });
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://172.17.2.77:8085/getStaffDetailsById', {
                params: { id:ViewstaffId }
              });
            setData(response.data);
            console.log("data is",response.data)

            setFormData({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                phone: response.data.phone,
                dob: response.data.dob,
                gender: response.data.gender,
                address: JSON.parse(response.data.address),
                position: response.data.position,
                department: response.data.department,
                joinDate: response.data.joinDate,
                salary: response.data.salary
            });
          } catch (error) {
            setError(error);
          }
        };
      
        if (ViewstaffId) {
          fetchData();
        }
      }, [ViewstaffId]);
      
    return(
        <div
        className="container mt-4"
        style={{
            maxHeight: '500px', 
            overflowY: 'auto',
            scrollbarWidth: 'thin'
        }}
    >
        <form  className="row g-3">
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
                    required
                />
            </div>
        </form>
    </div>
    );
}