import React, { useEffect, useState } from "react";
import "./Forms.scss";
import Common from "./Common";
import axios from "axios";

const ScheduleDemo = () => {
  const [minDate, setMinDate] = useState("");
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
    {
      label: "Date",
      name: "date",
      type: "date",
      placeholder: "Select date",
      colClass: "col-lg-6",
    },
    {
      label: "Time",
      name: "time",
      type: "select",
      options: [
        { option: "12pm-1pm", value: "12pm-1pm" },
        { option: "1pm-2pm", value: "1pm-2pm" },
        { option: "2pm-3pm", value: "2pm-3pm" },
      ],
      placeholder: "Select",
      colClass: "col-lg-6",
    },
  ];

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      subject: "Schedule a Demo Inquiry Received",
      talksalesform: true,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      teamSize: formData.size,
      date: formData.date,
      time: formData.time,
    };

    // Node js backend server
    try {
      const response = await axios.post("http://localhost:5000/send-email", templateParams);
      console.log(response.data.message);
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
  }, []);

  return (
    <div>
      <section className="py-5 h-auto h-lg-100vh h-100vh d-flex align-items-center justify-content-center w-100">
        <div className="container d-flex align-items-center justify-content-center w-100">
          <div className="dynamic-form-wrapper mt-4">
            <div className="row">
              <div className="col-lg-8">
                <div className="">
                  <h1 className="section-title text-dark-blue text-center text-lg-start">Schedule Demo</h1>
                  <p className="section-subtitle text-center text-lg-start py-3">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco <br className="d-none d-lg-block" /> laboris nisi ut aliquip ex ea.
                  </p>

                  <form action="" onSubmit={handleSubmit}>
                    <div className="row mb-2">
                      {formFields.map((data, index) => (
                        <div className={`${data.colClass} mb-4`} key={index}>
                          <label className="form-label text-grey2 fw-semibold">{data.label}</label>
                          {data.type === "textarea" ? (
                            <textarea className="form-control" name={data.name} rows="3" placeholder={data.placeholder} value={formData[data.name]} onChange={inputChangeHandler}></textarea>
                          ) : data.type === "select" ? (
                            <select name={data.name} className="form-select custom-form-input" value={formData[data.name]} onChange={inputChangeHandler}>
                              {data.options.map((op, i) => (
                                <option value={op.value} key={i}>
                                  {op.option}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input type={data.type} min={minDate} name={data.name} className="form-control custom-form-input" placeholder={data.placeholder} value={formData[data.name]} onChange={inputChangeHandler} />
                          )}{" "}
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

export default ScheduleDemo;
