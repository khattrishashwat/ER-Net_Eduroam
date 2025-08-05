import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* BANNER SECTION START HERE */}
      <section className="about-banner-main-con sub-banner-main-con about w-100 float-left light-bg">
        <div className="container">
          <div
            className="sub-banner-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="sub-banner-content-con">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
              <h2>
                eduroam<sup className="text-2xl">®</sup>
              </h2>
              <p>
                Global wireless connectivity for education and research
                communities
              </p>
            </div>
            <div className="banner-img-con d-flex justify-content-right">
              <figure className="mb-0">
                <img
                  src="/images/about-banner-img.png"
                  alt="about-banner-img"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* BANNER SECTION END HERE */}

      <section className="hosting-features-con w-100 float-left padding-top padding-bottom">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <h2>Contact Us</h2>
            <p>
              Get in touch with our Eduroam support team for technical
              assistance and queries
            </p>
          </div>
          <div
            className="hosting-fatures-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="hosting-feature-box">
              <div className="help-desk">
                <div className="contact-header">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.026 2.026 0 0 0 .006.134c.006.082.016.193.035.33.039.27.114.642.26 1.08.294.88.87 2.019 1.992 3.141 1.122 1.122 2.261 1.698 3.14 1.992.439.146.81.22 1.082.26a4.43 4.43 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09 5.226 5.226 11.848 4.764 14.09 4.425.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508-.878-.878-1.302-1.739-1.508-2.36a4.59 4.59 0 0 1-.125-.447z"
                      fill="#0D0D0D"
                    />
                  </svg>
                  <h6>Eduroam Help Desk</h6>
                </div>
                <div className="business-hours mb-2">
                  <div className="business-hr">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.026 2.026 0 0 0 .006.134c.006.082.016.193.035.33.039.27.114.642.26 1.08.294.88.87 2.019 1.992 3.141 1.122 1.122 2.261 1.698 3.14 1.992.439.146.81.22 1.082.26a4.43 4.43 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09 5.226 5.226 11.848 4.764 14.09 4.425.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508-.878-.878-1.302-1.739-1.508-2.36a4.59 4.59 0 0 1-.125-.447z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="info-block">
                    <h6>
                      <a href="tel:01122170641">011-22170641</a>
                    </h6>
                  </div>
                </div>
                <div className="business-hours mb-2">
                  <div className="business-hr">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 192 192"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        stroke="#000000"
                        strokeLinejoin="round"
                        strokeWidth={12}
                        d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                      />
                    </svg>
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="info-block">
                    <h6>
                      <a href="mailto:eduroam@ernet.in">eduroam@ernet.in</a>
                    </h6>
                  </div>
                </div>
                <div className="business-hours">
                  <div className="business-hr">
                    <svg
                      fill="#000000"
                      width={20}
                      height={20}
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      className="jam jam-clock"
                    >
                      <path d="M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                    </svg>
                    <p className="mb-0">Business Hours</p>
                  </div>
                  <h6> Monday - Friday: 9:00 AM - 6:00 PM IST </h6>
                </div>
              </div>
            </div>

            <div className="hosting-feature-box">
              <div className="help-desk">
                <div className="contact-header">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="style=linear">
                      <g id="profile">
                        <path
                          id="vector"
                          d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="rec"
                          d="M5 18.5714C5 16.0467 7.0467 14 9.57143 14H14.4286C16.9533 14 19 16.0467 19 18.5714C19 20.465 17.465 22 15.5714 22H8.42857C6.53502 22 5 20.465 5 18.5714Z"
                          stroke="#000000"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="con-name">
                    <h6>Mr. Mohd Owais</h6>
                    <p className="mb-0">Additional Director (Technical)</p>
                  </div>
                </div>
                <div className="contact-header-2 mt-4">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.026 2.026 0 0 0 .006.134c.006.082.016.193.035.33.039.27.114.642.26 1.08.294.88.87 2.019 1.992 3.141 1.122 1.122 2.261 1.698 3.14 1.992.439.146.81.22 1.082.26a4.43 4.43 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09 5.226 5.226 11.848 4.764 14.09 4.425.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508-.878-.878-1.302-1.739-1.508-2.36a4.59 4.59 0 0 1-.125-.447z"
                      fill="#0D0D0D"
                    />
                  </svg>
                  <div className="info-block">
                    <p className="mb-0">Phone</p>
                    <a href="tel:+91-11-22170640">+91-11-22170640</a>
                  </div>
                </div>
                <div className="contact-header-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      stroke="#000000"
                      strokeLinejoin="round"
                      strokeWidth={12}
                      d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                    />
                  </svg>
                  <div className="info-block">
                    <p className="mb-0">Email</p>
                    <a href="mailto:owais@ernet.in">owais@ernet.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hosting-feature-box">
              <div className="help-desk">
                <div className="contact-header">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="style=linear">
                      <g id="profile">
                        <path
                          id="vector"
                          d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="rec"
                          d="M5 18.5714C5 16.0467 7.0467 14 9.57143 14H14.4286C16.9533 14 19 16.0467 19 18.5714C19 20.465 17.465 22 15.5714 22H8.42857C6.53502 22 5 20.465 5 18.5714Z"
                          stroke="#000000"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="con-name">
                    <h6>Mr. Srikanth Mallepakula</h6>
                    <p className="mb-0">Scientific Officer 'SB'</p>
                  </div>
                </div>
                <div className="contact-header-2 mt-4">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.026 2.026 0 0 0 .006.134c.006.082.016.193.035.33.039.27.114.642.26 1.08.294.88.87 2.019 1.992 3.141 1.122 1.122 2.261 1.698 3.14 1.992.439.146.81.22 1.082.26a4.43 4.43 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09 5.226 5.226 11.848 4.764 14.09 4.425.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508-.878-.878-1.302-1.739-1.508-2.36a4.59 4.59 0 0 1-.125-.447z"
                      fill="#0D0D0D"
                    />
                  </svg>
                  <div className="info-block">
                    <p className="mb-0">Phone</p>
                    <a href="tel:+91-11-22170642">+91-11-22170642</a>
                  </div>
                </div>
                <div className="contact-header-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      stroke="#000000"
                      strokeLinejoin="round"
                      strokeWidth={12}
                      d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                    />
                  </svg>
                  <div className="info-block">
                    <p className="mb-0">Email</p>
                    <a href="mailto:srikanth@ernet.in">srikanth@ernet.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hosting-features-con w-100 float-left padding-bottom">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9">
              <div className="mb-5 text-left wow fadeInUp">
                <h2>Need Help?</h2>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-md-4">
                  <div className="hosting-feature-box">
                    <div className="help-s text-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.026 2.026 0 0 0 .006.134c.006.082.016.193.035.33.039.27.114.642.26 1.08.294.88.87 2.019 1.992 3.141 1.122 1.122 2.261 1.698 3.14 1.992.439.146.81.22 1.082.26a4.43 4.43 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09 5.226 5.226 11.848 4.764 14.09 4.425.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508-.878-.878-1.302-1.739-1.508-2.36a4.59 4.59 0 0 1-.125-.447z"
                          fill="#fff"
                        />
                      </svg>
                      <h6>Call Us</h6>
                      <p>
                        Get immediate assistance from our support team during
                        business hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hosting-feature-box h-100">
                    <div className="help-s text-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 192 192"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth={12}
                          d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                        />
                      </svg>
                      <h6>Email Support</h6>
                      <p>
                        Send us detailed queries and we'll respond within 24
                        hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hosting-feature-box">
                    <div className="help-s text-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                        />
                      </svg>
                      <h6>Online Resources</h6>
                      <p>
                        Check our documentation and FAQ section for quick
                        solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="hosting-feature-box"
                style={{ borderColor: "#090979" }}
              >
                <div className="help-s text-center">
                  <h6 className="mb-4">Our Address</h6>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"
                    />
                  </svg>
                  <p>
                    ERNET India, Block-I, A Wing, 5th Floor DMRC IT Park,
                    Shastri Park Delhi-110053
                  </p>
                  <h6>
                    <Link to="/contact">
                      View on Map <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
