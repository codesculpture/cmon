import {printError, printSuccess} from "../index.ts";
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


const generateTemplate = (name: string): void => {

	try{
	Deno.writeTextFile(name+".cpp", content);
	printSuccess(`Created Template ${name}.cpp Open in your Code Editor`);
	}
	catch(e){
	printError({name: 'At Creating Template', code: e.message})
	}
}

export default generateTemplate;
