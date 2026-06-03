import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['@syncfusion/ej2-base', '@syncfusion/ej2-charts']
    }
});
