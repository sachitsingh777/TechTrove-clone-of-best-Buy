import {  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,Button,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { AdminUpdateProduct,AdminDeleteProduct } from '../AdminRedux/Action';

// "id": 2,
// "imgUrl": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15386/15386728.jpg",
// "title": "Amazon Fire TV Stick (3rd Gen) Media Streamer with Alexa Voice Remote",
// "rate": "⭐⭐⭐⭐⭐",
// "review": 44,
// "top": "",
// "save": "",
// "price": 44.99,
// "category": "TV",
// "brand": "Amazon"




function EditProduct({ item }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: item.title,
    price: item.price,
    selectedImage: item.src,
  });

  const upload = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedImage: URL.createObjectURL(event.target.files[0]),
    }));
  };

  const removeImage = () => {
    setFormData((prevData) => ({ ...prevData, selectedImage: item.src }));
  };

  const handleSubmit = () => {
    const changes = {
      title: formData.title,
      price: formData.price,
      src: formData.selectedImage,
    };
    dispatch(AdminUpdateProduct(item.id, changes));
  };

  return (
    <>
      <Flex>
        <Text
          _hover={{ cursor: "pointer" }}
          textDecoration={"underline"}
          w={"60px"}
          h={"30px"}
          onClick={onOpen}
        >
          Edit
        </Text>
        <Popover>
          <PopoverTrigger>
            <Text
              _hover={{ cursor: "pointer" }}
              textDecoration={"underline"}
              w={"60px"}
              h={"30px"}
            >
              Delete
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to delete this product?
            </PopoverBody>
            <PopoverFooter>
              <Flex w={"100%"} justifyContent={"space-evenly"}>
                <Button>No</Button>
                <Button onClick={() => dispatch(AdminDeleteProduct(item.id))}>
                  Yes
                </Button>
              </Flex>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4} mb={5}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      title: e.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      price: e.target.value,
                    }))
                  }
                />
              </FormControl>
              <Flex
                textAlign={"center"}
                alignItems={"center"}
                w={"100%"}
                justifyContent={"space-around"}
              >
                <Image
                  objectFit={"contain"}
                  borderRadius={"10px"}
                  alt="not found"
                  width={"100px"}
                  h={"100px"}
                  src={formData.selectedImage}
                />
                <Stack>
                  <input type="file" name="myImage" onChange={upload} />
                  {formData.selectedImage ? (
                    <Button onClick={removeImage}>Remove</Button>
                  ) : null}
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={handleSubmit}
            >
              Update Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


export default EditProduct