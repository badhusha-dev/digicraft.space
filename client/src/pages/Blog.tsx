import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Clock, User } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts, BlogPost } from "../data/blogPosts";
import { logPageView } from "../utils/analytics";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    logPageView("blog");
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tutorial", name: "Tutorials" },
    { id: "insights", name: "Industry Insights" },
    { id: "tips", name: "Development Tips" },
  ];

  const categoryColors: { [key: string]: string } = {
    tutorial: "bg-primary",
    insights: "bg-success",
    tips: "bg-info",
    Development: "bg-primary",
    Frontend: "bg-success",
    Backend: "bg-info",
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Insights on software development, technology trends, and best practices. Learn from our team's experience building scalable applications."
        keywords="software development blog, react tutorials, technology insights, development tips, programming best practices"
      />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-4">
              DigiCraft Blog
            </h1>
            <p className="lead text-muted max-w-3xl mx-auto">
              Insights on software development, technology trends, and best practices
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn ${
                  selectedCategory === category.id
                    ? "btn-primary"
                    : "btn-outline-secondary"
                } rounded-pill px-4 py-2`}
                data-testid={`button-category-${category.id}`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Blog Grid */}
          <div className="row g-4 mb-5">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="col-md-6 col-lg-4"
                data-testid={`card-blog-post-${post.id}`}
              >
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="card-img-top"
                      style={{ height: '12rem', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className={`badge ${categoryColors[post.category]} px-3 py-2`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold text-dark mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="d-flex align-items-center justify-content-between small text-muted">
                      <div className="d-flex align-items-center gap-3">
                        <div className="d-flex align-items-center">
                          {post.authorAvatar ? (
                            <img
                              src={post.authorAvatar}
                              alt={post.author}
                              className="rounded-circle me-2"
                              width="24"
                              height="24"
                            />
                          ) : (
                            <div className="rounded-circle me-2 bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px', fontSize: '10px' }}>
                              {post.author.charAt(0)}
                            </div>
                          )}
                          <span>{post.author}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <Calendar size={16} className="me-1" />
                          <span>{post.publishedAt || post.date}</span>
                        </div>
                      </div>
                      {post.readTime && (
                        <div className="d-flex align-items-center">
                          <Clock size={16} className="me-1" />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-light rounded-3 p-5 text-center">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Stay Updated
            </h2>
            <p className="lead text-muted mb-4">
              Get the latest insights on software development and technology trends delivered to your inbox.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="d-flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control flex-grow-1"
                    data-testid="input-newsletter-email"
                  />
                  <button 
                    className="btn btn-primary px-4 py-2"
                    data-testid="button-newsletter-subscribe"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
