import { Route, Routes } from "react-router";
import RootLayout from "./layouts/Root.layout";
import Homepage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
