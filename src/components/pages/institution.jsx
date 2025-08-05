import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodataIndiaLow from "@amcharts/amcharts4-geodata/indiaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Institution() {
  useEffect(() => {
    // Apply amCharts theme
    am4core.useTheme(am4themes_animated);

    // Create map instance
    let map = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    map.geodata = am4geodataIndiaLow;

    // Set projection
    map.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

    // Set map properties
    map.maxZoomLevel = 1;
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.slider.height = 100;
    map.zoomControl.minusButton.background.fill = am4core.color("#090979");
    map.zoomControl.plusButton.background.fill = am4core.color("#090979");

    // Make map load polygon data
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#E5E5E5");
    polygonTemplate.stroke = am4core.color("#B7B7B7");
    polygonTemplate.strokeWidth = 0.5;

    // Create active state
    let activeState = polygonTemplate.states.create("active");
    activeState.properties.fill = am4core.color("#090979");

    // Array of colors to cycle through
    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#F333FF",
      "#FF3333",
      "#33FFF3",
      "#FFBD33",
    ];
    let colorIndex = 0;

    // Set up click events
    polygonTemplate.events.on("hit", function (ev) {
      const mapObject = ev.target;
      const stateName = mapObject.dataItem.dataContext.name;
      console.log("Clicked on:", stateName);

      // Show the popup
      document.getElementById("popup_grant_map_shi").style.display = "block";

      // Reset all polygons to default color
      polygonSeries.mapPolygons.each(function (polygon) {
        polygon.fill = am4core.color("#E5E5E5");
      });

      // Set clicked polygon to selected color
      mapObject.fill = am4core.color(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;

      // Adjust layout
      const mapDiv = document.getElementById("mapDiv");
      mapDiv.classList.remove("col-lg-12");
      mapDiv.classList.add("col-lg-6");

      // Here you would typically fetch data for the selected state
      // fetchInstituteData(stateName);
    });

    // Clean up on unmount
    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, []);

  return (
    <>
      {/* BANNER SECTION START */}
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
                    Indian Presence
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
      {/* BANNER SECTION END */}

      {/* MAP SECTION START */}
      <section className="hosting-features-con w-100 float-left padding-top padding-bottom">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <h2>Indian Educational Institutes Map</h2>
            <p>
              Interactive map showing 291 educational institutes across India
            </p>
            <div className="position-relative mt-4 search-institutes-1">
              <input
                type="text"
                placeholder="Search institutes, cities, or states..."
                className="search-institutes"
              />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>

          {/* STATS SECTION */}
          <section className="padding-bottom">
            <div className="counter-inner">
              <div className="container">
                <div className="row g-0">
                  <div className="col-6 col-lg-3">
                    <div className="py-3 text-center one-div">
                      <div>
                        <img src="/images/university.gif" alt="Universities" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="py-2 count">
                          <span id="count1">291</span>
                        </div>
                      </div>
                      <div>Total Institutes</div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="py-3 text-center one-div">
                      <div>
                        <img src="/images/india-map.gif" alt="States" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="py-2 count">
                          <span id="count2">27</span>
                        </div>
                      </div>
                      <div>States Covered</div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="py-3 text-center one-div">
                      <div>
                        <img src="/images/india.gif" alt="Max per state" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="py-2 count">
                          <span id="count3">84</span>
                        </div>
                      </div>
                      <div>Max per State</div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="py-3 text-center one-div">
                      <div>
                        <img src="/images/network.gif" alt="Filtered results" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="py-2 count">
                          <span id="count4">291</span>
                        </div>
                      </div>
                      <div>Filtered Results</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MAP AND STATE LIST SECTION */}
          <section className="grandreciep_section">
            <div className="contfld_grandreciep">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div id="mapDiv" className="col-lg-12">
                    <div className="recipent_mapdiv svgnewmapforarchive">
                      <div
                        id="chartdiv"
                        className="sidebar-hide-btn"
                        style={{ width: "100%", height: "500px" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5">
                  <div className="state-list">
                    <h6 className="mb-2">State-wise Distribution</h6>

                    {/* STATE ACCORDION */}
                    <section className="faq-main-con w-100">
                      <div
                        className="faq-inner-con faq-inner-con-2 wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.3s"
                      >
                        <div id="accordion">
                          {/* NORTHERN STATES */}
                          <div className="card">
                            <div className="card-header" id="headingOne">
                              <h3 className="mb-0">
                                <button
                                  className="btn btn-link collapsed faq-btn"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                >
                                  Northern States
                                  <i className="arrow-icon fas fa-chevron-down float-right ml-2" />
                                </button>
                              </h3>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                <ul className="state-list-ul mt-2 mb-0">
                                  <li>
                                    <span>Jammu and Kashmir</span>{" "}
                                    <span className="count-s">2</span>
                                  </li>
                                  <li>
                                    <span>Himachal Pradesh</span>{" "}
                                    <span className="count-s">5</span>
                                  </li>
                                  <li>
                                    <span>Punjab</span>{" "}
                                    <span className="count-s">8</span>
                                  </li>
                                  <li>
                                    <span>Uttarakhand</span>{" "}
                                    <span className="count-s">5</span>
                                  </li>
                                  <li>
                                    <span>Haryana</span>{" "}
                                    <span className="count-s">15</span>
                                  </li>
                                  <li>
                                    <span>Delhi</span>{" "}
                                    <span className="count-s">84</span>
                                  </li>
                                  <li>
                                    <span>Uttar Pradesh</span>{" "}
                                    <span className="count-s">16</span>
                                  </li>
                                  <li className="border-0">
                                    <span>Chandigarh</span>{" "}
                                    <span className="count-s">8</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* SOUTHERN STATES */}
                          <div className="card">
                            <div className="card-header" id="headingTwo">
                              <h3 className="mb-0">
                                <button
                                  className="btn btn-link collapsed faq-btn"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                >
                                  Southern States
                                  <i className="arrow-icon fas fa-chevron-down float-right ml-2" />
                                </button>
                              </h3>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                <ul className="state-list-ul mt-2 mb-0">
                                  <li>
                                    <span>Tamil Nadu</span>{" "}
                                    <span className="count-s">35</span>
                                  </li>
                                  <li>
                                    <span>Kerala</span>{" "}
                                    <span className="count-s">5</span>
                                  </li>
                                  <li>
                                    <span>Andhra Pradesh</span>{" "}
                                    <span className="count-s">5</span>
                                  </li>
                                  <li>
                                    <span>Karnataka</span>{" "}
                                    <span className="count-s">19</span>
                                  </li>
                                  <li className="border-0">
                                    <span>Telangana</span>{" "}
                                    <span className="count-s">8</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* EASTERN STATES */}
                          <div className="card">
                            <div className="card-header" id="headingThree">
                              <h3 className="mb-0">
                                <button
                                  className="btn btn-link collapsed faq-btn"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                >
                                  Eastern States
                                  <i className="arrow-icon fas fa-chevron-down float-right ml-2" />
                                </button>
                              </h3>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                <ul className="state-list-ul mt-2 mb-0">
                                  <li>
                                    <span>Assam</span>{" "}
                                    <span className="count-s">5</span>
                                  </li>
                                  <li>
                                    <span>Tripura</span>{" "}
                                    <span className="count-s">1</span>
                                  </li>
                                  <li>
                                    <span>Manipur</span>{" "}
                                    <span className="count-s">4</span>
                                  </li>
                                  <li>
                                    <span>Meghalaya</span>{" "}
                                    <span className="count-s">1</span>
                                  </li>
                                  <li>
                                    <span>West Bengal</span>{" "}
                                    <span className="count-s">12</span>
                                  </li>
                                  <li>
                                    <span>Odisha</span>{" "}
                                    <span className="count-s">7</span>
                                  </li>
                                  <li>
                                    <span>Bihar</span>{" "}
                                    <span className="count-s">5</span>
                                  </li>
                                  <li>
                                    <span>Sikkim</span>{" "}
                                    <span className="count-s">1</span>
                                  </li>
                                  <li>
                                    <span>Chhattisgarh</span>{" "}
                                    <span className="count-s">4</span>
                                  </li>
                                  <li className="border-0">
                                    <span>Jharkhand</span>{" "}
                                    <span className="count-s">6</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* WESTERN STATES */}
                          <div className="card">
                            <div className="card-header" id="headingfour">
                              <h3 className="mb-0">
                                <button
                                  className="btn btn-link collapsed faq-btn"
                                  data-toggle="collapse"
                                  data-target="#collapsefour"
                                >
                                  Western States
                                  <i className="arrow-icon fas fa-chevron-down float-right ml-2" />
                                </button>
                              </h3>
                            </div>
                            <div
                              id="collapsefour"
                              className="collapse"
                              aria-labelledby="headingfour"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                <ul className="state-list-ul mt-2 mb-0">
                                  <li>
                                    <span>Gujarat</span>{" "}
                                    <span className="count-s">7</span>
                                  </li>
                                  <li>
                                    <span>Rajasthan</span>{" "}
                                    <span className="count-s">8</span>
                                  </li>
                                  <li>
                                    <span>Madhya Pradesh</span>{" "}
                                    <span className="count-s">8</span>
                                  </li>
                                  <li>
                                    <span>Goa</span>{" "}
                                    <span className="count-s">1</span>
                                  </li>
                                  <li className="border-0">
                                    <span>Maharashtra</span>{" "}
                                    <span className="count-s">13</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* INSTITUTE DETAILS POPUP */}
                  <div id="popup_grant_map_shi" style={{ display: "none" }}>
                    <div
                      className="popup-close"
                      onClick={() => {
                        document.getElementById(
                          "popup_grant_map_shi"
                        ).style.display = "none";
                        const mapDiv = document.getElementById("mapDiv");
                        mapDiv.classList.remove("col-lg-6");
                        mapDiv.classList.add("col-lg-12");
                      }}
                    >
                      ×
                    </div>
                    <div className="hosting-feature-box state-list-name">
                      <div className="help-desk">
                        <div className="contact-header">
                          <div className="con-name">
                            <h6>Institute Details</h6>
                          </div>
                        </div>
                        <div className="contact-header-height">
                          <div>
                            <div className="contact-header-3">
                              <h6 className="mb-0">Name:</h6>
                              <p>
                                Guru Govind Singh Medical College and Hospital
                              </p>
                            </div>
                            <div className="contact-header-3">
                              <h6 className="mb-0">Location:</h6>
                              <p>Faridkot, Punjab</p>
                            </div>
                            <div className="contact-header-3">
                              <h6 className="mb-0">Coordinates:</h6>
                              <p className="mb-0">30.6712°N, 74.7553°E</p>
                            </div>
                          </div>
                          <hr />
                          <div className="mt-3">
                            <div className="contact-header-3">
                              <h6 className="mb-0">Name:</h6>
                              <p>
                                Guru Govind Singh Medical College and Hospital
                              </p>
                            </div>
                            <div className="contact-header-3">
                              <h6 className="mb-0">Location:</h6>
                              <p>Faridkot, Punjab</p>
                            </div>
                            <div className="contact-header-3">
                              <h6 className="mb-0">Coordinates:</h6>
                              <p className="mb-0">30.6712°N, 74.7553°E</p>
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
        </div>
      </section>
      {/* MAP SECTION END */}
    </>
  );
}

export default Institution;
