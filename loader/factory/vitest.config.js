"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
// Can add the "setUpFiles" property, for include another file with the "MOCK" configuration of Data Base.
exports.default = (0, config_1.defineConfig)({
    test: {
        include: ['**/*.test.ts', '**/*.spec.ts'],
        includeSource: ['src/**/*.{js, ts}'],
        globals: true,
        environment: 'node',
        setupFiles: ["./src/test/setup.ts"],
        isolate: false,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html']
        }
    },
    define: {
        'import.meta.vitest': 'undefined',
    },
});
