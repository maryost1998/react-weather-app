
import './styles.css';
import SourceCode from "./source-code";
import Header from "./header-info";
import Prediction from "./forecast";

import Navbar from "./navbar";



function App() {
  return (
      <div className="App">
        <div className="container">
            <Navbar />
            <Header />
            <Prediction />
            <SourceCode />
        </div>
      </div>
  );
}

export default App;
