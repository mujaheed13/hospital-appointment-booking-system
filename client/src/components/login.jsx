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
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link as ReachLink } from "react-router-dom"
import Loginpage from '../pages/login/Loginpage';
const baseURL = "https://lifecare-mwbk.onrender.com"
export default function Login() {

  const [submitted, setSubmitted] = useState(false);
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const [login, setLogin] = useState(false);
 function handleOauth(e){
  e.preventDefault();
  window.location.href = `${baseURL}/appointments/google/auth`
 }
  async function handleSignIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // const payload = {email,password};
    
    // let fData = await fetch(`${baseURL}/user/login`,{
    //   method:"POST",
    //   "Content-type":"application/json",
    //   body: JSON.stringify(payload)
    // })

    // const data = await fData.json();
    // console.log(data);
    if (email === "admin@example.com" && password === "password") {
      setLogin(true);
      
    } else {
      alert("Invalid email or password");
    }
  }

  if (login) {
    return <Loginpage login={true} />;
  }
  
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to Book an <Link as={ReachLink} to={"/appointment"}color={'blue.400'}>Appointment</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired> 
              <FormLabel>Email address</FormLabel>
              <Input type="email" required />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" required />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button onClick={handleSignIn}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={handleOauth}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    
  );
}



