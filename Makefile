.PHONY: build init run buildProd buildProdLive test coverage publish iter_docs

underline=`tput smul`
nounderline=`tput rmul`
bold=`tput bold`
normal=`tput sgr0`

help:
	@echo
	@echo ${underline}General commands:${nounderline}
	@echo ${bold}make init${normal}"  "Download the required modules and dependencies for building
	@echo ${bold}make clean${normal}"  "Clean up intermediate folders and files
	@echo ${bold}make publish${normal}"  "Upload the tarball to S3 and push a git tag"
	@echo
	@echo ${underline}Build commands:${nounderline}
	@echo ${bold}make build${normal}"  "Build the dev frontend, run quick tests, and generate coverage
	@echo
	@echo ${underline}Test commands:${nounderline}
	@echo ${bold}make test${normal}"  "Run local tests on PhantomJS, Chrome, Safari, and Firefox
	@echo ${bold}make test:dev${normal}"  "Run local tests and re-run on file change
	@echo

init:
	npm install
	npm update

init_circle:
	@make init

clean:
	@npm run -s clean

build:
	@npm run -s clean
	@npm run -s esLintAllowWarnings
	@npm run -s build
	@npm run -s makeDist
	@npm run -s coverage
	@npm run -s docs

build_prod:
	@npm run -s clean
	@npm run -s esLint
	@npm run -s build
	@npm run -s docs

autolint:
	@npm run -s autolint

test:
	@npm run -s test

test_circle:
	@npm run -s coverage

test_debug:
	@./node_modules/.bin/karma start karma/phantom-debug.conf.js

iter_docs:
	rm -rf docs/ && npm run -s docs

serve:
	@npm run -s serve

publish:
	@npm run -s publish

update_template:
	git fetch template && git merge template/master
