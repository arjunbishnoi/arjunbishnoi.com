import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["src/lib/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@/components/*",
            "@/components/**",
            "@/app/*",
            "@/app/**",
            "@/hooks/*",
            "@/hooks/**",
          ],
        },
      ],
    },
  },
  {
    files: ["src/hooks/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@/components/*",
            "@/components/**",
            "@/app/*",
            "@/app/**",
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
