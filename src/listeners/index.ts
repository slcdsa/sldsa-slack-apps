import { App } from '@slack/bolt';
import messages from './messages.js';
import commands from './commands.js';

const registerListeners = (app : App) => {
  messages(app);
  commands(app);
};

export default registerListeners;
