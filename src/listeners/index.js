import messages from './messages.js';
import commands from './commands.js';

const registerListeners = (app) => {
  messages(app);
  commands(app);
};

export default registerListeners;
