import react, { useState, useContext, createContext, useEffect } from "react";

import { getItem } from "../core/storage/storage";


 export const context = createContext({ Users: [], set_users: () => {} });


function Usercontex(prob) {
 
  const [Users, set_users] = useState<([]);


  return (
    <>
      <contex.Provider value={{ Users, set_users }}>
        {prob.children}
      </contex.Provider>
    </>
  );
}

export default Usercontex;
