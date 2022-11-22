import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
// import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbInkdrop from '../public/images/works/work1.png'
import thumbWalknote from '../public/images/works/work2.png'
import thumbFourPainters from '../public/images/works/work3.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbWalknote}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbFourPainters}
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6}></Divider>
          <Heading as="h3" fontSize={20} mb="4">
            Old Works
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
