import { Context } from "../../App";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const UpdateStaffDetails = () => {
  const { ViewstaffId, updateStaffId } = useContext(Context);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://172.17.2.77:8085/getStaffDetailsById",
          {
            params: { id: ViewstaffId },
          }
        );
        const address =
          typeof response.data.address === "string"
            ? JSON.parse(response.data.address)
            : response.data.address || {
                city: "",
                state: "",
                country: "",
                pincode: "",
              };

        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
          dob: response.data.dob,
          gender: response.data.gender,
          address,
          position: response.data.position,
          department: response.data.department,
          joinDate: response.data.joinDate,
          salary: response.data.salary,
        });
      } catch (err) {
        setError("Failed to fetch staff details. Please try again.");
        console.error(err);
      }
    };

    if (ViewstaffId) {
      fetchData();
    }
  }, [ViewstaffId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["city", "state", "country", "pincode"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      address: JSON.stringify(formData.address),
    };

    try {
      const response = await axios.put(
        "http://localhost:8085/updateStaffDetailsbyID",
        payload,{
            params: { id: updateStaffId },
        }
      );
      setSuccess("Staff details updated successfully!");
      setError(null);
      console.log("Data saved successfully:", response.data);
    } catch (err) {
      setError("Failed to update staff details. Please try again.");
      setSuccess(null);
      console.error(err);
    }
  };

  return (
    <div
      className="container mt-4"
      style={{
        maxHeight: "500px",
        overflowY: "auto",
      }}
    >
      <h3 className="text-center">Update Staff Details</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
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
        {/* Other input fields */}
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
