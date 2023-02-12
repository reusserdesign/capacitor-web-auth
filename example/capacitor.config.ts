import type { CapacitorConfig } from "@capacitor/cli";
/// <reference types="@capacitor/splash-screen" />
import path from "path";

let config: CapacitorConfig;

const baseConfig: CapacitorConfig = {
  "appId": "com.example.plugin",
  "appName": "example",
  "bundledWebRuntime": false,
  "webDir": "dist",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  }
};

if (process.argv[3] === "ios") {
  switch (process.env.NODE_ENV) {
    default:
      config = {
        ...baseConfig,
        server: {
          "url": "http://127.0.0.1:5173",
          "cleartext": true
        },
      };
      break;
  }
} else {
  config = baseConfig;
}

export default config;
