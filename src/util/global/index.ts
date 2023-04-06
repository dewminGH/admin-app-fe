export const setObjectToArray = (ObjAr: object[]) => {
  const Product: string[][] = ObjAr.map((obj: Object) => Object.values(obj));
  return Product;
};
