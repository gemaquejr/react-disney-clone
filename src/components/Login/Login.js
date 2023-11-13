import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Disney+ is the dedicated streaming home for movies and shows from Disney, Pixar, Marvel,
                        Star Wars, and National Geographic, along with The Simpsons and much more.
                        In select international markets, it also includes the general entertainment content brand, Star.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );    
};

const Container = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    margin-bottom: 10vw;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    display: flex;
    max-width: 650px;
    flex-direction: column;
    width: 100%;
    `;

const CTALogoOne = styled.img`
    display: block;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: #f2f2f2;
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    display: inline-block
    max-width: 600px;
    margin-bottom: 20px;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;