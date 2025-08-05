import React from "react";
import { Link } from "react-router-dom";
function about() {
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
                    About
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
            <h2>Seamless Global Connectivity</h2>
            <p>
              eduroam is a revolutionary global service that enables students,
              researchers, and staff from participating institutions to obtain
              Internet connectivity across campus and when visiting other
              participating institutions by simply opening their laptop or
              activating their smartphone or other portable device through WiFi.
            </p>
          </div>
          <div
            className="hosting-fatures-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="hosting-feature-box">
              <figure>
                <img src="/images/global.gif" alt="hosting-feature-img1" />
              </figure>
              <div className="hosting-features-content-con">
                <h6>Global Access</h6>
                <p>
                  Access Internet not only via your institution's wireless
                  network, but also when visiting other participating
                  universities, colleges, research centres, and libraries
                  worldwide.
                </p>
              </div>
            </div>
            <div className="hosting-feature-box">
              <figure>
                <img
                  src="/images/server-security.gif"
                  alt="hosting-feature-img2"
                />
              </figure>
              <div className="hosting-features-content-con">
                <h6>Secure Authentication</h6>
                <p>
                  Get authenticated and connected to visiting institutions'
                  networks using your home institution ID and password with
                  robust RADIUS-based security.
                </p>
              </div>
            </div>
            <div className="hosting-feature-box">
              <figure>
                <img src="/images/responsive.gif" alt="hosting-feature-img3" />
              </figure>
              <div className="hosting-features-content-con">
                <h6>Multi-Device Support</h6>
                <p>
                  Seamlessly connect laptops, smartphones, tablets, and other
                  portable devices with automatic configuration and hassle-free
                  access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICE SECTION START HERE */}
      <section className="service-main-con w-100 float-left padding-top">
        <div className="container">
          <div
            className="service-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="service-img-con">
              <figure className="service-chat-img">
                <img src="/images/wifi.gif" alt="chat-img" />
              </figure>
              <figure className="service-chat-img1">
                <img src="/images/global.gif" alt="chat-img" />
              </figure>
              <figure className="mb-0">
                <img
                  src="/images/service-main-img.png"
                  alt="service-main-img"
                />
              </figure>
            </div>
            <div className="service-content-con">
              <h2>How eduroam Benefits You</h2>
              {/* <p>Nam libero tempore, cum soluta nobis eligendi oetio cumrue debitis molestiae.</p> */}
              <ul className="list-unstyled">
                <li>
                  <div className="service-number">01</div>
                  <div className="service-detail">
                    <span className="d-block">Free Global Access</span>
                    <p>
                      Use your home institution credentials to access free
                      internet at thousands of participating institutions
                      worldwide.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="service-number">02</div>
                  <div className="service-detail">
                    <span className="d-block">Simple Setup</span>
                    <p>
                      One-time configuration on your device provides automatic
                      connectivity at all eduroam-enabled locations.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="service-number">03</div>
                  <div className="service-detail">
                    <span className="d-block">Enhanced Security</span>
                    <p>
                      Enterprise-grade security with encrypted connections and
                      authentication through your home institution's systems.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICE SECTION END HERE */}
      <section className="hosting-features-con w-100  float-left  padding-top pb-5">
        <div className="container">
          <div className="generic-title text-center wow fadeInUp">
            <h2>Join the eduroam Initiative</h2>
          </div>
          <div className="service-inner-con-3">
            <div className="service-content-con-3">
              <h3>Infrastructure Requirements</h3>
              {/* <p>Nam libero tempore, cum soluta nobis eligendi oetio cumrue debitis molestiae.</p> */}
              <ul className="list-unstyled mt-4">
                <li>
                  <div className="service-detail">
                    <span className="d-block">User Database Server</span>
                    <p>
                      Secure storage for user IDs and passwords with proper
                      access controls
                    </p>
                  </div>
                </li>
                <li>
                  <div className="service-detail">
                    <span className="d-block">RADIUS Server</span>
                    <p>
                      Authentication and logging infrastructure for secure user
                      verification
                    </p>
                  </div>
                </li>
                <li>
                  <div className="service-detail">
                    <span className="d-block">Wireless LAN Configuration</span>
                    <p>
                      Additional SSID "eduroam" configured on existing wireless
                      infrastructure
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="service-content-con-3 ">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Cost-Effective Implementation
                </h3>
                <div className="bg-gradient-to-br-1 mt-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        $
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Almost Negligible Costs
                    </h4>
                    <p className="text-gray-600 mb-6">
                      If you have existing WiFi infrastructure in place or plan
                      to deploy one, eduroam services can ride on the same
                      infrastructure with minimal additional investment.
                    </p>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-500">
                        Perfect for institutions looking to enhance their
                        connectivity offerings while joining a global education
                        network.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-bottom float-left w-100">
        <div className="container">
          <div className="inner-footer-1">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Ready to Join eduroam?
              </h3>
              <p className="text-blue-100 mb-6 max-w-md text-white">
                Connect your institution to the global education network and
                provide seamless connectivity for your community.
              </p>
            </div>
            <a href="#">
              <button className="btn-white">Get Started Today</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
