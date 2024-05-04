import React from "react";
import "./Aboutus.scss";
import ReadyToTry from "../../common/ready-to-try/ReadyToTry";

const AboutUsPage = () => {
  return (
    <div>
      <section className="pt-5 mt-5">
        <div className="container">
          <h2 className="section-title text-dark-blue mb-4">
            For more than 25 years, we've been bucking <br className="d-none d-lg-block" /> Silicon Valley
            trends, taking our own approach <br className="d-none d-lg-block" /> to building products.
          </h2>
          <div>
            <h3 className="text-dark-blue mb-4">Founder Story</h3>
            <div className="section-subtitle text-start">
              <p>
                More than two decades ago, Ben Chestnut and Dan Kurzius started
                a web design agency called the Rocket Science Group. Their focus
                was on big, corporate clients, but on the side, they created a
                delightful email marketing service for small businesses.
              </p>
              <p>
                Mailchimp was designed as an alternative to the oversized,
                expensive email software of the early 2000s. Founded in Atlanta
                in 2001, it offered small business owners access to many of the
                same digital marketing advantages that their much larger
                competitors enjoyed, powering their success and enabling them to
                grow.
              </p>
              <p>
                In the years that followed, Mailchimp continued to deliver
                results for budding entrepreneurs. But just as those original
                customers continued to grow, so did Mailchimp, evolving its
                product offerings to serve companies and marketing teams of all
                sizes and skill levels. In 2021, Mailchimp was acquired by
                Intuit, a company with a long track record of driving small
                business success and solving customer problems. Today, we
                continue to empower the underdog and strive to be the business
                partner we wish we had way back in the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="culture-wrapper p-3 py-4 p-lg-5">
            <h2 className="section-title text-white mb-4">Culture</h2>
            <p className="section-subtitle text-white fs-20 mb-4">
              Intuit Mailchimp strives to create a culture that empowers a
              humble, creative, and independent workforce. We are passionate
              about our small business customers and believe that collaboration
              and creativity are powerful tools to help them make their dreams a
              reality. We love how each new hire adds to our culture. And, we’re
              hiring.
            </p>
            <button className="btn btn-outline-light border-rad-45 px-5 py-3">
              Join Us Now
            </button>
          </div>
        </div>
      </section>
      <ReadyToTry />
    </div>
  );
};

export default AboutUsPage;
