module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}', "!**/*.d.ts",
        '!<rootDir>/src/main/**/*',
        '!<rootDir>/src/presentation/components/Router**/*',
        '!**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    }
}
