import React, { useState } from "react";
import './UserForm.css'; // Import CSS file for styling

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    education: "",
    jobTitle: "",
    jobdescription: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validate form data
  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.age || isNaN(formData.age)) errors.age = "Valid age is required.";
    if (!formData.email.includes("@")) errors.email = "Valid email is required.";
    if (!formData.education) errors.education = "Education is required.";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Data:", formData);
      setFormSubmitted(true);
      setFormData({
        name: "",
        age: "",
        email: "",
        education: "",
        jobTitle: "",
        jobdescription: "",
      });
    }
  };

  return (
    <div className="form-container">
      {formSubmitted && <p className="success-message">Form submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>

        {/* Age Field */}
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
          {formErrors.age && <p className="error">{formErrors.age}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        {/* Education Field */}
        <div className="form-group">
          <label htmlFor="education">Education Qualifications</label>
          <input
            type="text"
            id="education"
            name="education"
            placeholder="Enter your education"
            value={formData.education}
            onChange={handleChange}
          />
          {formErrors.education && <p className="error">{formErrors.education}</p>}
        </div>

        {/* Job Title Field */}
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Enter your job title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="jobdescription"
            name="jobdescription"
            placeholder="Job Describe"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
