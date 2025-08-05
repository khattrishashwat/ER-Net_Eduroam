import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import httpClient from "../../HttpClient/HttpClients";

function OtpVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [flowType, setFlowType] = useState("verify");
  const [email, setEmail] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (location.state?.flowType) {
      setFlowType(location.state.flowType);
    }
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  // Handle countdown for resend OTP
  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
      setCountdown(30);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    if (!fullOtp) {
      toast.error("Please enter the OTP");
      return;
    }

    if (fullOtp.length !== 6 || !/^\d+$/.test(fullOtp)) {
      toast.error("OTP must be a 6-digit number");
      return;
    }

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token && flowType === "forgot") {
        throw new Error(
          "Session expired. Please restart the password reset process."
        );
      }

      const response = await httpClient.post(`/auth/verify-otp`, {
        otp: Number(fullOtp),
        type: flowType,
        ...(flowType === "forgot" && { email }),
      });

      if (!response.data?.success) {
        throw new Error(response.data?.message || "OTP verification failed");
      }

      const responseData = response.data.data;
      toast.success("OTP verified successfully!");

      if (flowType === "forgot") {
        localStorage.setItem("reset-token", responseData.token);
        navigate("/reset", {
          state: {
            token: responseData.token,
            email,
          },
        });
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
      }
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "OTP verification failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    setResendDisabled(true);

    try {
      const response = await httpClient.post(`/auth/resend-otp`, { email });
      toast.success(response.data?.message || "OTP resent successfully");
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to resend OTP. Please try again."
      );
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
                        Lorem ipsum dolor sit amet is a common placeholder text
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
                            <h5 className="mb-1 fs-20 fw-bold">Enter OTP</h5>
                            <p className="mb-4" style={{ fontSize: 14 }}>
                              We have just sent you 6 digit code via your email
                              <br />
                              {email || "your registered email"}
                            </p>
                          </div>
                          <div className="mb-3">
                            <div className="position-relative">
                              <div className="otpes-flex pd-1 justify-content-center">
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                  <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    maxLength="1"
                                    value={otp[index]}
                                    onChange={(e) =>
                                      handleOtpChange(index, e.target.value)
                                    }
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="otp-boxes-1 pass-input form-control text-center mx-1"
                                    style={{ width: "40px", height: "50px" }}
                                    autoFocus={index === 0}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="primary-btn w-100 mt-5">
                            <button
                              type="submit"
                              className="w-100 btn btn-primary"
                              disabled={isLoading}
                            >
                              {isLoading ? "Verifying..." : "Continue"}
                            </button>
                          </div>
                          <p className="text-center mt-4">
                            Didn't receive code?{" "}
                            <button
                              type="button"
                              onClick={handleResend}
                              disabled={resendDisabled}
                              className="btn btn-link p-0"
                              style={{ color: "#090979" }}
                            >
                              {resendDisabled
                                ? `Resend in ${countdown}s`
                                : "Resend Code"}
                            </button>
                          </p>
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

export default OtpVerification;
