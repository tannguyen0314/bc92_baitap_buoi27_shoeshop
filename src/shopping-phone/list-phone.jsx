import Phone from "./phone";

export default function ListPhone(props) {
  const renderListPhones = () => {
    const { listPhonesProps, onDetail, onAddToCart } = props;
    return listPhonesProps.map((item) => {
      return (
        <Phone
          key={item.maSP}
          phoneProps={item}
          onDetail={onDetail}
          onAddToCart={onAddToCart}
        />
      );
    });
  };

  return <div className="grid grid-cols-3">{renderListPhones()}</div>;
}
