/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images configuration commented out - Cloudflare Images (cdn-cgi/image) is not available in the free tier
  // images: {
  //   loader: "custom",
  //   loaderFile: "./imageLoader.ts",
  // },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
