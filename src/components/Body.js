import React from "react";
import { ImPencil } from "react-icons/im";
import { TbTrash } from "react-icons/tb";
import "../styles/Body.css";

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
              <input type="checkbox" name="checkbox" id="group-1-chechbox" />
              <h3>My todo list #1</h3>
            </div>
            <div className="icon-div">
              <button>
                <ImPencil />
              </button>
              <button>
                <TbTrash className="trashcan-icon" />
              </button>
            </div>
          </div>
          <div className="group2">
            <div className="box">
              <input type="checkbox" name="checkbox" id="group-2-chechbox" />
              <h3>My todo list #2</h3>
            </div>
            <div className="icon-div">
              <button>
                <ImPencil />
              </button>
              <button>
                <TbTrash className="trashcan-icon" />
              </button>
            </div>
          </div>
          <div className="group3">
            <div className="box">
              <input type="checkbox" name="checkbox" id="group-3-chechbox" />
              <h3>My todo list #3</h3>
            </div>
            <div className="icon-div">
              <button>
                <ImPencil />
              </button>
              <button>
                <TbTrash className="trashcan-icon" />
              </button>
            </div>
          </div>
          <div className="group4">
            <div className="box">
              <input type="checkbox" name="checkbox" id="group-4-chechbox" />
              <h3>My todo list #4</h3>
            </div>
            <div className="icon-div">
              <button>
                <ImPencil />
              </button>
              <button>
                <TbTrash className="trashcan-icon" />
              </button>
            </div>
          </div>
          <div className="group5">
            <div className="box">
              <input type="checkbox" name="checkbox" id="group-5-chechbox" />
              <h3>My todo list #5</h3>
            </div>
            <div className="icon-div">
              <button>
                <ImPencil />
              </button>
              <button>
                <TbTrash className="trashcan-icon" />
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
    </div>
  );
}
