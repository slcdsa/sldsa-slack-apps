const register = (app) => {
  app.message(/^(hi|hello|hey)$/i, healthCheck);
};

const healthCheck = async ({context, say}) => {
  try {
    const greeting = context.matches[0];
    await say(`${greeting}, how are you?`);
  } catch (error) {
    console.error(error);
  }
};

export default register;
