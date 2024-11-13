"use client";

import { Box, SimpleGrid, Heading, Spinner } from "@chakra-ui/react";
import TeamCard from "../TeamCard/index";
import { TeamMember } from "../../types/team";
import { useState, useEffect } from "react";

export default function TeamSection() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTeamMembers = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/team");
            const data: TeamMember[] = await response.json();
            setTeamMembers(data);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar membros da equipe:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
        const intervalId = setInterval(fetchTeamMembers, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box className="py-12">
            <h3 className="text-center text-4xl font-bold pb-1" style={{color: "#4970b1"}}>
                Nossa equipe
            </h3>
            <h3 className="text-center text-md font-bold pb-10" style={{color: "#4970b1"}}>
                Conheça um pouco dos nossos colaboradores
            </h3>
            {loading ? (
                <Spinner size="xl" />
            ) : (
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5}>
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            photo={member.photo}
                            name={member.name}
                            role={member.role}
                        />
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
}
