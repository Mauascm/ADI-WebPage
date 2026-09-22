import { createRequire } from "node:module";
import { FlatCompat } from "@eslint/eslintrc";
const require = createRequire(import.meta.url);
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  resolvePluginsRelativeTo: import.meta.dirname,
});
const config = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...compat.extends(
    require.resolve("eslint-config-next/core-web-vitals"),
    require.resolve("eslint-config-next/typescript"),
  ),
];
export default config;
