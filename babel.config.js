module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: {
          browsers: ['> 1%', 'last 2 versions'],
        },
        corejs: { version: 3, proposals: true },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { modules: 'commonjs' }], '@babel/preset-react'],
    },
  },
};
