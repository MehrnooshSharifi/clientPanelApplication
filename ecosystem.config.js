// module.exports = {
//   apps : [{
//     name: "new_client_panel-app",
//     script: "npm",
//     args: "start -- -p 3000",
//     cwd: "D:/Project/ESB_ClientPanel",
//     watch: true,
//     env: {
//       NODE_ENV: "production",
//     }
//   }]
// };

module.exports = {
  apps: [
    {
      name: "test_pmtwo",
      script: "npm",
      args: "run start",
      interpreter: "cmd.exe",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // or the port your app is running on
      },
    },
  ],
};
