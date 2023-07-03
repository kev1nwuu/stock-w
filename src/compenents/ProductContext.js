import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProductInfo, setSelectedProductInfo] = useState(null);

  const selectProduct = (product) => {
    setSelectedProductInfo(product);
  };

  return (
    <ProductContext.Provider value={{ selectedProductInfo, selectProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
