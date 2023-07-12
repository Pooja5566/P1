import React from "react";
import "./chooseus.css";
const projectList = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fwater%20(1).jpg?alt=media&token=f929087b-e05e-467c-924d-22e69bd81b3b",
    title: "Hassle-Free Documentation",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FNobrokerage.jpg?alt=media&token=745e8134-4d99-4c8e-ae7e-40fe937e90f4",
    title: "No Brokerage",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2F15daypolicy.png?alt=media&token=aa7bf13a-1e72-4d59-a3ea-722da26e7b9b",
    title: "15 Days Refund Policy",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FHomeloan.jpg?alt=media&token=3609211a-eb7f-4ed6-8167-0de11463ba81",
    title: "Home Loan",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FRegisteredproperty.jpg?alt=media&token=7e74f778-ab3a-4ca7-a2fb-64f55737f1d7",
    title: "Registery Property",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2FTransparency.png?alt=media&token=f0b56c7c-9cac-4525-b823-2ca2095fbcb9",
    title: "Transparency",
  },
];

export default function Chooseus() {
  return (
    <div>
      <div className="row">
        {projectList.map((item, i) => {
          return (
            <div className="col-sm-4">
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
    <div className="ChooseContent1">
      <div className="Chooseus">
        <img src={item.image} />
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};
