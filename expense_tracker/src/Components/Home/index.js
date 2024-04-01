import React from "react";
import "./home.css";
import PieChartComp from "../PieChart";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <div className="box">
        <div className="box1">
          <p>Wallet balance : Rs. 5000</p>
          <Button variant="success">+ Add Income</Button>
        </div>
        <div className="box1">
          <p>Expenses : Rs. 500</p>
          <Button variant="danger">+ Add Expense</Button>
        </div>
        <div>
          <PieChartComp />
        </div>
      </div>
    </div>
  );
};
export default Home;
