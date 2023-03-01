import ShortList from "./Components/ShortList/ShortList";
import Time from "../src/Components/Time/Time";
import Work from "./Components/Work/Work";
import Personal from "./Components/Personal/Personal";
import Quote from "./Components/Quote/Quote";
import Books from "./Components/Books/Books";

function App() {
  return (
    <div className="app-container">
      <div className="app-container-left">
      <Time/>
      <Quote/>
      <Work/>
      <ShortList/>
      <Personal/>
      <div className="imgBook">IMAGE 2</div>
      </div>
      <div className="app-container-right">
      <Books/>
      </div>
    </div>
  );
}

export default App;
