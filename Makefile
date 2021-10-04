.PHONY: test lint check-format format

check: check-format lint test

test:
	deno test test/**/*.spec.ts

lint:
	deno lint src

check-format:
	deno fmt --check src

format:
	deno fmt src

build:
	deno run --no-check --unstable --allow-read --allow-write="./" --allow-env="DENO_DIR,POSIX_HOME,HOME" https://deno.land/x/deno2node/src/cli.ts ./tsconfig.json
