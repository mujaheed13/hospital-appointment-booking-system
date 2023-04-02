import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  chakra,
} from "@chakra-ui/react";

const userIdOptions = [
  { label: "John Doe", value: "john-doe" },
  { label: "Jane Smith", value: "jane-smith" },
  { label: "Bob Johnson", value: "bob-johnson" },
];

const doctorIdOptions = [
  { label: "Dr. James Lee", value: "james-lee" },
  { label: "Dr. Sarah Patel", value: "sarah-patel" },
  { label: "Dr. Mark Chen", value: "mark-chen" },
];

const appointmentSlotOptions = [
  { label: "9:00 AM - 10:00 AM", value: "9-10" },
  { label: "10:00 AM - 11:00 AM", value: "10-11" },
  { label: "11:00 AM - 12:00 PM", value: "11-12" },
];
// const baseURL = "https://lifecare-mwbk.onrender.com"
const baseURL = "http://localhost:8080"

function AppointmentForm() {
  const [userId, setUserId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentSlot, setAppointmentSlot] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    console.log("User ID:", userId);
    console.log("Doctor ID:", doctorId);
    console.log("Appointment Slot:", appointmentSlot);
    // TODO: Add logic to submit form data to server

    const obj = { user_id: userId, doctor_id: doctorId, appointment_slot: {Time:appointmentSlot} }
    handleData(obj);


  }

  async function handleData(obj) {

    const setData = await fetch(`${baseURL}/appointments/mon/john`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
      body: JSON.stringify(obj)
    })

    const data = await setData.json();

    console.log(data);
  }


  return (
    <Box maxW="md" mx="auto" mt="6" textAlign={"center"}>
      <chakra.h2 fontSize="3xl" fontWeight="700" mb={10}>
        Schedule an appointment
      </chakra.h2>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>User ID</FormLabel>
          <Select
            placeholder="Select user ID"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          >
            {userIdOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired mt="4">
          <FormLabel>Doctor ID</FormLabel>
          <Select
            placeholder="Select doctor ID"
            value={doctorId}
            onChange={(event) => setDoctorId(event.target.value)}
          >
            {doctorIdOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired mt="4">
          <FormLabel>Appointment Slot</FormLabel>
          <Select
            placeholder="Select appointment slot"
            value={appointmentSlot}
            onChange={(event) => setAppointmentSlot(event.target.value)}
          >
            {appointmentSlotOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" mt="10" mb={70} >
          Schedule Appointment
        </Button>
      </form>
    </Box>
  );
}

export default AppointmentForm;
