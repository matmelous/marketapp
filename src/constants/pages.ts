import { RootStackParamList } from "../navigation";

export type PagesKeyType =
  | "PRODUCTLIST"
  | "MAIN"

const PAGES: Record<PagesKeyType, keyof RootStackParamList> = {
  PRODUCTLIST: "ProductList",
  MAIN: "Main",
};

export const PageNames: { [key: string]: string } = {
  ProductList: "ProductList",
  Main: "Main",
};

export enum PagesEnum {
  PRODUCTLIST,
  MAIN,
}

export default PAGES;
