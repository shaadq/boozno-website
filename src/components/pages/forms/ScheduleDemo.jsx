import React, { useEffect, useState } from "react";
import "./Forms.scss";
import Common from "./Common";
import axios from "axios";
import ThankyouModal from "../../common/Modal/ThankyouModal";
import { Spinner } from "react-bootstrap";

const ScheduleDemo = () => {
  const [minDate, setMinDate] = useState("");
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission status

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

  const initialFormData = formFields.reduce((acc, field) => {
    if (field.type === "select" && field.options.length > 0) {
      acc[field.name] = field.options[0].value; // Default to the first option
    } else {
      acc[field.name] = "";
    }
    return acc;
  }, {});

  // Function to determine the correct suffix for a day
  function getDaySuffix(day) {
    if (day % 10 === 1 && day !== 11) {
      return "st";
    } else if (day % 10 === 2 && day !== 12) {
      return "nd";
    } else if (day % 10 === 3 && day !== 13) {
      return "rd";
    } else {
      return "th";
    }
  }

  // Function to format the date in the desired way
  function formatDate(dateStr) {
    // Create a new Date object from the given date string
    const date = new Date(dateStr);

    // Extract the day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString("en-GB", { month: "long" });
    const year = date.getFullYear();

    // Get the correct suffix for the day
    const daySuffix = getDaySuffix(day);

    // Return the formatted date string
    return `${day}${daySuffix}-${month}-${year}`;
  }

  const [formData, setFormData] = useState(initialFormData);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show spinner when submitting

    const templateParams = {
      subject: "Schedule a Demo Inquiry Received",
      scheduleform: true,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      teamSize: formData.size,
      date: formatDate(formData.date),
      time: formData.time,
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

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
  }, []);

  return (
    <div>
      <ThankyouModal show={show} setShow={setShow} />
      <section className="py-5 h-auto h-100vh d-flex align-items-center justify-content-center w-100">
        <div className="container d-flex align-items-center justify-content-center w-100">
          <div className="dynamic-form-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="section-title text-dark-blue text-center text-lg-start">Schedule Demo</h1>
                <p className="section-subtitle text-center text-lg-start py-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>

                <form onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    {formFields.map((data, index) => (
                      <div className={`${data.colClass} mb-4`} key={index}>
                        <label className="form-label text-grey2 fw-semibold">{data.label}</label>
                        {data.type === "textarea" ? (
                          <textarea className="form-control" name={data.name} rows="3" placeholder={data.placeholder} value={formData[data.name]} onChange={inputChangeHandler} required></textarea>
                        ) : data.type === "select" ? (
                          <select name={data.name} className="form-select custom-form-input" value={formData[data.name]} onChange={inputChangeHandler}>
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
                            min={minDate} // Ensure date is not earlier than today
                            value={formData[data.name]}
                            onChange={inputChangeHandler}
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <button type="submit" className="btn btn-primary border-rad-45 w-100">
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

export default ScheduleDemo;
