import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const Singleproductpage = () => {
  const [seacrchparams, setSearchparams] = useSearchParams();
  const initialfilter = seacrchparams.getAll("id");
  console.log(initialfilter);
  return <div>Singleproductpage{initialfilter}</div>;
};

export default Singleproductpage;
