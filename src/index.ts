// Configure variables in environment file (.env)
import { randomBytes } from "crypto";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

(async function main() {
	const time = Date.now();
	try {
		fetch(process.env.ENDPOINT!)
			.then(resp => resp.text())
			.then(() => {
				console.log(`Time taken: ${Date.now() - time}ms`, randomBytes(4).toString("hex"));
				main();
			});
	} catch (error) {
		setImmediate(main);
	}
}());
