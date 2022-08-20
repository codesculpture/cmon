import showVersion from './version.ts';
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";


Deno.test("Print Version Test", () => {
	const ver = showVersion();
	assertEquals(ver, Deno.env.get("VERSION"));
});
