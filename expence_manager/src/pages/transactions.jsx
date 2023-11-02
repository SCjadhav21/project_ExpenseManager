import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ManageExpence from "./manageExpence";
import "../css/transactions.css";
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
            className="no-transaction-img"
            src="https://i.pinimg.com/originals/ce/a0/0d/cea00d5472fb477c9d2bf8724fac768d.jpg"
            alt="No Transactions Found"
          />
          <IoIosAddCircle
            onClick={() => {
              setManageExpenceOpen(!manageExpenceOpen);
            }}
            className="Add-Circle"
          />
        </div>
      )}
    </>
  );
};

export default Transactions;
