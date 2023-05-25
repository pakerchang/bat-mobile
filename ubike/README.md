# 面試測驗題 Demo

主要功能聚焦在`站點資訊`的區塊
搜索功能之間具備連動關係，當勾選行政區時，下方 Table 會根據勾選的區域增減顯示資料  
資料顯示狀控制邏輯存放在 `components/station-info/index.tsx`

- Table:
  - 排序
  - 分頁控制
- hooks:
  - useTaipeiData
    - 重組並整理成固定渲染格式(json)

## Types

TableType

```ts
stationsUID: number;
city: string;
area: string;
stationsName: string;
rentBike: number; // sbi
emptyPosition: number; // bemp
stationActive: boolean; // act
```

Props type

```ts
  area: { name: string, checked: boolean };
  areaData: FilterDataType[]

```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
