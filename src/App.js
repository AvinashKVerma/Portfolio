import "./App.css";
import Header from "./components/Header/Header";
import Testing from "./Testing";
// import Feed from "./components/Feed";

// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="feeed">
        {/* <Feed /> */}
        <Testing />
      </div>
      {/* <footer className="moreInsurance"><Footer /> </footer> */}
    </div>
  );
}

export default App;
