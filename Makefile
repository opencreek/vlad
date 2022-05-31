.PHONY: test lint check-format format

check: check-format lint test

test:
	deno test

lint:
	deno lint --ignore=dist

check-format:
	deno fmt --check --ignore=dist

format:
	deno fmt --ignore=dist

build:
	deno run --no-check --unstable --allow-read --allow-write="./" --allow-env="DENO_DIR,POSIX_HOME,HOME,XDG_CACHE_HOME" https://deno.land/x/deno2node@v1.2.1/src/cli.ts ./tsconfig.json
