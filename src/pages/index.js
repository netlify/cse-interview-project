import * as React from "react";
import { Helmet } from "react-helmet";
import Grid from "../grid";
import Hero from "../hero";

// markup
const IndexPage = () => {
	return (
		<main>
			<Helmet>
				<script
					src="https://code.jquery.com/jquery-3.5.1.min.js"
					integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
					crossorigin="anonymous"
				/>
			</Helmet>
			<title>Home Page</title>
			<Hero />
			<Grid />
		</main>
	);
};

export default IndexPage;
