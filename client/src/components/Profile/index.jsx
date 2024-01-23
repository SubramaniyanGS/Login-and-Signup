import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";

const Profile = () => {
  const updateUser = () => {
		alert(`User details updated successfully.`);
	};

  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    dob: '',
    mobile: '',
  });

  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    dob: '',
    mobile: '',
  });

  useEffect(() => {
    // Fetch profile data on component mount (replace 'user_id' with the actual user ID)
    axios.get(`http://localhost:5000/profile/user_id`)
      .then(response => setProfileData(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update profile data on form submission (replace 'user_id' with the actual user ID)
      const response = await axios.post(`http://localhost:5000/update-profile/user_id`, formData);
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.signup_container}>
    <div className={styles.signup_form_container}>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>User Profile</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"            
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"            
            required
            className={styles.input}
          />
           <input
            type="text"
            placeholder="Gender"
            name="mobileno"
            required
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Age"
            name="age"            
            required
            className={styles.input}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"          
            required
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobileno"
            required
            className={styles.input}
          />
          <button type="submit" onClick={updateUser} className={styles.green_btn}>
           Update
          </button>
          <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				 </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Profile;
