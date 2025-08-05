import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import httpClient from "../../HttpClient/HttpClients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.warning("Please enter and confirm your new password");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const token =
        localStorage.getItem("reset-token") || location.state?.token;

      if (!token) {
        throw new Error(
          "Invalid reset token. Please try the reset process again."
        );
      }

      const response = await httpClient.post(`/auth/reset-password`, {
        new_password: password,
        token: token,
      });

      if (response.data?.success) {
        localStorage.removeItem("reset-token");
        toast.success("Password updated successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        throw new Error(response.data?.message || "Password update failed");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to reset password. Please try again.";
      toast.error(errorMessage);
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
                        <a href="/">
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
                              Create new password
                            </h5>
                            <p className="mb-4" style={{ fontSize: 14 }}>
                              Create a new and unique password to regain access.
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="position-relative">
                              <div className="pass-group input-group position-relative border rounded">
                                <input
                                  type={showPassword ? "text" : "password"}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  className="pass-input form-control ps-0 border-0"
                                  placeholder="Enter Password"
                                  required
                                />
                                <span
                                  className="input-group-text bg-white border-0 cursor-pointer"
                                  onClick={togglePasswordVisibility}
                                >
                                  <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="text-dark fs-14"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Confirm Password
                            </label>
                            <div className="position-relative">
                              <div className="pass-group input-group position-relative border rounded">
                                <input
                                  type={
                                    showConfirmPassword ? "text" : "password"
                                  }
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                  className="pass-input form-control ps-0 border-0"
                                  placeholder="Confirm Password"
                                  required
                                />
                                <span
                                  className="input-group-text bg-white border-0 cursor-pointer"
                                  onClick={toggleConfirmPasswordVisibility}
                                >
                                  <FontAwesomeIcon
                                    icon={
                                      showConfirmPassword ? faEyeSlash : faEye
                                    }
                                    className="text-dark fs-14"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="primary-btn w-100 mt-5">
                            <button
                              type="submit"
                              className="w-100 btn btn-primary"
                              disabled={isLoading}
                            >
                              {isLoading ? "Updating..." : "Continue"}
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

export default ResetPassword;
