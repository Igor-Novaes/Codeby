import React from 'react'
import { Icon } from '@iconify/react';
import { Box, Text, InputGroup, SimpleGrid, Input, InputRightElement, Link, Flex } from '@chakra-ui/react' 
import {useSelector} from 'react-redux'


const CustomLink = ({href, children, target}) => <Link target={target} href={href} _hover={{textDecoration: 'none'}}>{children}</Link>

export default function Header() {
    const selector = useSelector((state) => state.cart) 
    return (
    <Box bg='#222222' w='100%' h='110px' color='white' direction='row' display='flex' alignItems="center">
        <SimpleGrid columns={3} w='100%' spacing={20}>
            <CustomLink href="/">    
                <Box display='flex' direction='row' alignItems="center" marginLeft='15px'>
                    <Icon icon="noto:shopping-cart" width="100" />
                    <Text fontSize='40px' fontWeight='bold' fontStyle='italic'>
                        Shopping
                    </Text>
                </Box>
            </CustomLink>
                <Box display ='flex' alignItems = 'center' justifyContent='center' cursor="pointer">
                    <InputGroup>
                        <Input bg='white' placeholder='Search' size='md' color='black' />
                        <InputRightElement  children={<Icon icon="bi:search" color='black'/>} />
                    </InputGroup>
                </Box>
            <Box display ='flex' alignItems = 'center' justifyContent='center'>
                <CustomLink href='' >
                    <Icon icon="icon-park-solid:people" width='35px'  />
                </CustomLink>
                <CustomLink target='_blank' href="https://www.linkedin.com/in/igor-n-623468131/">
                    <Icon icon="ic:baseline-headset-mic" width='35px' style= {{margin:'0 30px 0 30px'}}/>
                </CustomLink>
                <CustomLink href="/cart" >
                    <Box position="relative">
                        <Icon icon="ic:baseline-shopping-cart" width='35px'/>
                        <Flex 
                            w={1} 
                            h={1} 
                            p={3} 
                            justifyContent="center" 
                            alignItems="center" 
                            borderRadius={99} 
                            position="absolute" 
                            right={-2} 
                            bottom={0} 
                            bg="#ff6500" 
                            shadow="lg"
                        > 
                            {selector.length}
                        </Flex>
                    </Box>
                </CustomLink>
            </Box>
        </SimpleGrid>
    </Box>
  )
}
