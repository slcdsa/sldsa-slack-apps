import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

async function main() {
  const port = process.env.PORT || 3000;

  const boltApp = app();
  await boltApp.start(port);

  await boltApp.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: 'bot-spam',
    text: `🤖 Bot \`v${process.env.npm_package_version}\` is now live ⚡`,
  });
}

main().catch(console.error);