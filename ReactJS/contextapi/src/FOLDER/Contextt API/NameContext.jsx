import React from "react";

// Create the context
const NameContext = React.createContext();

export const NameProvider = NameContext.Provider;
export const NameConsumer = NameContext.Consumer;

export default NameContext;
