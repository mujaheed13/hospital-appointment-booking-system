import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";
import "./usersidebar.css"
import { Link as ReachLink } from "react-router-dom"

const baseURL = "https://lifecare-mwbk.onrender.com"

const UserSidebar = () => {



  return (
    <Box w="250px" h="100vh" bg="gray.800" color="white" px="4" py="6" className="sidebar">
      <Flex alignItems="center" mb="6">
        <Icon as={FiHome} w="6" h="6" />
        <Text fontSize="2xl" ml="2">
          Dashboard
        </Text>
      </Flex>
      <Box mb="6">
        <Text fontWeight="bold" mb="2" >
          Main
        </Text>
        <Flex alignItems="center" mb="2" as={ReachLink} to={"/"}>
          <Icon as={FiHome} />
          <Text ml="2" style={{cursor:"pointer"}}>
            Home
          </Text>
        </Flex>
        <Flex alignItems="center" mb="2">
          <Icon as={FiUsers} />
          <Text ml="2" style={{cursor:"pointer"}}>Users</Text>
        </Flex>
      </Box>
      <Box>
        <Text fontWeight="bold" mb="2">
          Settings
        </Text>
        <Flex alignItems="center" mb="2">
          <Icon as={FiSettings} />
          <Text ml="2">General</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default UserSidebar;