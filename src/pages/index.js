import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
import { FaAdn, FaAdobe, FaAffiliatetheme } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Icon category="md" icon={MdFace} />
		<Icon category="md" icon={MdFace} />
		<Icon category="md" icon={MdFace} />
		<Components.IconComp>
			<Override slot="icon" category="fa" icon={FaAdn} />
			<Override slot="icon1" icon={FaAdobe} category="fa" />
			<Override slot="icon2" category="fa" icon={FaAffiliatetheme} />
		</Components.IconComp>
		<Box>
			<Icon category="md" icon={MdFace} />
			<Icon category="md" icon={MdFace} />
			<Icon category="md" icon={MdFace} />
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});