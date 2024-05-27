import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher, FaBook, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Button as={Link} to="/courses" leftIcon={<FaBook />} colorScheme="teal" variant="solid" size="lg">
            View Courses
          </Button>
          <Button as={Link} to="/enrollments" leftIcon={<FaList />} colorScheme="blue" variant="solid" size="lg">
            My Enrollments
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;