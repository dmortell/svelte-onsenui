module.exports = {
  transform: {
    '^.+\\.svelte$': ['svelte-jester', {'debug': true}],
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
	testEnvironment: 'jsdom',
};