import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/providers";
import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export const metadata: Metadata = {
	title: "AKQA DENDACH - VERCEL AI STARTER",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		/**
		 * The `suppressHydrationWarning` prop is used to suppress the warning that
		 * comes from next-themes:
		 * https://github.com/vercel/next.js/discussions/22388
		 */
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.variable,
				)}
			>
				<Toaster position="bottom-right" />
				<Providers
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
