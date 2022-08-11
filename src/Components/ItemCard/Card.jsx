import React from 'react'
import { Box, Heading, Text, Grid, GridItem, Flex, Button, Input } from '@chakra-ui/react'
import { Icon } from '@iconify/react'

export default function Card({name, price, sale_price}) {
  return (
        <Grid templateColumns='repeat(12, 1fr)'  w="100%">
          <GridItem >
            <Box w="120px" h="120px" border="1px solid #c0c0c0" borderRadius={9}>

            </Box>
          </GridItem>
          <GridItem colSpan={8}>
            <Box h="100%">
              <Text fontSize={16} color="#7f858d">Item:</Text>
              <Heading as="h3" lineHeight={1} fontWeight={600} color="#42464d" h="40%">{name}</Heading>
              <Text color="#7f858d">
                  Price:&nbsp; 
                <b>
                  ${price}
                </b>
              </Text>
              <Text color="#7f858d">                 
                Price w/ discount:&nbsp;                 
              <b>
                ${sale_price}
              </b>
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box>
              <Text fontSize={16} color="#7f858d" pb={2} textAlign="center">Quantity:</Text>
              <Flex w="100%" justifyContent="space-between" fontSize={30} lineHeight={.9} alignItems="center">
                <Icon icon="akar-icons:chevron-left" color={false ? "black" : "#c0c0c0"}/>
                <Input maxLength={1} w={"25px"} />
                <Icon icon="akar-icons:chevron-right" color={false ? "black" : "#c0c0c0"}/>
              </Flex>
              <Text textAlign="center">
                <Button variant={'link'} colorScheme="red" mt={1}>
                  <Icon icon="bi:trash-fill"/> Remove
                </Button>
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent="center" w="100%">
              <Text fontSize={16} color="#7f858d">Total:</Text>
            </Flex>
          </GridItem>
        </Grid>
  )
}
