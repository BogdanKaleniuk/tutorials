import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Ukraine!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" vatiant="page-title">
            Bogdan Kaleniuk
          </Heading>
          <p>Digital Craftzman (Artist / Developer / Designer / Doter)</p>
        </Box>
      </Box>
      <div>Hello</div>
    </Container>
  )
}

export default Page
