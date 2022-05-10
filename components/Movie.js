import styled from "styled-components";
import osraImage from "../assets/images/Senhor-dos-aneis.jpg"
import harryImage from "../assets/images/Harry-Potter.jpg"
import bastardosImage from "../assets/images/Bastardos-inglorios.jpg"

function Movie() {
    return (
        <Container>
            <MovieCard>
                <Title>O Senhor dos Anéis</Title>
                <CardImage src={osraImage} alt="Imagem Senhor dos Anéis" />
                <Resumo>
                    Em uma terra fantástica e única, 
                    um hobbit recebe de presente de seu tio um anel mágico
                    e maligno que precisa ser destruído antes que caia nas mãos do mal.
                    Para isso, <Realce>o hobbit Frodo</Realce> tem um caminho árduo pela frente,
                    onde encontra perigo, medo e seres bizarros. 
                    Ao seu lado para o cumprimento desta jornada,
                    ele aos poucos pode contar com outros hobbits, 
                    um elfo, um anão, dois humanos e um mago,
                    totalizando nove seres que formam a Sociedade do Anel.
                </Resumo>
            </MovieCard>
            <MovieCard>
                <Title>Harry Potter</Title>
                <CardImage src={harryImage} alt="Imagem Harry Potter" />
                <Resumo>
                    <Realce>Harry Potter</Realce> é um garoto órfão que
                    vive infeliz com seus tios, os Dursleys.
                    Ele recebe uma carta contendo um convite
                    para ingressar em Hogwarts, uma famosa escola 
                    especializada em formar jovens bruxos.
                    Inicialmente, Harry é impedido de ler a carta por seu tio,
                    mas logo recebe a visita de Hagrid,
                    o guarda-caça de Hogwarts,
                    que chega para levá-lo até a escola. 
                    Harry adentra um mundo mágico que jamais imaginara,
                    vivendo diversas aventuras com seus novos amigos,
                    Rony Weasley e Hermione Granger.
                </Resumo>
            </MovieCard>
            <MovieCard>
                <Title>Bastardos Inglórios</Title>
                    <CardImage src={bastardosImage} alt="Imagem Bastardos Inflorios" />
                <Resumo>
                    Durante a Segunda Guerra Mundial,
                    na França, um grupo de judeus americanos conhecidos
                    como <Realce>Bastardos</Realce> espalha o terror entre o terceiro Reich.
                    Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, 
                    planeja vingança quando um evento em seu cinema 
                    reunirá os líderes do partido.
                </Resumo>
            </MovieCard>
        </Container>
    )
};

const Container = styled.div`
    height: 80vh;
    background-color: #56BBF1;
    font-size: 15px;
    padding: 5%;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
`;

const MovieCard = styled.div`
    background-color: #B4ECE3;
    height: 500px;
    font-size: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
`;

const Resumo = styled.div` 
    font-size: 12px;
    margin: 20px;
`;

const CardImage = styled.img`
    height: 200px;
`;

const Realce = styled.span`
    color: red;
`;

export default Movie;
