import Layout from "@/components/Layout";
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
	Divider,
	AbsoluteCenter,
	Heading,
	useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdArrowRightAlt } from "react-icons/md";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/lib/FormSchema";
import { z } from "zod";
import Customs from "@/lib/customs";
import axios, { AxiosError } from "axios";

export type FormDataType = z.infer<typeof FormSchema>;

export default function Contact() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormDataType>({
		resolver: zodResolver(FormSchema),
	});

	const toast = useToast();
	async function onSubmit(values: FormDataType) {
		try {
			const req = await axios.post("/api/send", values);
			const data = await req.data;
			console.log(data);
			toast({
				title: "Message sent!",
				description: "We have received your message.",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			reset();
			return data;
		} catch (error) {
			console.error(error);
			if (error instanceof AxiosError) {
				toast({
					title: "Error!",
					description: error.message,
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			}
		}
	}

	const { isLargerThan768, bgColor } = Customs();

	return (
		<>
			<Head>
				<title>Contact me</title>
			</Head>
			<Layout
				py={{
					base: "4",
					md: "16",
				}}
			>
				<Heading as="h1" mb="24" textAlign="center" size="3xl">
					Love to hear from you!
				</Heading>
				<Flex flexDir={{ base: "column", md: "row-reverse" }} gap={4}>
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
								rounded="lg"
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
								rounded="lg"
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
								rounded="lg"
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
						<Button type="submit" isLoading={isSubmitting} colorScheme="green">
							Send
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
						pb={{ md: 8 }}
					>
						<Card
							as="a"
							href="mailto:joehsn@outlook.com"
							variant="outline"
							p={4}
							direction="row"
							columnGap={4}
							bgColor={bgColor}
							w="full"
							rounded="2xl"
						>
							<Icon as={FaEnvelope} boxSize={6} color="messenger.500" />
							<Text>joehsn@outlook.com</Text>
						</Card>
						<Card
							as="a"
							href="https://goo.gl/maps/mUN7bDjPySNm8XsS6"
							variant="outline"
							p={4}
							direction="row"
							columnGap={4}
							bgColor={bgColor}
							w="full"
							rounded="2xl"
						>
							<Icon as={MdLocationPin} boxSize={6} />
							<Box w="full">
								<Text>Nagaa Hammadi</Text>
								<Text>Qina, Egypt</Text>
								<Box
									as="iframe"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14337.328209381705!2d32.237338449999996!3d26.0554024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1448d118b39a0ff9%3A0x1266a2d07bca4e96!2sNagaa%20Hammadi%2C%20Madinet%20Najaa%20Hammadi%2C%20Nag%20Hammadi%2C%20Qena%20Governorate!5e0!3m2!1sen!2seg!4v1729452639338!5m2!1sen!2seg"
									height="300"
									style={{
										border: 0,
									}}
									width="full"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									rounded="lg"
									mt={3}
								/>
							</Box>
						</Card>
					</Flex>
				</Flex>
			</Layout>
		</>
	);
}
