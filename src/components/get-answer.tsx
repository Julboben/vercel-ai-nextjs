"use client";
import { useState } from "react";
import { getAnswer } from "@/app/actions";
import { Button } from "@/components/ui/button";

const GetAnswer = () => {
	const [generatedText, setGeneratedText] = useState<string>("");
	const [isFetching, setIsFetching] = useState<boolean>(false);

	const fetchAnswer = async () => {
		setIsFetching(true);

		const result = await getAnswer("Why is the sky blue?");

		setGeneratedText(result.text);
		console.log(result);

		setIsFetching(false);
	};

	return (
		<div>
			<Button onClick={fetchAnswer} disabled={isFetching}>
				{isFetching ? "Fetching..." : "Get Answer"}
			</Button>
			<div>{generatedText}</div>
		</div>
	);
};

export { GetAnswer };
