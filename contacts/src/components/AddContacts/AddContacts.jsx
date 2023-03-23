import React from "react";
import { Link } from "react-router-dom";

function AddContacts() {
  return (
    <div className="modal mt-5" id="exampleModal">
      {/* <ToastContainer /> */}
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
                // onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the name"
                // value={title}
              />
              <input
                name="email"
                className="form-control mt-2"
                type={"email"}
                // rows={}
                // onChange={(e) => setDesc(e.target.value)}
                // value={desc}
                placeholder="Enter the email"
              />
              <input
                name="phone_num"
                className="form-control mt-2"
                type={"number"}
                step="0.01"
                // rows={}
                // onChange={(e) => setDesc(e.target.value)}
                // value={desc}
                placeholder="Enter the phone number"
              />
              <div className="dropdown">
                <label
                  className="mt-2 mx-1"
                  for="contact_type"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Contact Type
                </label>{" "}
                <select
                  className="bg-transparent text-dark"
                  name="contact_type"
                  id="cars"
                >
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
                      name="optionsRadios"
                      id="optionsRadios1"
                      defaultValue="M"
                      defaultChecked="M"
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
                      name="optionsRadios"
                      id="optionsRadios2"
                      defaultValue="F"
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
              //   onClick={handleSave}
              // data-bs-dismiss={`${title} && ${desc} ? "modal":""`}
            >
              Save Task
            </button>
            <button
              className="btn btn-secondary"
              //   onClick={() => {
              //     setDesc("");
              //     setTitle("");
              //   }}
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContacts;
