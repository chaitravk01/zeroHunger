import React, { useEffect, useState } from "react";
import "./donation.css";
import "./tabel.css";
import axios from "axios";
import swal from "sweetalert2";
import Header from "../../components/header";
import bg from "../../images/donatehome.png";

export default function Donation() {
  const [organization, setOrganization] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [donation_type, setDonationType] = useState("");
  const [d_qty, setDQty] = useState("");
  const [errors, setErrors] = useState([]);
  const [organizationSearch, setOrganizationSearch] = useState("");

  useEffect(() => {
    getAllOrganization();
  }, []);

  const getAllOrganization = () => {
    axios.get("http://localhost:8000/api/AddOrgan/all").then((response) => {
      setOrganization(response.data);
    });
  };

  function saveDonation(e) {
    e.preventDefault();
    setErrors([]); // Reset errors at start
    let hasErrors = false;

    const nameModel = /^[a-zA-Z]+$/;
    const phonePattern = /^\d{10}$/; // Adjust for the correct phone number format if needed
    const quantityPattern = /^\d+$/;

    if (!nameModel.test(first_name)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "First Name is Required"]);
    }

    if (!nameModel.test(last_name)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "Last Name is Required"]);
    }

    if (!nameModel.test(donation_type)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "Donation Type is Required"]);
    }

    if (!quantityPattern.test(d_qty)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "Please Enter Valid Quantity"]);
    }

    if (!phonePattern.test(phone_no)) {
      hasErrors = true;
      setErrors((prev) => [...prev, "Please Enter Valid Phone No"]);
    }

    if (hasErrors) return;

    const donate = {
      first_name,
      last_name,
      address,
      phone_no,
      donation_type,
      d_qty,
    };

    axios
      .post("http://localhost:8000/api/AddDonator", donate)
      .then(() => {
        swal
          .fire({
            title: "Donation Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          })
          .then(function () {
            window.location.href = "";
          });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header />
      <main className="main">
        <div className="home__container Home-container grid">
          <div className="content">
            <h1 className="title">Make Donations</h1>
            <h2 className="home_description">
              Donation-needed organizations can join with us
            </h2>
            <div className="contact__content">
              <a href="/Organization" className="button">
                Organization join
              </a>
              <img className="Home-bg" src={bg} alt="bg" />
            </div>
          </div>
          <div className="content">
            <h2>Donation Details</h2>
            <hr />
            <form onSubmit={saveDonation}>
              <div className="form-group">
                <label>Donater First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {errors.includes("First Name is Required") && (
                  <p className="alert-txt">First Name is Required</p>
                )}
              </div>
              <div className="form-group">
                <label>Donater Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {errors.includes("Last Name is Required") && (
                  <p className="alert-txt">Last Name is Required</p>
                )}
              </div>
              <div className="form-group">
                <label>Donation Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter location"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Donater Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter contact number"
                  value={phone_no}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
                {errors.includes("Please Enter Valid Phone No") && (
                  <p className="alert-txt">Please Enter Valid Phone No</p>
                )}
              </div>
              <div className="form-group">
                <label>Donation Type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Food/Fund"
                  value={donation_type}
                  onChange={(e) => setDonationType(e.target.value)}
                  required
                />
                {errors.includes("Donation Type is Required") && (
                  <p className="alert-txt">Donation Type is Required</p>
                )}
              </div>
              <div className="form-group">
                <label>Donation Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter qty"
                  value={d_qty}
                  onChange={(e) => setDQty(e.target.value)}
                  required
                />
                {errors.includes("Please Enter Valid Quantity") && (
                  <p className="alert-txt">Please Enter Valid Quantity</p>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* Add additional components or tables as needed */}
    </div>
  );
}
