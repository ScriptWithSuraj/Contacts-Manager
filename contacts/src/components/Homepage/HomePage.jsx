import React, { useEffect, useState } from "react";
import Contacts from "../Contacts/Contacts";
import Navbar from "../Navbar/Navbar";
import { data } from "../../constants/constants";
import IconButton from "@mui/material/IconButton";
import { userContext } from "../Context/Context";
function HomePage() {
  const [user, setUser] = useState([]);
  const fetchUser = () => {
    setUser(data.sort((a, b) => a.name.localeCompare(b.name)));
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
            <userContext.Provider value={{ user, setUser }}>
              <Contacts />
            </userContext.Provider>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
