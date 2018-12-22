module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules:{
        "eol-last":0,
        "indent": ["error", 2],
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "no-console": "off",
        "import/newline-after-import": "off",
        "react/jsx-filename-extension": 0,
        "import/extensions": 0
    }
}