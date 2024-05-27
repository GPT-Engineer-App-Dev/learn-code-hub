import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate online learning platform for coding.
        </Text>
        <Box display="flex" justifyContent="space-around" width="100%" mt={10}>
          <Button leftIcon={<FaCode />} colorScheme="teal" variant="solid" size="lg">
            Learn to Code
          </Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="blue" variant="solid" size="lg">
            Practice Coding
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="purple" variant="solid" size="lg">
            Get Mentorship
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;