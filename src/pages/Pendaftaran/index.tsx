import { Box, Container } from "@mui/material";
import NavBar from "../../Components/Layout/NavBar";
import CardForm from "../../Components/Menu/CardForm";

const RegisterPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardForm />
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
