module.exports = {
  apps: [
    {
      name: 'yian.dev',
      script: './app.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
};
