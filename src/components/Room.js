import "../scss/App.scss";

import Header from "./Header";
import Navigation from "./Navigation";

function App() {
  return (
    //React.Fragment
    <>
      <div className="wapper">
        <Header />
        <Navigation />
      </div>
    </>
  );
}

export default App;
