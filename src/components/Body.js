import React from "react";
import { ImPencil, ImBin } from "react-icons/im";
import "../styles/Body.css";
import CheckedList from "./CheckedList";
export default function Body() {
  return (
    <div className="main">
      <form className="form">
        <div className="header">
          <h1>My ToDo list</h1>
          <button className="counter">0/6</button>
        </div>
        <div className="body">
          <div className="group1">
            <div className="box">
              <input type="radio" name="radio" id="group-1-radio" />
              <h3>My todo list #1</h3>
            </div>
            <div className="icon-div">
              <button>
                <ImPencil />
              </button>
              <button>
                <ImBin className="trashcan-icon" />
              </button>
            </div>
          </div>

          <div className="adding-part">
            <input type="text" placeholder="what's next?" size={45} />
          </div>
          <div className="add-btn">
            <button type="submit">ADD task</button>
          </div>
        </div>
      </form>
      <div className="checked-div">
        <CheckedList />
      </div>
    </div>
  );
}
