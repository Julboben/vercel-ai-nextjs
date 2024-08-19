"use client";
import { useEffect, useState, useTransition } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();
	const [_, startTransition] = useTransition();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => {
				startTransition(() => {
					setTheme(theme === "light" ? "dark" : "light");
				});
			}}
		>
			{theme === "dark" ? (
				<MoonIcon className="transition-all" />
			) : (
				<SunIcon className="transition-all" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
ThemeToggle.displayName = "ThemeToggle";

export { ThemeToggle };
