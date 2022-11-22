import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div>
      <MyNav navTitle="MyNav" />
      <div className="main-container">
        <Welcome subtitle="Book Store" />
        <LatestRelease />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
