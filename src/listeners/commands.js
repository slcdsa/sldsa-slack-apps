const register = (app) => {
  // The echo command simply echoes on command
  app.command('/health', async ({command, ack, respond}) => {
    try {
      // Acknowledge command request
      await ack();
      await respond(`🤖 I'm alive! 🎉`);
    } catch (error) {
      console.log(error);
    }
  });
};

export default register;
