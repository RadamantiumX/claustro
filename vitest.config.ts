import { defineConfig } from 'vitest/config'
// Can add the "setUpFiles" property, for include another file with the "MOCK" configuration of Data Base.
export const vitestConfig = defineConfig({
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
  
})