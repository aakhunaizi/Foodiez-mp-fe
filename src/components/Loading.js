import PulseLoader from "react-spinners/PulseLoader";
import { LoadingWrapper, Title } from "../styles";

const LoadingScreen = () => {
  return (
    <>
      <LoadingWrapper>
        <Title style={{ marginRight: "2%" }}>Loading Categories</Title>
        <PulseLoader color="red" size={300} />
      </LoadingWrapper>
    </>
  );
};

export default LoadingScreen;