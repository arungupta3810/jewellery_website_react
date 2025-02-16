import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Components/routes";
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {routes?.map((route, index) => (
            <Route key={index} path={route.url} element={<Layout>{route?.component}</Layout>} />
          ))}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
