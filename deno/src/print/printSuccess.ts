import { bold, blue,green, red, yellow, italic} from "https://deno.land/std@0.74.0/fmt/colors.ts";

const printSuccess = (message: string): void =>{
	console.log(green(`Successfully ${message}!`));
}

export default printSuccess;
