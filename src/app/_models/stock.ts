export class Stock {
    stockid: number;
    stock_code: string;
    description: string;
    instock: number;
    uom: string;
    unit_cost: number;
}

export const Stocks: Stock[] = [
    {stockid: 1, stock_code: "P001", description: "Titanium Dioxide", instock: 489, uom: "Litres",unit_cost:12.00},
    {stockid: 2, stock_code: "P002", description: "Zinc Oxide ", instock: 455, uom: "Litres",unit_cost:12.00},
    {stockid: 3, stock_code: "P003", description: "Mineral Turpentine", instock: 98, uom: "Litres",unit_cost:12.00},
    {stockid: 4, stock_code: "P004", description: "Titanium Dioxide, ", instock: 269, uom: "Litres",unit_cost:12.00},
    {stockid: 5, stock_code: "P005", description: "Chrome Pigment, ", instock: 980, uom: "Litres",unit_cost:12.00},
    {stockid: 6, stock_code: "P006", description: "Earths, ", instock: 530, uom: "Litres",unit_cost:12.00},
    {stockid: 7, stock_code: "P007", description: "Lead Pigments, ", instock: 50, uom: "Litres",unit_cost:12.00},
    {stockid: 8, stock_code: "P008", description: "Zinc Pigments. ·", instock: 969, uom: "Litres",unit_cost:12.00},
    {stockid: 9, stock_code: "P009", description: "Toner", instock: 526, uom: "Litres",unit_cost:12.00},
    {stockid: 10, stock_code: "P010", description: "Aluminum Hydroxide, ", instock: 135, uom: "Litres",unit_cost:12.00},
    {stockid: 11, stock_code: "P011", description: "Barium Sulfate Or Clay", instock: 388, uom: "Litres",unit_cost:12.00},

];