import path from 'node:path';
import { fileURLToPath } from 'node:url';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.RECALL_DIST_DIR || '.next',
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
  poweredByHeader: false,
  async headers() {
    // Static App Router boot scripts and Motion styles require inline allowances.
    // Keep that tradeoff explicit; adopting nonces would require dynamic HTML.
    const dev = process.env.NODE_ENV !== 'production';
    const csp = ["default-src 'self'", `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://cdn.jsdelivr.net${dev ? " 'unsafe-eval'" : ''}`, "style-src 'self' 'unsafe-inline'", "connect-src 'self' https://huggingface.co https://*.huggingface.co https://*.hf.co https://cdn.jsdelivr.net" + (dev ? " ws: wss:" : ''), "worker-src 'self' blob:", "img-src 'self' data: blob:", "font-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'"].join('; ');
    return [{ source: '/:path*', headers: [
      { key: 'Content-Security-Policy', value: csp },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'no-referrer' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
    ] }];
  },
  // Recall runs Transformers.js in the browser. Prevent webpack from trying to
  // bundle ONNX Runtime's native Node bindings (which are binary .node files
  // and cannot be parsed by a browser bundle).
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'onnxruntime-node': false,
    };
    return config;
  },
};

export default nextConfig;


