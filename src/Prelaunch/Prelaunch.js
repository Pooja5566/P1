import React from "react";
import "./Prelaunch.css";
import { useNavigate } from "react-router-dom";
const projectList = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Lily%2FLily%20Apartment%20(Society).jpg?alt=media&token=b0e8baac-51d0-4fd2-9c55-f67fc71b713a",
    title: "Lily Apartment ",
    price: "2 BHK | ₹39.9 Lacs ",
    price1: "3 BHK | ₹69.9 Lacs ",
    id: "21",
  },
];

export default function Prelaunch() {
  return (
    <div>
      <div className="Prelaunchoffer">
        {projectList.map((item) => {
          return (
            <div>
              <ListProject item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const ListProject = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="parentContentprelaunch"
      onClick={() => {
        if (item.id === "21") {
          navigate("/lily");
        }
      }}
    >
      <img src={item.image} />
      <div className="parentContent childContentprelaunch">
        <div style={{ width: "100%" }}>
          <h3>{item.title}</h3>
          <div className="content">
            <h4>
              {item.price}
              <br></br>
              {item.price1}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
