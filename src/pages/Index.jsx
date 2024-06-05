import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Foodie Express</Heading>
        <Text fontSize="lg" textAlign="center">Delicious meals delivered to your doorstep. Fresh, hot, and fast!</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/food-delivery.jpg" alt="Food Delivery" objectFit="cover" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Order Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;