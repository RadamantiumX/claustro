import { defineConfig } from 'vitest/config'
// Can add the "setUpFiles" property, for include another file with the "MOCK" configuration of Data Base.
export default defineConfig({
  test: {
    include: ['**/*.test.ts', '**/*.spec.ts'],
    includeSource: ['src/**/*.{js, ts}'],
    globals: true,
    environment: 'node',
   // setupFiles: ["test/setup.ts"] <-- like this
  },
  define: { 
    'import.meta.vitest': 'undefined', 
  }, 
})