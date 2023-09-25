import { CardContainer } from "./Components/Card/CardContainer";
import { Container } from "@mui/material";
import { Footer, Header } from "./Components";
import BackgroundBody from "./assets/background-body.jpg";

function App() {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: `url(.${BackgroundBody})`,
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
            }}
        >
            <Header />
            <CardContainer />
            <Footer />
        </Container>
    );
}

export default App;
