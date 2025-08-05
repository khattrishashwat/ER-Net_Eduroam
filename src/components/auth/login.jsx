import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpClient from "../../HttpClient/HttpClients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userInfo = { email, password };
      const res = await httpClient.post("/auth/login", userInfo);
      const receivedToken = res.data?.data?.token;

      if (receivedToken) {
        localStorage.setItem("token", receivedToken);
        toast.success(res.data.message);
        navigate("/forget");
      } else {
        throw new Error("Token not found in response.");
      }
    } catch (error) {
      let errorMessage = "Login failed. Please try again.";

      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = "No response from server. Please try again.";
      }

      toast.error(errorMessage);
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForget = () => {
    navigate("/forget");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="main-wrapper auth-bg position-relative overflow-hidden">
      {/* Start Content */}
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="login-backgrounds login-covers bg-primary d-lg-flex align-items-center justify-content-center d-none flex-wrap position-relative h-100 z-0">
                <div className="authentication-card w-100">
                  <div className="authen-overlay-item w-100">
                    <div className="authen-head text-center">
                      <h1 className="text-white fs-32 fw-bold mb-2">
                        Welcome back to Eduroam
                      </h1>
                      <p className="text-light fw-normal text-light">
                        Lorem ipsum dolor sit amet" is a common placeholder text
                        used in the printing and publishing industries.
                      </p>
                    </div>
                    <div className="img-log">
                      <div className="testi-contain text-center">
                        <img
                          src="/images/about-banner-img.png"
                          width="100%"
                          alt="Login visual"
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
                    onSubmit={handleLogin}
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
                            <h5 className="mb-1 fs-20 fw-bold">Sign In</h5>
                            <p className="mb-4" style={{ fontSize: 14 }}>
                              Please enter below details to access the website
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
                                  onClick={togglePassword}
                                >
                                  <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="text-dark fs-14"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex align-items-center mb-3"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div className="rem-p">
                              <input
                                className="ux-checkbox-input"
                                type="checkbox"
                                id="remember-me"
                              />
                              <label htmlFor="remember-me">
                                Keep me signed in on this device
                              </label>
                            </div>
                            <div className="text-end forgot-p">
                              <button
                                type="button"
                                onClick={handleForget}
                                className="btn btn-link p-0"
                                style={{ color: "#090979" }}
                              >
                                Forgot Password?
                              </button>
                            </div>
                          </div>
                          <div className="primary-btn w-100 mt-3">
                            <button
                              type="submit"
                              className="w-100 btn btn-primary"
                              disabled={isLoading}
                            >
                              {isLoading ? "Signing In..." : "Sign In"}
                            </button>
                          </div>
                          <div className="loginwith text-center mt-3">
                            <p>or sign in with</p>
                            <div className="icon-social">
                              <svg
                                fill="#000000"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                              >
                                <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
                              </svg>
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.4741 11.909 14.7263 8 14.9836V9H10V8H8V6.5C8 5.67157 8.67157 5 9.5 5H10V4H9.5C8.11929 4 7 5.11929 7 6.5V8H5V9H7V14.9836C3.09098 14.7263 0 11.4741 0 7.5Z"
                                  fill="#000000"
                                />
                              </svg>
                              <svg
                                fill="#000000"
                                width={24}
                                height={24}
                                viewBox="-2 -2 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMinYMin"
                                className="jam jam-google"
                              >
                                <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-center mt-4">
                            Don't have an account?{" "}
                            <button
                              type="button"
                              onClick={handleSignup}
                              className="btn btn-link p-0"
                              style={{ color: "#090979" }}
                            >
                              Sign UP
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

export default Login;
