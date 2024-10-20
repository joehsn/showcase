import { FormDataType } from "@/pages/get-in-touch";
import { Box, Text, Heading, Divider, VStack } from "@chakra-ui/react";

const EmailTemplate = ({ email, message, name }: FormDataType) => {
	return (
		<Box
			borderWidth="1px"
			borderRadius="lg"
			p={5}
			maxW="600px"
			mx="auto"
			mt={10}
			bg="white"
			boxShadow="lg"
		>
			{/* Email Header */}
			<VStack spacing={4} align="flex-start">
				<Heading size="lg">New Message Received</Heading>
				<Text fontSize="lg">
					<strong>From:</strong> {name}
				</Text>
				<Text fontSize="lg">
					<strong>Email:</strong> {email}
				</Text>
			</VStack>

			<Divider my={4} />

			{/* Message Section */}
			<Box mt={4}>
				<Text fontSize="md" mb={2}>
					<strong>Message:</strong>
				</Text>
				<Text
					fontSize="md"
					p={3}
					bg="gray.50"
					borderRadius="md"
					whiteSpace="pre-wrap"
				>
					{message}
				</Text>
			</Box>
		</Box>
	);
};

export default EmailTemplate;
