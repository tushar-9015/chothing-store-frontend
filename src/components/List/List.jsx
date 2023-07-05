import React from "react";
import "./list.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {

  let fetchUrlString = `/products?populate=*&[filters][categories][id]=${catId}&[filters][price][$lte]=${maxPrice}`

  // console.log(subCats);
  const subCatString = subCats.map(
    (item, idx) => `[filters][sub_categories][id][$in][${idx}]=${item}`
  ).join('&');

  if(subCats.length > 0){
    fetchUrlString = fetchUrlString + '&' + subCatString
  }

  if(sort){
    fetchUrlString = fetchUrlString + `&sort[0]=price:${sort}`
  }

  console.log(fetchUrlString);
  
  
  const { data, loading, error } = useFetch( fetchUrlString);

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
