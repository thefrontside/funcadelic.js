
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const globals = {
  'lodash.curry': '_.curry',
  'object.getownpropertydescriptors': 'Object.getOwnPropertyDescriptors'
};

let external = Object.keys(globals);

export default [
  // browser-friendly UMD build
  {
    input: 'src/funcadelic.js',
    output: {
      name: 'funcadelic',
      file: pkg.browser,
      globals,
      format: 'umd'
    },
    external,
    plugins: [            
      babel({
        runtimeHelpers: true,
        babelrc: false,
        comments: false,
        presets: [
          [
            "env",
            {
              modules: false
            }
          ]
        ],
        plugins: ["external-helpers"]
      }),
      resolve(), 
      commonjs()
    ]
  },
  {
    input: 'src/funcadelic.js',
    external,
    output: [
			{ file: pkg.main, format: 'cjs' }, 
			{ file: pkg.module, format: 'es' }
		]
  }
]
