import React from "react";
import "./list.scss";
import Card from "../Card/Card";

const List = ({ products, loading, errors }) => {

  if(loading){
    return <p>Loading...</p>
  }

  if(errors) {
    return <p>Error - {errors[0]}</p>
  }

  if (products.length === 0) return <p>No products found</p>;

  return (
    <div className="list">
      {products.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>        
  );
};

export default List;