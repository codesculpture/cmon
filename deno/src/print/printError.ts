import { bold, blue,green, red, yellow, italic} from "https://deno.land/std@0.74.0/fmt/colors.ts";

const printError = ({name, code}: {name: string, code:string}): void => {
	console.log(bold(red(`Error At ${name} Code:${code}`)));
}

export default printError;
