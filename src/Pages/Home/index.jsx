import React, {useEffect, useState} from 'react'
import { Box, Heading, Divider, SimpleGrid , Spinner, Flex } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import CardHome from '../../Components/CardHome/CardHome';

export default function Home() {
    let items = [
        {name: "Bala de pica" , price:23.4 , sale_price: 22.4},
        {name: "bala de cocô" , price:23.4 , sale_price: 22.4},
    ]
    const [data, setData] = useState()

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
          setData(myJson);
        });
    }
    useEffect(()=>{
      getData()
    },[])


  return (
    <Box  w="100%" h="100%" p={{sm:1, md:2, lg:4}} px={40}>
        <Box>
            <Heading textAlign="center" paddingTop={0} py={4} pb={6}>
                OUR PRODUCTS
            </Heading>
           { data 
           ? <SimpleGrid columns={{sm:1, md:3, lg:4, xl:5}} gap={8} columnGap={8}>
                {data?.items?.map((item)=>(<CardHome {...item}/>))}
            </SimpleGrid>
            : <Flex w="100%" justifyContent="center"><Spinner color="#ff6500"/></Flex>
            }
        </Box> 
    </Box>
  )
}
