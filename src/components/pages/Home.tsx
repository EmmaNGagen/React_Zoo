import { Link } from "react-router-dom";
import { StyledHeading } from "../StyleComponents/Heading";
import { HomeWrapper, MainWrappper } from "../StyleComponents/Wrappers";

export const Home = () => {
  return (
    <MainWrappper>
      <HomeWrapper>
        <StyledHeading>
          {" "}
          Välkommen till vårt virtuella <Link to="/animals">Zoo</Link>
        </StyledHeading>
      </HomeWrapper>
    </MainWrappper>
  );
};
