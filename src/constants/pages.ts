import { RootStackParamList } from "../navigation";

export type PagesKeyType =
  | "PRODUCTLIST"
  | "MAIN"
  | "MARKETLIST"
  | "MYLIST"
  | "PRODUCTMARKET"
  | "ERRORPRODUCTLIST"
  | "LOGIN"



const PAGES: Record<PagesKeyType, keyof RootStackParamList> = {
  PRODUCTLIST: "ProductList",
  MAIN: "Main",
  MARKETLIST: "MarketList",
  MYLIST: "MyList",
  PRODUCTMARKET: "ProductMarket",
  ERRORPRODUCTLIST: "ErrorProductList",
  LOGIN: "Login",
};

export const PageNames: { [key: string]: string } = {
  ProductList: "ProductList",
  Main: "Main",
  MarketList: "MarketList",
  MyList: "MyList",
  ProductMarket: "ProductMarket",
  ErrorProductList: "ErrorProductList",
  Login: "Login",

};

export enum PagesEnum {
  PRODUCTLIST,
  MAIN,
  MYLIST,
  PRODUCTMARKET,
  ERRORPRODUCTLIST,
  LOGIN,

}

export default PAGES;
