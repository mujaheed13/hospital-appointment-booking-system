import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { Link as ReachLink } from "react-router-dom"
  export default function LearnMore() {
    return (
      <Flex
      marginBottom={"30px"}
        w={'full'}
        h={'50vh'}
        backgroundImage={
          'url(https://cdn.create.vista.com/api/media/medium/414248752/stock-photo-cropped-view-smiling-doctor-stethoscope?token=)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              We are here to hear and heal your health problems
            </Text>
            <Stack direction={'row'}>
              <Button
              as={ReachLink}
              to={"/doctor"}
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Take Consultantion
              </Button>
              <Button
              as={ReachLink}
              to={"/appointment"}
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Book Appointment
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }