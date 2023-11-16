import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import Viewers from "../Viewers/Viewers";
import Recommends from "../Recommends/Remommends";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Trending from "../Trending/Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "movies"));

      snapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        switch (data.type) {
          case "recommend":
            recommends = [...recommends, data];
            break;

          case "new":
            newDisneys = [...newDisneys, data];
            break;

          case "original":
            originals = [...originals, data];
            break;

          case "trending":
            trending = [...trending, data];
            break;

          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    };

    fetchData();
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;