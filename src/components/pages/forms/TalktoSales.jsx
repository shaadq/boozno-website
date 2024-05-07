import React, { useState } from "react";
import "./Forms.scss";
import Common from "./Common";
import axios from "axios";
import ThankyouModal from "../../common/Modal/ThankyouModal";
import { Spinner } from "react-bootstrap";

const TalktoSales = () => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission status

  const formFields = [
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
      label: "Company Name",
      name: "companyName",
      type: "text",
      placeholder: "Enter Company Name",
      colClass: "col-lg-6",
    },
    {
      label: "Team Member Size",
      name: "size",
      type: "select",
      options: [
        { option: "0-5", value: "0-5" },
        { option: "5-10", value: "5-10" },
        { option: "10-15", value: "10-15" },
        { option: "15-20", value: "15-20" },
        { option: "20-30", value: "20-30" },
        { option: "30-40", value: "30-40" },
        { option: "40-50", value: "40-50" },
      ],
      placeholder: "Select",
      colClass: "col-lg-6",
    },
  ];

  const initialFormData = formFields.reduce((acc, field) => {
    if (field.type === "select" && field.options.length > 0) {
      acc[field.name] = field.options[0].value;
    } else {
      acc[field.name] = "";
    }
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show the spinner when submitting

    const templateParams = {
      subject: "Talk to Sales Inquiry Received",
      talksalesform: true,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      teamSize: formData.size,
    };

    try {
      await axios.post("http://localhost:5000/send-email", templateParams);
      setFormData(initialFormData); // Reset the form data
      setShow(true); // Show thank you modal
    } catch (error) {
      console.error("Failed to send email", error);
    } finally {
      setIsSubmitting(false); // Stop the spinner when done
    }
  };

  return (
    <div>
      <ThankyouModal show={show} setShow={setShow} />
      <section className="py-5 h-auto d-flex align-items-center justify-content-center w-100">
        <div className="container d-flex align-items-center justify-content-center w-100">
          <div className="dynamic-form-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="section-title text-dark-blue text-center text-lg-start">
                  Talk to Sales
                </h1>
                <p className="section-subtitle text-center text-lg-start py-3">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    {formFields.map((data, index) => (
                      <div className={`${data.colClass} mb-4`} key={index}>
                        <label className="form-label text-grey2 fw-semibold">
                          {data.label}
                        </label>
                        {data.type === "select" ? (
                          <select
                            name={data.name}
                            className="form-select custom-form-input"
                            defaultValue={data.options[0].value}
                            value={formData[data.name]}
                            onChange={inputChangeHandler}
                          >
                            {data.options.map((op, i) => (
                              <option value={op.value} key={i}>
                                {op.option}
                              </option>
                            ))}
                          </select>
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
    </div>
  );
};

export default TalktoSales;
