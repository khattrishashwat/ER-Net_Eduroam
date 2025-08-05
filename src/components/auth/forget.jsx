import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpClient from "../../HttpClient/HttpClients";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.warn("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warn("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await httpClient.post("/auth/forgot-password", {
        email,
      });
      const Token = response.data?.data?.token;

      if (response.data) {
        localStorage.setItem("token", Token);
        toast.success("OTP has been sent to your email.");
        navigate("/auth/verify", {
          state: {
            email,
            flowType: "forgot",
          },
        });
      } else {
        throw new Error(response.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to process your request"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-wrapper auth-bg position-relative overflow-hidden">
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="login-backgrounds login-covers bg-primary d-lg-flex align-items-center justify-content-center d-none flex-wrap py-4 position-relative h-100 z-0">
                <div className="authentication-card w-100">
                  <div className="authen-overlay-item w-100">
                    <div className="authen-head text-center">
                      <h1 className="text-white fs-32 fw-bold mb-2">
                        Welcome back to Eduroam
                      </h1>
                      <p className="text-light fw-normal">
                        Lorem ipsum dolor sit amet" is a common placeholder text
                        used in the printing and publishing industries.
                      </p>
                    </div>
                    <div className="img-log">
                      <div className="testi-contain text-center">
                        <img
                          src="/images/about-banner-img.png"
                          width="100%"
                          alt="Authentication visual"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100">
                <div className="col-md-10 mx-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill w-100">
                      <div className="mx-auto mb-4 text-center login-page">
                        <a href="index.html">
                          <img
                            src="/images/new-img.png"
                            className="img-fluid"
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="card border-1 p-lg-3 shadow-md rounded-3 m-0">
                        <div className="card-body pb-1 pt-1">
                          <div className="text-center mb-3">
                            <h5 className="mb-1 fs-20 fw-bold">
                              Forgot Password
                            </h5>
                            <p className="mb-4" style={{ fontSize: 14 }}>
                              Enter your registered email id then we will send
                              OTP for reset password.
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email Id</label>
                            <div className="position-relative">
                              <div className="pass-group input-group position-relative border rounded">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="pass-input form-control ps-0 border-0"
                                  placeholder="Enter Email Id"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="primary-btn w-100 mt-5">
                            <button
                              type="submit"
                              className="w-100 btn btn-primary"
                              disabled={isLoading}
                            >
                              {isLoading ? "Sending Code..." : "Send Code"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
