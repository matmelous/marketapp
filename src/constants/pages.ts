import { RootStackParamList } from "../navigation";

export type PagesKeyType =
  | "PRODUCTLIST"
  | "MAIN"
  | "MARKETLIST"
  | "MYLIST"
  | "PRODUCTMARKET"
  | "ERRORPRODUCTLIST"



const PAGES: Record<PagesKeyType, keyof RootStackParamList> = {
  PRODUCTLIST: "ProductList",
  MAIN: "Main",
  MARKETLIST: "MarketList",
  MYLIST: "MyList",
  PRODUCTMARKET: "ProductMarket",
  ERRORPRODUCTLIST: "ErrorProductList",
};

export const PageNames: { [key: string]: string } = {
  ProductList: "ProductList",
  Main: "Main",
  MarketList: "MarketList",
  MyList: "MyList",
  ProductMarket: "ProductMarket",
  ErrorProductList: "ErrorProductList"

};

export enum PagesEnum {
  PRODUCTLIST,
  MAIN,
  MYLIST,
  PRODUCTMARKET,
  ERRORPRODUCTLIST,

}

export default PAGES;
