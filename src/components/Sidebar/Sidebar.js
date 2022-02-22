import React from "react";
import "./Sidebar.scss";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();

  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <h5 className="sidebar__categories">{"Categories"}</h5>
        <ul>
          <li
            tabIndex="0"
            onClick={(e) => history.push("/products/men")}
          >
            <a>{"MENS"}</a>
          </li>
          <li
            tabIndex="0"
            onClick={(e) => history.push("/products/women")}
          >
            <a>{"WOMENS"}</a>
          </li>
          <li
            tabIndex="0"
            onClick={(e) => history.push("/products/kids")}
          >
            <a>{"KIDS"}</a>
          </li>
          <li tabIndex="0" onClick={(e) => history.push("/products/footwear")}>
            <a>{"FOOTWEAR"}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
