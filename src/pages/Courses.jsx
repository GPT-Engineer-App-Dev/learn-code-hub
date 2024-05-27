import { useState } from "react";
import { Container, Heading, VStack, Box, Button, Text } from "@chakra-ui/react";

const coursesData = [
  { id: 1, title: "Introduction to JavaScript" },
  { id: 2, title: "Advanced React" },
  { id: 3, title: "Python for Data Science" },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <Container centerContent>
      <Heading as="h2" size="xl" my={6}>
        Available Courses
      </Heading>
      <VStack spacing={4} width="100%">
        {coursesData.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{course.title}</Heading>
            <Button mt={4} colorScheme="teal" onClick={() => enrollCourse(course)}>
              Enroll
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Courses;