import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { Layout } from "./components/Layout";
import {Inicio} from "./components/Inicio";

function App() {
  return (
    <Layout>
      <Inicio />
      <ItemListContainer />
    </Layout>
  );
}

export default App;
