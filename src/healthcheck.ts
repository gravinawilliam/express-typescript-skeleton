/**
 * Health check to verify if the service is alive.
 */

import * as http from 'http';

import { AppConfig } from '@presentation/config/app.config';

const options = {
  host: 'localhost',
  port: AppConfig.PORT,
  timeout: 2000,
  path: '/healthz'
};

const request = http.request(options, (response: http.IncomingMessage) => {
  process.exitCode = response.statusCode === 200 ? 0 : 1;
  process.exit();
});

request.on('error', () => {
  process.exit(1);
});

request.end();
