import { RootStackParamList } from "../navigation";

export type PagesKeyType =
  | "PRODUCTLIST"
  | "MAIN"
  | "MARKETLIST"
  | "MYLIST"
  | "PRODUCTMARKET"
  | "ERRORPRODUCTLIST"
  | "LOGIN"
  | "PRIMEPAGES"
  | "REGISTRATIO"
  | "ADDPRODUCTS"
  | "EDITPRODUCTS"

const PAGES: Record<PagesKeyType, keyof RootStackParamList> = {
  PRODUCTLIST: "ProductList",
  MAIN: "Main",
  MARKETLIST: "MarketList",
  MYLIST: "MyList",
  PRODUCTMARKET: "ProductMarket",
  ERRORPRODUCTLIST: "ErrorProductList",
  LOGIN: "Login",
  PRIMEPAGES: "PrimePages",
  REGISTRATIO: "Registratio",
  ADDPRODUCTS: "AddProducts",
  EDITPRODUCTS: "EditProducts",
};

export const PageNames: { [key: string]: string } = {
  ProductList: "ProductList",
  Main: "Main",
  MarketList: "MarketList",
  MyList: "MyList",
  ProductMarket: "ProductMarket",
  ErrorProductList: "ErrorProductList",
  Login: "Login",
  PrimePages: "PrimePages",
  Registratio: "Registratio",
  AddProducts: "AddProducts",
  EditProducts: "EditProducts",
};

export enum PagesEnum {
  PRODUCTLIST,
  MAIN,
  MYLIST,
  PRODUCTMARKET,
  ERRORPRODUCTLIST,
  LOGIN,
  PRIMEPAGES,
  REGISTRATIO,
  ADDPRODUCTS,
  EDITPRODUCTS,
}

export default PAGES;
