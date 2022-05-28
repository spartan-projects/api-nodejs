module.exports = {
    branches: ['main'],
    repositoryUrl: 'https://github.com/spartan-projects/api-rest',
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        ['@semantic-release/github', {
            assets: [
                {path: "dist/dist.zip", label: "distributable.zip"},
                {path: "dist/coverage.zip", label: "coverage.zip"}
            ]
        }]
    ]
}