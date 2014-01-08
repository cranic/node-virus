REPORTER = spec

test:
	./node_modules/.bin/mocha      \
	        --reporter $(REPORTER) \
	        --ui tdd               \
	        test/*.js

.PHONY: test
