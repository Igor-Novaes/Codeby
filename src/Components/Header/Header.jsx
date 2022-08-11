import React from 'react'
import { Icon } from '@iconify/react';
import { Box, Heading, Text, InputGroup, SimpleGrid, Input, InputRightElement } from '@chakra-ui/react'

export default function Header() {
    return (
    <Box bg='#222222' w='100%' h='110px' color='white' direction='row' display='flex' alignItems="center">
        <SimpleGrid columns={3} w='100%' spacing={20}>
            <Box display='flex' direction='row' alignItems="center" marginLeft='15px'>
                <Icon icon="noto:shopping-cart" width="100" />
                <Text fontSize='40px' fontWeight='bold' fontStyle='italic'>
                    Shopping
                </Text>
            </Box>
            <Box display ='flex' alignItems = 'center' justifyContent='center'>
                <InputGroup>
                    <Input bg='white' placeholder='Search' size='md' color='black' />
                    <InputRightElement  children={<Icon icon="bi:search" color='black'/>} />
                </InputGroup>
            </Box>
            <Box display ='flex' alignItems = 'center' justifyContent='center'>
                <Icon icon="icon-park-solid:people" width='35px' />
                <Icon icon="ic:baseline-headset-mic" width='35px' style= {{margin:'0 30px 0 30px'}}/>
                <Icon icon="ic:baseline-shopping-cart" width='35px'/>
            </Box>
        </SimpleGrid>
    </Box>
  )
}
