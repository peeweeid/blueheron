/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);
module.exports = nextConfig
module.exports = withImages(withTM());
