import Link from "next/link";
import Image from "next/image";
import UploadIcon from "@mui/icons-material/Upload";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "@/redux/apiCalls";
import { useRouter } from "next/router";
import { IUser } from "./../../../types/types";

interface Props {
	userData?: IUser;
}

const Navbar: FunctionComponent<Props> = ({ userData }) => {
	const router = useRouter();
	const [navToggle, setNavToggle] = useState<Boolean>(false);
	const [profToggle, setProfToggle] = useState<Boolean>(false);
	const dispatch = useDispatch();
	const onSignOut = () => {
		router.push("/");
		signOut(dispatch);
	};
	return (
		<nav className="w-full px-2 sm:px-4 py-2.5 bg-black z-20 font-mono border-b border-gray-800">
			<div className="flex flex-row items-center justify-between mx-auto ">
				<div>
					<Link href="/" className="flex items-center justify-center">
						<Image
							width={100}
							height={100}
							src="/img/ScriptOwl_logo_transparent.png"
							className="h-12 w-12 mr-3 "
							alt="Flowbite Logo"
						/>
						<span className="self-center text-xl whitespace-nowrap dark:text-white">
							ScriptOwl
						</span>
					</Link>
				</div>
				<div
					className={`absolute lg:static top-14 left-0 items-center justify-between ${
						navToggle ? "block" : "hidden"
					} w-full lg:w-fit lg:flex lg:w-auto lg:order-1 z-20 `}
					id="mobile-menu-2"
				>
					<ul
						className={`flex 
						flex-col p-4 mt-4 border-b border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 items-center lg:mt-0 lg:text-lg lg:font-mono lg:border-0 lg:bg-white dark:bg-black lg:dark:bg-transparent dark:border-gray-700 `}
					>
						<li>
							<Link
								href="/"
								className="block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 lg:hover:text-blue-500 text-gray-600 hover:text-white "
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/explore"
								className="block py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:hover:text-white lg:hover:bg-transparent text-gray-600 hover:text-white"
							>
								Explore
							</Link>
						</li>
						<li className="block p-1 px-2 rounded-lg text-blue-600 hover:text-white lg:border-2 border-blue-600 lg:hover:text-black lg:hover:bg-blue-600 hover:cursor-pointer flex flex-row items-center text-gray-600 hover:text-white lg:text-blue-600">
							<Link
								className="whitespace-nowrap"
								href={userData ? "/post" : "/login"}
							>
								<UploadIcon />
								<span>Post</span>
							</Link>
						</li>
						<li>
							<Link
								href="/pricing"
								className="block py-2 pl-3 pr-4 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:hover:text-white lg:hover:bg-transparent text-gray-600 hover:text-white"
							>
								Pricing
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="block py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:hover:text-white hover:text-white lg:hover:bg-transparent text-gray-600 hover:text-white"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href="/login"
								className="block lg:hidden py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:hover:text-white hover:text-white lg:hover:bg-transparent text-gray-600 hover:text-white whitespace-nowrap"
							>
								Log In
							</Link>
						</li>
						<li>
							<Link
								href="/register"
								className="block lg:hidden py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:hover:text-white hover:text-white lg:hover:bg-transparent text-gray-600 hover:text-white whitespace-nowrap"
							>
								Sign Up
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center lg:order-2">
					{userData ? (
						<button
							type="button"
							className="flex mr-3 text-sm bg-gray-800 rounded-full lg:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
							id="user-menu-button"
							aria-expanded="false"
							data-dropdown-toggle="user-dropdown"
							data-dropdown-placement="bottom"
							onFocus={() => setProfToggle(true)}
							onBlur={() =>
								setTimeout(() => setProfToggle(false), 200)
							}
						>
							<Image
								height={50}
								width={50}
								className="w-10 h-10 rounded-full"
								src={
									userData.avatarKey.startsWith(
										"https://lh3.googleusercontent.com"
									)
										? userData.avatarKey
										: `${process.env.NEXT_PUBLIC_SERVER_DOMAIN}images/${userData.avatarKey}`
								}
								alt="user photo"
							/>
						</button>
					) : (
						<div>
							<ul
								className="flex flex-row "
								aria-labelledby="user-menu-button"
							>
								<li>
									<Link
										href="/login"
										className="hidden lg:block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white whitespace-nowrap"
									>
										Log In
									</Link>
								</li>
								<li>
									<Link
										href="/register"
										className="hidden lg:block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-white dark:text-gray-200 dark:hover:text-black whitespace-nowrap"
									>
										Sign Up
									</Link>
								</li>
							</ul>
						</div>
					)}
					<div
						className={`absolute top-16 right-6 lg:right-[2em] 4xl:right-[8rem] ${
							profToggle ? "block" : "hidden"
						} z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
						id="user-dropdown font-mono w-[12rem] h-[24rerm]`}
					>
						<div className="px-4 py-3 ">
							<span className="block text-sm text-gray-900 dark:text-white">
								{userData ? userData.username : "Not signed in"}
							</span>
							<span className="block text-sm text-gray-500 truncate dark:text-gray-400">
								{userData ? userData.email : ""}
							</span>
						</div>
						<ul>
							<li>
								<Link
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 hover:cursor-pointer rounded"
									href={{
										pathname: "/account",
									}}
								>
									Account
								</Link>
							</li>
							<li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 hover:cursor-pointer rounded">
								<Link
									href={{
										pathname: "/uploads",
										query: {
											postIds: userData?.uploadedPostIds,
										},
									}}
								>
									Uploads
								</Link>
							</li>
							<li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 hover:cursor-pointer rounded">
								<Link
									href={{
										pathname: "/likedvideos",
										query: {
											postIds: userData?.likedPostsIds,
										},
									}}
								>
									Liked Videos
								</Link>
							</li>
							<li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 hover:cursor-pointer rounded">
								<Link
									href={{
										pathname: "/history",
									}}
								>
									Watch History
								</Link>
							</li>
							<li
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 hover:cursor-pointer rounded"
								onClick={onSignOut}
							>
								Sign out
							</li>
						</ul>
					</div>

					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-transparent dark:focus:ring-gray-600"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
						onClick={() => setNavToggle(!navToggle)}
					>
						<div
							className={`relative flex overflow-hidden items-center justify-center rounded-lg w-[50px] h-[50px] transform transition-all ring-opacity-30 duration-200 ${
								navToggle ? "" : "shadow-lg"
							} `}
						>
							<div
								className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
							>
								<div
									className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
										navToggle ? "translate-x-10" : ""
									}`}
								></div>
								<div
									className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
										navToggle ? "translate-x-10" : ""
									}`}
								></div>
								<div
									className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
										navToggle ? "translate-x-10" : ""
									}`}
								></div>

								<div
									className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
										navToggle
											? "translate-x-0 w-12"
											: "-translate-x-10 w-0`}flex w-0 "
									}`}
								>
									<div
										className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
											navToggle ? "rotate-45" : "rotate-0"
										}`}
									></div>
									<div
										className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
											navToggle
												? "-rotate-45"
												: "-rotate-0"
										}`}
									></div>
								</div>
							</div>
						</div>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
