module.exports = {
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    rules: {
        "no-console": 2,
        "react/no-unescaped-entities": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "indent": 0,
        "import/first": 0,
        "arrow-body-style": 2,
        "no-plusplus": [
            2,
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/require-default-props":[
            2,
            {
                "ignoreFunctionalComponents": true
            }
        ],
        "react/no-did-mount-set-state": 0,
        "react/no-unused-state": 2,
        "react/no-unused-prop-types": 0,
        "react/jsx-curly-brace-presence": 2,
        "react/jsx-boolean-value": 2,
        "react/prefer-stateless-function": 2,
        "react/jsx-closing-bracket-location": 2,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-use-before-define": [0],
        "@typescript-eslint/no-use-before-define": [1],
        "no-unreachable": 2,
        "spaced-comment": 2,
        "react/prop-types": 0,
        "react/default-props-match-prop-types": 0,
        "react/jsx-props-no-spreading": 0,
        "newline-after-var": 0,
        "import/prefer-default-export": 0,
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "tabWidth": 4,
                "printWidth": 120,
                "trailingComma": "all"
            }
        ],
        "jsx-a11y/heading-has-content": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "jsx-a11y/media-has-caption": 0,
        "import/no-named-as-default": 0,
        "@typescript-eslint/camelcase": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/anchor-has-content": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-types": 0,
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-function-return-type": 2,
        "@typescript-eslint/no-explicit-any": 2,
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
            "error"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "export"
            },
            {
                "blankLine": "any",
                "prev": "export",
                "next": "export"
            }
        ],
        "react/state-in-constructor": [0, "always"],
        "react/static-property-placement": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/interactive-supports-focus": 0,
        "react-hooks/exhaustive-deps": "off"
    },
    overrides: [
        {
            files: [
                ",*.ts', '*.tsx"
            ],
            rules: {
                "@typescript-eslint/no-unused-vars": [
                    0,
                    {
                        "args": "none"
                    }
                ],
                "@typescript-eslint/no-explicit-any": 0
            }
        },
        {
            files: [
                "*.test.js"
            ]
        },
        {
            files: [
                "*.js"
            ],
            rules: {
                "@typescript-eslint/explicit-function-return-type": 0
            }
        }
    ]
}
  