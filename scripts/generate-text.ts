import dotenv from "dotenv";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

dotenv.config({
	path: ".env.local",
});

const main = async () => {
	const result = await generateText({
		model: openai("gpt-3.5-turbo"),
		prompt: "Why is the sky blue?",
	});

	console.log(result);
};

main().catch(console.error);
