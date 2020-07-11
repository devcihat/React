import React, { useEffect, useState } from "react";
import { CardDeck } from "react-bootstrap";
import AlbumCard from "./Card";

const AnaMenu = () => {
  const [data, setData] = useState([]);
  let getData = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("temiz data", res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();

    console.log("data yüklendinimi", data);
  }, []);
  console.log(data);
  return (
    <div className="container ">
      <div className="row bg-light">
        <CardDeck className="cardDeck">
          {data.map((val, i) => {
            return <AlbumCard data={val} key={i} />;
          })}
        </CardDeck>
      </div>
    </div>
  );
};

export default AnaMenu;
