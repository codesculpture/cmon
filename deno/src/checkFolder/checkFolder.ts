import {
  ensureDirSync
} from "https://deno.land/std@0.78.0/fs/mod.ts";

const checkFolder = () => {
	ensureDirSync("./binaries");

}

export default checkFolder;
