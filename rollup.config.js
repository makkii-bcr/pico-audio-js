import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

const babelParam = {
  babelHelpers: 'bundled',
  presets: ["@babel/preset-env"]
};

export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/pico-audio.js',
        format: 'esm',
        name: 'PicoAudio'
      }
    ],
    plugins: [
      // babel(babelParam)
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/pico-audio.min.js',
        format: 'iife',
        name: 'PicoAudio'
      }
    ],
    plugins: [
      babel(babelParam),
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/pico-audio.mjs',
        format: 'esm'
      }
    ]
  }
];