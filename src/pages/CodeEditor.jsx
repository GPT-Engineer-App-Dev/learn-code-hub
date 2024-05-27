import React, { useState } from "react";
import { Box, Button, Textarea, VStack, Heading, Text } from "@chakra-ui/react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(result.toString());
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="xl">Code Editor</Heading>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          size="lg"
          height="200px"
        />
        <Button colorScheme="teal" onClick={runCode}>Run Code</Button>
        <Box p={4} shadow="md" borderWidth="1px" width="100%">
          <Heading as="h3" size="md">Output</Heading>
          <Text mt={2}>{output}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default CodeEditor;