import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/funcadelic.js',
    output: {
      name: 'funcadelic',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(), 
      commonjs() 
    ]
  },

  {
    input: 'src/funcadelic.js',
    external: id => /lodash/.test(id) || /object.getownpropertydescriptors/.test(id),
    output: [
			{ file: pkg.main, format: 'cjs' }, 
			{ file: pkg.module, format: 'es' }
		]
  }
]
