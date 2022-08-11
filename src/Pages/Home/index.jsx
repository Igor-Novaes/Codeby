import React, {useEffect} from 'react'
import { Box, Heading, Divider, VStack, Button, Text } from '@chakra-ui/react'
import ItemCard from './Components/ItemCard/Card'
import { Icon } from '@iconify/react';

export default function Home() {
    let items = [
        {name: "Bala de pica" , price:23.4 , sale_price: 22.4},
        {name: "bala de cocô" , price:23.4 , sale_price: 22.4},
    ]


    const getData=()=>{
        fetch('itens.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[])

  return (
    <Box  w="100%" h="100%" p={4} px={40}>
        <Box background="#fff"  borderRadius={4} shadow="lg" pt={0} pb={4} px={4} position="relative">
            <Heading textAlign="center" paddingTop={0} py={4} pb={6}>
                REVIEW
            </Heading>
            <Button position="absolute" right="0" top="0" m ={4} h="30px" colorScheme="red">
                <Icon icon="bi:trash"/>
                <Text ml={2}>
                    Remove All Items
                </Text>
            </Button>
            <Divider borderColor="white" mb={4}/>
            <VStack divider={<Divider  />} gap={4}>
                {items.map((item)=>(<ItemCard {...item}/>))}
            </VStack>
            <Button w="100%" mt={3} bg="#ff6500" color="#fff" fontWeight="600">PURCHASE</Button>
        </Box> 
    </Box>
  )
}
