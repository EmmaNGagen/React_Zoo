import { FeedBtn } from "./StyleComponents/Details";

interface IFeedProps {
  toggleFed(): void;
}
export const FeedMe = (props: IFeedProps) => {
  const handleClick = () => {
    props.toggleFed();
  };

  return (
    <>
      <FeedBtn onClick={handleClick}>Mata mig</FeedBtn>
    </>
  );
};
