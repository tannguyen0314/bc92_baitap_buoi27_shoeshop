import { useState } from "react";
import data from "./data.json";
import ProductList from "./product-list";
import Modal from "./Modal";

export default function ShoesStore() {
  const [products, setProducts] = useState(data);
  const [productDetail, setProductDetail] = useState(data[0]);

  // Hàm thay đổi sản phẩm chi tiết để truyền xuống ProductItem
  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Shoes Store</h1>
      
      {/* Cấu trúc đúng theo đề bài yêu cầu */}
      <ProductList 
        productsData={products} 
        setStateModal={setStateModal} 
      />

      <Modal content={productDetail} />
    </div>
  );
}