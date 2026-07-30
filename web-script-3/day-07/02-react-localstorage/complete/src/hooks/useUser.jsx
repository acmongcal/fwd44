import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// Custom hook to use the context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}