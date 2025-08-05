import React from "react";

function privacy() {
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
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    privacy
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
            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. This policy explains how Eduroam
              India collects, uses, and protects your information.
            </p>
            <p className="last-date mt-4">
              <i className="fa-regular fa-calendar" /> Last updated: December
              2024
            </p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="service-catagery-list">
                <h5>Contents</h5>
                <ul className="service-ul mt-4">
                  <li>
                    <a href="">Information Collection</a>
                  </li>
                  <li>
                    <a href="">Data Sharing Policy</a>
                  </li>
                  <li>
                    <a href="">Usage Information</a>
                  </li>
                  <li>
                    <a href="">Security Measures</a>
                  </li>
                  <li>
                    <a href="">Policy Updates</a>
                  </li>
                  <li>
                    <a href="">Contact Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="about-us-inner-con d-block  wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="about-us-content-con">
                  <h6 className="mb-3 h5-flex">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.2C7.03 2.2 2 3.334 2 5.5v12.8c0 2.273 5.152 3.5 10 3.5s10-1.227 10-3.5V5.5c0-2.166-5.03-3.3-10-3.3zm0 18.6c-5.576 0-9-1.456-9-2.5v-6.282c1.708 1.173 5.366 1.782 9 1.782s7.292-.61 9-1.782V18.3c0 1.044-3.424 2.5-9 2.5zm0-8c-5.494 0-9-1.363-9-2.3V7.018C4.708 8.191 8.366 8.8 12 8.8s7.292-.61 9-1.782V10.5c0 .938-3.506 2.3-9 2.3zm0-5c-5.494 0-9-1.363-9-2.3s3.506-2.3 9-2.3 9 1.362 9 2.3-3.506 2.3-9 2.3z" />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                    Information Collection
                  </h6>
                  <p className="mb-3">
                    Eduroam Website does not automatically capture any specific
                    personal information from you, (like name, phone number or
                    e-mail address), that allows us to identify you
                    individually. If the Eduroam Website requests you to provide
                    personal information, you will be informed for the
                    particular purposes for which the information is gathered
                    and adequate security measures will be taken to protect your
                    personal information.
                  </p>
                  <h6 className="mb-3 h5-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-check w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="m16 11 2 2 4-4" />
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                    </svg>
                    Data Sharing Policy
                  </h6>
                  <p className="mb-3">
                    We do not sell or share any personally identifiable
                    information volunteered on the Eduroam Website to any third
                    party (public/private). Any information provided to this
                    website will be protected from loss, misuse, unauthorized
                    access or disclosure, alteration, or destruction.
                  </p>
                  <h6 className="mb-3 h5-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    Usage Information
                  </h6>
                  <p className="mb-3">
                    We gather certain information about the User, such as
                    Internet protocol (IP) addresses, domain name, browser type,
                    operating system, the date and time of the visit and the
                    pages visited. We make no attempt to link these addresses
                    with the identity of individuals visiting our site unless an
                    attempt to damage the site has been detected.
                  </p>
                  <h6 className="mb-3 h5-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lock w-6 h-6"
                      aria-hidden="true"
                    >
                      <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Security Measures
                  </h6>
                  <p className="mb-3">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. These measures include:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-1">
                          Data Encryption
                        </h4>
                        <p className="text-sm text-green-700 mb-0">
                          All data transmission is secured using
                          industry-standard encryption protocols.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-1">
                          Access Control
                        </h4>
                        <p className="text-sm text-blue-700 mb-0">
                          Strict access controls ensure only authorized
                          personnel can access user data.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-1">
                          Regular Monitoring
                        </h4>
                        <p className="text-sm text-blue-700 mb-0">
                          We continuously monitor our systems for potential
                          security threats.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-1">
                          Data Backup
                        </h4>
                        <p className="text-sm text-green-700 mb-0">
                          Regular secure backups ensure data integrity and
                          availability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-3 mt-4 h5-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe w-6 h-6"
                      aria-hidden="true"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    Policy Updates
                  </h6>
                  <p className="mb-3">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify users of any
                    material changes by posting the updated policy on our
                    website with a new "Last Updated" date.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-6">
                    <div className="d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-info w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <div>
                        <p className="text-sm text-yellow-700 mb-0">
                          <strong>Important:</strong> We encourage you to review
                          this Privacy Policy periodically to stay informed
                          about how we are protecting your information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="builder-main-con-2">
                <div
                  id="contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white"
                >
                  <div className="d-flex align-items-center mb-2">
                    <div className="w-12 h-12 bg-blue-800 bg-opacity-20 rounded-full   mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shield w-6 h-6"
                        aria-hidden="true"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Questions About Privacy?
                    </h3>
                  </div>
                  <div className="prose prose-lg text-white leading-relaxed">
                    <p>
                      If you have any questions about this Privacy Policy or our
                      data practices, please don't hesitate to contact us:
                    </p>
                    <div className="row mt-6">
                      <div className="col-md-6">
                        <div className="email-phone p-3 rounded-lg">
                          <h6 className="font-semibold mb-1 text-white">
                            Email
                          </h6>
                          <p className="text-sm mb-0">eduroam@ernet.in</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="email-phone p-3 rounded-lg">
                          <h6 className="font-semibold mb-1 text-white">
                            Phone
                          </h6>
                          <p className="text-sm mb-0">011-22170641</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default privacy;
