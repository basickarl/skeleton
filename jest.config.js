module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    testEnvironment: 'node',
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'report',
                outputName: 'jest-junit.xml'
            }
        ]
    ]
};
