"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const getAnswer = async (question: string) => {
	const { text, finishReason, usage } = await generateText({
		model: openai("gpt-3.5-turbo"),
		prompt: question,
	});

	return { text, finishReason, usage };
};

export { getAnswer };
