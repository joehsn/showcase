import Layout from "@/components/Layout";
import { Form } from "@/types/form";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Icon,
	Input,
	Card,
	Text,
	Textarea,
	useMediaQuery,
	Divider,
	AbsoluteCenter,
	Heading,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdArrowRightAlt } from "react-icons/md";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/lib/FormSchema";

export default function Contact() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<Form>({
		resolver: yupResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const [isLargerThan768] = useMediaQuery("(min-width: 48em)", {
		ssr: true,
		fallback: false, // return false on the server, and re-evaluate on the client side
	});

	function onSubmit(values: Form) {
		return new Promise((resolve: any) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 3000);
		});
	}

	return (
		<>
			<Head>
				<title>Contact me</title>
			</Head>
			<Layout>
				<Heading as="h1" mb="24" textAlign="center" size="3xl">
					Love to hear from you!
				</Heading>
				<Flex flexDir={{ base: "column-reverse", md: "row" }} gap={4}>
					<Flex
						as="form"
						onSubmit={handleSubmit(onSubmit)}
						direction="column"
						rowGap={4}
						flex="1 0"
					>
						<FormControl isInvalid={errors.name ? true : false}>
							<FormLabel htmlFor="full-name">Name</FormLabel>
							<Input
								id="full-name"
								variant="filled"
								placeholder="Ex: John Doe"
								{...register("name")}
							/>
							{errors.name ? (
								<FormErrorMessage>{errors.name.message}</FormErrorMessage>
							) : null}
						</FormControl>
						<FormControl isInvalid={errors.email ? true : false}>
							<FormLabel htmlFor="email">Email</FormLabel>
							<Input
								id="email"
								variant="filled"
								placeholder="Ex: john@doe.com"
								{...register("email")}
							/>
							{errors.email ? (
								<FormErrorMessage>{errors.email.message}</FormErrorMessage>
							) : null}
						</FormControl>
						<FormControl isInvalid={errors.email ? true : false}>
							<FormLabel htmlFor="msg">Message</FormLabel>
							<Textarea
								id="msg"
								variant="filled"
								resize="none"
								h="32"
								{...register("message")}
								isInvalid={errors.message ? true : false}
								placeholder="Here your message goes..."
							/>
							{errors.message ? (
								<FormErrorMessage>{errors.message.message}</FormErrorMessage>
							) : null}
						</FormControl>
						<Button
							type="submit"
							isLoading={isSubmitting}
							colorScheme="whatsapp"
							rightIcon={<Icon as={MdArrowRightAlt} boxSize={6} />}
							isDisabled={true}
						>
							Finish it
						</Button>
					</Flex>
					{isLargerThan768 ? null : (
						<Box position="relative" padding="4">
							<Divider />
							<AbsoluteCenter px="4">OR</AbsoluteCenter>
						</Box>
					)}
					<Flex
						alignItems="center"
						rowGap={4}
						direction="column"
						flex="1 0"
						pt={{ md: 8 }}
					>
						<Card
							as="a"
							href="mailto:joehsn@outlook.com"
							variant="outline"
							p={4}
							direction="row"
							columnGap={4}
							w="full"
							_hover={{
								bgColor: "#eeeeee15",
							}}
						>
							<Icon as={FaEnvelope} boxSize={6} color="messenger.500" />
							<Text>joehsn@outlook.com</Text>
						</Card>
						<Card
							as="a"
							href="https://wa.me/message/2CEEIOGIE6MAO1"
							variant="outline"
							p={4}
							direction="row"
							columnGap={4}
							w="full"
							_hover={{
								bgColor: "#eeeeee15",
							}}
						>
							<Icon as={FaWhatsapp} boxSize={6} color="whatsapp.500" />
							<Text>Let&rsquo;s chat!</Text>
						</Card>
						<Card
							as="a"
							href="https://goo.gl/maps/mUN7bDjPySNm8XsS6"
							variant="outline"
							p={4}
							direction="row"
							columnGap={4}
							w="full"
							_hover={{
								bgColor: "#eeeeee15",
							}}
						>
							<Icon as={MdLocationPin} boxSize={6} color="GrayText" />
							<Box>
								<Text>Egypt, Qina</Text>
								<Text>Naj&rsquo; Hammadi</Text>
							</Box>
						</Card>
					</Flex>
				</Flex>
			</Layout>
		</>
	);
}
