import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';

const AdminSidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Flex flexDir="column">
      <Box
        as="nav"
        w="60"
        bg={useColorModeValue('gray.200', 'gray.700')}
        p="4"
        pos="fixed"
        top="0"
        left="0"
        bottom="0"
        zIndex="sticky"
        boxShadow="md">
        <Flex alignItems="center" justifyContent="space-between" mb="8">
          <Heading as="h1" fontSize="xl">
            Dashboard
          </Heading>
          <IconButton
            aria-label="toggle color mode"
            icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <IconButton
          aria-label="toggle sidebar"
          icon={<FiMenu />}
          onClick={handleToggle}
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          right="4"
          top="4"
        />
        
      </Box>
      {/* <Box ml="60" p="4">Your content here</Box> */}
    </Flex>
  );
};

export default AdminSidebar;
