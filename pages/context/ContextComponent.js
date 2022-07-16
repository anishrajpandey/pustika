import Context from "../../utils/Context";
import { useState } from "react";
const ContextComponent = (props) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([{}]);

  return (
    <Context.Provider
      value={{ IsCartOpen, setIsCartOpen, CartItems, setCartItems }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextComponent;
// hello world this is a test and i am super excited t
