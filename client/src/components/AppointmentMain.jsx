import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Button,
  chakra,
} from "@chakra-ui/react";
import Swal from 'sweetalert2'
const days = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
];

const doctorIdOptions = [
  { label: "Dr. Abhay Singh", value: "6425263f615a7f356b1ed68c" },
  { label: "Dr. Hassan Khan", value: "64299fd427df2a6e5cf9ccb0" },
  { label: "Dr. Raj Kumar Sen", value: "64299f5427df2a6e5cf9ccaa" },
  { label: "Dr. Mohammad Mujaheed", value: "64299f7d27df2a6e5cf9ccac" },
];

const appointmentSlotOptions = [
  { label: "9:00 AM - 10:00 AM", value: "9-10" },
  { label: "10:00 AM - 11:00 AM", value: "10-11" },
  { label: "11:00 AM - 12:00 PM", value: "11-12" },
];


const baseURL = "https://lifecare-mwbk.onrender.com";
// const baseURL = "http://localhost:8080"
let userData=JSON.parse(localStorage.getItem("userdata"))
let token=userData?.token
console.log(token);

function AppointmentForm() {
  const [doctorId, setDoctorId] = useState("");
  const [appointmentSlot, setAppointmentSlot] = useState("");
  const [day,setDay]=useState("")
  console.log(day,doctorId);
  function handleSubmit(event) {
    event.preventDefault();
    const obj = {doctor_id: doctorId, appointment_slot: {day:day,Time:appointmentSlot}, user_id: userData.userID }
    handleData(obj);
  }
  
  async function handleData(obj) {

    const setData = await fetch(`${baseURL}/appointments/${day}/${doctorId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify(obj)
    })

    const data = await setData.json();

    Swal.fire(data.msg); 
  }


  
  return (
    <Box maxW="md" mx="auto" mt="6" textAlign={"center"}>
      <chakra.h2 fontSize="3xl" fontWeight="700" mb={10}>
        Schedule an appointment
      </chakra.h2>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Day</FormLabel>
          <Select
            placeholder="Select appointment day"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          >
            {days.map((option) => (
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
