import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import anImportantCalculation from "../utils/calculation";
import { Box, Heading, Button } from "@chakra-ui/react";

const Hero = () => {
	const [today, settoday] = useState("");

	useEffect(() => {
		anImportantCalculation();

		setTimeout(() => {
			settoday(moment().format("MMMM Do"));
		}, 1000);

		return () => {};
	}, []);

	return (
		<Box
			sx={{
				position: "relative",
			}}
		>
			<div
				style={{
					backgroundImage: "url('/you-x-ventures-nF0nQuqBsrI-unsplash.jpg')",
					height: "50vh",
					backgroundSize: "cover",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						right: "0",
						bottom: "0",
						backgroundColor: "rgba(56,66,89, .25)",
					}}
				></div>
				<Box
					sx={{
						zIndex: 1,
					}}
				>
					<Heading as="h1" mb="3" color="white">
						Full websites in 1 hour or less!
					</Heading>
					<Button colorScheme="teal">View Appointments for {today} </Button>
				</Box>
			</div>
		</Box>
	);
};

Hero.propTypes = {};

export default Hero;
