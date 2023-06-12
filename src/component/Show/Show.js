import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Show.css";
import { Link } from "react-router-dom";


function Show({addToCart1}) {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://64840b4bee799e3216263cb9.mockapi.io/candy")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  });

 

  return (
    <>
      <h3>Item Summary</h3>
      <Link to="/">
        <button className="addData">Add Item</button>
      </Link>
      <hr />
      {apiData.map((item) => {
        return (
          <div className="show1" key={item.id}>
            <div>
              <h5>{item.id}</h5>
            </div>
            <div>
              <h5>{item.e_name}</h5>
            </div>
            <div>
              <h5>{item.e_desc}</h5>
            </div>
            <div>
              <h5> {item.e_price} Rs</h5>
            </div>
            <div className="btn">
              <button onClick={() => addToCart1(item, 1)}>Buy 1</button>
              <button onClick={() => addToCart1(item, 2)}>Buy 2</button>
              <button onClick={() => addToCart1(item, 3)}>Buy 3</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Show;
