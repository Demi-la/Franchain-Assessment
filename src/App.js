import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import "./app.css"
import SignUp from './componnents/SignUp';


function App() {
  return (
    <ChakraProvider>
      <Box>
       <SignUp/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
