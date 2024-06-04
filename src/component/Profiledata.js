import React, { useState } from "react";
import Image from 'react-bootstrap/Image';
import { MdAddAPhoto } from "react-icons/md";

function Profiledata() {
    const initFormData = {
        name: "",
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState({ ...initFormData });
    const [err, setErr] = useState({
        name: null,
        email: null,
        password: null,
    });
    const [profileImage, setProfileImage] = useState("asset/noprofil.jpg"); // state to store the profile image

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const changeHandler = (e) => {
        const { name, value } = e.target;
        let error = null;

        if (name === "name" && value.length <= 8) {
            error = `${name} must be more than 8 characters.`;
        } else if (name === "email" && !emailRegex.test(value)) {
            error = `Valid Email :'name@email.com' `;
        } else if (name === "password" && value.length <= 6) {
            error = `${name} must be more than 6 characters.`;
        }

        setErr({
            ...err,
            [name]: error,
        });

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const { name, email, password } = formData;
        let valid = true;

        if (name.length <= 8) {
            setErr((prev) => ({
                ...prev,
                name: "Name must be more than 8 characters.",
            }));
            valid = false;
        }

        if (!emailRegex.test(email)) {
            setErr((prev) => ({
                ...prev,
                email: "Valid Email :'name@email.com' ",
            }));
            valid = false;
        }

        if (password.length <= 6) {
            setErr((prev) => ({
                ...prev,
                password: "Password must be more than 6 characters.",
            }));
            valid = false;
        }

        if (valid) {
            setFormData({ ...initFormData });
            alert("Welcome, my Dear ❤🌏");
        } else {
            alert("Sorry, enter valid data! Try Again 😃");
        }
    };

    return (
        <div className="container" style={{ backgroundColor: "white", border: "1px solid #0871FF", padding: "30px", width: "100%", margin: "30px auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" , marginTop:"150px"}}>
            <h3 style={{ color: "#0871FF", display: "flex", justifyContent: 'center', fontSize: "30px", margin: "10px", padding: "20px" }}>Edit Your Profile</h3>



            <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                
                <div style={{ width: "100px", position: "relative", margin: "auto", marginBottom: "15px", display: "flex", justifyContent: "center" }}>
                    <Image src={profileImage} roundedCircle style={{ width: "100px", height: "100px", border: "6px solid #eaeaea" }} />
                    <div style={{ position: "absolute", bottom: "0", right: "0", width: "32px", height: "32px", lineHeight: "30px", textAlign: "center", overflow: "hidden" }}>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ position: "absolute", transform: "scale(2)", opacity: "0" }}
                            onChange={handleImageChange}
                        />
                        <i style={{ color: "black" }}><MdAddAPhoto /></i>
                    </div>
                </div>
                
                
                <input
                    type='text'
                    name='name'
                    className='border border-gray'
                    placeholder="Enter name"
                    onChange={changeHandler}
                    value={formData.name}
                    style={{ border: "1px solid #0871FF", width: "300px", padding: "10px", borderRadius: "10px" }}
                />
                {err.name && <p className="text-danger">{err.name}</p>}
                <br />
                <input
                    type='email'
                    name='email'
                    className='border border-gray'
                    placeholder="Enter email"
                    onChange={changeHandler}
                    value={formData.email}
                    style={{ border: "1px solid #0871FF", width: "300px", padding: "10px", borderRadius: "10px" }}
                />
                {err.email && <p className="text-danger">{err.email}</p>}
                <br />
                <input
                    type='password'
                    name="password"
                    className='border border-gray'
                    placeholder="Enter password"
                    onChange={changeHandler}
                    value={formData.password}
                    style={{ border: "1px solid #0871FF", width: "300px", padding: "10px", borderRadius: "10px" }}
                />
                {err.password && <p className="text-danger">{err.password}</p>}
                <br />
                <button type="submit" style={{ backgroundColor: "#0871FF", color: "white", border: "1px solid #0871FF", padding: "10px", width: "100px", borderRadius: "10px", fontWeight: "bold", margin: "5px auto", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default Profiledata;
