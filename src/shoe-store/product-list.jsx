import ProductItem from "./product-item";

export default function ProductList(props) {
  const { productsData, setStateModal } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productsData.map((product) => {
        return (
          <ProductItem 
            key={product.id} 
            item={product} 
            setStateModal={setStateModal} 
          />
        );
      })}
    </div>
  );
}