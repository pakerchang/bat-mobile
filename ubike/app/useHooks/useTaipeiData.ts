"use client";
import React, { useState, useEffect } from "react";

function useTaipeiData<T> = (originData):T[] => {
  const [data, setData] = useState([]);

  const filterArea = (data) => {
    // return new Set(data.filter((item) => item.sarea));
  };
};
