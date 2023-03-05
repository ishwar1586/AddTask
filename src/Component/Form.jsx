import React, { useState } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CSVLink } from "react-csv";
const Form = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
    id: uuidv4(),
  });
 const headers = [
    { label: "Name", key: "Name" },
    { label: "Email", key: "Email" },
    { label: "Subject", key: "Subject" },
    { label: "Message", key: "Message" }
  ];
  const [edit, setEdit] = useState("");
  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [add, setAdd] = useState([]);
  const handleSave = (e) => {
    e.preventDefault();
    if (edit !== "") {
      console.log("ok", edit);
      let FilterData = add.map((res) => {
        if (res.id === edit) {
          return data;
        } else {
          return res;
        }
      });
      console.log("filter", FilterData);
      setAdd(FilterData);
    } else {
      console.log("data", data);
      setAdd([...add, data]);
    }
    setData({ Name: "", Email: "", Subject: "", Message: "", id: uuidv4() });
    setShow(false);
    setEdit("");
  };

  const Delete = (id) => {
    console.log("index", id);
    setAdd((value) => {
      return value.filter((res) => {
        return res.id !== id;
      });
    });
  };
  const Edit = (id) => {
    console.log(id);
    const editData = add.find((res) => res.id === id);

    setData(editData);
    setEdit(id);
    setShow(true);
  };

  return (
    <div>
      <div className="container">
        <div className="header text-center">
          <h3>Add task card </h3>
          <Button variant="primary" className="task" onClick={handleShow}>
            Add New task
          </Button>
        
          <CSVLink data={add} headers={headers} className="excel">
           Download me
           </CSVLink>
       
        </div>
        <br />
        <div className="row">
          <Card add={add} Delete={Delete} Edit={Edit} setAdd={setAdd} />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h1 className="text-center font-weight-bold text-primary">
                User Details
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSave} id="form-box" className="p-2">
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Name"
                  value={data.Name}
                  onChange={handleValue}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  name="Email"
                  value={data.Email}
                  onChange={handleValue}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-at"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="Subject"
                  value={data.Subject}
                  onChange={handleValue}
                  className="form-control"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-comment-alt"></i>
                  </span>
                </div>
                <textarea
                  name="Message"
                  value={data.Message}
                  onChange={handleValue}
                  id="msg"
                  className="form-control"
                  placeholder="Write your message"
                  cols="30"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="btn btn-primary btn-block"
                  value="Save"
                />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Form;
