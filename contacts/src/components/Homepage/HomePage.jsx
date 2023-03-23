import React, { useEffect, useState } from "react";
import Contacts from "../Contacts/Contacts";
import Navbar from "../Navbar/Navbar";
import { data } from "../../constants/constants";
import IconButton from "@mui/material/IconButton";

function HomePage() {
  const [user, setUser] = useState([]);
  const fetchUser = () => {
    setUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="d-flex column">
        <div className="container column">
          <div className="row justify-content-md-center mt-4">
            {/* {user.map((item) => ( */}
            <Contacts item={user} setUser={setUser} />
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
