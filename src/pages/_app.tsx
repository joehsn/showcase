import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { JetBrains_Mono, Roboto, Vidaloka } from "next/font/google";
import { theme } from "@/lib/theme";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const vidaloka = Vidaloka({ subsets: ["latin"], weight: ["400"] });
const jetBrain = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global
				styles={`
					:root {
						--font-roboto: ${roboto.style.fontFamily};
						--font-vidaloka: ${vidaloka.style.fontFamily};
						--font-jetBrain: ${jetBrain.style.fontFamily};
					}
				`}
			/>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
