import React, { createContext } from "react";

const initialState = {
  stations: [],
}

export const StationsContext = createContext(initialState);