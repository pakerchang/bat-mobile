export interface TableDataType {
  stationsUID: number;
  city: string;
  area: string;
  stationsName: string;
  rentBike: number; // sbi
  emptyPosition: number; // bemp
  stationActive: boolean; // act
}

/**
 * @value area {string} 行政區
 * @value areaData {array} 行政區內站點
 */
export interface StationDataType {
  area: { name: string, checked: boolean };
  areaData: TableDataType[]
}
