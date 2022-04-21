import {
  FormControl,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert";
import axios from "axios";

//  onClick={() => {
//                 Swal({
//                   title: "Konfirmasi Simpan Data",
//                   icon: "",
//                   buttons: {
//                     cancel: true,
//                     confirm: true,
//                   },
//                 });
//               }}
const baseApi = "https://cd1b-158-140-163-210.ngrok.io";

const CardForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [plateNumber, setPlateNumber] = useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmitForm = () => {
    if (isLoading) {
      alert("loading");
      return;
    }
    if (
      firstName == "" ||
      lastName == "" ||
      phone == "" ||
      email == "" ||
      plateNumber == ""
    ) {
      return;
    }

    setIsLoading(true);

    var config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        `${baseApi}/api/register/`,
        {
          name: firstName,
          phone: phone,
          email: email,
          plate_number: plateNumber,
        },
        config
      )
      .then(() => {
        handleReset();
        setIsLoading(false);
      })
      .catch(() => {
        handleReset();

        setIsLoading(false);
      });

    // setIsLoading(false);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setPhone("");
    setEmail("");
    setPlateNumber("");
  };

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
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                rows={6}
                fullWidth
                placeholder="Nama Depan"
                label="Name Depan"
                size="small"
                name="first_name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                rows={6}
                fullWidth
                placeholder="Nama Belakang"
                label="Nama Belakang"
                size="small"
                name="last_name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Stack>

            <Stack>
              <TextField
                rows={6}
                fullWidth
                placeholder="No HP"
                label="No HP"
                size="small"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Stack>
            <Stack>
              <TextField
                rows={6}
                fullWidth
                placeholder="Email"
                label="Email"
                size="small"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Stack>
            <Stack spacing={2} direction="row">
              <TextField
                rows={6}
                fullWidth
                size="small"
                label="Pelat Nomor"
                placeholder="Pelat Nomor"
                name="plate_number"
                value={plateNumber}
                onChange={(e) => {
                  setPlateNumber(e.target.value);
                }}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                color="success"
                variant="contained"
                type="submit"
                onClick={handleSubmitForm}
              >
                Konfirmasi
              </Button>
              <Button
                onClick={handleReset}
                fullWidth
                color="error"
                variant="contained"
              >
                Reset
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default CardForm;
