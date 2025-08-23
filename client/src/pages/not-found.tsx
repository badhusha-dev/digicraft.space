import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 text-center">
              <div className="card-body p-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <AlertCircle className="text-danger me-2" size={32} />
                  <h1 className="h3 fw-bold text-dark mb-0">404 Page Not Found</h1>
                </div>

                <p className="text-muted mb-4">
                  The page you're looking for doesn't exist.
                </p>
                
                <Link href="/">
                  <button className="btn btn-primary">
                    Go Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
