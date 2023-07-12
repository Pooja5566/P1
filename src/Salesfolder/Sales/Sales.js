import React from "react";
import "./Sales.css";

const projectList = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fjunaid.jpg?alt=media&token=a96d84dd-059b-4259-866e-3db2775e65b2",
    title: "Mr. Junaid",
    description: "Sales Manager",
    button: "9899550700",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Frizwan.jpg?alt=media&token=01dcde35-ca27-48a1-9174-49d8f388a0ba",
    title: "Mr. Rizwan",
    description: "Sales Manager",
    button: "9899550700",
  },
];

export default function Sales() {
  return (
    <div>
      <div className="row">
        {projectList.map((item, i) => {
          return (
            <div className="col-sm-6">
              <ListProject item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const ListProject = ({ item }) => {
  return (
    <div className="Saleshead">
      <div className="Salesparent">
        <img src={item.image} />{" "}
        <div className=" Sales">
          <div style={{ width: "100%" }}>
            <div className=" salesall">
              <h3>{item.title}</h3>
              <h4>{item.description}</h4>
              <div className="Salesbutton">
                <a href="tel:9899550700">
                  <p>{item.button}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
