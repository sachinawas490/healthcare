import React, { createContext, useState } from 'react';

// Create the context
export const hcontext = createContext();

// Context provider component
function Context({ children }) {
    const [index, setindex] = useState(-1);
    const [data, setdata] = useState([]);
  return (
    <hcontext.Provider value={{data,setdata,index,setindex }}>
      {children} {/* This will render the children components */}
    </hcontext.Provider>
  );
}

export default Context;
