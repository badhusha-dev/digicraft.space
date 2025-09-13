from http.server import HTTPServer, BaseHTTPRequestHandler
import time

class SimpleHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(f"Hello from Docker Compose! 🐳 Time: {time.ctime()}".encode())

if __name__ == "__main__":
    print("Starting server on port 6060...")
    server = HTTPServer(("", 6060), SimpleHandler)
    server.serve_forever()