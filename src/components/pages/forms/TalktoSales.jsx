import React, { useState } from "react";
import "./Forms.scss";
import Common from "./Common";
import axios from "axios";
import ThankyouModal from "../../common/Modal/ThankyouModal";

const TalktoSales = () => {
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
      subject: "Talk to Sales Inquiry Received ",
      talksalesform: true,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      teamSize: formData.size,
    };

    // Node js backend server
    try {
      const response = await axios.post("http://localhost:5000/send-email", templateParams);
      setFormData(initialFormData); // Reset the form data
      setShow(true); // Show thank you modal
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  return (
    <div>
      <ThankyouModal show={show} setShow={setShow} />
      <section className="py-5 h-auto h-lg-100vh h-100vh d-flex align-items-center justify-content-center w-100">
        <div className="container d-flex align-items-center justify-content-center w-100">
          <div className="dynamic-form-wrapper mt-4">
            <div className="row">
              <div className="col-lg-8">
                <div className="">
                  <h1 className="section-title text-dark-blue text-center text-lg-start">Talk to Sales</h1>
                  <p className="section-subtitle text-center text-lg-start py-3">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco <br className="d-none d-lg-block" /> laboris nisi ut aliquip ex ea.
                  </p>

                  <form action="" onSubmit={handleSubmit}>
                    <div className="row mb-2">
                      {formFields.map((data, index) => (
                        <div className={`${data.colClass} mb-4`} key={index}>
                          <label className="form-label text-grey2 fw-semibold">{data.label}</label>
                          {data.type === "select" ? (
                            <select name={data.name} className="form-select custom-form-input" defaultValue={data.options[0].value} value={formData[data.name]} onChange={inputChangeHandler}>
                              {data.options.map((op, i) => (
                                <option value={op.value} key={i} selected={index === 1}>
                                  {op.option}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input type={data.type} name={data.name} className="form-control custom-form-input" placeholder={data.placeholder} value={formData[data.name]} onChange={inputChangeHandler} required />
                          )}
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

export default TalktoSales;
