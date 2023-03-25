import React, { useState, useContext } from "react";
import { userContext } from "../Context/Context";
function EditContact({ editUser }) {
  const { user, setUser } = useContext(userContext);
  const [users, setuser] = useState({
    id: "",
    name: "",
    email: "",
    phone_num: "",
    contact_type: "",
    gen: "",
  });
  const editing = editUser[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(
      [...user, { ...users, id: Date.now() }].sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
    setuser({
      id: "",
      name: "",
      email: "",
      phone_num: "",
      contact_type: "",
      gen: "",
    });
    // toast.success("Contact added", {
    //   position: "bottom-center",
    //   hideProgressBar: true,
    //   autoClose: 1000,
    //   theme: "colored",
    //   pauseOnHover: false,
    //   closeOnClick: false,
    // });
  };
  const handleInput = (e) => {
    setuser({ ...users, [e.target.name]: e.target.value });

    // console.log({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="modal mt-5" id="exampleModal1" onSubmit={handleSubmit}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title d-flex justify-content-end">
                <h4> Add New Contact</h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                arial-label="close"
              >
                <span arial-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  name="name"
                  className="form-control"
                  rows={10}
                  type={"text"}
                  onChange={handleInput}
                  placeholder="Enter the name"
                  required
                  // value={editser.name}
                />
                <input
                  name="email"
                  className="form-control mt-2"
                  type={"email"}
                  // rows={}
                  onChange={handleInput}
                  value={users.email}
                  placeholder="Enter the email"
                  required
                />
                <input
                  name="phone_num"
                  className="form-control mt-2"
                  type={"number"}
                  // rows={}
                  onChange={handleInput}
                  value={users.phone_num}
                  placeholder="Enter the phone number"
                  required
                />
                <div className="dropdown">
                  <label
                    className="mt-2 mx-1"
                    htmlFor="contact_type"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Contact Type
                  </label>{" "}
                  <select
                    className="bg-transparent text-dark"
                    name="contact_type"
                    id="contact_type"
                    onChange={handleInput}
                    required
                    value={users.contact_type}
                  >
                    {" "}
                    <option value="">Select Contact Type</option>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div>
                  <>
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gen"
                        id="optionsRadios1"
                        defaultValue="M"
                        required
                        onClick={handleInput}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="optionsRadios1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gen"
                        id="optionsRadios2"
                        // defaultChecked="F"
                        defaultValue={"F"}
                        onClick={handleInput}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="optionsRadios2"
                      >
                        Female
                      </label>
                    </div>
                    {/* <div className="form-check disabled">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="optionsRadios"
                      id="optionsRadios3"
                      defaultValue="option3"
                      disabled=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="optionsRadios3"
                    >
                      Option three is disabled
                    </label>
                  </div> */}
                  </>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="submit"
                //   onClick={handleSave}
                // data-bs-dismiss={`${title} && ${desc} ? "modal":""`}
                // data-bs-dismiss="modal"
              >
                Create New Contact
              </button>
              {/* <button
                className="btn btn-secondary"
                //   onClick={() => {
                //     setDesc("");
                //     setTitle("");
                //   }}
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditContact;
