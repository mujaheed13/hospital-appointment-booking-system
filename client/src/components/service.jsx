import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
    FcSportsMode,
    FcSelfie,
    FcWebcam,
    FcVideoProjector
} from 'react-icons/fc';

import { Link as ReachLink } from "react-router-dom"
import { GiLoveInjection,GiCrossedBones,GiFrontTeeth } from 'react-icons/gi'


const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Learn more
                </Button>
            </Stack>
        </Box>
    );
};

export default function Services() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Our Services
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    We are happy to serve you better with complete needs and care of a Patient
                </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Consultation'}
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        description={
                            'We’re here to help you feel better, Consult better to Connecting lives.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Surgery'}
                        icon={<Icon as={GiLoveInjection} w={10} h={10} color="red"/>}
                        description={
                            'Where skill and confidence bring you the best in care.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Physiotherapy'}
                        icon={<Icon as={FcSportsMode} w={10} h={10} color="black" />}
                        description={
                            'Genuine Commitment to your Health.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Dental Checkup'}
                        icon={<Icon as={GiFrontTeeth} w={10} h={10} backgroundColor="RGB(33 150 243)" borderRadius={"40%"} />}
                        description={
                            'Better teeth, better health. Your best life begins with a smile.'
                        }
                        href={'#'}
                    />
                    <Card
                        heading={'Eye Checkup'}
                        icon={<Icon as={FcSelfie} w={10} h={10} />}
                        description={
                            'Love your eyes, love your future. Let us care for your eyes'
                        }
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    );
}
