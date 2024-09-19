import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Components/routes";
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {routes?.map((route, index) => (
        <Route element={<Header />}>
            <Route key={index} path={route.url} element={route.component} />
        </Route>
          ))}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
