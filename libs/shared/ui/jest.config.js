module.exports = {
	displayName: 'shared-ui',
	preset: '../../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
		'^.+\\.svg$': 'jest-transformer-svg'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../../coverage/libs/shared/ui',
};
