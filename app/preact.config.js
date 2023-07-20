import tailwindcss from 'tailwindcss';
import postcssCustomMedia from 'postcss-custom-media';
import getEnvironment from './env';

export default function(config, env, helpers) {
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env': JSON.stringify(getEnvironment(env.production))
    }),
  );
  const results = helpers.getLoadersByName(config, 'postcss-loader');
  for (const result of results) {
    result.loader.options.plugins = [
      postcssCustomMedia,
      tailwindcss('./tailwind.config.js'),
      ...result.loader.options.plugins
    ];
  }
  return config;
};