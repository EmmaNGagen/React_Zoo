import { useParams, Link } from "react-router-dom";
import {
  StyledHeading,
  StyledParagraf,
  StyledSmallerHeading,
} from "../StyleComponents/Heading";
import { ImgStyle } from "../StyleComponents/ImageStyle";
import {
  DetailsWrapper,
  ImageWrapper,
  SingelAnimalWrapper,
  TextWrapper,
  ZooWrapper,
} from "../StyleComponents/Wrappers";
import { IAnimal } from "../../models/IAnimal";
import { useContext, useEffect, useState } from "react";
import { AnimalContext } from "../../contexts/AnimalContext";
import { FeedMe } from "../FeedMe";
interface IParams {
  id: string;
}

export const Animal = () => {
  const [singleAnimal, setSingleAnimal] = useState<IAnimal>({
    id: "",
    name: "",
    latinName: "",
    yearOfBirth: 0,
    shortDescription: "",
    longDescription: "",
    imageUrl: "",
    medicine: "",
    isFed: false,
    lastFed: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const animalsObject = useContext(AnimalContext);

  let params = useParams<Partial<IParams>>();

  useEffect(() => {
    console.log(animalsObject.animals);

    for (let i = 0; i < animalsObject.animals.length; i++) {
      if (params.id === animalsObject.animals[i].id.toString()) {
        setSingleAnimal(animalsObject.animals[i]);
        setIsLoading(false);
      }
    }
  }, [animalsObject.animals]);

  function feedAnimal() {
    console.log("this button was clicked");
    setSingleAnimal({ ...singleAnimal, isFed: true });
    animalsObject.feedAnimal(parseInt(singleAnimal.id));
  }

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <ZooWrapper>
          <Link to="/animals">Tillbaka</Link>
          <SingelAnimalWrapper>
            <StyledHeading>{singleAnimal.name} </StyledHeading>
            <StyledSmallerHeading>
              {" "}
              {singleAnimal.latinName}
            </StyledSmallerHeading>
            <ImageWrapper>
              <ImgStyle
                src={singleAnimal.imageUrl}
                alt={singleAnimal.name}
              ></ImgStyle>
            </ImageWrapper>
            <TextWrapper>
              <StyledParagraf>{singleAnimal.longDescription}</StyledParagraf>
            </TextWrapper>
            <DetailsWrapper>
              <StyledSmallerHeading>Född:</StyledSmallerHeading>
              <StyledParagraf>{singleAnimal.yearOfBirth} </StyledParagraf>
              <StyledSmallerHeading>Medicinering:</StyledSmallerHeading>
              <StyledParagraf>{singleAnimal.medicine} </StyledParagraf>
            </DetailsWrapper>
            {!singleAnimal.isFed && <FeedMe toggleFed={feedAnimal}></FeedMe>}
          </SingelAnimalWrapper>
        </ZooWrapper>
      )}
    </>
  );
};
