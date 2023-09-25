import WineBarTwoToneIcon from "@mui/icons-material/WineBarTwoTone";
import { Box, Typography, Container, styled } from "@mui/material";
import bannerVideo from "../../assets/banner-video.mp4";

const Header = () => {
    const Video = styled("video")({
        width: "100%",
        maxHeight: "450px",
        objectFit: "cover",
        objectPosition: "50% 80%",
    });

    return (
        <Container disableGutters maxWidth={false}>
            <Box
                sx={{
                    backgroundColor: "black",
                    display: "flex",
                    width: "100%",
                    height: "125px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <WineBarTwoToneIcon
                    htmlColor="white"
                    sx={{ fontSize: "40px" }}
                />
                <Typography
                    fontWeight="700"
                    fontSize="35px"
                    fontStyle="italic"
                    color="white"
                    fontFamily="Allura"
                >
                    Landing Vinos
                </Typography>
            </Box>
            <Box component="main" maxHeight="450px">
                <Video src={`.${bannerVideo}`} autoPlay muted playsInline loop />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: -1,
                }}
                bgcolor="#59114D"
                width="100%"
                height="200px"
            >
                <Typography
                    fontWeight="700"
                    color="#ECDCB0"
                    fontStyle="italic"
                    fontSize="25px"
                    fontFamily="dancing script"
                >
                    Landing Vinos
                </Typography>
            </Box>
        </Container>
    );
};

export default Header;
