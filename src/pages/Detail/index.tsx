import { Box, Card, CardHeader, Container } from "@mui/material";
import NavBar from "../../Components/Layout/NavBar";
import DetailTable from "../../Components/Table/detailtable";

const Detail: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Card sx={{ marginTop: 5 }}>
          <CardHeader title="Log Akses" />
          <DetailTable />
        </Card>
      </Container>
    </>
  );
};

export default Detail;
