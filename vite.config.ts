import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCommonjs(), react(), tsconfigPaths()],
  base: '/stellar-burgers/',
});
