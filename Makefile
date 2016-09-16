.PHONY: init clean compile lint lint_fix start dev deploy deploy_dev deploy_prod test test_dev

underline=`tput smul`
nounderline=`tput rmul`
bold=`tput bold`
normal=`tput sgr0`

help:
	@echo
	@echo ${underline}General commands:${nounderline}
	@echo ${bold}make init${normal}"  "Download the required modules and dependencies for building
	@echo ${bold}make clean${normal}"  "Clean up intermediate folders and files
	@echo
	@echo ${underline}Build commands:${nounderline}
	@echo ${bold}make compile${normal}"  "Compile the application into dist/ directory
	@echo ${bold}make lint${normal}"  "Run linting on all relevant files
	@echo ${bold}make lint_fix${normal}"  "Run linting on all relevant files and try to automatically fix errors
	@echo ${bold}make start${normal}"  "Serves the app at localhost:3000. HMR will be enabled in development
	@echo ${bold}make dev${normal}"  "Same as npm start, but enables nodemon for the server as well
	@echo ${bold}make deploy${normal}"  "Runs linter, tests, and then, on success, compiles the application
	@echo ${bold}make deploy_dev${normal}"  "Same as deploy but overrides NODE_ENV to "development"
	@echo ${bold}make deploy_prod${normal}"  "Same as deploy but overrides NODE_ENV to "production"
	@echo
	@echo ${underline}Test commands:${nounderline}
	@echo ${bold}make test${normal}"  "Runs unit tests with Karma and generates a coverage report
	@echo ${bold}make test_dev${normal}"  "Run local tests and re-run on file change
	@echo

init:
	npm install
	npm update

init_circle:
	@make init

clean:
	@npm run -s clean

compile:
	@npm run -s compile

lint:
	@npm run -s lint

lint_fix:
	@npm run -s lint:fix

start:
	@npm run -s start

dev:
	@npm run -s dev

test:
	@npm run -s test

test_circle:
	@npm run -s test

test_dev:
	@npm run -s test:dev

deploy:
	@npm run -s deploy

deploy_dev:
	@npm run -s deploy:dev

deploy_prod:
	@npm run -s deploy:prod

codecov:
	@npm run -s codecov
