import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useState } from "react";
import AddContacts from "../AddContacts/AddContacts";
function Contacts({ item, setUser }) {
  const [addContacts, setAddContacts] = useState(false);
  const handleAdd = () => {
    setAddContacts((prev) => !prev);
    console.log(addContacts);
  };
  const handleDelete = (id) => {
    const deleteUser = item.filter((user) => id !== user.id);
    setUser(deleteUser);
  };
  return (
    <>
      <div className="mt-0 d-flex justify-content-end">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn  btn-primary"
        >
          Add Contacts
        </button>
      </div>
      <div>
        <AddContacts />
      </div>
      {item.map((useritem) => (
        <div className="col-sm-3  mx-3 my-2 alert bg-dark" key={useritem.id}>
          <div
            className="card text-white border-primary mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <IconButton aria-label="Edit" color="primary">
                  <EditIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  color="primary"
                  onClick={() => handleDelete(useritem.id)}
                >
                  <DeleteIcon sx={{ color: "white" }} />
                </IconButton>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex ">
                <AccountCircleIcon />
                <div className="d-flex">
                  <h4 className="card-title mx-3 justify-content-start text-success">
                    {useritem.name}
                  </h4>
                  {useritem.gen === "F" ? (
                    <FemaleIcon sx={{ color: "#ea39b8" }} />
                  ) : (
                    <MaleIcon sx={{ color: "#1ba2f6" }} />
                  )}
                </div>
              </div>
              <div className="d-flex">
                <PhoneIphoneIcon />
                <p className="card-text mx-3">{useritem.phone_num}</p>
              </div>
              <div className="d-flex mt-2">
                <EmailIcon />
                <p className="card-text mx-3">{useritem.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Contacts;
