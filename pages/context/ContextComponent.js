import Context from "./Context";
import { useState } from "react";
const ContextComponent = ({ children }) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([{}]);

  return (
    <Context.Provider
      value={{ IsCartOpen, setIsCartOpen, CartItems, setCartItems }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextComponent;
