import {
  Box,
  Flex,
  Image,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Link
} from '@chakra-ui/react';
import React from 'react'
import logo from "../assets/logo.png"
import signup_svg from '../assets/signup_svg.svg';
import { IoIosArrowForward } from 'react-icons/io';

const SignUp = () => {
  return (
    <Box w="100%" h={'100vh'}>
      <Flex>
        <Box
          bgGradient="linear(to bottom, #DFEAF0 0%, #D5E4EA 55%, #F4E7F4 100%)"
          w="50%"
          display={{ base: 'none', md: 'none', lg: 'flex' }}
        >
          <Box paddingLeft={'25%'} textAlign={'center'}>
            <Image src={logo} alt="Logo" w={'1.5rem'} mt={'1rem'} />
            <Box ml={'2rem'} width={'70%'} mt={'8rem'}>
              <Image src={signup_svg} alt="Dashboard" />
              <Text fontSize={'2rem'} fontWeight={'600'} mt={'2rem'}>
                Royalty collections, simplified. It’s next level!
              </Text>
              <Text width={'80%'} m={'auto'} fontSize={'1.1rem'} mt={'1rem'}>
                Revenue based invoice collection to make royalty collection as
                easy as...
              </Text>
            </Box>
          </Box>
        </Box>
        <Box bg={'#F8F8FB'} width={{ base: '100%', md: '100%', lg: '50%' }}>
          <Box
            paddingRight={{ base: '0', md: '0', lg: '20%' }}
            mt={'1rem'}
            paddingBottom={{ base: '2rem', md: '30%', lg: '5rem' }}
          >
            <Flex justifyContent={'space-between'} ml={'1rem'}>
              <Image src={logo} alt="Logo" w={'1.2rem'} mt={'0.5rem'} />
              <Flex
                justifyContent={'right'}
                gap={'1rem'}
                mr={'2rem'}
                mt={{ base: '1rem', md: '1rem', lg: '0' }}
              >
                <Text>Log in</Text>
                <Text mt={'5px'}>
                  <IoIosArrowForward />
                </Text>
              </Flex>
            </Flex>
            <Box
              ml={{ base: '1rem', lg: '2rem', md: '8rem' }}
              mt={{ base: '2.5rem', lg: '2rem', md: '8rem' }}
              mr={{ base: '1rem', lg: '0rem', md: '8rem' }}
            >
              <Text
                fontWeight={'600'}
                fontSize={{ base: '1.4rem', lg: '1.8rem', md: '2rem' }}
              >
                Get started with Franchain
              </Text>
              <Text fontSize={{ base: '', lg: '', md: '1.2rem' }}>
                Create an account in 5 minutes.
              </Text>
              <FormControl mt={'1.5rem'}>
                <FormLabel fontWeight={'400'}>First name</FormLabel>
                <Input
                  type="text"
                  bg={'white'}
                  width={{ base: '100%', lg: '90%' }}
                  border={'1.8px solid #CED6F7'}
                  h={'2.8rem'}
                />
                <FormLabel fontWeight={'400'} mt={'1rem'}>
                  Last name
                </FormLabel>
                <Input
                  type="text"
                  bg={'white'}
                  width={{ base: '100%', lg: '90%' }}
                  border={'1.8px solid #CED6F7'}
                  h={'2.8rem'}
                />
                <FormLabel fontWeight={'400'} mt={'1rem'}>
                  Business name and HQ location
                </FormLabel>
                <Input
                  type="text"
                  bg={'white'}
                  width={{ base: '100%', lg: '90%' }}
                  border={'1.8px solid #CED6F7'}
                  h={'2.8rem'}
                />
                <FormLabel fontWeight={'400'} mt={'1rem'}>
                  Work email
                </FormLabel>
                <Input
                  type="text"
                  bg={'white'}
                  width={{ base: '100%', lg: '90%' }}
                  border={'1.8px solid #CED6F7'}
                  h={'2.8rem'}
                />
                <FormLabel fontWeight={'400'} mt={'1rem'}>
                  Password
                </FormLabel>
                <Input
                  type="text"
                  bg={'white'}
                  width={{ base: '100%', lg: '90%' }}
                  border={'1.8px solid #CED6F7'}
                  h={'2.8rem'}
                />
                <FormHelperText color={'red'}>
                  Password must be at least 12 characters
                </FormHelperText>
              </FormControl>
              <Button
                bg={'#CAD0EF'}
                color={'white'}
                p={'1.3rem 2rem '}
                borderRadius={'3rem'}
                mt={'1.5rem'}
              >
                Sign Up
              </Button>
              <Text
                fontWeight={{ lg: '600', md: '500' }}
                fontSize={{ base: '13px', lg: '14px', md: '14px' }}
                mt={'2rem'}
              >
                By clicking “Start Application“, I agree to Mercury’s 
                <Link
                  href="https://mercury.com/legal/terms"
                  textDecoration={'underline'}
                >
                  Terms of Use
                </Link>
                , 
                <Link
                  href="https://mercury.com/legal/privacy"
                  textDecoration={'underline'}
                >
                  Privacy Policy
                </Link>
                 and to receive electronic communication about my accounts and
                services per 
                <Link
                  href="https://mercury.com/legal/esign"
                  textDecoration={'underline'}
                >
                  Mercury’s Electronic Communications Agreement
                </Link>
                , and acknowledge receipt of 
                <Link
                  href="https://mercury.com/legal/patriot-act"
                  textDecoration={'underline'}
                >
                  Mercury’s USA PATRIOT Act disclosure
                </Link>
                .
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default SignUp
