# Cmon
![Logo](/media/logo/cmon-logo-200x200.png)

Command-Line-Interface for watching C++ Programs and executing it.

No More Compile and Execute.

It is built on [Deno](https://deno.land/) which is a Runtime for JS. And also it provides executables (Binary thats how it is Cmon)

It can be executed at Command-Prompt, Shell or any CLI.

Just it needs the File Name of the Program.

#### Currently It Supports Only GCC Compiler
### Samples
It is Just a C++ Program.

![A Program](/media/screenShots/1.png)

And then we just call our Binary with the filename of Program
![Calling](/media/screenShots/2.png)
Then it starts to *watch*

If some changes occur in source file the watcher will recompile and execute it.
![ReCompile](/media/screenShots/3.png)


### Compiling Source 
It is easy to compile the Source which is ***main.ts***

`deno compile --allow-read --allow-run main.ts`

It Requires two Flags 
`allow-read` is for watching the file(the C++ Programs) and `allow-run` is for Executing Binary in the Runtime itself(Executing Output)


### Thank You
Its just a basic **solution** (idk if it is..) just i feeled too bad when i want to work with C or C++ programs.
It needs to compile and execute whenever the program the changes. Although im a Web Developer i hated it. So just automated it in a basic manner. So Thanks for reading this.