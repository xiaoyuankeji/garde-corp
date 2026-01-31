/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // 禁用图片优化，直接使用原始 URL，解决本地加载和静态导出问题
    domains: ["localhost", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/garde-corp",
        destination: "/garde-corps",
        permanent: true,
      },
      {
        source: "/devis",
        destination: "/devis-garde-corps",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
