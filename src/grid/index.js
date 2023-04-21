import React from "react";
import anImportantCalculation from "../utils/calculation";
import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	Text,
	SimpleGrid,
} from "@chakra-ui/react";

const Grid = () => {
	anImportantCalculation();

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			return null;
		}
	});

	return (
		<Container p={4} maxW="6xl">
			<Heading mb="2" mt="5" p="4">
				About Us
			</Heading>
			<SimpleGrid columns={2} spacing={10}>
				<Box p="4">
					<Image src="/andreas-klassen-gZB-i-dA6ns-unsplash.jpg" />
				</Box>
				<Box p="4">
					<Text mb={3}>Lorem ipsum dolor sit amet consectetur adipiscing</Text>
					<Button colorScheme="blue">Learn More</Button>
				</Box>
				<Box p="4">
					<Text mb={3}>Lorem ipsum dolor sit amet consectetur adipiscing</Text>
					<Button colorScheme="blue">Learn More</Button>
				</Box>
				<Box p="4">
					<Image src="/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg" />
				</Box>
				<Box p="4">
					<Image src="/christina-wocintechchat-com-tKYfcTaXsf0-unsplash.jpg" />
				</Box>
				<Box p="4">
					<Text mb={3}>Lorem ipsum dolor sit amet consectetur adipiscing</Text>
					<Button colorScheme="blue">Learn More</Button>
				</Box>
			</SimpleGrid>
		</Container>
	);
};

export default Grid;
