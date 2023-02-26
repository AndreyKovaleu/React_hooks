import React from "react";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Andrey'}>
        <ChannelContext.Provider value={"Cod111"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
