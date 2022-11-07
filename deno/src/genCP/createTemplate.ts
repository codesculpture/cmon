import {printError, printSuccess} from "../index.ts";
import { exists } from "deps";

const content = `#include<bits/stdc++.h>
#define ll long long
#define vi vector<int>
#define vp vector<pair<int, int>>
#define pb push_back
#define pi pair<int, int>

using namespace std;

void solve() {
	//Crack It..
}

int main() {
	int T;
	cin >> T;
	while(T--) solve();
	return 0;
}
`


const generateTemplate = async(name: string): Promise<void> => {

	try{
		name += ".cpp";
		if(await exists(name)){
	printError({name: 'Already File Exists', code: 'FILE_EXIST'});
	const choice = prompt("Do You Want to override the file [Y]:");
	if(!(choice == "Y" || choice == "y")){
		printSuccess(`Terminated`);
		return;
		}
		}
	Deno.writeTextFile(name, content);
	printSuccess(`Created Template ${name} Open in your Code Editor`);
	}
	catch(e){
	printError({name: 'At Creating Template', code: e.message})
	}
}

export default generateTemplate;
