module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/github',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    ['@semantic-release/release-notes-generator'],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): release ${nextRelease.version}',
      },
    ],
  ],
  branches: ['main'],
  preset: 'angular',
};
