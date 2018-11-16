# Ionic-project-CSC510
Steps to install project:

1. Install Node JS LTS version from website: https://nodejs.org/en/ currently running on versoin 8.11.4
2. Install ionic following steps as provided at site: https://ionicframework.com OR in Command Prompt, run npm install
`npm install -g ionic`
3. To test with simulator and browser, create ionic account and request to be added on the Ionic dashboard created by the creator of the app. Once access is given, dashboard can be used for configurational changes and other permissions
.
4. Install cordova to test with native features of the app using npm 
`npm install -g cordova`

5. Check for git installation. Install project from link using git command
`git clone` or `git pull repository_link`

6. Switch to development branch for recent changes
`git checkout develop`

7. Change to project directory and run project using following command
`npm  install`

8. Run project using following command
`ionic serve -c`

-c command is used for simulating on device which is connected to the same internet as the device from which the program is run

9. Please post over slack channel in case of any issues  at https://csc-510-se-project.slack.com/messages/CD715QZ8D/

How to run fastlane

1. Go to root directory of this project
2. Install fastlane with `gem install fastlane -NV`
2. cd to the platforms folder and run `fastlane build` to run create a build of the app
