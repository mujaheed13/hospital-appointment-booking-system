import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom"
const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Midsection() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Better Life Through Better Hospitality
            </chakra.h2>
            <Button colorScheme="green" size="md" as={ReachLink} to={"/appointment"}>
              Book Appointment
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Join us to a fun, friendly and healthy environment. Our
              professionals are working so hard to see smile on your face that
              you deserve! We are dedicated about our duties.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Easy Appointment"}
          text={
            "Avoid endless back and forth communication. Confirmed Doctor Appointment, schedule next consultation with token."
          }
        />
        <Feature
          heading={"Emergency Service"}
          text={"All that a member needs to do in case of a Medical Emergency, is place a call on our Emergency Helpline."}
        />
        <Feature
          heading={"24/7 Service"}
          text={"LifeCare hospital offers unique 24x7 Medical Emergency Response cover to all its members."}
        />
        <Feature
          heading={"Free COVID Checkups"}
          text={"​LifeCare Hospital offers Free Covid-19 Test. Under the Ayush Bharat Yojna."}
        />
      </Grid>
    </Box>
  );
}
