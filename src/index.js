import process from 'process';
import app from './app.js';

try {
  await app.start();

  // suppress bot messages during development
  if (!(process.argv.includes('-s') || process.argv.includes('--silent'))) {
    // Notify the bot is live
    await app.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: process.env.BOT_SPAM_CHANNEL,
      text: `🤖 Bot \`v${process.env.npm_package_version}\` is now live ⚡`,
    });
  }

  console.log(`⚡️ Slack Bolt app is running on port 
      ${app.installerOptions.port}!`);
} catch (error) {
  console.error(error);
}
