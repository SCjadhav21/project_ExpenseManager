import React, { useState } from "react";
import "../css/manageexpence.css";
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

  const handelChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") {
      value = +value;
    }
    setData({ ...data, [name]: value });
  };
  const handelCategory = (value) => {
    setData({ ...data, category: value });
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
      <div className="flex-container">
        <h3 className="fontcss">Amount :</h3>
        <input
          min={1}
          name="amount"
          onChange={handelChange}
          value={data.amount}
          className="amountInput"
          type="number"
        />
        <h3 style={{ fontSize: "40px" }}>₹</h3>
      </div>
      <div>
        <h3 className="fontcss">category</h3>
        <div className="category-grid">
          <div
            onClick={() => handelCategory("food&drinks")}
            style={{
              color: data.category == "food&drinks" ? "white" : "black",
              backgroundColor:
                data.category == "food&drinks" ? "#07DA06" : "white",
            }}
            className="category-grid-item"
          >
            <GiForkKnifeSpoon
              className="icon-font-size"
              style={{
                color: data.category == "food&drinks" ? "white" : "#07DA06",
              }}
            />
            <p>Food and Drinks</p>
          </div>
          <div
            onClick={() => handelCategory("leisure")}
            style={{
              color: data.category == "leisure" ? "white" : "black",
              backgroundColor: data.category == "leisure" ? "#009EE1" : "white",
            }}
            className="category-grid-item"
          >
            <IoMdHappy
              className="icon-font-size"
              style={{
                color: data.category == "leisure" ? "white" : "#009EE1",
              }}
            />
            <p>Leisure</p>
          </div>
          <div
            onClick={() => handelCategory("transportation")}
            style={{
              color: data.category == "transportation" ? "white" : "black",
              backgroundColor:
                data.category == "transportation" ? "orange" : "white",
            }}
            className="category-grid-item"
          >
            <IoMdBicycle
              className="icon-font-size"
              style={{
                color: data.category == "transportation" ? "white" : "orange",
              }}
            />
            <p>Transportation</p>
          </div>
          <div
            onClick={() => handelCategory("health")}
            style={{
              color: data.category == "health" ? "white" : "black",
              backgroundColor: data.category == "health" ? "red" : "white",
            }}
            className="category-grid-item"
          >
            <MdHealthAndSafety
              className="icon-font-size"
              style={{
                color: data.category == "health" ? "white" : "red",
              }}
            />
            <p>Health</p>
          </div>
          <div
            onClick={() => handelCategory("shooping")}
            style={{
              color: data.category == "shooping" ? "white" : "black",
              backgroundColor:
                data.category == "shooping" ? "#CA13C9" : "white",
            }}
            className="category-grid-item"
          >
            <MdShoppingCart
              className="icon-font-size"
              style={{
                color: data.category == "shooping" ? "white" : "#CA13C9",
              }}
            />

            <p>Shooping</p>
          </div>
          <div
            onClick={() => handelCategory("utilities")}
            style={{
              color: data.category == "utilities" ? "white" : "black",
              backgroundColor:
                data.category == "utilities" ? "#EE228F" : "white",
            }}
            className="category-grid-item"
          >
            <GiLightningSpanner
              className="icon-font-size"
              style={{
                color: data.category == "utilities" ? "white" : "#EE228F",
              }}
            />

            <p>Utilities</p>
          </div>
        </div>
      </div>
      <h3 className="fontcss">details</h3>
      <div className="flex-container">
        <div style={{ width: "80%" }}>
          <div className="flex-container">
            <MdDateRange
              className="icon-font-size"
              style={{ color: "#9400F7", marginLeft: "5px" }}
            />
            <input
              onChange={handelChange}
              style={{ margin: "5px" }}
              type="date"
              name="date"
              value={data.date}
            />
          </div>
          <div className="flex-container">
            <MdSpeakerNotes
              className="icon-font-size"
              style={{ color: "#8C00E9", marginLeft: "5px" }}
            />
            <input
              onChange={handelChange}
              value={data.description}
              style={{ marginTop: "5px" }}
              type="text"
              placeholder="Add note here..."
              name="description"
            />
          </div>
        </div>
        <BsCheckCircleFill onClick={handelSubmit} className="check-icon" />
      </div>
    </div>
  );
};

export default ManageExpence;
