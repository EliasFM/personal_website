import type { NextConfig } from "next";

const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  // basePath: "/personal-website",
};

export default nextConfig;
