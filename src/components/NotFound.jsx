import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
    return ( 
        <Container className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Page Not Found</h1>
                <Link to = "/">
                <button className="btn btn btn-outline-primary">Home page </button>
                </Link>
            </div>
        </Container>
     );
}

const Container = styled.div`
    min-height: 100vh;
`;

export default NotFound;