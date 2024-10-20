import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Raleway, Montserrat } from "next/font/google";
import { theme } from "@/lib/theme";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: "normal",
});
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global
				styles={`
					:root {
						--font-montserrat: ${montserrat.style.fontFamily};
						--font-raleway: ${raleway.style.fontFamily};
            --font-ia-writer: 'iA Writer Mono', monospace;
					}
				`}
			/>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
