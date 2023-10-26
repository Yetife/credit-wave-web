import React from 'react';
import logo from '../assets/logo.svg';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {GridItem, Button, InputGroup, InputRightElement, SimpleGrid, Stack, Text, Input, IconButton} from "@chakra-ui/react";
import { Link as ReactLink } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            <SimpleGrid columns={{ base: 6, md: 12 }} spacing={12}>
                <GridItem colSpan={{ base: 6, md: 6 }} display={{ base: 'none', md: 'block' }}>
                    <Stack p={{ md:"91px 165px 635px 120px"}} h="100vh" flexDirection={"column"} className="firstRow">
                        <Text className="text">Adroit</Text>
                        <Text className="firstRow-p">We evaluate and monitor the non-performing loan accounts and implement a recovery action plan to achieve timely
                            and maximum recovery at a minimal cost and appropriate turn-around time through acceptable common practices
                            aligned with legal framework and standards.</Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 6 }}>
                    <Stack className="step">
                        <img src={logo}/>
                        <Stack>
                            <Stack m={{base:"45px 20px 0", md: "60px 0 0"}}>
                                <Input variant='outline' placeholder="Username" w={{ md: '464px'}} size="md"/>
                            </Stack>
                            <Stack m={{base:"20px 20px", md: "25px 0px"}}>
                                <InputGroup size='md' w={{md: '464px'}}>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <IconButton  onClick={handleClick} aria-label='Search database' icon={show ? <Visibility /> : <VisibilityOff/>} />
                                    </InputRightElement>
                                </InputGroup>
                            </Stack>
                            <Stack m={{base:"25px 20px", md: "25px 0px"}}>
                                <Button variant="primary" bgColor="#00C795" size='md' as={ReactLink}
                                        to={'/sign-up'}>
                                    <Text color="white">Login</Text>
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </GridItem>
            </SimpleGrid>
        </div>
    );
};
export default Login;

