import React, {useEffect, useState} from 'react';
import {Card, CardBody, Container, Stack, Text, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react";
import lock from '../assets/lock.svg'
import {Link as ReactLink} from "react-router-dom";
import logo from "../assets/logo.svg";

const SignUp = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [remainingTime, setRemainingTime] = useState(120);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleVerificationInputChange = (event) => {
        const inputValue = event.target.value;
        setVerificationCode(inputValue);
    };


    return (
        <Stack  mt="5rem">
            <img src={logo} className="step-card"/>
            <Container display="flex" h="full"
                // minH={'80vh'}
                       alignItems={'center'}
                       py="4"
                       justifyContent={'center'}
                       mt="2rem"
            >
                <Card
                    minW={['full', 'full', '600px']}
                    w="full"
                    mx="auto"
                    p={[8, 16]}
                    size={'lg'}
                    variant={'elevated'}
                    shadow={'lg'}
                >
                    <CardBody>
                        <div className="step-card">
                            <img src={lock}/>
                            <Text color="#135D54" p="40px 0 20px" fontFamily="Inter" fontSize={{md:"32px", base: "24px"}} fontStyle="normal" fontWeight="700" lineHeight="21.6px">
                                Verify Login
                            </Text>
                            <Text color="#6F8B84"  textAlign={{md:"center"}} fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="700" lineHeight="21.6px" display={{ base: 'none', md: 'block' }}>Enter the six (6) digit verification code sent to
                                +234913*****4** and A******na@creditwaveng.com to continue</Text>
                            <Text color="#6F8B84"  textAlign="center" fontFamily="Inter" fontSize="12px" fontStyle="normal" fontWeight="700" lineHeight="21.6px" display={{ base: 'block', md: 'none' }}>Enter the six (6) digit verification code sent to
                                +234913*****4** and A******na@creditwaveng<br/>.com to continue</Text>
                            <InputGroup size="lg" m="20px 0 30px" w={{md: '464px', base: '300px'}}>
                                <Input
                                    placeholder="Verification code"
                                    value={verificationCode}
                                    onChange={handleVerificationInputChange}
                                />
                                <InputRightElement width="6rem">
                                    {remainingTime > 0 ? (
                                        <span style={{color: "#00C796"}}>{`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}</span>
                                    ) : (
                                        <span style={{color: "#00C796", fontSize: "12px"}}>Code Expired</span>
                                    )}
                                </InputRightElement>
                            </InputGroup>
                            <Stack>
                                <Button variant="primary" bgColor="#00C795" size='md' as={ReactLink} w={{md: '464px', base: '300px'}}
                                        to={'/dashboard'}>
                                    <Text color="white">Submit</Text>
                                </Button>
                            </Stack>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </Stack>
    );
};

export default SignUp;