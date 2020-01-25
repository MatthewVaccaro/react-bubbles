import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    AxiosWithAuth()
      .get("/api/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.log("this is error", err);
      });
  });

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
