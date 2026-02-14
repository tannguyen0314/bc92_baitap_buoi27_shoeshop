export default function Cart(props) {
  const { onUpdateQty } = props;

  const renderCartItems = () => {
    const { carts } = props;

    return carts.map((item) => {
      return (
        <tr
          key={item.maSP}
          className="bg-neutral-primary border-b border-default"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
          >
            {item.tenSP}
          </th>
          <td className="px-6 py-4">
            <img src={item.hinhAnh} alt={item.tenSP} />
          </td>
          <td className="px-6 py-4">{item.giaBan}</td>
          <td className="px-6 py-4">
            <button onClick={() => onUpdateQty(item.maSP, false)}>-</button>
            {item.soLuong}
            <button onClick={() => onUpdateQty(item.maSP, true)}>+</button>
          </td>
          <td className="px-6 py-4">{item.giaBan * item.soLuong}</td>
        </tr>
      );
    });
  };

  const calcTotalQty = () => {
    const { carts } = props;

    return carts.reduce((total, item) => total + item.soLuong, 0);
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        type="button"
      >
        Cart ({calcTotalQty()})
      </button>
      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
              <h3 className="text-lg font-medium text-heading">Cart Details</h3>
              <button
                type="button"
                className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="space-y-4 md:space-y-6 py-4 md:py-6">
              <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                  <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderCartItems()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
