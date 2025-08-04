import MainBtn from "../components/MainBtn";
const Home = () => {
  return (
    <div className="mt-70 ml-70">
      <MainBtn
        variant="contained"
        color="primary"
        size="large"
        gradient
        hoverEffect="lift"
        onClick={() => alert("salam")}
      >
        salam
      </MainBtn>
    </div>
  );
};

export default Home;
