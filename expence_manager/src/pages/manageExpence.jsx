import React, { useState } from "react";

import { IoMdHappy, IoMdBicycle } from "react-icons/io";
import {
  MdHealthAndSafety,
  MdSpeakerNotes,
  MdDateRange,
  MdShoppingCart,
} from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { GiLightningSpanner, GiForkKnifeSpoon } from "react-icons/gi";
const ManageExpence = ({ manageExpence, setManageExpence }) => {
  const [data, setData] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });
  const [category, setCategory] = useState("");

  const handelChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") {
      value = +value;
    }
    setData({ ...data, [name]: value });
  };
  const handelCategory = (value) => {
    setData({ ...data, category: value });
    setCategory(value);
  };
  const handelSubmit = () => {
    if (data.amount == "") {
      alert("Please enter some amount");
    } else if (data.category == "") {
      alert("Please select a category");
    } else if (data.date == "") {
      alert("Please select a date");
    } else if (data.description == "") {
      alert("Please Add some description");
    } else {
      setManageExpence(!manageExpence);
    }
  };
  return (
    <div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <h3 style={{ fontSize: "40px", fontWeight: "lighter" }}>Amount :</h3>
        <input
          min={1}
          name="amount"
          onChange={handelChange}
          value={data.amount}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            border: "none",
            width: "150px",
            height: "60px",

            fontSize: "30px",
            textAlign: "center",
          }}
          type="number"
        />
        <h3 style={{ fontSize: "40px" }}>₹</h3>
      </div>
      <div>
        <h3 style={{ fontSize: "40px", fontWeight: "lighter" }}>category</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            padding: "10px",
            gap: 10,
          }}
        >
          <div
            onClick={() => handelCategory("food&drinks")}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: data.category == "food&drinks" ? "white" : "black",
              backgroundColor:
                data.category == "food&drinks" ? "#07DA06" : "white",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              padding: "10px",
            }}
          >
            <GiForkKnifeSpoon
              style={{
                fontSize: "20px",
                color: data.category == "food&drinks" ? "white" : "#07DA06",
              }}
            />
            <p>Food and Drinks</p>
          </div>
          <div
            onClick={() => handelCategory("leisure")}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              padding: "10px",
              display: "flex",
              color: data.category == "leisure" ? "white" : "black",
              backgroundColor: data.category == "leisure" ? "#009EE1" : "white",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IoMdHappy
              style={{
                fontSize: "20px",
                color: data.category == "leisure" ? "white" : "#009EE1",
              }}
            />
            <p>Leisure</p>
          </div>
          <div
            onClick={() => handelCategory("transportation")}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              padding: "10px",
              display: "flex",
              color: data.category == "transportation" ? "white" : "black",
              backgroundColor:
                data.category == "transportation" ? "orange" : "white",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IoMdBicycle
              style={{
                fontSize: "25px",
                color: data.category == "transportation" ? "white" : "orange",
              }}
            />
            <p>Transportation</p>
          </div>
          <div
            onClick={() => handelCategory("health")}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              padding: "10px",
              display: "flex",
              color: data.category == "health" ? "white" : "black",
              backgroundColor: data.category == "health" ? "red" : "white",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdHealthAndSafety
              style={{
                fontSize: "25px",
                color: data.category == "health" ? "white" : "red",
              }}
            />
            <p>Health</p>
          </div>
          <div
            onClick={() => handelCategory("shooping")}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              padding: "10px",
              display: "flex",
              color: data.category == "shooping" ? "white" : "black",
              backgroundColor:
                data.category == "shooping" ? "#CA13C9" : "white",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdShoppingCart
              style={{
                fontSize: "25px",
                color: data.category == "shooping" ? "white" : "#CA13C9",
              }}
            />

            <p>Shooping</p>
          </div>
          <div
            onClick={() => handelCategory("utilities")}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              padding: "10px",
              display: "flex",
              color: data.category == "utilities" ? "white" : "black",
              backgroundColor:
                data.category == "utilities" ? "#EE228F" : "white",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <GiLightningSpanner
              style={{
                fontSize: "25px",
                color: data.category == "utilities" ? "white" : "#EE228F",
              }}
            />

            <p>Utilities</p>
          </div>
        </div>
      </div>
      <h3 style={{ fontSize: "40px", fontWeight: "lighter" }}>details</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "80%" }}>
          <div>
            <MdDateRange style={{ fontSize: "25px", color: "#9400F7" }} />
            <input
              onChange={handelChange}
              style={{ margin: "5px" }}
              type="date"
              name="date"
              value={data.date}
            />
          </div>
          <div>
            <MdSpeakerNotes style={{ fontSize: "25px", color: "#81D0B6" }} />
            <input
              onChange={handelChange}
              value={data.description}
              style={{ margin: "5px" }}
              type="text"
              placeholder="Add note here..."
              name="description"
            />
          </div>
        </div>
        <BsCheckCircleFill
          onClick={handelSubmit}
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
    </div>
  );
};

export default ManageExpence;
