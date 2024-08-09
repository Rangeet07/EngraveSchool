import { Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { Form, useForm } from 'react-hook-form';



const BookForm = ({isOpen, onClose}) => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    function submitHandler(data){
        console.log(data);
    
            fetch("/api/sheet",{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
            
              })
          reset()

            }

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>
                <ModalCloseButton/>
                
            </ModalHeader>
            <ModalBody>
                {/* <form 
                id='new-form'
                onSubmit={(event) => {
                    event.preventDefault();
                    alert("submitted")
                }}>
                    <FormControl>
                        <FormLabel>Contact Us</FormLabel>
                        <input type="email" />
                        <input type='number'/>
                        <FormHelperText>
                            Book your course now
                        </FormHelperText>
                    </FormControl>
                </form> */}
                <form onSubmit={handleSubmit(submitHandler)}>
                    <FormControl>
                        <Input marginTop="1.3rem" id="name" type="text" placeholder='Name'  {...register("name", {required: true})}/>
                        {errors.name && (<Text fontSize="xs" color="red.400" >{errors.name.type}</Text>) }

                        <Flex gap={{base:"0" ,sm:"1rem"}} flexDirection={{ base: 'column' , sm:'row'}}>

                      
                        <Input marginTop="1.3rem" id="email" type="email" placeholder='Email' {...register("email",{required:'Please Enter email'})}/>
                        {errors.email && (<Text fontSize="xs" color="red.400" >{errors.email.type}</Text>) }
                        <Input marginTop="1.3rem" id="phone" type="text" placeholder='Phone' {...register("phone", {required:'Please Enter email'})}/>
                        {errors.phone && (<Text fontSize="xs" color="red.400" >{errors.phone.type}</Text>) }

                        </Flex>
                        <Checkbox marginTop="1.3rem" id="gdpr" type='checkbox' placeholder='GDPR' {...register('gdpr')}>
                            I consent having this website store my submitted info
                        </Checkbox>
                        {errors.gdpr && (<Text fontSize="xs" color="red.400" >{errors.gdpr.type}</Text>) }

                    </FormControl>
                </form>

            </ModalBody>
            <ModalFooter>
                <Button onClick={handleSubmit(submitHandler)} type='submit' colorScheme="purple" width="100%" fontSize="xl"
                padding="2rem" marginTop="0.5rem" form="new-form">Submit</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    
    </>
  )
}

export default BookForm