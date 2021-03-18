import "./App.css";
import NavbarComponent from "./components/Navbar";
import ContentComponent from "./components/Content";
function App() {
  const user = "Le Quoc Cuong";
  return (
    <div className="App">
      <NavbarComponent />
      <div className="content">
        <ContentComponent></ContentComponent>
      </div>
    </div>
  );
}

export default App;
