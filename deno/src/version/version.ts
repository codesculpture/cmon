import meta from '../../metadata.json' assert {type: "json"};
const showVersion = (): string | undefined => {
	return meta.version;
}

export default showVersion;
