import styled from "styled-components";

function Rodape() {
    return (
        <Container>
            <Realce>Copyright © </Realce> 2022 
        </Container>
    )
};

const Realce = styled.span`
    font-weight: 700;
`;


const Container = styled.div`
    height: 15vh;
    width: 100%;
    background-color: #4D77FF;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Rodape;