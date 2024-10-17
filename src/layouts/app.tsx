import "./app.css";
import { DataProvider } from "../context/data-context";
import LeftPanel from "./left-panel";
import TextArea from "./text-area";
import NavBar from "../components/nav-bar";

function App() {
  return (
    <>
      <main>
        <DataProvider>
          <LeftPanel />
          <div className="leftContainer">
            <NavBar />
            <TextArea />
          </div>
        </DataProvider>
      </main>
    </>
  );
}

export default App;
