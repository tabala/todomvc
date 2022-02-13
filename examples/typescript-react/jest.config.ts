import type {Config} from '@jest/types';
const {defaults} = require('jest-config');


export default async (): Promise<Config.InitialOptions> => {
	return {
		verbose: true,
		moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
		preset: 'ts-jest',
		testEnvironment: 'node',

	};
};
