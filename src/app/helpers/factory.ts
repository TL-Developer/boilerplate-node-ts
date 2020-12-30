export const responseJson = (result?: []) => ({
  success: true,
  message: null,
  result: result || [],
  error: null,
});
