import React, { usestate } from "react";
// import PopularProject from "./popularproject/PopularProject";
import projectList from "./popularproject/PopularProject";
import "./Menu.css";

const Menuall = () => {
  const [items, setItems] = usestate(projectList);
  const filterItem = (categItem) => {
    const updatedItems = projectList.filter((element) => {
      return element.category === categItem;
    });
    setItems(updatedItems);

    return (
      <>
        <h1 className="mt-5 text-center main-heading">Our Properties </h1>

        <div className="menu-tabs container">
          <div className="menu-tab d-flex justify-content-around">
            <button className="btn btn-success">All Properties</button>
            <button className="btn btn-success">Trending Properties</button>
            <button
              className="btn btn-success"
              onClick={() => filterItem("BHK2")}
            >
              2 BHK
            </button>
            <button className="btn btn-success">3 BHK</button>
            <button className="btn btn-success">4 BHK</button>
          </div>
        </div>
        {/* <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { image, title, price, id } = elem;
                return(
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="row Item-inside">
                  <div className="col-12 col-md-12 col-lg-4 img-div">
                    <img src={image} alt="menupic" className="img-fluid"></img>
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title py-4 pb-3">
                      <h1>m</h1>
                      <p>hhjj</p>
                    </div>
                    <div className="menu-price-book">
                      <div className="price-book-divide d-flex justify-content-betwwen">
                        <h2>Price</h2>
                        <a href="#">
                          <button classname="btn btn-primary">Order Now</button>
                        </a>
                      </div>
                      <p>ggggg</p>
                    </div>
                  </div>
                </div>
              </div>


                )
              })}
              
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
  };
};
export default Menuall;
