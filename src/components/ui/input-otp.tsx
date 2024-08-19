"use client";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useContext } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { DotIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const InputOTP = forwardRef<
	ElementRef<typeof OTPInput>,
	ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={cn(
			"flex items-center gap-2 has-[:disabled]:opacity-50",
			containerClassName,
		)}
		className={cn("disabled:cursor-not-allowed", className)}
		{...props}
	/>
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = forwardRef<
	ElementRef<"div">,
	ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = forwardRef<
	ElementRef<"div">,
	ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
	const inputOTPContext = useContext(OTPInputContext);
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

	return (
		<div
			ref={ref}
			className={cn(
				"relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
				isActive && "z-10 ring-2 ring-ring ring-offset-background",
				className,
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
				</div>
			)}
		</div>
	);
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = forwardRef<
	ElementRef<"div">,
	ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
	<div ref={ref} role="separator" {...props}>
		<DotIcon />
	</div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
