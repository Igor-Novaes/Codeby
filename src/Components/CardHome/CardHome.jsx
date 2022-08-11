import React from 'react';
import { Box, Text, SimpleGrid, Image, Flex, Button } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { addToCart } from '../../redux/actions/cart';
import { store } from '../../redux/store'


function CardHome({id, name, imageUrl, price, sellingPrice}) {
  const handleAddToCart = (item) => {
    store.dispatch(addToCart(item))
  }

  return (
    <Box w='220px' h='320px' >
        <Flex marginTop='5px'>
            <Text color='green' fontWeight='bold' marginRight='5px'>12%</Text>
            <Text  fontWeight='bold'>OFF</Text>
        </Flex>
          <Image boxSize='100px' src={imageUrl || ''} />
        <Flex justifyContent='center' flexDirection='column' fontSize='12px' px={2}>
            <Text fontSize='13px' textAlign='center'>{name}</Text>
            <Text color='#a6a4a4' ><span style={{textDecoration:'line-through'}}>De: R${(price/100).toFixed(2)}</span> por:</Text>
            <Text color='#00A000' fontSize='17px' fontWeight='bold'>R${(sellingPrice/100).toFixed(2)}</Text>
        </Flex>        
        <Flex px={2}>
          <Button w="100%"  mt={8} bg="#ff6500" color="#fff" fontWeight="600" onClick={()=>handleAddToCart({id, name, imageUrl, price, sellingPrice})} _hover={{
            bg: '#D25100'
          }}>
          <Icon icon="bi:cart-plus" fontSize={22} />
          <Text pl={2}>
            Add to Cart
          </Text>
        </Button>
        </Flex>
    </Box>

  );
}

export default CardHome;