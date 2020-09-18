module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@repositories': './src/repositories',
        '@database': './src/database',
        '@models': './src/models',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
