import { createContext } from "react";

export let Context = createContext(); // ✅ Context create kita

let ContextProvider = (props) => {
  let contextValue = {}; // ✅ Context value define kita

  return (
    <Context.Provider value={contextValue}>
      {" "}
      {/* ✅ Context.Provider use karna! */}
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider; // ✅ Export karna
