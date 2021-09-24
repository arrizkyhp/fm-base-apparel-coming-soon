import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/Home";
import "./assets/css/style.css";

function App() {
  return (
     <Router basename="/fm-base-apparel-coming-soon">
        <Route exact path="/" component={Home} />
    </Router>

  );
}

export default App;
