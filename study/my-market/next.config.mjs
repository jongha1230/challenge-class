// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dnvefa72aowie.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "oatjjmygrhxoweibgueh.supabase.co",
      },
    ],
  },
};

export default nextConfig;
