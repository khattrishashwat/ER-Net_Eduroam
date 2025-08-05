import React, { useEffect, useState } from "react";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 20% of the page height
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowButton(scrollPercentage > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        className="footer-main-con wed-hom-footer w-100 float-left"
        id="page-end"
      >
        <div className="container">
          <div className="footer-inner-con wed-foot-link">
            <div className="footer-box">
              <h6>
                Eduroam India <br />
                Digital Education
              </h6>
              <p>
                Secure wireless network access across educational institutions
                nationwide. Part of India's Digital Education Initiative.
              </p>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="mailto:eduroam@ernet.in">eduroam@ernet.in</a>
                </li>
                <li>
                  <a href="callto:011-22170641">011-22170641</a>
                </li>
                <li>
                  <a href="#!">
                    Ministry of Electronics &amp; Information Technology,
                    Government of India
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Quick Links</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!"> About eduroam</a>
                </li>
                <li>
                  <a href="#!">Participating Institutions</a>
                </li>
                <li>
                  <a href="#!">Configuration Guide</a>
                </li>
                <li>
                  <a href="#!">Support Center</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Resources</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Download Eduroam Installation Manual</a>
                </li>
                <li>
                  <a href="#!">Sample Manual (Text)</a>
                </li>
                <li>
                  <a href="#!">Configuration Guide</a>
                </li>
                <li>
                  <a href="#!">Technical Documentation</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Legal &amp; Connect</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms of Service</a>
                </li>
                <li>
                  <a href="#!">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row wed-foot-link-1">
            <div className="col-md-5 foot-tc-mar-t-o ">
              <div className="d-flex align-items-center gap-4">
                <img src="/images/eduroam-logo-White-cropped-v2.png" />
                <div>
                  <h4>Headquarters</h4>
                  <p className="mb-0">
                    5th Floor, Block-I, A Wing, DMRC IT Park, Shastri Park, New
                    Delhi-110053
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Connect with us</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 foot-tc-mar-t-o text-right ">
              <h4>Website Last Updated on:</h4>
              <p className="mb-0">
                {" "}
                <span className="text-white">23-May-2025 11:16 am </span>
              </p>
              <h4 className="pb-0">
                Visitors: <span className="text-white">31048414</span>
              </h4>
              <ul className="web-check-cert">
                <li>
                  <span className="green" /> Network Online
                </li>
                <li>
                  <span className="white" /> 99.9% Uptime{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright-con">
          <div className="container">
            <div className="footer-copyright-inner-con">
              <div className="copyright-logo-con justify-content-center">
                <p>Copyright @2025 Eduroam, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        id="button"
        className={showButton ? "show" : ""}
        onClick={scrollToTop}
      ></a>
    </>
  );
}

export default Footer;
