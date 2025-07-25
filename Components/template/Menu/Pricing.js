import Card from "@/Components/modules/Card/Card";
import React from "react";

function Pricing({ data }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>

            {data
              .filter((item) => item.type === "hot")
              .map((item) => (
                <Card {...item} key={item.id} />
              ))}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>

            {data
              .filter((item) => item.type === "cold")
              .map((item) => (
                <Card {...item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
