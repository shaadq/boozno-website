import axios from "axios";
import React, { useState } from "react";
import Common from "./Common";
import { Spinner } from "react-bootstrap";
import ThankyouModal from "../../common/Modal/ThankyouModal";

const ContactUs = () => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    acc[field.name] = ""; // Default empty for other fields
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start the spinner

    const templateParams = {
      subject: "Contact Us Inquiry Received",
      contactform: true,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    try {
      await axios.post("http://localhost:5000/send-email", templateParams);
      setFormData(initialFormData); // Reset the form data
      setShow(true); // Show thank you modal, if needed
    } catch (error) {
      console.error("Failed to send email", error);
    } finally {
      setIsSubmitting(false); // Stop the spinner
    }
  };

  return (
    <section className="py-5 h-auto d-flex align-items-center justify-content-center w-100">
      <ThankyouModal show={show} setShow={setShow} />
      <div className="container d-flex align-items-center justify-content-center w-100">
        <div className="dynamic-form-wrapper">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="section-title text-dark-blue text-center text-lg-start">
                Contact Us
              </h1>
              <p className="section-subtitle text-center text-lg-start py-3">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                  {formFields.map((data, index) => (
                    <div className={`${data.colClass} mb-4`} key={index}>
                      <label className="form-label text-grey2 fw-semibold">
                        {data.label}
                      </label>
                      {data.type === "textarea" ? (
                        <textarea
                          className="form-control"
                          name={data.name}
                          rows="3"
                          placeholder={data.placeholder}
                          value={formData[data.name]}
                          onChange={inputChangeHandler}
                          required
                        ></textarea>
                      ) : (
                        <input
                          type={data.type}
                          name={data.name}
                          className="form-control custom-form-input"
                          placeholder={data.placeholder}
                          value={formData[data.name]}
                          onChange={inputChangeHandler}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary border-rad-45 w-100"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner animation="border" size="sm" />
                      <span className="ms-2">Submitting...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
            <Common />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
