import Slack from '@slack/bolt';
import dotenv from 'dotenv';
import registerListeners from './listeners/index.js';

dotenv.config();

// Initialize app
const app = new Slack.App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

/** Register Listeners */
registerListeners(app);

export default app;
