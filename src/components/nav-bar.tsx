import { ThemeToggle } from "@/components/theme-toggle";

const NavBar = () => (
	<header className="bg-white dark:bg-black dark:text-white">
		<nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
			<p className="font-extrabold tracking-tight">AKQA</p>
			<ThemeToggle />
		</nav>
	</header>
);

export { NavBar };
