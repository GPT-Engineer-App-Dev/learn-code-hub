import { useState } from "react";
import { Container, Heading, VStack, Box, Text } from "@chakra-ui/react";

const Enrollments = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <Container centerContent>
      <Heading as="h2" size="xl" my={6}>
        My Enrollments
      </Heading>
      <VStack spacing={4} width="100%">
        {enrolledCourses.length === 0 ? (
          <Text>No courses enrolled yet.</Text>
        ) : (
          enrolledCourses.map((course) => (
            <Box key={course.id} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{course.title}</Heading>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Enrollments;