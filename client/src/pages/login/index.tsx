import { FormEvent, FunctionComponent, useEffect } from "react";
import { login } from "@/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import LoginForm from "@/components/Login/LoginForm";

interface Props {}

const Login: FunctionComponent<Props> = () => {
	const router = useRouter();
	const { currentUser, error, isFetching } = useSelector(
		(state: any) => state.user
	);
	const dispatch = useDispatch();
	const validateForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(dispatch, {
			logInUsername: e.currentTarget.username.value,
			logInPassword: e.currentTarget.password.value,
		});
	};
	useEffect(() => {
		if (currentUser) {
			if (!currentUser.isVerified) {
				router.replace("/verify");
			} else {
				router.back();
			}
		}
	}, [currentUser, router]);
	return (
		<>
			<div className="h-screen w-screen flex flex-col items-center justify-center space-y-10 font-mono overflow-y-scroll">
				<LoginForm
					error={error}
					validateForm={validateForm}
					isFetching={isFetching}
				/>
			</div>
		</>
	);
};

export default Login;
