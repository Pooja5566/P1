import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./App.css";
export default function App() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <div className="tabclass">
        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="Mission">
            <p>
              In order to meet our mission, we are committed to build better
              ready-to-move semi-furnished 2BHK, 3BHK, and 4 BHK residential
              builder floor apartments with luxury living at affordable pricing
              without brokerage charges.
            </p>
          </Tab>
          <Tab eventKey="second" title="Vision">
            <p>
              Our vision is to provide the best homes to our customers and the
              diverse opportunities, coupled with our user centric approach. We
              comply with our pledges to satisfy the customer’s wishes.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
