export interface FilterDataType {
  city: string;
  area: string;
  stationsName: string;
  rentBike: number; // sbi
  emptyPosition: number; // bemp
  stationActive: boolean; // act
}

export interface NewDataType {
  area: string;
  areaData: FilterDataType[];
}
