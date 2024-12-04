import { Outlet } from "react-router";
import Navigation from "../Components/layout/Navigation";
import Container from "../Components/shared/Container";

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
