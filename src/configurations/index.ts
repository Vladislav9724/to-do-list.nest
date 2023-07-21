export default () => ({
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  secret_jwt: process.env.JWT_SECRET,
  expire_jwt: process.env.JWT_EXPIRES_IN,
});
