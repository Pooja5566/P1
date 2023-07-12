import React from "react";
import "./popularproject.css";
import { useNavigate } from "react-router-dom";

const projectList = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fdaisy.png?alt=media&token=4ec632b7-5e51-433f-9a94-ab745f6c1180",
    title: "Daisy Apartment T1",
    price: "₹ 45Lacs - 65Lacs",
    size: "819-1252 Sq. Ft.",
    id: "6",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Magnolia%2Fmagnolia-apartment.png?alt=media&token=11ab91ec-f180-4e84-a2cc-39748b991b46",
    title: "Magnolia Apartment",
    price: "₹ 50Lacs - 95Lacs",
    size: "890-1435 Sq. Ft.",
    id: "5",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/DaisyT2%2Fdaisy-apartment.png?alt=media&token=d27d72dd-aeba-4ebc-9587-1f29bfdbaa4d",
    title: "Daisy Apartment T2",
    price: "₹ 35Lacs - 40Lacs",
    size: "810-890 Sq. Ft.",
    id: "7",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fghitorni.png?alt=media&token=7e7cd573-5f1f-4815-8c48-4351c94357c6",
    title: "Jasmine Apartment",
    price: "₹ 3BHK | 50 Lacs ",
    size: "1035 Sq. Ft.",
    id: "4",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Firis.jpg?alt=media&token=e7cae0ed-a293-496d-936a-b5ac9c33cc6f",
    title: "Iris Apartment",
    price: "₹ 3 BHK | ₹50 Lacs ",
    size: "1125 Sq. Ft.",
    id: "2",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Flotus.png?alt=media&token=5d7d09f9-35de-4d59-ad1a-8120db06ed80",
    title: "Lotus Apartment",
    price: "₹ 45Lacs - 65Lacs",
    size: "720 - 1215 Sq. Ft.",
    id: "3",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Lily%2FLily%20Tower%20A%20(2).jpg?alt=media&token=edd11181-9051-4b1e-be81-5f44a917e7a1",
    title: "Lily Tower A",
    price: "₹ 55Lacs - 60Lacs",
    size: "120 Sq. Yards",
    id: "1",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Lily%2FLily%20Tower%20B.jpg?alt=media&token=b16f1c1d-0007-4d46-a001-0c6ae310617d",
    title: "Lily Tower B",
    price: "₹ 55Lacs - 60Lacs",
    size: "120 Sq. Yards",
    id: "1",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Lily%2FLily%20Apartment%20(Society).jpg?alt=media&token=b0e8baac-51d0-4fd2-9c55-f67fc71b713a",
    title: "Lily Tower C",
    price: "₹ 40Lacs",
    size: "90 Sq. Yards",
    id: "1",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/Orchid%2FScreenshot%202023-07-01%20164411.png?alt=media&token=a03d97a6-cf76-487b-bb39-0d2010f50276",
    title: "Orchid Apartment",
    price: "₹ 39.9Lacs - 69.9Lacs",
    // size: "824 - 1286 Sq. Ft.",
    id: "55",
  },
];

export default function PopularProject() {
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
  const navigate = useNavigate();
  return (
    <div
      className="parentContent"
      onClick={() => {
        if (item.id === "2") {
          navigate("/iris");
        }
        if (item.id === "6") {
          navigate("/daisy");
        }
        if (item.id === "3") {
          navigate("/lotus");
        }
        if (item.id === "4") {
          navigate("/jasmine");
        }
        if (item.id === "5") {
          navigate("/magnolia");
        }
        if (item.id === "1") {
          navigate("/lily");
        }
        if (item.id === "7") {
          navigate("/daisyT2");
        }
      }}
    >
      <img src={item.image} />
      <div className="parentContent childContent">
        <div style={{ width: "100%" }}>
          <h3>{item.title}</h3>
          <h4>{item.price}</h4>
          <h4>{item.size}</h4>
        </div>
      </div>
    </div>
  );
};
