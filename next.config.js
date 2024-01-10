/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'i.dummyjson.com',
                    pathname: '**',
                },
                {
                    protocol: 'https',
                    hostname: 'cdn.dummyjson.com',
                    pathname: "**"
                }
            ],
        },
}

module.exports = nextConfig
