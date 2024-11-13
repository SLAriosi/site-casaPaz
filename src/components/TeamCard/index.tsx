// components/TeamCard.js
import { Box, Text} from "@chakra-ui/react";
import { TeamMember } from "../../types/team";
import photo1 from "../../../public/images/DSC_0510.jpg";
import Image from "next/image";

export default function TeamCard({ photo, name, role }: TeamMember) {
    return (
        <Box
            className="min-w-lg mx-auto"
            borderTop={"lg"}
            borderColor={"#a2bd30"}
            bg="white"
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            p={10}
            textAlign="center"
        >
            <Image
                src={photo1}
                alt={`Foto de ${name}`}
                className="w-36 h-36 rounded-full mx-auto"
                objectFit="cover"
                
            />
            <Text fontSize="xl" color="gray.700" paddingTop={"15px"} fontWeight="bold" mb={1}>
                {name}
            </Text>
            <Text fontSize="md" color="gray.600">
                {role}
            </Text>
        </Box>
    );
}
