import React, { useContext } from "react";
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
import { userContext } from "../Context/Context";
import EditContact from "../EditContact/EditContact";
function Contacts() {
  const { user, setUser } = useContext(userContext);
  const [addContacts, setAddContacts] = useState(false);
  const [editUser, setEditUser] = useState([]);
  const handleAdd = () => {
    setAddContacts((prev) => !prev);
    // console.log(addContacts);
  };
  const handleDelete = (id) => {
    const deleteUser = user.filter((user) => id !== user.id);
    setUser(deleteUser);
  };
  const handleEdit = (id) => {
    // console.log("user");
    const editTheUser = user.filter((user) => id === user.id);
    // console.log(editTheUser);
    setEditUser(editTheUser);
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
      {user.map((useritem) => (
        <div className="col-sm-3  mx-3 my-2 alert bg-dark" key={useritem.id}>
          <div
            className="card text-white border-primary mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header">
              <div className="d-flex justify-content-between">
                {/* <IconButton aria-label="Edit" color="primary"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil mt-3 mx-2"
                  viewBox="0 0 16 16"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={() => handleEdit(useritem.id)}
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                {/* </IconButton> */}
                <EditContact editUser={editUser} />
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
