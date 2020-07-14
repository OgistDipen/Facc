import React, { useEffect, useState } from "react";
import ScheduleStyle from "./style";
import axios from "axios";
import backendApi from "../../helpers/backendApi";
import AuthService from "../../services/auth-service";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
import Textarea from "../../ui/Textarea";
import Input from "../../ui/Input";

const Schedule = () => {
  // const user = AuthService.getCurrentUser();
  const [userData, setUserData] = useState({});
  const [reservedDays, setReservedDays] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [createShow, setCreateShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [editData, setEditData] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [showMessage, setShowMessage] = useState("");
  const [notifCounter, setNotifCounter] = useState(0);

  const handleCloseCreate = () => {
    setFormData({});
    setErrorMessage("");
    setCreateShow(false);
  };

  const deleteFunction = async (id) => {
    await axios.delete(`${backendApi}/api/schedules/${id}`);
    window.location.reload();
  };

  const converToDate = (date) => {
    let day = parseInt(date.split("-")[2], "10");

    let month = parseInt(date.split("-")[1], "10");
    switch (month) {
      case 1:
        return `${day} Jan`;
      case 2:
        return `${day} Feb`;
      case 3:
        return `${day} Mar`;
      case 4:
        return `${day} Apr`;
      case 5:
        return `${day} May`;
      case 6:
        return `${day} Jun`;
      case 7:
        return `${day} Jul`;
      case 8:
        return `${day} Avg`;
      case 9:
        return `${day} Sep`;
      case 10:
        return `${day} Oct`;
      case 11:
        return `${day} Nov`;
      default:
        return `${day} Dec`;
    }
  };
  const handleShowCreate = (data) => {
    setFormData(data);
    setCreateShow(true);
  };
  const handleClose = () => {
    setFormData({});
    setErrorMessage("");
    setEditShow(false);
  };
  const handleShow = async (id) => {
    let result = await axios.get(`${backendApi}/api/schedules/${id}`);
    setEditData(result.data);
    setEditShow(true);
  };

  const handleShowAction = (message) => {
    if (notifCounter === 0) {
      setNotifCounter(1);
      setShowMessage(message);
      window.document.getElementById("notification-message").style.left =
        "50px";
      setTimeout(() => {
        setShowMessage("");
        window.document.getElementById("notification-message").style.left =
          "-200px";
        setNotifCounter(0);
      }, 3000);
    }
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const fetchDataUser = async () => {
        let result = await axios.get(`${backendApi}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        });
        setUserData(result.data);
      };
      fetchDataUser();
    }
    const fetchReservedDays = async () => {
      let result = await axios.get(`${backendApi}/api/schedules`);
      setReservedDays(result.data);
      changeReservedDays(result.data);
    };

    fetchReservedDays();
  }, []);

  const changeReservedDays = (reservedDays) => {
    if (reservedDays.length === 0) {
      reservedDays = [
        { id: null, description: "", schedule_date: "", user_id: null },
      ];
    }
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    let newArray2 = [];
    let cicle2 = [];
    let trigger = false;
    let trigger2 = false;
    let normalDays = [];

    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }

    // let daysInMonth = getDaysInMonth(month, year);
    let numberOfEmptyObjects;

    for (var i = 0; i < 35; i++) {
      var day = new Date(year, month, date + i);
      var daysInWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      var d = new Date(day);
      var dayName = daysInWeek[d.getDay()];
      let newFormat = formatDate(day);

      normalDays.push({
        date: newFormat,
        stringDay: dayName,
        reserved: false,
        userId: null,
      });

      if (
        newArray2.length === 0 &&
        cicle2.length === 0 &&
        dayName !== "Monday"
      ) {
        numberOfEmptyObjects = day.getDay() - 1;

        if (numberOfEmptyObjects === -1) {
          numberOfEmptyObjects = 6;
        }
        for (let i2 = 0; i2 < numberOfEmptyObjects; i2++) {
          cicle2.push({
            date: "",
            stringDay: "",
            reserved: false,
            userId: null,
          });
        }
        for (let i3 = 0; i3 < reservedDays.length; i3++) {
          if (
            normalDays[i].date === reservedDays[i3].schedule_date &&
            trigger === false
          ) {
            cicle2.push({
              id: reservedDays[i3].id,
              description: reservedDays[i3].description,
              reserved: true,
              date: reservedDays[i3].schedule_date,
              userId: reservedDays[i3].user_id,
            });
            trigger = true;
          } else {
            if (trigger === false) {
              cicle2.push({
                date: newFormat,
                stringDay: dayName,
                reserved: false,
                userId: null,
              });

              trigger = true;
            }
          }
        }
      } else {
        for (let i4 = 0; i4 < reservedDays.length; i4++) {
          if (
            normalDays[i].date === reservedDays[i4].schedule_date &&
            trigger2 === false
          ) {
            cicle2.push({
              id: reservedDays[i4].id,
              description: reservedDays[i4].description,
              reserved: true,
              date: reservedDays[i4].schedule_date,
              userId: reservedDays[i4].user_id,
            });
            trigger2 = true;
          } else {
            if (trigger2 === false && i4 === reservedDays.length - 1) {
              cicle2.push({
                date: newFormat,
                stringDay: dayName,
                reserved: false,
                userId: null,
              });
              trigger2 = true;
            }
          }
        }
      }

      trigger = false;
      trigger2 = false;

      if (cicle2.length === 7) {
        newArray2.push(cicle2);
        cicle2 = [];
      }
    }
    setFiltered(newArray2);
  };

  const checkIf = (array, compare) => {
    for (let i = 0; i < array.length; i++) {
      if (
        array[i].schedule_date === compare &&
        array[i].user_id === userData.id
      ) {
        return <div className="edit-blue"></div>;
      } else if (array[i].schedule_date === compare) {
        return <div className="reserved-red"></div>;
      }
    }
    return false;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <ScheduleStyle>
      <div className="days">
        <div
          style={{ visibility: showMessage !== "" ? "visible" : "hidden" }}
          id="notification-message"
          className="notification-message"
        >
          <p>Notification Message</p>
          {showMessage !== "" ? showMessage : null}
        </div>
        <div className="header-for-table">
          <div className="side-legend">
            <div className="element">
              <div className="red-dot"></div>
              <span>Reserved by someone</span>
            </div>
            <div className="element">
              <div className="blue-dot"></div>
              <span>Your reservation</span>
            </div>
          </div>
          <p className="month-name">
            {monthNames[new Date().getMonth()]} -
            {monthNames[new Date().getMonth() + 1]}
          </p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {filtered
              ? filtered.map((val, key) => (
                  <tr className="day" key={key}>
                    {val.map((v, key) => (
                      <td
                        key={key}
                        className="d-day"
                        onClick={
                          editShow || createShow
                            ? null
                            : reservedDays.length >= 0
                            ? checkIf(reservedDays, v.date)
                              ? checkIf(reservedDays, v.date).props
                                  .className === "reserved-red"
                                ? () => {
                                    handleShowAction(
                                      "That day is already occupied."
                                    );
                                  }
                                : checkIf(reservedDays, v.date).props
                                    .className === "edit-blue"
                                ? () => {
                                    handleShow(v.id);
                                  }
                                : null
                              : v.date === ""
                              ? () => {
                                  handleShowAction("Not existing day.");
                                }
                              : () => {
                                  handleShowCreate(v);
                                }
                            : null
                        }
                      >
                        <>
                          <Modal
                            show={createShow}
                            onHide={handleCloseCreate}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                <div className="modal-title">
                                  Schedule a meeting
                                </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik
                              initialValues={{
                                description: "",
                              }}
                              onSubmit={async (values, { setSubmitting }) => {
                                setErrorMessage("");

                                const data = {
                                  description: values.description
                                    ? values.description
                                    : "",
                                  user_id: userData.id ? userData.id : null,
                                  schedule_date: formData.date,
                                };

                                try {
                                  await axios
                                    .post(`${backendApi}/api/schedules`, data)
                                    .then((result) => {
                                      const fetchReserved = async () => {
                                        let results = await axios.get(
                                          `${backendApi}/api/schedules`
                                        );
                                        setReservedDays(results.data);
                                        changeReservedDays(results.data);
                                      };
                                      fetchReserved();
                                    }, []);
                                  setCreateShow(false);
                                  setErrorMessage("");

                                  window.location.reload();
                                } catch (error) {
                                  if (error.response) {
                                    setErrorMessage(
                                      error.response.data.error[0]
                                    );
                                  }
                                }

                                setTimeout(() => {
                                  setSubmitting(false);
                                }, 400);
                              }}
                            >
                              {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                  <Modal.Body bsPrefix="custom-body">
                                    <div
                                      className="err-msg"
                                      style={{
                                        opacity: errorMessage !== "" ? 1 : "0",
                                      }}
                                    >
                                      {errorMessage ? errorMessage : null}
                                    </div>
                                    <Input
                                      readOnly
                                      label={"Schedule date"}
                                      value={
                                        formData.date
                                          ? converToDate(formData.date)
                                          : null
                                      }
                                      margin={"0px 0px 15px 0px"}
                                      disabled
                                    ></Input>
                                    <Textarea
                                      placeholder="Description text"
                                      name="description"
                                      label="Event Description"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      width={"100%"}
                                      value={
                                        values.description
                                          ? values.description
                                          : ""
                                      }
                                    />
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="secondary"
                                      onClick={handleCloseCreate}
                                    >
                                      Close
                                    </Button>
                                    <Button variant="primary" type="submit">
                                      Save Changes
                                    </Button>
                                  </Modal.Footer>
                                </form>
                              )}
                            </Formik>
                          </Modal>
                        </>

                        {/*  EDIT MODAL   */}

                        <Modal
                          show={editShow}
                          onHide={() => {
                            handleClose();
                          }}
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Edit you meeting</Modal.Title>
                          </Modal.Header>
                          <Formik
                            initialValues={{
                              description: editData.description
                                ? editData.description
                                : "",
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                              setErrorMessage("");
                              const data = {
                                description: values.description
                                  ? values.description
                                  : editData.description,
                                id: editData.id,
                              };

                              try {
                                await axios
                                  .put(
                                    `${backendApi}/api/schedules/${editData.id}`,
                                    data
                                  )
                                  .then((result) => {
                                    const fetchReserved = async () => {
                                      let results = await axios.get(
                                        `${backendApi}/api/schedules`
                                      );
                                      setReservedDays(results.data);
                                      changeReservedDays(results.data);
                                    };
                                    fetchReserved();
                                  }, []);

                                setEditShow(false);
                                setErrorMessage("");
                                window.location.reload();
                              } catch (error) {
                                if (error.response) {
                                  setErrorMessage(error.response.data.error[0]);
                                }
                              }

                              setTimeout(() => {
                                setSubmitting(false);
                              }, 400);
                            }}
                          >
                            {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                            }) => (
                              <form onSubmit={handleSubmit}>
                                <Modal.Body bsPrefix="custom-body">
                                  <div
                                    className="err-msg"
                                    style={{
                                      opacity: errorMessage !== "" ? 1 : "0",
                                      height:
                                        errorMessage !== "" ? "20px" : "0px",
                                    }}
                                  >
                                    {errorMessage ? errorMessage : null}
                                  </div>
                                  <div className="divRow">
                                    <Input
                                      readOnly
                                      label={"Schedule date"}
                                      value={
                                        editData.schedule_date
                                          ? converToDate(editData.schedule_date)
                                          : null
                                      }
                                      margin={"0px 0px 15px 0px"}
                                      disabled
                                    ></Input>
                                    <Button
                                      variant="danger"
                                      onClick={() => {
                                        deleteFunction(editData.id);
                                      }}
                                    >
                                      {" "}
                                      Delete Meeting
                                    </Button>
                                  </div>
                                  <Textarea
                                    placeholder="Description"
                                    name="description"
                                    label="Event Description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={"100%"}
                                    value={
                                      values.description
                                        ? values.description
                                        : formData.description
                                    }
                                  />
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </Button>
                                  <Button variant="primary" type="submit">
                                    Save Changes
                                  </Button>
                                </Modal.Footer>
                              </form>
                            )}
                          </Formik>
                        </Modal>

                        {/*   END OF EDIT MODAL  */}
                        <div className="date-month">
                          {monthNames[parseInt(v.date.split("-")[1] - 1, "10")]}
                        </div>
                        <div className="date-day">
                          {isNaN(parseInt(v.date.split("-")[2], "10"))
                            ? null
                            : parseInt(v.date.split("-")[2], "10")}
                        </div>

                        {reservedDays.length > 0 ? (
                          <div className="date-color">
                            {checkIf(reservedDays, v.date)}
                          </div>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </ScheduleStyle>
  );
};

export default Schedule;
