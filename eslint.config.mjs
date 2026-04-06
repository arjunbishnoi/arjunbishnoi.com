import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/**'
    ],
  },
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off'
    }
  }
]);

export default eslintConfig;
