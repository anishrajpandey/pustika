import Context from "../../utils/Context";
import { useState } from "react";
const ContextComponent = (props) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([{}]);
  const [IsAuthorized, setIsAuthorized] = useState(false);
  return (
    <Context.Provider
      value={{
        IsCartOpen,
        setIsCartOpen,
        CartItems,
        setCartItems,
        IsAuthorized,
        setIsAuthorized,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextComponent;
