import Header from "./Components/Header/Header";
import Routes from "./Routes";
import {Flex, Box} from '@chakra-ui/react'
function App() {
  return (
    <Box h="100vh">
      <Header/>
      <Flex flex="1">
        <Routes />
      </Flex>

    </Box>
    
  );
}

export default App;
