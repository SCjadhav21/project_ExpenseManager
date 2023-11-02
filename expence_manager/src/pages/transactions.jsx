import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ManageExpence from "./manageExpence";

const Transactions = () => {
  let [manageExpenceOpen, setManageExpenceOpen] = useState(false);
  return (
    <>
      {manageExpenceOpen && (
        <ManageExpence
          manageExpence={manageExpenceOpen}
          setManageExpence={setManageExpenceOpen}
        />
      )}
      {!manageExpenceOpen && (
        <div style={{ margin: "30px" }}>
          <img
            style={{
              display: "block",
              margin: "auto",
              width: "60%",
              height: "60vh",
            }}
            src="https://i.pinimg.com/originals/ce/a0/0d/cea00d5472fb477c9d2bf8724fac768d.jpg"
            alt="No Transactions Found"
          />
          <IoIosAddCircle
            onClick={() => {
              setManageExpenceOpen(!manageExpenceOpen);
            }}
            style={{
              display: "block",
              margin: "auto",
              marginRight: "10px",
              fontSize: "80px",
              cursor: "pointer",
              color: "#07DA06",
            }}
          />
        </div>
      )}
    </>
  );
};

export default Transactions;
