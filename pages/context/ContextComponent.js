import Context from "../../utils/Context";
import { useState } from "react";
const ContextComponent = (props) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([{}]);
  const [IsAuthorized, setIsAuthorized] = useState(false);
  const [UserData, setUserData] = useState({});
  const [ConfirmPurchaseOptions, setConfirmPurchaseOptions] = useState({
    show: false,
    bookName: "",
    bookId: "",
    sellerId: "",
    bookImage: "",
    price: 0,
  });
  return (
    <Context.Provider
      value={{
        IsCartOpen,
        setIsCartOpen,
        CartItems,
        setCartItems,
        IsAuthorized,
        setIsAuthorized,
        UserData,
        setUserData,
        ConfirmPurchaseOptions,
        setConfirmPurchaseOptions,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextComponent;
