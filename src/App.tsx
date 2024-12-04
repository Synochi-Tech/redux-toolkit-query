import { Route, Routes } from "react-router";
import ProductList from "./Components/ProductList";
import RootLayout from "./layouts/Root.layout";
import AboutPage from "./pages/About";
import Homepage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
