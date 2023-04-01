import React from "react";
import { Box, Flex, Text, Stack, Avatar, AvatarBadge } from "@chakra-ui/react";

const AdmDashboard = () => {
    return (
        <Box p="4">
            <Flex alignItems="center" justifyContent="space-between" mb="6">
                <Text fontSize="2xl" fontWeight="bold">
                    Hospital Management System Dashboard
                </Text>
                <Avatar name="John Doe" size="md">
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
            </Flex>
            <Stack spacing="6">
                <Box bg="white" boxShadow="md" p="4">
                    <Text fontSize="xl" fontWeight="bold" mb="2">
                        Today's Appointments
                    </Text>
                    {/* Display list of appointments */}
                </Box>
                <Box bg="white" boxShadow="md" p="4">
                    <Text fontSize="xl" fontWeight="bold" mb="2">
                        Recent Patients
                    </Text>
                    {/* Display list of recent patients */}
                </Box>
                <Box bg="white" boxShadow="md" p="4">
                    <Text fontSize="xl" fontWeight="bold" mb="2">
                        Pending Requests
                    </Text>
                    {/* Display list of pending requests */}
                </Box>
            </Stack>
        </Box>
    );
};

export default AdmDashboard;
