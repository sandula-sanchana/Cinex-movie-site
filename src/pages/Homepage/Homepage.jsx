import {Header} from "../../Components/Header/Header.jsx";
import {Carousels} from "../../Components/Carousels/Carousels.jsx";
import Container from 'react-bootstrap/Container';
import './Homepage.css'


export const Homepage = () => {
    return (
        <>
            <Header />
            <Carousels />
           <Container fluid className="d-flex justify-content-center align-items-center middle-header">
              <h1 className>Latest Releases</h1>
           </Container>
        </>
    )
}