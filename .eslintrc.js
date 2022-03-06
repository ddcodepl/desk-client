module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended'
    ],
    plugins: [
        'unused-imports'
    ],
    ignorePatterns: ['**/*.js.snap'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],
        'symbol-description': 'off',
        'no-return-assign': 'off',
        indent: ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'comma-dangle': ['error', 'only-multiline'],
        'space-before-function-paren': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'vue/html-indent': ['error', 4],
        'max-len': ['error', { code: 160 }],
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: true,
                allowCoexistStyle: true,
            },
        ],
        'vue/no-v-html': 0,
        'vue/no-use-v-if-with-v-for': [
            'warn',
            {
                allowUsingIterationVar: true,
            },
        ],
        'vue/html-closing-bracket-newline': [
            'warn',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'CONTENT',
                    'EVENTS',
                ],
                alphabetical: false,
            },
        ],
        'vue/require-default-prop': 'warn',
        'import/extensions': [
            'error',
            'never',
            {
                js: 'always',
                ts: 'always',
                mjs: 'always',
                jsx: 'always',
                tsx: 'always',
                json: 'always',
                vue: 'always'
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': 0,
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-cycle': 'off',
        'no-underscore-dangle': 'off',
        'prefer-const': 'off',
        'global-require': 'off',
        'no-use-before-define': 'off',
        'no-useless-escape': 'off',
        'import/no-extraneous-dependencies': [
            0,
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        allowImportExportEverywhere: 0,
        'import/no-dynamic-import': 'off',
        'func-names': 'off',
        'object-curly-newline': 'off',
        camelcase: [
            0,
            {
                properties: 'never', // does not check property names
                ignoreDestructuring: true, // does not check destructured identifiers (but still checks any use of those identifiers later in the code)
                ignoreImports: true, // does not check ES2015 imports (but still checks any use of the imports later in the code except function arguments)
                ignoreGlobals: true, // does not enforce camelcase style for global variables
            },
        ],
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'arrow-body-style': ['error', 'as-needed'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'no-param-reassign': 'warn',
        'no-return-await': 'warn',
        'new-cap': 'warn'
    },
};
