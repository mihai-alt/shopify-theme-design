// ABOUTME: Simple Bun server for previewing Mandatory Fun theme HTML mockups
// ABOUTME: Serves static files from the preview folder with proper MIME types

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html
    if (path === '/') {
      path = '/index.html';
    }

    // Get file extension for MIME type
    const ext = path.substring(path.lastIndexOf('.'));
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

    // Construct the file path relative to this script's directory
    const filePath = `.${path}`;

    try {
      const file = Bun.file(filePath);

      if (await file.exists()) {
        return new Response(file, {
          headers: {
            'Content-Type': mimeType,
          },
        });
      }

      // 404 - File not found
      return new Response('Not found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });
    } catch (error) {
      console.error(`Error serving ${path}:`, error);
      return new Response('Internal Server Error', {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  },
});

console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🕐 Mandatory Fun Theme Preview                           ║
║                                                            ║
║   Server running at: http://localhost:${server.port}                ║
║                                                            ║
║   Pages:                                                   ║
║   • Homepage:    http://localhost:${server.port}/                   ║
║   • Collection:  http://localhost:${server.port}/collection.html    ║
║   • Product:     http://localhost:${server.port}/product.html       ║
║   • Cart:        http://localhost:${server.port}/cart.html          ║
║                                                            ║
║   Press Ctrl+C to stop                                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`);
