module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "google"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "indent": ["error", 2]
    }
}
