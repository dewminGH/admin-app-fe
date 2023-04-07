export const setObjectToArray = (ObjAr: object[], swap?: { startIndex: number; endIndex: number }) => {
  const Product: string[][] = ObjAr.map((obj: Object) => Object.values(obj));
  if (swap) {
    for (let i = 0; i < Product.length; i++) {
      [Product[i][swap.startIndex], Product[i][swap.endIndex]] = [
        Product[i][swap.endIndex],
        Product[i][swap.startIndex],
      ];
    }
  }
  return Product;
};
