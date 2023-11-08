import Footer from "./components/Footer";
import Slide from "./components/Slide";
import { publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='font-inter overflow-x-hidden'>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route path={route.path} element={<Page />} key={index} />;
        })}
      </Routes>

      <Slide />
      <Footer />
    </div>
  );
}

export default App;
