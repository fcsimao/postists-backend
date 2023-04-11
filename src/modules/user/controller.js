export const createAccount = async (event) => {
  try {
    return {
      statuscode: 200,
      body: JSON.stringify({
        message: 'create account works',
        input: event,
      }),
    }
  } catch (err) {
    return {
      statuscode: 500,
      body: JSON.stringify(err),
    }
  }
}
