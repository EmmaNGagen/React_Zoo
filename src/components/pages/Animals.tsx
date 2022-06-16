import { MainWrappper, StyledWrapper } from "../StyleComponents/Wrappers";
import {
  StyledHeading,
  StyledLink,
  StyledParagraf,
} from "../StyleComponents/Heading";
import { ImageStyle } from "../StyleComponents/ImageStyle";
import { Animaldiv } from "../StyleComponents/Wrappers";
import { ImageWrapper } from "../StyleComponents/Wrappers";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AnimalContext } from "../../contexts/AnimalContext";

export const Animals = () => {
  const animalsObject = useContext(AnimalContext);

  console.log(animalsObject.animals);

  return (
    <MainWrappper>
      <StyledWrapper>
        {animalsObject.animals.map((animal) => {
          return (
            <>
              <Animaldiv>
                {" "}
                <StyledLink>
                  <Link to={"/animal/" + animal.id} key={animal.id}>
                    <StyledHeading>{animal.name}</StyledHeading>
                    <ImageWrapper>
                      <ImageStyle
                        src={animal.imageUrl}
                        alt={animal.name}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://st2.depositphotos.com/3394139/6155/i/450/depositphotos_61554837-stock-photo-sketch-dodo-bird-in-vintage.jpg";
                        }}
                      ></ImageStyle>
                    </ImageWrapper>

                    <StyledParagraf>{animal.shortDescription}</StyledParagraf>
                  </Link>
                </StyledLink>
              </Animaldiv>
            </>
          );
        })}
      </StyledWrapper>
    </MainWrappper>
  );
};
