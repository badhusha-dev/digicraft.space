import React from 'react';

export default function DigiCraftThemeDemo() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 dc-text-gradient mb-3">DigiCraft Theme Demo</h1>
          <p className="lead text-muted">Showcasing the DigiCraft branding with logo-based colors and gradients</p>
        </div>
      </div>

      {/* Logo Examples */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 mb-4">DigiCraft Logo Sizes</h2>
          <div className="d-flex align-items-center gap-4 mb-4">
            <img src="/logo.svg" alt="DigiCraft Logo Small" className="dc-logo-sm" />
            <img src="/logo.svg" alt="DigiCraft Logo" className="dc-logo" />
            <img src="/logo.svg" alt="DigiCraft Logo Large" className="dc-logo-lg" />
            <img src="/logo.svg" alt="DigiCraft Logo XL" className="dc-logo-xl" />
          </div>
          <p className="text-muted">SVG logo scales perfectly at any size with hover effects</p>
        </div>
      </div>

      {/* Button Examples */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 mb-4">Button Styles</h2>
          <div className="d-flex flex-wrap gap-3">
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-outline-primary">Outline Primary</button>
            <button className="btn btn-dc-primary">DigiCraft Primary</button>
            <button className="btn btn-dc-secondary">DigiCraft Secondary</button>
          </div>
        </div>
      </div>

      {/* Card Examples */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card dc-card">
            <div className="card-body">
              <h5 className="card-title text-primary">DigiCraft Card</h5>
              <p className="card-text">This card uses DigiCraft styling with logo-based colors and hover effects.</p>
              <button className="btn btn-primary btn-sm">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card dc-card dc-gradient-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Gradient Card</h5>
              <p className="card-text">This card showcases the DigiCraft gradient background.</p>
              <button className="btn btn-light btn-sm">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Examples */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="bg-primary rounded-3 p-5 mb-4">
            <h3 className="text-white mb-3">DigiCraft Primary Section</h3>
            <p className="text-white-50 mb-4">This section uses the DigiCraft primary purple background with white text.</p>
            <button className="btn btn-light">Light Button on Purple</button>
          </div>
        </div>
        <div className="col-12">
          <div className="dc-gradient-primary rounded-3 p-5">
            <h3 className="text-white mb-3">DigiCraft Gradient Section</h3>
            <p className="text-white-50 mb-4">This section showcases the DigiCraft gradient from logo colors.</p>
            <button className="btn btn-light">Call to Action</button>
          </div>
        </div>
      </div>

      {/* Text Examples */}
      <div className="row">
        <div className="col-12">
          <h2 className="h3 mb-4">Text Styles</h2>
          <div className="mb-3">
            <h4 className="dc-text-gradient">DigiCraft Gradient Text</h4>
            <p className="text-muted">Regular text with <a href="#" className="text-decoration-none">DigiCraft link styling</a> using logo colors.</p>
            <p className="dc-logo-yellow">Yellow text from logo</p>
            <p className="dc-logo-purple">Purple text from logo</p>
            <p className="dc-logo-magenta">Magenta text from logo</p>
          </div>
          <div className="alert alert-primary" role="alert">
            <strong>Primary Alert:</strong> This alert uses the DigiCraft primary purple color.
          </div>
        </div>
      </div>
    </div>
  );
}
