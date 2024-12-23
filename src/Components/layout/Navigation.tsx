import { NavLink } from "react-router";
import Container from "../../../shared/components/Container";

const Navigation = () => {
  return (
    <Container>
      <div className="flex">
        <NavLink to={"/product"} className="p-2">
          Product
        </NavLink>
        <NavLink to={"/about"} className="p-2">
          About
        </NavLink>
      </div>
    </Container>
  );
};

export default Navigation;
