module.exports = {
  apps: [
    {
      name: "sajjad-portfolio",
      script: "npm",
      args: "start",
      cwd: "/root/portfolio",
      instances: 1, // Utilize all CPU cores for better performance
      exec_mode: "fork", // Enable cluster mode for scalability
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      error_file: "/var/log/pm2/sajjad-error.log",
      out_file: "/var/log/pm2/sajjad-out.log",
      log_file: "/var/log/pm2/sajjad.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G", // Restart if memory exceeds 1GB
      restart_delay: 4000, // Wait 4 seconds before restart
      max_restarts: 10, // Maximum restart attempts
      min_uptime: "10s", // Minimum uptime before considering stable
      kill_timeout: 5000, // Time to wait before force killing
      listen_timeout: 8000, // Time to wait for app to listen
      ignore_watch: ["node_modules", "logs", ".git"],
    },
  ],
};
