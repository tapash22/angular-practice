import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      jsdoc: jsdoc,
    },
    rules: {
      // TypeScript recommended rules
      ...tseslint.configs.recommended.rules,

      // JSDoc rules
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,       // Functions
            FunctionExpression: true,        // Function expressions
            ArrowFunctionExpression: true,  // Arrow functions
            MethodDefinition: true,         // Method definitions
            ClassDeclaration: true,         // Class declarations
          },
        },
      ],
      'jsdoc/require-param': 'warn',  // Require param documentation
      'jsdoc/require-returns': 'warn',  // Require return documentation
    },
  },
];
