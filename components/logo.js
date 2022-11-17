import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  /* > svg {
    transition: 200ms ease;
  } */
  &:hover > img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/icons/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <FootprintIcon />
          <Image scr={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Kaleniuk Bogdan
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
