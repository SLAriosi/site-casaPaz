import { Card } from "@chakra-ui/react";
import card1 from "../../../public/banner/DSC_0416.jpg";
import card2 from "../../../public/banner/DSC_0605.jpg";
import card3 from "../../../public/banner/DSC_0693.jpg";
import Image from "next/image";

export const SectionAction = () => {
    return (
        <>
            <section style={{
                backgroundColor: '#a2bd30',
                opacity: 1,
                backgroundImage: `
                  radial-gradient(circle at center center, #ffffff, #a2bd30),
                  repeating-radial-gradient(
                    circle at center center,
                    #ffffff,
                    #ffffff 40px,
                    transparent 80px,
                    transparent 40px
                  )`,
                backgroundBlendMode: 'multiply',
            }} className="p-10 sm:p-16 md:p-20 flex flex-col justify-between items-center w-full text-white">
                <div>
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold pb-3" style={{ color: "#fff" }}>
                            Nossas áreas de atuação
                        </h1>
                    </div>
                    <div className="w-full mb-6" style={{ backgroundColor: "#a2bd30", height: "3px" }}></div>
                    <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl pt-1 pb-10">
                        <span className="text-sm sm:text-base md:text-lg">
                            Por meio do fortalecimento de vínculos, promovemos a interação, colaboração e o desenvolvimento mútuo que integra a criança e o adolescente com a família e a comunidade. Para isso, oferecemos oficinas socioeducativas de arte, esporte, cultura e lazer.
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-7 gap-5">
                    <div>
                        <Card.Root maxW="350px" overflow="hidden" className="mx-auto">
                            <Image
                                src={card1}
                                alt="PDI"
                                className="w-full h-auto"
                            />
                            <Card.Body gap="2" textAlign="center">
                                <Card.Title fontSize="xl" fontWeight="extrabold" color="#4970b1">PDI</Card.Title>
                                <Card.Description fontWeight="bold">
                                    Programa de Desenvolvimento Infanto-juvenil
                                </Card.Description>
                            </Card.Body>
                            <Card.Footer gap="2" />
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root maxW="350px" overflow="hidden" className="mx-auto">
                            <Image
                                src={card2}
                                alt="PFI"
                                className="w-full h-auto"
                            />
                            <Card.Body gap="2" textAlign="center">
                                <Card.Title fontSize="xl" fontWeight="extrabold" color="#4970b1">PFI</Card.Title>
                                <Card.Description fontWeight="bold">
                                    Programa de Integração Familiar e Comunitária
                                </Card.Description>
                            </Card.Body>
                            <Card.Footer gap="2" />
                        </Card.Root>
                    </div>
                    <div>
                        <Card.Root maxW="350px" overflow="hidden" className="mx-auto">
                            <Image
                                src={card3}
                                alt="PDC"
                                className="w-full h-auto"
                            />
                            <Card.Body gap="2" textAlign="center">
                                <Card.Title fontSize="xl" fontWeight="extrabold" color="#4970b1">PDC</Card.Title>
                                <Card.Description fontWeight="bold">
                                    Programa de Desenvolvimento do Colaborador
                                </Card.Description>
                            </Card.Body>
                            <Card.Footer gap="2" />
                        </Card.Root>
                    </div>
                </div>
            </section>
        </>
    )
}