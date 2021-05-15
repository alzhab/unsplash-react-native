module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.jsx'],
        alias: {
          '@assets': './src/assets/',
          '@icons': './src/assets/icons/index.tsx',
          '@stores': './src/stores/index.tsx',
          '@components': './src/components/index.ts',
          '@modules': './src/modules/index.tsx',
          '@config': './src/config',
          '@utils': './src/utils/index.tsx',
          '@types': './src/types/index.ts',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
