import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Patient Speak</Heading>
          <Text>We have been Serving Our Patients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Good Inftastructure</TestimonialHeading>
              <TestimonialText>
                The hospital building  is awesome as they have different building for different departments.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://iili.io/HNyfC7V.jpg'
              }
              name={'ShaktiMan'}
              title={'CEO at Gangadhar Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Clean Environment</TestimonialHeading>
              <TestimonialText>
                The hospital campus is very clean. Everything is properly organized and the garden was pretty clean too.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://iili.io/HNyfC7V.jpg'
              }
              name={'Tony Stark'}
              title={'CEO at Stark Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Healthy Canteen Food</TestimonialHeading>
              <TestimonialText>
                The food was delicious and healthy and they also took care of the Patient's need and as well as hygiene.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://iili.io/HNyfC7V.jpg'
              }
              name={'Raj Kumar Sen'}
              title={'CEO at Yamaha Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}