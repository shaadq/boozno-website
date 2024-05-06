import React from "react";
import "./NotFound.scss";
import img from "../../../assets/img/404-img.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="py-5 not-found-page">
      <div className="container page-wrapper text-center">
        <img src={img} className="mb-4" alt="" />
        <h1 className="section-title text-dark-blue mb-3">404 Error!</h1>
        <p className="text-light-grey mb-4">The page you are looking for is not available or doesn’t belong to this website!</p>
        <Link to={"/"}>
          <button className="btn btn-primary border-rad-45 py-3 px-4">Go back to home</button>{" "}
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
