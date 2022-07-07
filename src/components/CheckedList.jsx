import React from "react";
import Tasks from "./sub-content/Tasks";
export default function CheckedList() {
  return (
    <div className="checked-div">
      <h1>DONE!</h1>
      <Tasks />
    </div>
  );
}
