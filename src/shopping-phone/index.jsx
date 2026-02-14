import ListPhone from "./list-phone";
import Detail from "./detail";
import Cart from "./cart";
import { useState } from "react";
import data from "./data.json";

export default function ShoppingPhone() {
  const [listPhones, setListPhones] = useState(data);
  const [selectedPhone, setSelectedPhone] = useState(data[0]);
  const [carts, setCarts] = useState([]);

  /**
   * Nhận data từ list-phone <= phone
   */
  const handleDetail = (phone) => {
    setSelectedPhone(phone);
  };

  const findItemInCart = (maSP) => {
    return carts.findIndex((item) => item.maSP === maSP);
  };

  /**
   * Nhận data từ list-phone <= phone
   */
  const handleAddToCart = (phone) => {
    /**
     * Xử lý lại phone để thêm vào giỏ hàng
     */
    const phoneCart = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      hinhAnh: phone.hinhAnh,
      soLuong: 1,
      giaBan: phone.giaBan,
    };

    const index = findItemInCart(phoneCart.maSP);

    const cartsUpdate = [...carts];
    if (index !== -1) {
      // update số lượng
      cartsUpdate[index].soLuong += 1;
    } else {
      // thêm mới
      cartsUpdate.push(phoneCart);
    }

    setCarts(cartsUpdate);
  };

  /**
   * Nhận data từ cart component
   */
  const handleUpdateQty = (maSP, status) => {
    const index = findItemInCart(maSP);

    if (index !== -1) {
      const cartsUpdate = [...carts];
      if (status) {
        // tăng số lượng
        cartsUpdate[index].soLuong += 1;
      } else {
        // giảm số lượng
        if (cartsUpdate[index].soLuong > 1) {
          cartsUpdate[index].soLuong -= 1;
        } else {
          // xoá khỏi giỏ hàng
          cartsUpdate.splice(index, 1);
        }
      }
      setCarts(cartsUpdate);
    }
  };

  return (
    <div>
      <h1>* ShoppingPhone</h1>
      <Cart carts={carts} onUpdateQty={handleUpdateQty} />
      <ListPhone
        listPhonesProps={listPhones}
        onDetail={handleDetail}
        onAddToCart={handleAddToCart}
      />
      <Detail selectedPhone={selectedPhone} />
    </div>
  );
}
