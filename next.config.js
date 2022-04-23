const intercept = require("intercept-stdout");

// 安全的移除recoil 重复key 的警告
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

intercept(interceptStdout);

module.exports = nextConfig;
