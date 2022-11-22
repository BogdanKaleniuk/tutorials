import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          mt="5"
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Ukraine!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" vatiant="page-title">
              Bogdan Kaleniuk
            </Heading>
            <p>Digital Craftzman (Artist / Developer / Designer / Doter)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/myPhoto.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            saepe quae omnis repellendus libero laudantium.
            <NextLink href="./works/inkdrop.js">
              <Link>Inkdrop</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Kyiv, Ukraine.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Lorem ipsum dolor sit amet.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            saepe sed magnam. Minus, omnis.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link> */}
            , Leica, Machine Learning
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
