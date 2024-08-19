import { GetAnswer } from "@/components/get-answer";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const Home = () => {
	return (
		<div className="mx-auto flex max-w-7xl items-center justify-between p-4">
			<GetAnswer />
		</div>
	);
};

export default Home;
