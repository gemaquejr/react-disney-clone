import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import Viewers from "../Viewers/Viewers";
import Recommends from "../Recommends/Remommends";

const Home = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
        </Container>
    )
}

const Container = styled.main`
    display: block;
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;