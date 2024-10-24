/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverActions: {
    allowedOrigins: [
    "https://automatic-space-adventure-4jwvvq5j67q5cq7w4-3000.app.github.dev/",
    "localhost:3000",
    ],
    },
    mdxRs: true,
    },
    };
export default nextConfig;
