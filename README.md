# Discord Bot Starter Code

## Set up:

Before setting up, make sure you have [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed.

Before working on this project, consider checking out this [tutorial on using discord.js](https://discordjs.guide/) - for the time being, this tutorial is only useful until 'Commands with user inputs.' We will move further with the project at a later date. At that point, more of the tutorial will be useful so feel free to read ahead!

1. Clone this repository onto your local machine using git CLI: `git clone git@github.com:Dino-Martinez/Discord.js-Template.git`
2. CD into the project root directory
3. Install dependencies/style guides using `npm ci`
4. Create a file named `.env` at the root directory, and add the line `BOT_TOKEN=<TOKEN GOES HERE>` replacing the right hand side with your bot token.
6. <strong> Before pushing to github, make sure you enforce styling: </strong>
   - Run `npm run lint <file_path>` to receive styling suggestions.
   - Run `npm run fix <file_path>` to automatically fix incorrect styling. Note: this will not always fix everything, you may have to fix certain things manually.

## Further Documentation:

Check out [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) for more information on everything available through the Discord API.

Check out [node.js](https://nodejs.org/en/docs/) for more information on the Node runtime and environments.

Check out the [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for more information on JavaScript as a whole.

## Expected features:

- Dynamic command handler to make adding new commands easy.
- Dynamic help command to allow users to learn how the bot works
- Simple info command to receive information about the server
- Dynamic embed creator to make pretty messages easier to build
- Dynamic logging functionality to allow important events to be tracked
- Dynamic cooldown handling for commands
