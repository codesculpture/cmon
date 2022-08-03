import { bold, blue,green, red, yellow, italic} from "https://deno.land/std@0.74.0/fmt/colors.ts";

const PATH = `./${Deno.args[0]}`;

const printFileError = (): void => {
	console.log(red(bold("Error At Loading File. Please Make Sure You provided correct Name")));
}
const file = await Deno.readFile(PATH).catch((err) => {
	printFileError();
	Deno.exit(0);
});

let fileData = new TextDecoder().decode(file);
const watch = async (): Promise<void> => {
	const currFile = await Deno.readFile(PATH).catch(printFileError);

	if(currFile){
	const currFileData = new TextDecoder().decode(currFile);


	if(currFileData !== fileData){
		console.log(blue('Change Detected'));

		compile();
		
		fileData = currFileData;
	}
	}
}


const compile = async (): Promise<void> => {
	const process = Deno.run({
		cmd: ["gcc", `${PATH.substring(2)}`, "-lstdc++", "-o", `${PATH.substring(0, PATH.length - 4)}`]
});

const { success} = await process.status(); 
if(success){
	console.log(green('Compiled Successfully'));
	execute();
}

else{
	console.log(red('Error'));
}
}


const execute = async (): Promise<void> => {
	console.log(blue(italic('Executing')));

	for(let i = 0; i < 2; i++) console.log("");
	const process = Deno.run({
		cmd: [`./${PATH.substring(0, PATH.length - 4)}`]
	});


	const { success } = await process.status();
	for(let i = 0; i < 2; i++) console.log("");
	if(success){
		console.log(green('Executed Succesfully'));
	}
	else{
	console.log(red('Error At Executing'));
	}

}

console.log(bold(italic(yellow('Watcher Started For '+ Deno.args[0]))));
setInterval(watch, 1000);
