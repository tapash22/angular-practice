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
      // TypeScript recommended
      ...tseslint.configs.recommended.rules,

      // JSDoc rules
      'jsdoc/require-jsdoc': [
        'warn', 
        {
          require: {
            FunctionDeclaration: true,   // Enforce JSDoc for functions
            MethodDefinition: true,      // Enforce JSDoc for methods
            VariableDeclarator: true,    // Enforce JSDoc for variables
            IfStatement: true,           // Enforce JSDoc for conditionals like if statements
            ForStatement: true,          // Enforce JSDoc for loops
            WhileStatement: true,        // Enforce JSDoc for while loops
          },
        },
      ],
      'jsdoc/require-param': 'warn',
      'jsdoc/require-returns': 'warn',
    },
  },
];
