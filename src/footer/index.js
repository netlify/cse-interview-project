import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Text } from "@chakra-ui/react";
import anImportantCalculation from "../utils/calculation";

const Footer = () => {
	anImportantCalculation();

	return (
		<footer
			py="5"
			sx={{
				backgroundColor: "rgb(56,66,89)",
			}}
		>
			<Text
				py="3"
				px="5"
				color="white"
				center
			>{`© Copyright ${moment().year()}, Lorem Inc.`}</Text>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
