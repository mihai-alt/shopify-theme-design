// ABOUTME: Simple Bun server for previewing Mandatory Fun theme HTML mockups
// ABOUTME: Serves static files from preview/ directory with proper MIME types

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

function getMimeType(path: string): string {
  const ext = path.substring(path.lastIndexOf('.'));
  return MIME_TYPES[ext] || 'application/octet-stream';
}

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html
    if (path === '/') {
      path = '/index.html';
    }

    // Handle .html extension for clean URLs
    if (!path.includes('.')) {
      path = `${path}.html`;
    }

    const filePath = `./preview${path}`;
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file, {
        headers: {
          'Content-Type': getMimeType(path),
        },
      });
    }

    // 404 page
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>404 - File Not Found</title>
        <link rel="stylesheet" href="/css/theme.css">
      </head>
      <body style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center;">
        <div>
          <h1 style="font-size: 4rem; margin-bottom: 1rem;">404</h1>
          <p class="font-mono" style="color: var(--color-text-muted);">FILE NOT FOUND IN RECORDS</p>
          <p style="margin-top: 2rem;"><a href="/" class="btn btn-secondary">RETURN TO MAIN OFFICE</a></p>
        </div>
      </body>
      </html>
    `, {
      status: 404,
      headers: { 'Content-Type': 'text/html' }
    });
  },
});

console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   M A N D A T O R Y   F U N   P R E V I E W   S E R V E R ║
║                                                            ║
║   Your attendance is required at:                          ║
║   http://localhost:${server.port}                                    ║
║                                                            ║
║   HR has been notified of your access.                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`);
