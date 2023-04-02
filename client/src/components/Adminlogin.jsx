import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Adminpage from "../pages/admin/Adminpage";
import { useState } from "react";

export default function AdminLogin() {
  const [login, setLogin] = useState(false);
  

  async function handlesignin(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    console.log(email,password);
    if (email === "admin@example.com" && password === "password") {
      setLogin(true);
    } else {
      alert("Invalid email or password");
    }
  }

  if (login) {
    return <Adminpage login={true} />;
  }
    
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <chakra.h2 fontSize="3xl" fontWeight="700" textAlign={"center"} pt={150}>
        Admin Login
        </chakra.h2>
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        {/* <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to Book an <Link color={'blue.400'}>Appointment</Link> ✌️
          </Text>
        </Stack> */}
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          mb={500}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" required />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" required />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox required>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handlesignin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  );
}
