export const responseJson = (result?: []): {
  success: boolean,
  message: null | string,
  result: [],
  error: null | string,
} => ({
  success: true,
  message: null,
  result: result || [],
  error: null,
});
