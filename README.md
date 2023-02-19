# Vite + React + Stitches + Storybook Example

## How to run

```bash
  # Install dependencies
  yarn

  # Run dev server
  yarn dev

  # Run storybook server
  yarn storybook
```

## Stacks

- [Vite with React + TS](https://vitejs.dev/guide/)
- [Stitches](https://stitches.dev/)
- [Storybook (use storybook-vite automatically)](https://storybook.js.org/docs/react/get-started/install)

## Configs

### Use `@/*` alias for `./src/*`

- Use alias setting in `tsconfig.json`

  ```typescript
    // tsconfig.json

    {
      // ...
      "paths": {
        "@/*": ["src/*"]
      }
    }
  ```

- Vite and storybook-vite can use the alias with `vite-tsconfig-paths`

  ```typescript
    // vite.config.ts

    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    import tsconfigPaths from "vite-tsconfig-paths";

    export default defineConfig({
      plugins: [react(), tsconfigPaths()],
    });
  ```

  ```typescript
  // .storybook/main.ts

  module.exports = {
    // ...
    async viteFinal(config) {
      const { config: userConfig } = await loadConfigFromFile(
        path.resolve(__dirname, "../vite.config.ts")
      );

      return mergeConfig(config, {
        ...userConfig,
        // manually specify plugins to avoid conflict
        plugins: [tsconfigPaths.default()],
      });
    },
  };
  ```

## Special Thanks to

- [Naehyeok Jeong](https://github.com/jeongnaehyeok)
