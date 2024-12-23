import { Outlet } from "react-router";
import Container from "../../shared/components/Container";

const RootLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex px-10">
      <Container className="flex-1 py-4">
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
