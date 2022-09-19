import { useEffect } from "react";
import { Box, Card, CardHeader, Container } from "@mui/material";
import NavBar from "../../Components/Layout/NavBar";
import DetailTable from "../../Components/Table/detailtable";

const Detail: React.FC = () => {
  useEffect(() => {
    if (localStorage.user == null || localStorage.user == undefined)
      window.location.href = "/home";
  }, []);
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
