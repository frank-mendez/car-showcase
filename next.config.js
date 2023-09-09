/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		apiKey: process.env.API_KEY,
		carApiKey: process.env.CAR_API_KEY,
	},
	images: {
		domains: ['cdn.imagin.studio'],
	},
}

module.exports = nextConfig
