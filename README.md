#PAO YING SHUP GAME

##Set up for development

### Prerequisite
- NodeJS (install by [NVM](https://github.com/creationix/nvm#install-script) is recommended)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

Clone this repository and go inside the directory:
```
git clone git@github.com:kimkimhun/pao-ying-shup.git
cd pao-ying-shup
```
Install JavaScript dependencies:
```
yarn install
```
### Development server
To run dev server with auto reload:
```
yarn start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test
To run tests (unit testing & snapshot testing):
```
yarn test
```



## Game Logic
```

options
"ROCK", "PAPER", "SCISSOR"

decision logic

if (userChoice === computerChoice) return tie
else if (userChoice === "ROCK") && (userChoice === "SCISSOR") return won
else if (userChoice === "PAPER") && (userChoice === "ROCK") return won
else if (userChoice === "SCISSOR") && (userChoice === "PAPER") return won
else return lost
```