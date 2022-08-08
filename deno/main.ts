import { bold, blue,green, red, yellow, italic} from "https://deno.land/std@0.74.0/fmt/colors.ts";
import checkFolder from "./src/checkFolder.ts";

const PATH = Deno.args[0];

const fileNameArr = Deno.args[0].split('/');

const FILE_NAME = fileNameArr.at(-1);


const printFileError = (): void => {
	console.log(red(bold("Error At Loading File. Please Make Sure You provided correct Name")));
}
if(!FILE_NAME) {
	printFileError();
	Deno.exit(0);
}
const file = await Deno.readFile(PATH).catch((err) => {
	printFileError();
	Deno.exit(0);
});

checkFolder();

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
		cmd: ["gcc", `${PATH}`, "-lstdc++", "-o", `./binaries/${FILE_NAME.substring(0, FILE_NAME.length - 4)}`]
});

const { success} = await process.status(); 
if(success){
	console.log(green('Compiled Successfully'));
	execute();
}

else{
	console.log(red('Error At Compiling'));
	console.log(blue('Waiting For Change'))
}
}


const execute = async (): Promise<void> => {
	console.log(blue(italic('Executing')));

	for(let i = 0; i < 2; i++) console.log("");

	const process = Deno.run({
		cmd: [`./binaries/${FILE_NAME.substring(0, FILE_NAME.length - 4)}`]
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

console.log(bold(italic(yellow('Watcher Started For '+ FILE_NAME))));
compile();
setInterval(watch, 1000);
