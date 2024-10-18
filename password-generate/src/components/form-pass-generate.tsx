"use client";
import { useState } from "react";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectGroup,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { Toaster, toast } from "sonner";

export function FormPassGenerate({ wordList }: { wordList: string[] }) {
	const [maxLength, setMaxLength] = useState(24);
	const [separator, setSeparator] = useState("-");
	const [password, setPassword] = useState("");

	function generatePassword() {
		let newPassword = password;
		if (password.length > 0) {
			setPassword("");
			newPassword = "";
		}
		for (let i = 0; i < maxLength; i++) {
			const randomWord =
				wordList[Math.floor(Math.random() * wordList.length + i)];
			newPassword += randomWord;
			if (i < maxLength - 1) {
				newPassword += separator;
			}
		}

		newPassword = newPassword.slice(0, maxLength - 2);
		newPassword += Math.floor(Math.random() * 10);
		setPassword(newPassword);
	}

	return (
		<Card
			key="1"
			className="max-w-4xl mx-auto p-6 md:p-12 lg:px-24 lg:py-12 space-y-6 bg-[#3D3D3D]"
		>
			<CardHeader className="space-y-1">
				<CardTitle className="text-3xl font-bold text-[#B8B8B8]">
					Password Generator
				</CardTitle>
				<CardDescription className="text-[#B8B8B8]">
					Generate a secure password with random words
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
				<div className="lg:w-1/2 space-y-4">
					<div className="p-6 bg-[#2B2B2B] rounded-lg space-y-2">
						<h2 className="text-xl font-semibold text-[#B8B8B8]">
							Generated Password
						</h2>
						<Toaster position="top-center" />
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<p
							className="text-lg bg-[#1B1B1B] max-w-60 p-4 rounded-lg text-left cursor-copy break-words text-white text-wrap"
							onClick={() => {
								navigator.clipboard.writeText(password);
								if (!password) toast.error("generate a password first");
								else toast.success("Copied to clipboard");
							}}
						>
							{password || "Click Generate"}
						</p>
						<div className="flex items-center">
							<Badge className="bg-[#1B1B1B]  text-[#B8B8B8]">
								{password.length} Characters
							</Badge>
						</div>
					</div>
					<Button
						onClick={() => generatePassword()}
						className="w-full bg-[#2B2B2B] text-[#B8B8B8]"
					>
						Generate More
					</Button>
				</div>
				<div className="lg:w-1/2 space-y-4">
					<h2 className="text-xl font-semibold text-[#B8B8B8]">Preferences</h2>
					<div className="space-y-2">
						<Label className="text-[#B8B8B8]" htmlFor="length">
							Password Length
						</Label>
						<Input
							className="bg-[#2B2B2B] text-[#B8B8B8]"
							id="length"
							value={maxLength}
							onChange={(e) => {
								setMaxLength(Number(e.target.value));
							}}
							max={124}
							minLength={8}
							min={8}
							placeholder="14"
							type="number"
						/>
					</div>
					<div className="space-y-2">
						<Label className="text-[#B8B8B8]" htmlFor="separator">
							Separated by
						</Label>
						<Select
							value={separator}
							onValueChange={(newValue) => {
								setSeparator(newValue);
								console.log(separator);
							}}
						>
							<Select onValueChange={(e) => setSeparator(e)}>
								<SelectTrigger>
									<SelectValue
										className="bg-[#2B2B2B] text-white"
										placeholder="Select a separator"
									/>
								</SelectTrigger>
								<SelectContent className="bg-[#2B2B2B]">
									<SelectGroup>
										<SelectItem className="text-white" value="-">
											-
										</SelectItem>
										<SelectItem className="text-white" value="@">
											@
										</SelectItem>
										<SelectItem className="text-white" value="$">
											$
										</SelectItem>
										<SelectItem className="text-white" value="#">
											#
										</SelectItem>
										<SelectItem className="text-white" value="%">
											%
										</SelectItem>
										<SelectItem className="text-white" value="&">
											&
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<SelectContent className="bg-[#2B2B2B]">
								<SelectGroup>
									<SelectItem value="-">-</SelectItem>
									<SelectItem value="@">@</SelectItem>
									<SelectItem value="$">$</SelectItem>
									<SelectItem value="#">#</SelectItem>
									<SelectItem value="%">%</SelectItem>
									<SelectItem value="&">&</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
