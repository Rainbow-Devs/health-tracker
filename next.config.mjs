/** @type {import("next").NextConfig} */
const config = {
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },

  output: "standalone",
  reactStrictMode: true,
  swcMinify: true
};

export default config;
