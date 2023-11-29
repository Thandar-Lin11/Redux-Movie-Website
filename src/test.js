import React, { useState, createContext, useContext } from 'react';
// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a provider (a component that will provide the context to its children)
const MyProvider = ({ children }) => {
  const [someState, setSomeState] = useState('Hello from context!');
  return (
    <MyContext.Provider value={{ someState, setSomeState }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Use the context in a child component
const ChildComponent = () => {
  const { someState, setSomeState } = useContext(MyContext);
  return (
    <div>
      <p>{someState}</p>
      <button onClick={() => setSomeState('New value')}>Change Value</button>
    </div>
  );
};

// Step 4: Wrap your app with the provider
const App = () => {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
};

export default App;
