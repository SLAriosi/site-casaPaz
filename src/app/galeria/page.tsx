"use client"
import { Box, Container, Flex, Heading, Link, Stack, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import desfile_1 from '../../../public/images/DESFILE_1.jpg';
import desfile_2 from '../../../public/images/DESFILE_2.jpg';
import desfile_3 from '../../../public/images/DESFILE_3.jpg';
import desfile_4 from '../../../public/images/DESFILE_4.jpg';

export default function Galeria() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState('');

   const handleImageClick = (src: string) => {
      setSelectedImage(src);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedImage('');
   };

   return (
      <Box bg="gray.50" minH="100vh">
         {/* Cabeçalho */}
         <Box bg="#4970b1" color="white" py={3} textAlign="center">
            <Heading fontSize="2xl">Eventos</Heading>
            <Flex justify="center" mt={4} gap={4}>
               <Link href="#pdi" fontWeight="bold">Desfile Kids</Link>-
               <Link href="#pif" fontWeight="bold">PIF</Link>-
               <Link href="#pdc" fontWeight="bold">PDC</Link>
            </Flex>
         </Box>

         <Container maxW="container.lg" py={10}>
            <Stack mb={3} textAlign="center">
               <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold pb-3" style={{ color: "#4970b1" }}>
                  Desfile Kids
               </h2>
               <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
                  Programa de Desenvolvimento Individual - Um caminho para o crescimento pessoal e profissional, focado em alcançar metas e objetivos específicos.
               </Text>

               <Flex direction="row" justify="center" align="center" wrap="nowrap" gap={12} py={5}>
                  <Image
                     src={desfile_1}
                     alt="Imagem 1"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_1.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
                  <Image
                     src={desfile_2}
                     alt="Imagem 2"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_2.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
                  <Image
                     src={desfile_3}
                     alt="Imagem 3"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_3.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
                  <Image
                     src={desfile_4}
                     alt="Imagem 4"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_4.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
               </Flex>
               <Flex direction="row" justify="center" align="center" wrap="nowrap" gap={12} py={5}>
                  <Image
                     src={desfile_1}
                     alt="Imagem 1"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_1.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
                  <Image
                     src={desfile_2}
                     alt="Imagem 2"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_2.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
                  <Image
                     src={desfile_3}
                     alt="Imagem 3"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_3.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
                  <Image
                     src={desfile_4}
                     alt="Imagem 4"
                     width={150}
                     height={150}
                     objectFit="cover"
                     style={{ borderRadius: '8px', cursor: 'pointer', transition: 'filter 0.3s' }}
                     onClick={() => handleImageClick(desfile_4.src)}
                     onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.8)')}
                     onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                  />
               </Flex>
            </Stack>
            <Box borderBottom="1px" borderColor="gray.200" my={4} />
            <Flex justify="center" my={4}>
               <Box bg="#a2bd30" height="6px" width="15%" />
            </Flex>
         </Container>

         <Flex justify="center" mt={4}>
            <Button mx={1} colorScheme="gray">1</Button>
            <Button mx={1} colorScheme="gray">2</Button>
            <Button mx={1} colorScheme="gray">3</Button>
            <Button mx={1} colorScheme="gray">4</Button>
            <Button mx={1} colorScheme="gray">5</Button>
         </Flex>

         {isModalOpen && (
            <div style={{
               position: 'fixed',
               top: 0,
               left: 0,
               width: '100vw',
               height: '100vh',
               backgroundColor: 'rgba(0, 0, 0, 0.8)',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               zIndex: 1000
            }} onClick={handleCloseModal}>
               <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }} onClick={(e) => e.stopPropagation()}>
                  <Image src={selectedImage} alt="Imagem em tela cheia" width={600} height={600} objectFit="contain" />
                  <div style={{
                     position: 'absolute',
                     top: '10px',
                     right: '10px',
                     cursor: 'pointer',
                     color: 'white',
                     fontSize: '2xl'
                  }} onClick={handleCloseModal}>
                     &times;
                  </div>
               </div>
            </div>
         )}
      </Box>
   );
}