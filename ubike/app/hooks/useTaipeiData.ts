import { useState, useEffect } from "react";
import { NewDataType, FilterDataType } from "@/components/types/index";

type ItemDataType = {
  sno: string;
  sna: string;
  sarea: string;
  bemp: string;
  sbi: string;
  act: string;
  [key: string]: any;
};

function useTaipeiData<T extends ItemDataType>(originData: T[]): NewDataType[] {
  const [data, setData] = useState<NewDataType[]>([]);

  /**
   * @description 處理原始資料並取得台北市的行政區清單
   * @param 台北市靜態資料
   * @return 返回縣市行政區
   */
  function filterArea(data: T[]): { name: string; checked: boolean }[] {
    const area = Array.from(new Set(data.flatMap((item) => (item.sarea ? [item.sarea] : []))));
    return area.map((item) => ({ name: item, checked: true }));
  }

  /**
   * @description 重組資料統整結構
   */
  function dataCleaning(data: T[]) {
    return data.map((item) => ({
      stationsUID: Number(item.sno),
      city: "台北市",
      area: item.sarea,
      stationsName: item.sna.replace(/[^\u4e00-\u9fa5]/g, ""),
      rentBike: Number(item.sbi),
      emptyPosition: Number(item.bemp),
      stationActive: item.act === "1" ? true : false,
    }));
  }

  useEffect(() => {
    if (originData) {
      const areaResult = filterArea(originData);
      const tempData = dataCleaning(originData);

      const splitData = areaResult.reduce((result, areaObj) => {
        result.push({ area: areaObj, areaData: tempData.filter((item) => item.area === areaObj.name) });
        return result;
      }, [] as { area: { name: string; checked: boolean }; areaData: FilterDataType[] }[]);

      setData(splitData);
    }
  }, [originData]);

  return data;
}

export default useTaipeiData;
