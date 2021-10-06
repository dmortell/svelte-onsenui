module.exports = {
	// displayName: { name: 'web', color: 'magentaBright' },
  transform: {
    // '^.+\\.svelte$': require.resolve('svelte-jester'),
    // '^.+\\.js$': require.resolve('babel-jest'),
    '^.+\\.svelte$': ['svelte-jester', {'debug': true}],
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
	testEnvironment: 'jsdom',
};