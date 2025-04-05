import mainContext from "./context";

const MainStateStore = (props) => {
  return (
    <mainContext.Provider value={{}}>{props.children}</mainContext.Provider>
  );
};

export default MainStateStore;
