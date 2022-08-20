import "https://deno.land/x/dotenv/load.ts";

const showVersion = (): string | undefined => {
	return Deno.env.get('VERSION');
}

export default showVersion;
