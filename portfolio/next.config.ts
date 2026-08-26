import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/drexloan15" : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  agentRules: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
