import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import logo from "../assets/logo.png"
  const ListHeader = ({ children}) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Practices</ListHeader>
              <Link href={'#'}>For Patients</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>FAQ's</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Contact U</Link>
              <Link href={'#'}>Blog</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Resources</ListHeader>
              <Link href={'#'}>New Patient</Link>
              <Link href={'#'}>Meet The Team</Link>
              <Link href={'#'}>Patient Form</Link>
              <Link href={'#'}>Medical Insurance</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Services</ListHeader>
              <Link href={'#'}>Covid Services</Link>
              <Link href={'#'}>Dental Services</Link>
              <Link href={'#'}>Physiotherapy Services</Link>
              <Link href={'#'}>Orthopedia Service</Link>
              <Link href={'#'}>Physician Service</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <img src={logo} alt="logo" width={"70px"} />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2023 LifeCare Hospital. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }