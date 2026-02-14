export default function Phone(props) {
  const { phoneProps, onDetail, onAddToCart } = props;
  const { tenSP, hinhAnh } = phoneProps;

  const handleTransferDetail = () => {
    onDetail(phoneProps);
  };

  return (
    <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
      <a href="#">
        <img className="rounded-t-base" src={hinhAnh} alt={tenSP} />
      </a>
      <div className="p-6 text-center">
        <a href="#">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {tenSP}
          </h5>
        </a>
        <button
          onClick={handleTransferDetail}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Xem chi tiết
        </button>
        <button
          onClick={() => onAddToCart(phoneProps)}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}
