import Context from "./Context";
import { useState } from "react";
const ContextComponent = ({ children }) => {
  const [IsCartOpen, setIsCartOpen] = useState(true);

  return (
    <Context.Provider value={{ IsCartOpen, setIsCartOpen }}>
      {children}
    </Context.Provider>
  );
};
export default ContextComponent;
