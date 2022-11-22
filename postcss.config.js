// const cssnano = require('cssnano')({ preset: 'default' })

// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     require('tailwindcss')('./tailwind.config.js'),
//     ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
//   ]
// }

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require("cssnano")({ preset: "default" })]
      : []),
  ],
};
