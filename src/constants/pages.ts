import { RootStackParamList } from "../navigation";

export type PagesKeyType =
  | "PRODUCTLIST";

const PAGES: Record<PagesKeyType, keyof RootStackParamList> = {
  PRODUCTLIST: "ProductList"
};

export const PageNames: { [key: string]: string } = {
  ProductList: "ProductList"
};

export enum PagesEnum {
  PRODUCTLIST,
}

export default PAGES;
