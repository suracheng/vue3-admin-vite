module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "review",
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
}