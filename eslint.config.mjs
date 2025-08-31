// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginVue from 'eslint-plugin-vue'

export default withNuxt(
  {
    // TypeScript configuration
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json']
      }
    },
    plugins: {
      vue: eslintPluginVue
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Vue rules
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always'
      }],
      
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    }
  }
)