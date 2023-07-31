import React from "react";
import "../App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import nav_search_icon from "../Assets/nav_search_icon.svg";
import nav_dot_icon from "../Assets/nav_dot_icon.svg";
import nav_3dot_icon from "../Assets/nav_3dot_icon.svg";
import nav_bell_icon from "../Assets/nav_bell_icon.svg";
import nav_msg_icon from "../Assets/nav_msg_icon.svg";
import nav_msngr_icon from "../Assets/nav_msngr_icon.svg";
import nav_stat_icon from "../Assets/nav_stat_icon.svg";
import sidebar_home_icon from "../Assets/sidebar_home_icon.svg";
import sidebar_number_icon1 from "../Assets/sidebar_number_icon1.svg";
import sidebar_arrow_icon from "../Assets/sidebar_arrow_icon.svg";
import sidebar_arrow_icon2 from "../Assets/sidebar_arrow_icon2.svg";
import sidebar_chat_icon from "../Assets/sidebar_chat_icon.svg";
import sidebar_number_icon2 from "../Assets/sidebar_number_icon2.svg";
import sidebar_task_icon from "../Assets/sidebar_task_icon.svg";
import sidebar_calendar_icon from "../Assets/sidebar_calendar_icon.svg";
import sidebar_number_icon3 from "../Assets/sidebar_number_icon3.svg";
import sidebar_msg_icon from "../Assets/sidebar_msg_icon.svg";
import sidebar_stat_icon from "../Assets/sidebar_stat_icon.svg";
import sidebar_colored_arrow_icon from "../Assets/sidebar_colored_arrow_icon.svg";
import sidebar_box_number1 from "../Assets/sidebar_box_number1.svg";
import sidebar_box_number2 from "../Assets/sidebar_box_number2.svg";
import sidebar_box_number3 from "../Assets/sidebar_box_number3.svg";
import sidebar_box_number4 from "../Assets/sidebar_box_number4.svg";
import sidebar_right_arrow_icon from "../Assets/sidebar_right_arrow_icon.svg";
import sidebar_right_green_arrow_icon from "../Assets/sidebar_right_green_arrow_icon.svg";
import content_add_icon from "../Assets/content_add_icon.svg";
import content_leftarrow from "../Assets/content_leftarrow.svg";
import content_rightarrow from "../Assets/content_rightarrow.svg";
import search_icon from "../Assets/search_icon.svg";
import card_icon_number1 from "../Assets/card_icon_number1.svg";
import card_icon_number2 from "../Assets/card_icon_number2.svg";
import card_icon_number3 from "../Assets/card_icon_number3.svg";
import card_icon_number4 from "../Assets/card_icon_number4.svg";
import card_icon_number5 from "../Assets/card_icon_number5.svg";
import card_icon_number6 from "../Assets/card_icon_number6.svg";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card_tick_icon from "../Assets/card_tick_icon.svg";
import card_task_icon from "../Assets/card_task_icon.svg";
import card_msgr_icon from "../Assets/card_msgr_icon.svg";
import Table from "react-bootstrap/Table";
import arrowup_icon from "../Assets/arrowup_icon.svg";
import { useState } from "react";
import check_task_icon from "../Assets/check_task_icon.svg";
import desc_table_icon from "../Assets/desc_table_icon.svg";
import files_table_icon from "../Assets/files_table_icon.svg";
import yellow_curve from "../Assets/yellow_curve.svg";
import green_table_curve from "../Assets/green_table_curve.svg";
import blue_table_curve from "../Assets/blue_table_curve.svg";
import red_table_curve from "../Assets/red_table_curve.svg";
import purple_table_curve from "../Assets/purple_table_curve.svg";
import purple_dot from "../Assets/purple_dot.svg";
import user_icon from "../Assets/user_icon.svg";

function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  // Slider Setting
  const cardData = [
    {
      title: "Develop Chat Application",
      image: card_icon_number1,
    },
    {
      title: "Effective   Advertising",
      image: card_icon_number2,
    },
    {
      title: "Development and Testing",
      image: card_icon_number3,
    },
    {
      title: "Customer Approval",
      image: card_icon_number4,
    },
    {
      title: "Launch of the project",
      image: card_icon_number5,
    },
    {
      title: "Reconciliation and recei ...",
      image: card_icon_number6,
    },
  ];

  const slider_Settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          infinite: true,
          // autoplay: true,
        },
      },
    ],
  };

  function arrowUp() {
    {
      isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true);
    }
    console.log("setIsDropdownOpen value is:", isDropdownOpen);
  }

  return (
    <div className="">
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="my-2 left-margin nav_center_tab"
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="nav-main-icon "
        >
          <a href="#">
            <img src={nav_dot_icon} alt="Dot Icon" />
          </a>
          <p
            style={{ marginLeft: "10px", marginBottom: "0" }}
            className="constructor-nav"
          >
            Constructor
          </p>
        </div>

        <Nav className="mr-auto align-items-center  d-lg-none Nav_tab content_only_web mt-2">
          <Nav.Link href="#" className="nav-links content_sec_nav_color mx-5">
            Dashboard
          </Nav.Link>
          <Nav.Link href="#" className="nav-links ">
            Pages
          </Nav.Link>

          <Nav.Link href="#" className="mx-4">
            <img src={nav_3dot_icon} />
          </Nav.Link>
        </Nav>

        <img className="d-lg-none mx-3" src={user_icon} />
        <Navbar.Collapse id="navbar-nav" className="main-nav">
          <Nav className="mr-auto align-items-center">
            <Nav.Link href="#" className="nav-links">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#" className="nav-links">
              Pages
            </Nav.Link>
            <Nav.Link href="#" className="nav-links">
              Posts
            </Nav.Link>
            <Nav.Link href="#" className="nav-links">
              Files
            </Nav.Link>
            <Nav.Link href="#" className="nav-links">
              Users
            </Nav.Link>
            <Nav.Link href="#">
              <img src={nav_3dot_icon} />
            </Nav.Link>
          </Nav>
          <div class=" h-100">
            <div class="d-flex justify-content-center h-100">
              <div class="searchbar">
                <input
                  className="search_input"
                  type="text"
                  name=""
                  placeholder='Try searching "NewProducts"'
                />
                <a href="#">
                  <img src={nav_search_icon} />
                </a>
              </div>
            </div>
          </div>

          <div className="ml-lg-4 ">
            <Button variant="" className="mr-2 ">
              <a href="#">
                <img src={nav_bell_icon} alt="Bell Icon" />
              </a>
            </Button>

            <a href="#" className="mx-2">
              <img src={nav_msg_icon} />
            </a>

            <a href="#" className="mx-2">
              <img src={nav_msngr_icon} />
            </a>
            <a href="#" className="mx-2">
              <img src={nav_stat_icon} />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* ------------------ side bar ------------------  */}

      <div className="row">
        <div className="col-sm-3 d-none d-lg-block not_for_tab  ">
          <div className="left-margin my-5 ">
            <ul class="nav nav-pills flex-column mb-auto p-3">
              <li class="nav-item">
                <a
                  href="#"
                  className="nav-link  sidebar_firsttab "
                  aria-current="page"
                >
                  <img src={sidebar_home_icon} />
                  My projects
                  <span className="sidebar_arrow">
                    <img src={sidebar_number_icon1} />
                    <img src={sidebar_arrow_icon} />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ">
                  <img src={sidebar_chat_icon} />
                  Chats
                  <span className="sidebar_arrow">
                    <img src={sidebar_number_icon2} />
                    <img src={sidebar_arrow_icon2} />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ">
                  <img src={sidebar_task_icon} />
                  Tasks
                  <img className="sidebar_arrow" src={sidebar_arrow_icon2} />
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ">
                  <img src={sidebar_calendar_icon} />
                  Calendars
                  <span className="sidebar_arrow">
                    <img src={sidebar_number_icon3} />
                    <img src={sidebar_arrow_icon2} />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ">
                  <img src={sidebar_msg_icon} />
                  Messages
                  <img className="sidebar_arrow" src={sidebar_arrow_icon2} />
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ">
                  <img src={sidebar_stat_icon} />
                  Statistics
                  <img className="sidebar_arrow" src={sidebar_arrow_icon2} />
                </a>
              </li>
            </ul>
          </div>

          <div className="left-margin my-5 ">
            <ul class="nav nav-pills flex-column mb-auto p-3 m">
              <li className="p-2">
                <a className="nav-link">
                  Projects on Deadlines
                  <img className="sidebar_arrow" src={nav_3dot_icon} />
                </a>

                <a href="#" className="nav-link sidebar_orange py-3 mt-3">
                  Develop Chat Application
                  <img
                    className="sidebar_arrow"
                    src={sidebar_colored_arrow_icon}
                  />
                </a>
              </li>

              <div class="sidebar_container my-2">
                <div class="box">
                  <img className="" src={sidebar_box_number1} />
                  <br />
                </div>
                <div class="box">
                  <img src={sidebar_box_number2} />
                </div>
                <div class="box">
                  <img src={sidebar_box_number3} />
                </div>
                <div class="box">
                  <img src={sidebar_box_number4} />
                </div>
              </div>

              <li className="p-2 ">
                <a className="nav-link">
                  Recent Projects
                  <img className="sidebar_arrow" src={nav_3dot_icon} />
                </a>

                <a href="#" className="nav-link sidebar_greytab py-3 mt-3">
                  City Advertising Campaign
                  <img
                    className="sidebar_arrow"
                    src={sidebar_right_arrow_icon}
                  />
                </a>

                <a href="#" className="nav-link sidebar_greytab py-3 mt-3">
                  Web Application Dev
                  <img
                    className="sidebar_arrow"
                    src={sidebar_right_arrow_icon}
                  />
                </a>

                <a href="#" className="nav-link sidebar_greytab py-3 mt-3">
                  Twitter Application
                  <img
                    className="sidebar_arrow"
                    src={sidebar_right_arrow_icon}
                  />
                </a>

                <a
                  href="#"
                  className="nav-link sidebar_greytab sidebar_lasttab py-3 mt-3"
                >
                  Facebook Application
                  <img
                    className="sidebar_arrow "
                    src={sidebar_right_green_arrow_icon}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* horizontal line */}
        <div className="horizline d-block d-md-none"></div>

        {/* -------------------- Content --------------------  */}
        <div className="col-sm-9 my-5  d-md-none d-lg-block">
          <div
            className="btn-group main-content main_content_mobile "
            role="group"
          >
            <h3 className=" content-heading content_add_dash">
              Dashboard Projects
            </h3>
            <span className="content_grp d-none d-md-block">
              <button type="button" class="btn content_btn_grp ">
                Dashboard
              </button>
              <button type="button" class="btn content_btn_grp">
                All Projects
              </button>
              <button type="button" class="btn content_btn_grp">
                Schedule
              </button>
              <button type="button" class="btn content_btn_grp">
                Statistics
              </button>
              <button type="button" class="btn content_btn_grp">
                Activity
              </button>
              <button type="button" class="btn content_btn_grp">
                Members
              </button>
            </span>

            <div className="content_add ">
              <img src={content_add_icon} />
              <h3 className="content-project-head d-inline">Add New Project</h3>
            </div>
          </div>
          <span className="d-block d-md-none content_grp text-justify mx-3 mt-3">
            <button
              type="button"
              class="btn content_btn_grp content_sec_nav_color"
            >
              Dashboard
            </button>
            <button type="button" class="btn content_btn_grp">
              All Projects
            </button>
            <button type="button" class="btn content_btn_grp">
              Schedule
            </button>
            <button type="button" class="btn content_btn_grp">
              Statistics
            </button>
          </span>

          {/* content 2nd nav  */}
          <div
            className="btn-group main-content content_sec_nav align-items-center mt-4 content_only_web"
            role="group"
          >
            <img className="" src={content_leftarrow} />
            <span className="">
              <button type="button" class="btn content_btn_grp fw_900">
                Main
              </button>
              <button
                type="button"
                class="btn content_btn_grp fw_900 content_sec_nav_color"
              >
                Project Stages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Tasks
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Messages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Chat
              </button>
              <button type="button" className="btn content_btn_grp fw_900  ">
                Members
              </button>
              <button type="button" className="btn content_btn_grp fw_900  ">
                Customers
              </button>
              <button type="button" className="btn content_btn_grp fw_900  ">
                Files
              </button>
              <button type="button" className="btn content_btn_grp fw_900  ">
                Activity
              </button>
            </span>
            <div className="">
              <img className="" src={content_rightarrow} />
            </div>
          </div>

          {/* content 2nd nav Mobile  */}
          <div
            className="btn-group main-content content_sec_nav align-items-center mt-4  d-block d-md-none"
            role="group"
          >
            <span className="">
              <button type="button" class="btn content_btn_grp fw_900">
                Main
              </button>
              <button
                type="button"
                class="btn content_btn_grp fw_900 content_sec_nav_color"
              >
                Project Stages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Tasks
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Messages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Chat
              </button>
            </span>
          </div>

          {/* below 2nd nav */}

          <div
            className="btn-group main-content content_sec_nav align-items-center mt-1 content_below_secnav content_only_web"
            role="group"
          >
            <span className="content_grp search_task d-none d-md-block">
              <button
                type="button"
                class="btn content_btn_grp search_task_text py-1.5"
              >
                <img src={search_icon} />
                Search Task
              </button>
            </span>

            {/* for mobile */}
            <span className="content_grp d-none d-md-block">
              <button type="button" class="btn content_btn_grp ">
                List of Stages
              </button>
              <button
                type="button"
                className="btn content_btn_grp content_sec_nav_color common_content"
              >
                Stages Calendar
              </button>
            </span>

            <span className="content_grp search_task d-none d-md-block">
              <button
                type="button"
                class="btn content_btn_grp new_stage_btn py-1.5"
              >
                <img src={content_add_icon} />
                <h3 className="content-project-head d-inline new_stage_text">
                  Add New Stage
                </h3>
              </button>
            </span>
          </div>

          {/* below 2nd nav Mobile*/}
          <div
            className="btn-group main-content align-items-center mt-1 content_below_secnav d-md-none"
            role="group"
          >
            {/* for mobile */}
            <span className="content_grp no_bg search_task d-md-none d-block">
              <button
                type="button"
                class="btn content_btn_grp search_task_text py-1.5"
              >
                <img src={search_icon} />
              </button>
            </span>

            {/* for mobile */}
            <span className="content_grp  d-block d-md-none">
              <button
                type="button"
                class="btn content_btn_grp content_sec_nav_color"
              >
                List of Stages
              </button>
              <button
                type="button"
                className="btn content_btn_grp  common_content"
              >
                Stages Calendar
              </button>
            </span>

            {/* for mobile */}
            <span className="content_grp no_bg search_task d-md-none d-block">
              <button
                type="button"
                class="btn content_btn_grp new_stage_btn py-1.5"
              >
                <img src={content_add_icon} />
              </button>
            </span>
          </div>

          {/* ------------------- cards section -------------------  */}
          <div className="slider_cont mt-1">
            <Slider {...slider_Settings} className="mx-5 mt-5 mb-4">
              {cardData.map((card, index) => (
                <div key={index} className="col-lg-2 col-md-6 ">
                  <Card style={{ width: "auto" }} className="card_style">
                    <img className="card_number_icon mt-5" src={card.image} />
                    <Card.Body className="card_body">
                      <Card.Title className="overflow_hidden card_title mt-4 px-2">
                        {card.title}
                      </Card.Title>
                      <button className="card_btn ">
                        <img src={card_tick_icon} />
                        Show On
                      </button>
                      <div className="text-center">
                        <div className="card_line"></div>
                        <div className="card_footer ">
                          <div className="d-inline d-flex card_task card_task">
                            <img src={card_task_icon} />
                            <p className="card_footer_text"> 10 </p>
                          </div>
                          <div className="card_ver_line"></div>
                          <div className="d-inline d-flex card_msgr">
                            <img src={card_msgr_icon} />
                            <p className="card_footer_text"> 6 </p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>

          {/* ---------------------- Table ---------------------  */}
          <div className="slider_cont ">
            <Table bordered hover className="table_width rounded mx-5 mb-5">
              <thead>
                <tr className="table_row_height">
                  <th></th>
                  <th colSpan={4} className="table_head">
                    November
                  </th>
                  <th colSpan={4} className="table_head">
                    December 2032
                  </th>
                  <th colSpan={4} className="table_head">
                    January 2033
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table_ver_align">
                  <td className="table_row_height table_stage px-3">Stages</td>
                  <td className="table_subhead text-center">1W</td>
                  <td className="table_subhead text-center">2W</td>
                  <td className="table_subhead text-center">3W</td>
                  <td className="table_subhead">4W</td>
                  <td className="table_subhead">1W</td>
                  <td className="table_subhead">2W</td>
                  <td className="table_subhead">3W</td>
                  <td className="table_subhead">4W</td>
                  <td className="table_subhead">1W</td>
                  <td className="table_subhead">2W</td>
                  <td className="table_subhead">3W</td>
                  <td className="table_subhead">4W</td>
                </tr>
                <tr className="table_row_height">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number1} className="mx-2" />
                    <p className="d-inline table_sidebar_para_four">
                      {" "}
                      Develop Chat App
                    </p>
                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>

                  <td colSpan={3}>
                    <div className="table_date_border ">
                      Start 01.11 – End 22.11
                    </div>
                    <img
                      className="yellow_table_curve d-none d-xl-block"
                      colSpan={2}
                      rowspan={2}
                      src={yellow_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr rowspan="4" className="Advertising_row table_row_height">
                  <td className="table_stage ">
                    <img src={card_icon_number2} className="mx-2" />
                    <p className="d-inline table_sidebar_para">
                      {" "}
                      Effective Advertising
                    </p>
                    {isDropdownOpen ? (
                      <img
                        className={`mx-2 arrowup_icon ${
                          isDropdownOpen ? "rotate-down" : ""
                        }`}
                        src={arrowup_icon}
                        onClick={arrowUp}
                      />
                    ) : (
                      <img
                        src={sidebar_arrow_icon2}
                        className="arrowdown_icon mx-2"
                        onClick={arrowUp}
                      />
                    )}
                    <br /> <br />
                    {isDropdownOpen ? (
                      <div
                        className={`mx-5 table_dropdown ${
                          isDropdownOpen ? "show" : ""
                        }`}
                      >
                        <td>
                          <img
                            src={check_task_icon}
                            className="d-inline mx-1"
                          />
                          <td className="d-inline table_subhead">
                            Check Tasks 10
                          </td>
                        </td>
                        <br />
                        <td>
                          <img src={card_msgr_icon} className="d-inline mx-1" />
                          <td className="d-inline table_subhead">Members 6</td>
                        </td>
                        <br />
                        <td>
                          <img
                            src={desc_table_icon}
                            className="d-inline mx-1"
                          />
                          <td className="d-inline table_subhead">
                            Description
                          </td>
                        </td>
                        <br />
                        <td>
                          <img
                            src={files_table_icon}
                            className="d-inline mx-1"
                          />
                          <td className="d-inline table_subhead">Files 10</td>
                        </td>
                      </div>
                    ) : null}
                  </td>
                  <td></td>
                  <td></td>
                  <td colSpan={4}>
                    <div className=" bar_EF table_data_border_EF ">
                      Start 01.11 – End 22.11
                    </div>
                    <img
                      className="green_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={green_table_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number3} className="mx-2" />
                    <p className="d-inline table_sidebar_para table_sidebar_para_two">
                      {" "}
                      Development and Testing
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={4}>
                    <div className=" table_date_border table_data_border_DandE mx-2">
                      Start 01.11 – End 22.11
                    </div>
                    <img
                      className="purple_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={purple_table_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number4} className="mx-2" />
                    <p className="d-inline table_sidebar_para">
                      {" "}
                      Customer Approval
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={3}>
                    <div className=" table_date_border table_data_border_Cus_App">
                      23.11 – 12.12{" "}
                    </div>
                    <img
                      className="blue_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={blue_table_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number5} className="mx-2" />
                    <p className="d-inline table_sidebar_para_three ">
                      {" "}
                      Launch of the Project
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td colSpan={3}>
                    <div className=" table_date_border  table_data_border_laucnh ">
                      23.11 – 12.12{" "}
                    </div>
                    <img
                      className="red_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={red_table_curve}
                    />
                  </td>

                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number6} className="mx-2" />
                    <p className="d-inline table_sidebar_para table_sidebar_para_two">
                      {" "}
                      Reconciliation and Recei...
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td colSpan={3}>
                    <div className=" table_date_border table_data_border_recon  ">
                      23.11 – 12.12{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="col-sm my-4 not_for_tab d-sm-none d-md-block d-lg-none">
          <div className="horizline "></div>
          <div
            className="btn-group main-content main_content_mobile px-5"
            role="group"
          >
            <h3 className=" content-heading content_add_dash">
              Dashboard Projects
            </h3>
            <div className="">
              <img src={content_add_icon} />
              <h3 className="content-project-head d-inline">Add New Project</h3>
            </div>
          </div>
          <div className="tab_nav mt-3">
            <span className="content_grp  d-none d-md-block text-center mx-5    ">
              <button
                type="button"
                class="btn content_btn_grp content_sec_nav_color"
              >
                Dashboard
              </button>
              <button type="button" class="btn content_btn_grp">
                All Projects
              </button>
              <button type="button" class="btn content_btn_grp">
                Schedule
              </button>
              <button type="button" class="btn content_btn_grp">
                Statistics
              </button>
              <button type="button" class="btn content_btn_grp">
                Activity
              </button>
              <button type="button" class="btn content_btn_grp">
                Members
              </button>
            </span>
          </div>
          <span className="d-block d-md-none content_grp text-justify mx-3 mt-3">
            <button
              type="button"
              class="btn content_btn_grp content_sec_nav_color"
            >
              Dashboard
            </button>
            <button type="button" class="btn content_btn_grp">
              All Projects
            </button>
            <button type="button" class="btn content_btn_grp">
              Schedule
            </button>
            <button type="button" class="btn content_btn_grp">
              Statistics
            </button>
          </span>

          {/* content 2nd nav  */}
          <div
            className="btn-group main-content content_sec_nav align-items-center mt-4 content_only_web content_below_secnav overflow_hidden"
            role="group"
          >
            <img className="" src={content_leftarrow} />
            <span className="">
              <button type="button" class="btn content_btn_grp fw_900">
                Main
              </button>
              <button
                type="button"
                class="btn content_btn_grp fw_900 content_sec_nav_color"
              >
                Project Stages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Tasks
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Messages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Chat
              </button>
              <button type="button" className="btn content_btn_grp fw_900  ">
                Members
              </button>
            </span>

            <div className="">
              <img className="" src={content_rightarrow} />
            </div>
          </div>

          {/* content 2nd nav Mobile  */}
          <div
            className="btn-group main-content content_sec_nav align-items-center mt-4  d-block d-md-none "
            role="group"
          >
            <span className="">
              <button type="button" class="btn content_btn_grp fw_900">
                Main
              </button>
              <button
                type="button"
                class="btn content_btn_grp fw_900 content_sec_nav_color"
              >
                Project Stages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Tasks
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Messages
              </button>
              <button type="button" class="btn content_btn_grp fw_900">
                Chat
              </button>
            </span>
          </div>

          {/* below 2nd nav */}

          <div
            className="btn-group main-content content_sec_nav align-items-center mt-1 content_below_secnav content_only_web overflow_hidden"
            role="group"
          >
            <span className="content_grp search_task d-none d-md-block">
              <button
                type="button"
                class="btn content_btn_grp search_task_text py-1.5"
              >
                <img src={search_icon} />
                Search Task
              </button>
            </span>

            <span className="content_grp d-none d-md-block">
              <button type="button" class="btn content_btn_grp ">
                List of Stages
              </button>
              <button
                type="button"
                className="btn content_btn_grp content_sec_nav_color common_content"
              >
                Stages Calendar
              </button>
            </span>

            <span className="content_grp search_task d-none d-md-block">
              <button
                type="button"
                class="btn content_btn_grp new_stage_btn py-1.5"
              >
                <img src={content_add_icon} />
                <h3 className="content-project-head d-inline new_stage_text">
                  Add New Stage
                </h3>
              </button>
            </span>
          </div>

          {/* below 2nd nav Mobile*/}
          <div
            className="btn-group main-content align-items-center mt-1 content_below_secnav d-md-none"
            role="group"
          >
            {/* for mobile */}
            <span className="content_grp no_bg search_task d-md-none d-block">
              <button
                type="button"
                class="btn content_btn_grp search_task_text py-1.5"
              >
                <img src={search_icon} />
              </button>
            </span>

            {/* for mobile */}
            <span className="content_grp  d-block d-md-none">
              <button
                type="button"
                class="btn content_btn_grp content_sec_nav_color"
              >
                List of Stages
              </button>
              <button
                type="button"
                className="btn content_btn_grp  common_content"
              >
                Stages Calendar
              </button>
            </span>

            {/* for mobile */}
            <span className="content_grp no_bg search_task d-md-none d-block">
              <button
                type="button"
                class="btn content_btn_grp new_stage_btn py-1.5"
              >
                <img src={content_add_icon} />
              </button>
            </span>
          </div>

          {/* ------------------- cards section -------------------  */}
          <div className="slider_cont mt-1">
            <Slider {...slider_Settings} className="mx-5 mt-5 mb-4">
              {cardData.map((card, index) => (
                <div key={index} className="col-lg-2 col-md-6 ">
                  <Card style={{ width: "auto" }} className="card_style">
                    <img className="card_number_icon mt-5" src={card.image} />
                    <Card.Body className="card_body">
                      <Card.Title className="overflow_hidden card_title mt-4 px-2">
                        {card.title}
                      </Card.Title>
                      <button className="card_btn ">
                        <img src={card_tick_icon} />
                        Show On
                      </button>
                      <div className="text-center">
                        <div className="card_line"></div>
                        <div className="card_footer ">
                          <div className="d-inline d-flex card_task card_task">
                            <img src={card_task_icon} />
                            <p className="card_footer_text"> 10 </p>
                          </div>
                          <div className="card_ver_line"></div>
                          <div className="d-inline d-flex card_msgr">
                            <img src={card_msgr_icon} />
                            <p className="card_footer_text"> 6 </p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>

          {/* ---------------------- Table ---------------------  */}
          <div className="slider_cont ">
            <Table bordered hover className="table_width rounded mx-5 mb-5">
              <thead>
                <tr className="table_row_height">
                  <th></th>
                  <th colSpan={4} className="table_head">
                    November
                  </th>
                  <th colSpan={4} className="table_head">
                    December 2032
                  </th>
                  <th colSpan={4} className="table_head">
                    January 2033
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table_ver_align">
                  <td className="table_row_height table_stage px-3">Stages</td>
                  <td className="table_subhead text-center">1W</td>
                  <td className="table_subhead text-center">2W</td>
                  <td className="table_subhead text-center">3W</td>
                  <td className="table_subhead">4W</td>
                  <td className="table_subhead">1W</td>
                  <td className="table_subhead">2W</td>
                  <td className="table_subhead">3W</td>
                  <td className="table_subhead">4W</td>
                  <td className="table_subhead">1W</td>
                  <td className="table_subhead">2W</td>
                  <td className="table_subhead">3W</td>
                  <td className="table_subhead">4W</td>
                </tr>
                <tr className="table_row_height">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number1} className="mx-2" />
                    <p className="d-inline table_sidebar_para_four">
                      {" "}
                      Develop Chat App
                    </p>
                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>

                  <td colSpan={3}>
                    <div className="table_date_border ">
                      Start 01.11 – End 22.11
                    </div>
                    <img
                      className="yellow_table_curve d-none d-xl-block"
                      colSpan={2}
                      rowspan={2}
                      src={yellow_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr rowspan="4" className="Advertising_row table_row_height">
                  <td className="table_stage ">
                    <img src={card_icon_number2} className="mx-2" />
                    <p className="d-inline table_sidebar_para">
                      {" "}
                      Effective Advertising
                    </p>
                    {isDropdownOpen ? (
                      <img
                        className={`mx-2 arrowup_icon ${
                          isDropdownOpen ? "rotate-down" : ""
                        }`}
                        src={arrowup_icon}
                        onClick={arrowUp}
                      />
                    ) : (
                      <img
                        src={sidebar_arrow_icon2}
                        className="arrowdown_icon mx-2"
                        onClick={arrowUp}
                      />
                    )}
                    <br /> <br />
                    {isDropdownOpen ? (
                      <div
                        className={`mx-5 table_dropdown ${
                          isDropdownOpen ? "show" : ""
                        }`}
                      >
                        <td>
                          <img
                            src={check_task_icon}
                            className="d-inline mx-1"
                          />
                          <td className="d-inline table_subhead">
                            Check Tasks 10
                          </td>
                        </td>
                        <br />
                        <td>
                          <img src={card_msgr_icon} className="d-inline mx-1" />
                          <td className="d-inline table_subhead">Members 6</td>
                        </td>
                        <br />
                        <td>
                          <img
                            src={desc_table_icon}
                            className="d-inline mx-1"
                          />
                          <td className="d-inline table_subhead">
                            Description
                          </td>
                        </td>
                        <br />
                        <td>
                          <img
                            src={files_table_icon}
                            className="d-inline mx-1"
                          />
                          <td className="d-inline table_subhead">Files 10</td>
                        </td>
                      </div>
                    ) : null}
                  </td>
                  <td></td>
                  <td></td>
                  <td colSpan={4}>
                    <div className=" bar_EF table_data_border_EF ">
                      Start 01.11 – End 22.11
                    </div>
                    <img
                      className="green_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={green_table_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number3} className="mx-2" />
                    <p className="d-inline table_sidebar_para table_sidebar_para_two">
                      {" "}
                      Development and Testing
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={4}>
                    <div className=" table_date_border table_data_border_DandE mx-2">
                      Start 01.11 – End 22.11
                    </div>
                    <img
                      className="purple_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={purple_table_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number4} className="mx-2" />
                    <p className="d-inline table_sidebar_para">
                      {" "}
                      Customer Approval
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={3}>
                    <div className=" table_date_border table_data_border_Cus_App">
                      23.11 – 12.12{" "}
                    </div>
                    <img
                      className="blue_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={blue_table_curve}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number5} className="mx-2" />
                    <p className="d-inline table_sidebar_para_three ">
                      {" "}
                      Launch of the Project
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={3}>
                    <div className=" table_date_border  table_data_border_laucnh ">
                      23.11 – 12.12{" "}
                    </div>
                    <img
                      className="red_table_curve d-none d-xl-block"
                      colSpan={3}
                      rowspan={2}
                      src={red_table_curve}
                    />
                  </td>

                  <td></td>
                </tr>
                <tr className="table_row_height ">
                  <td className="table_stage table_sidebar">
                    <img src={card_icon_number6} className="mx-2" />
                    <p className="d-inline table_sidebar_para table_sidebar_para_two">
                      {" "}
                      Reconciliation and Recei...
                    </p>

                    <img className={"mx-2 arrowup_icon "} src={arrowup_icon} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={3}>
                    <div className=" table_date_border table_data_border_recon  ">
                      23.11 – 12.12{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
