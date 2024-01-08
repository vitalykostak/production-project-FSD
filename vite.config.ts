import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { type ExecutionEnvironment } from 'config/build/types/config'

const executionEnvironment: ExecutionEnvironment = 'app'
const apiUrl = 'http://localhost:8000'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: 'default',
            },
            include: '**/*.svg',
        }),
    ],
    resolve: {
        alias: [{ find: '@/', replacement: '/src/' }],
    },
    define: {
        IS_DEV: true,
        API_URL: JSON.stringify(apiUrl),
        EXECUTION_ENVIRONMENT: JSON.stringify(executionEnvironment),
    },
})
