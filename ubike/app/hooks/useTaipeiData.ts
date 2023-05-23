"use client";
import React, { useState, useEffect } from "react";

type ItemDataType = {
  sna: string;
  sarea: string;
  bemp: string;
  sbi: string;
  act: string;
  [key: string]: any;
};

interface FilterDataType {
  city: string;
  area: string;
  stationsName: string;
  rentBike: number; // sbi
  emptyPosition: number; // bemp
  stationActive: boolean; // act
}

interface NewDataType {
  area: string;
  areaData: FilterDataType[];
}

function useTaipeiData<T extends ItemDataType>(originData: T[]): NewDataType[] {
  const [data, setData] = useState<NewDataType[]>([]);

  /**
   * @description 處理原始資料並取得台北市的行政區清單
   * @param 台北市靜態資料
   * @return 返回縣市行政區
   */
  function filterArea(data: T[]): string[] {
    return Array.from(new Set(data.flatMap((item) => (item.sarea ? [item.sarea] : []))));
  }

  /**
   * @description 重組資料統整結構
   */
  function dataCleaning(data: T[]) {
    return data.map((item) => ({
      city: "台北市",
      area: item.sarea,
      stationsName: item.sna.replace(/YouBike2\.0_/g, ""),
      rentBike: Number(item.sbi),
      emptyPosition: Number(item.bemp),
      stationActive: item.act === "1" ? true : false,
    }));
  }

  useEffect(() => {
    if (originData) {
      const areaResult = filterArea(originData);
      const tempData = dataCleaning(originData);

      const splitData = areaResult.reduce((result, areaName) => {
        result.push({ area: areaName, areaData: tempData.filter((item) => item.area === areaName) });
        return result;
      }, [] as { area: string; areaData: FilterDataType[] }[]);

      setData(splitData);
    }
  }, [originData]);

  return data;
}

export default useTaipeiData;
