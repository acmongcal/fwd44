import { createContext } from "react";

// A. useState + Context


// B. Scaled up with useReducer
export const initialState = {
  user: null,
};

export const UserContext = createContext(initialState);
