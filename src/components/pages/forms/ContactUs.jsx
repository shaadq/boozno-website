import axios from "axios";
import React, { useState } from "react";
import Common from "./Common";
import "./Forms.scss";

const ContactUs = () => {
  const [show, setShow] = useState(false);
  let formFields = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Your first name",
      colClass: "col-lg-6",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Your last name",
      colClass: "col-lg-6",
    },
    {
      label: "Email Address",
      name: "emailAddress",
      type: "email",
      placeholder: "Your email address",
      colClass: "col-lg-6",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "number",
      placeholder: "Your phone number",
      colClass: "col-lg-6",
    },
    {
      label: "Write A Message",
      name: "message",
      type: "textarea",
      placeholder: "Write your message",
      colClass: "col-12",
    },
  ];

  const initialFormData = formFields.reduce((acc, field) => {
    if (field.type === "select" && field.options.length > 0) {
      acc[field.name] = field.options[0].value; // Default to the first option
    } else {
      acc[field.name] = ""; // Default empty for other fields
    }
    return acc;
  }, {});

  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    let data = { ...formData };
    data[name] = value;
    setFormData(data);
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const templateParams = {
      subject: "Contact Us Inquiry Received",
      contactform: true,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    console.log(templateParams);

    // Node js backend server
    try {
      const response = await axios.post("http://localhost:5000/send-email", templateParams);
      setFormData(initialFormData); // Reset the form data
      setShow(true); // Show thank you modal
    } catch (error) {
      console.error("Failed to send email", error);
    }

    // Email.js lib
    // Send email using EmailJS
    // emailjs.send("service_ix6fwsb", "contactus-template", templateParams, "ODhsBwRIy9yPCLJhe").then(
    //   (response) => {
    //     console.log("Email sent successfully!", response.status, response.text);
    //   },
    //   (error) => {
    //     console.error("Failed to send email.", error);
    //   }
    // );
  };

  return (
    <div>
      <section className="py-5 h-auto d-flex align-items-center justify-content-center w-100">
        <div className="container d-flex align-items-center justify-content-center w-100">
          <div className="dynamic-form-wrapper mt-4">
            <div className="row">
              <div className="col-lg-8">
                <div className="">
                  <h1 className="section-title text-dark-blue text-center text-lg-start">Contact Us</h1>
                  <p className="section-subtitle text-center text-lg-start py-3">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco <br className="d-none d-lg-block" /> laboris nisi ut aliquip ex ea.
                  </p>

                  <form action="" onSubmit={handleSubmit}>
                    <div className="row mb-2">
                      {formFields.map((data, index) => (
                        <div className={`${data.colClass} mb-4`} key={index}>
                          <label className="form-label text-grey2 fw-semibold">{data.label}</label>
                          {data.type === "textarea" ? <textarea className="form-control" name={data.name} rows="3" placeholder={data.placeholder} value={formData[data.name]} onChange={inputChangeHandler} required></textarea> : <input type={data.type} name={data.name} className="form-control custom-form-input" placeholder={data.placeholder} value={formData[data.name]} onChange={inputChangeHandler} required />}
                        </div>
                      ))}
                    </div>
                    <button type="submit" className="btn btn-primary border-rad-45 w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <Common />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
