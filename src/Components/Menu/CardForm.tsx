import {
  FormControl,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
} from "@mui/material";
import Swal from "sweetalert";

const CardForm: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          marginTop: 5,
          width: 600,
        }}
      >
        <CardHeader
          title="Pendaftaran Kartu RFID"
          sx={{ backgroundColor: "primary" }}
        />
        <CardContent>
          <FormControl fullWidth>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextField
                  rows={6}
                  fullWidth
                  placeholder="Nama Depan"
                  size="small"
                />
                <TextField
                  rows={6}
                  fullWidth
                  placeholder="Nama Belakang"
                  size="small"
                />
              </Stack>
              <Stack>
                <TextField
                  rows={6}
                  fullWidth
                  placeholder="Username"
                  size="small"
                />
              </Stack>
              <Stack>
                <TextField
                  rows={6}
                  fullWidth
                  placeholder="No HP"
                  size="small"
                />
              </Stack>
              <Stack>
                <TextField
                  rows={6}
                  fullWidth
                  placeholder="Email"
                  size="small"
                />
              </Stack>
              <Stack spacing={2} direction="row">
                <TextField
                  rows={6}
                  fullWidth
                  size="small"
                  placeholder="Pelat Nomor"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  fullWidth
                  color="success"
                  variant="contained"
                  onClick={() => {
                    Swal({
                      title: "Konfirmasi Simpan Data",
                      icon: "",
                      buttons: {
                        cancel: true,
                        confirm: true,
                      },
                    });
                  }}
                >
                  Konfirmasi
                </Button>
                <Button fullWidth color="error" variant="contained">
                  Reset
                </Button>
              </Stack>
            </Stack>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default CardForm;
