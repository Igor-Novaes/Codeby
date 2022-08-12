import React, { useEffect } from 'react'
import { Box, Heading, Divider, VStack, Link, Button, Text,  Modal, useDisclosure, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, GridItem, Flex, Alert, AlertIcon } from '@chakra-ui/react'
import ItemCard from '../../Components/ItemCard/Card'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import { clearCart } from '../../redux/actions/cart';


const  ModalComponent = ({onOpen, onClose, isOpen, onConfirm}) => {

    return (
      <>        
        <Button position="absolute" right="0" top={"10"} zIndex={10} m={4} h="30px" colorScheme="red" onClick={onOpen}>
            <Icon icon="bi:trash"/>
            <Text ml={2}>
                Remove All Items
            </Text>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Clear Cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody> 
              Are you sure you want to clear your cart?
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

export default function Cart() {
    const selector = useSelector((state) => state.cart) 
    const total = (selector?.map(item=>item.sellingPrice / 100 * item?.quantity)?.reduce((partialSum, a) => partialSum + a, 0) || 0).toFixed(2)
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handleClearCart = () => {
        store.dispatch(clearCart())
    }
    useEffect(()=>{console.log(selector)},[selector])
    

  return (
    <Box  w="100%" h="100%" p={8} px={{sm:1, md:25, lg:40}}>
        <Box background="#fff"  borderRadius={4} shadow="lg" pt={0} pb={4} px={4} position="relative">
            <Heading textAlign="center" paddingTop={0} py={4} pb={6}>
                SHOPPING CART
            </Heading>
            <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} onConfirm={handleClearCart}/> 
            <Divider borderColor="white" mb={4}/>
            <VStack divider={<Divider  />} gap={6}>
                {selector.length < 1 && <Box>
                    <Text fontSize={20} color="#7f858d">No items in your cart.</Text>
                    <Link href="/" w="100%" fontWeight={600}  color="blue"><Text textAlign="center">Shop now</Text></Link>
                </Box>}
                {selector?.map((item)=>(<ItemCard {...item}/>))}
            {total > 10 && <Alert status='success' mt={2}>
                <AlertIcon />
                Your purchase value is above $10. The shipping of your products will have no cost!
            </Alert>}
            <Flex mt={8} w="100%">
                <Heading>Total:&nbsp;</Heading>
                <Heading color="#1f9050">R${total}</Heading>
            </Flex>    
            </VStack>   
            <Button w="100%" mt={8} bg="#ff6500" color="#fff" fontWeight="600" _hover={{bg: "#D35705"}}>PURCHASE</Button>            
        </Box> 
    </Box>
  )
}
