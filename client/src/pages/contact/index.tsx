import React, { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	// Validate the contact form
	const handleFormSubmit = (e: any) => {
		e.preventDefault();
		console.log({ email, name, message });
	};
	return (
		<div className="h-full w-full flex flex-col items-center justify-center space-y-10 font-mono py-10">
			<h1 className="text-4xl font-medium text-slate-100">Contact</h1>
			<form
				action="submit"
				className="flex flex-col space-y-4 border-2 rounded border-slate-100 bg-transparent text-slate-100 w-100 p-10 w-3/4 lg:w-1/3 md:p-16"
				onSubmit={(e) => handleFormSubmit(e)}
			>
				<div className="relative">
					<input
						type="text"
						id="email"
						className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label
						htmlFor="email"
						className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
					>
						E-mail
					</label>
				</div>
				<div className="relative">
					<input
						type="text"
						id="email"
						className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<label
						htmlFor="email"
						className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
					>
						Name
					</label>
				</div>
				<div className="relative">
					<label
						htmlFor="message"
						className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
					>
						Message
					</label>
					<textarea
						id="message"
						className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder="Leave a comment..."
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>
				<button
					onClick={(e) => handleFormSubmit(e)}
					className="text-white bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:text-black border-2 border-white "
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
