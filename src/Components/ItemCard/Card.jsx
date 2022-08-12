import React from 'react'
import { Box, Heading, Text, Grid, GridItem, Flex, Button, Modal, Input, Image, useDisclosure, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent  } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import {store} from '../../redux/store'
import { editItem, removeItem } from '../../redux/actions/cart'


const  ModalComponent = ({onOpen, onClose, isOpen, onConfirm}) => {
  
  return (
    <>
      <Button variant={'link'} colorScheme="red" mt={1} onClick={onOpen}>
        <Icon icon="bi:trash-fill"/> Remove
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody> 
            Are you sure you want to remove this item from your cart?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='ghost' color="#e53e3e" onClick={()=>{onClose(); onConfirm()}}>Remove</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export default function Card({id, name, price, sellingPrice, quantity, imageUrl}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleRemoveItem = (itemId) => {
    store.dispatch(removeItem(itemId))
  }
  const updateQuantity = (newQuantity) => {
    store.dispatch(editItem(id, newQuantity))
  }

  return (
    <>
      
      <Grid templateColumns='repeat(12, 1fr)'  w="100%">
        <GridItem >
          <Flex w="120px" h="120px"  alignItems="center" zIndex={1}>
            <Image w='100%' boxSize="100%" h="" border="1px solid #c0c0c0" zIndex={0} src={imageUrl||''}/>
          </Flex>
        </GridItem>
        <GridItem colSpan={7} pl={2}>
          <Box h="100%">
            <Text fontSize={16} color="#7f858d">Item:</Text>
            <Heading as="h3" lineHeight={1} fontWeight={600} color="#42464d" h="40%">{name}</Heading>
            <Text color="#7f858d">
                Price:&nbsp; 
              <b>
                R${(price/100).toFixed(2)}
              </b>
            </Text>
            <Text color="#7f858d">                 
              Price w/ discount:&nbsp;                 
            <b>
              R${(sellingPrice/100).toFixed(2)}
            </b>
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Text fontSize={16} color="#7f858d" pb={2} textAlign="center">Quantity:</Text>
            <Flex w="100%" justifyContent="space-between" fontSize={30} lineHeight={.9} alignItems="center">
              <Button variant="link" disabled={quantity <= 1} onClick={()=>updateQuantity(quantity - 1)} >
                <Icon icon="akar-icons:chevron-left" color={false ? "black" : "#c0c0c0"} color="#ff6500" fontSize={26}/>
              </Button>
              <Input maxLength={2}  value={quantity} textAlign="center" onChange={(e)=>updateQuantity(e.target?.value)}/>
              <Button variant="link" disabled={quantity >= 99}  onClick={()=>updateQuantity(parseInt(quantity) + 1)}>
                <Icon icon="akar-icons:chevron-right" color={false ? "black" : "#c0c0c0"} color="#ff6500" fontSize={26}/>
              </Button>
            </Flex>
            <Text textAlign="center">
              <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} onConfirm={()=>handleRemoveItem(id)}/>              
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex justifyContent="center" w="100%">
            <Box>
              <Text fontSize={16} color="#7f858d">Subtotal:</Text>
              <Text color="#7f858d" fontWeight="bold" mt={3 }>R${(quantity * sellingPrice/100)} </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  )
}
