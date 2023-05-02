// package for setting up python script calls
const { spawn } = require("child_process");
const fs = require("fs");

export const getVideoData = (filename: string) => {
	return new Promise<string>((resolve, reject) => {
		try {
			let result;
			const scriptPath = `${process.cwd()}/src/uploads/test.py`;
			const pythonScript = spawn("python", [scriptPath, filename]);
			pythonScript.stdout.on("data", (data) => {
				result = data.toString();
			});
			pythonScript.on("close", () => {
				console.log(result);
				resolve(result);
			});
			pythonScript.on("error", (err) => {
				throw new Error(err.message);
			});
		} catch (e) {
			reject(e);
		}
	});
};
