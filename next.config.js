/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader',
      },
    });

    return config;
  },
};


module.exports = nextConfig
