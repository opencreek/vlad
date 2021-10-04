.PHONY: test lint check-format format

check: check-format lint test

test:
	deno test test/**/*.spec.ts

lint:
	deno lint

check-format:
	deno fmt --check

format:
	deno fmt
