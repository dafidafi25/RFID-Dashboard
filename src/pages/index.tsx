import { Box, Card, CardHeader, Container } from "@mui/material";
import NavBar from "../Components/Layout/NavBar";
import LogTable from "../Components/Table/logTable";

const Dashboard: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Card sx={{ marginTop: 5 }}>
          <CardHeader title="Log Akses" />
          <LogTable />
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
