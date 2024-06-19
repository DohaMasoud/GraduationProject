import { useState } from "react";
import {TokenContext} from "./TokenContext";

export function TokenProvider(props) {
  const api_url = "http://127.0.0.1:8000/api/auth/login";

  let [token, settoken] = useState();
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

