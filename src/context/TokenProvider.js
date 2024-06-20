import { useState } from "react";
import {TokenContext} from "./TokenContext";

export function TokenProvider(props) {
  let [token, settoken] = useState('13|6q974gXRFGDRALZRqxzEu9COONWUvAUzE2XXAvpNcb614aaa');
  const tokenHandler = (token1) => {
    settoken(token1);
  };
  let myValues = {
    token,
    tokenHandler,
  };
  return (
    <TokenContext.Provider value={myValues}>
     {props.children}
    </TokenContext.Provider>
  );
}

