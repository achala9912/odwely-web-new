import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import OdwelyRouter from "./Routes/OdwelyRouter";

function App() {
  return (
    <Router>
      <Layout>
        <OdwelyRouter />
      </Layout>
    </Router>
  );
}

export default App;
