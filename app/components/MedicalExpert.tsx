'use client'

import { useEffect } from 'react'

export default function MedicalExpert() {
  useEffect(() => {
    // Load medical security shield
    const securityScript = document.createElement('script')
    securityScript.src = '/js/medical-security-shield.js'
    securityScript.async = true
    document.body.appendChild(securityScript)

    // Load advanced medical AI engine
    const aiEngineScript = document.createElement('script')
    aiEngineScript.src = '/js/medical/advanced-medical-ai-engine.js'
    aiEngineScript.async = true
    document.body.appendChild(aiEngineScript)

    return () => {
      document.body.removeChild(securityScript)
      document.body.removeChild(aiEngineScript)
    }
  }, [])

  return (
    <>
      {/* Medical Expert Premium Styles */}
      <link rel="stylesheet" href="/css/medical-ultra-premium-2025.css" />
      <link rel="stylesheet" href="/css/medical-premium-hospital.css" />
      <link rel="stylesheet" href="/css/hospital-light-theme-override.css" />
      <link rel="stylesheet" href="/css/analysis-panels-fix.css" />
      <link rel="stylesheet" href="/css/advanced-image-ui.css" />
      <link rel="stylesheet" href="/css/mobile-menu-fix.css" />
      <link rel="stylesheet" href="/css/top-nav-dashboard.css" />

      <div className="medical-expert-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="brand-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0L25 15H40L27.5 24L32.5 40L20 30L7.5 40L12.5 24L0 15H15L20 0Z" fill="#27AE60"/>
                </svg>
              </div>
              <div className="brand-text">
                <h1 className="brand-name">Medical Expert</h1>
                <p className="brand-subtitle">AI Healthcare Platform</p>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-section">
              <h3 className="nav-section-title">Main Features</h3>
              <ul className="nav-list">
                <li className="nav-item active">
                  <a href="#consultation" className="nav-link">
                    <span className="nav-icon">💬</span>
                    <span className="nav-text">AI Consultation</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#diagnosis" className="nav-link">
                    <span className="nav-icon">🔍</span>
                    <span className="nav-text">Diagnosis Assistant</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#imaging" className="nav-link">
                    <span className="nav-icon">📸</span>
                    <span className="nav-text">Medical Imaging</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#lab-results" className="nav-link">
                    <span className="nav-icon">🔬</span>
                    <span className="nav-text">Lab Results</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#medications" className="nav-link">
                    <span className="nav-icon">💊</span>
                    <span className="nav-text">Medication Guide</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav-section">
              <h3 className="nav-section-title">Specialties</h3>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#cardiology" className="nav-link">
                    <span className="nav-icon">❤️</span>
                    <span className="nav-text">Cardiology</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#neurology" className="nav-link">
                    <span className="nav-icon">🧠</span>
                    <span className="nav-text">Neurology</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#oncology" className="nav-link">
                    <span className="nav-icon">🎗️</span>
                    <span className="nav-text">Oncology</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="sidebar-footer">
            <div className="disclaimer">
              <p className="disclaimer-text">
                ⚠️ This information is not medical advice. Please consult a healthcare professional.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Top Navigation */}
          <header className="top-nav">
            <div className="top-nav-content">
              <div className="nav-left">
                <h2 className="page-title">AI Medical Consultation</h2>
              </div>
              <div className="nav-right">
                <div className="nav-actions">
                  <button className="btn-icon" title="Settings">
                    <span>⚙️</span>
                  </button>
                  <button className="btn-icon" title="Help">
                    <span>❓</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Chat Container */}
          <div className="chat-container">
            <div className="chat-messages" id="chatMessages">
              <div className="welcome-message">
                <div className="welcome-icon">🏥</div>
                <h2 className="welcome-title">Welcome to Medical Expert</h2>
                <p className="welcome-text">
                  I'm your AI medical assistant. I can help you with health questions,
                  symptom analysis, medication information, and general medical guidance.
                </p>
                <div className="welcome-features">
                  <div className="feature-card">
                    <span className="feature-icon">🔍</span>
                    <h3>Symptom Analysis</h3>
                    <p>Describe your symptoms for AI-powered insights</p>
                  </div>
                  <div className="feature-card">
                    <span className="feature-icon">💊</span>
                    <h3>Drug Information</h3>
                    <p>Check medication interactions and side effects</p>
                  </div>
                  <div className="feature-card">
                    <span className="feature-icon">📊</span>
                    <h3>Lab Results</h3>
                    <p>Understand your test results</p>
                  </div>
                </div>
                <div className="disclaimer-box">
                  <strong>Important Disclaimer:</strong> This AI assistant provides general health
                  information only. It is not a substitute for professional medical advice, diagnosis,
                  or treatment. Always consult qualified healthcare providers for medical decisions.
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="chat-input-container">
              <div className="chat-input-wrapper">
                <textarea
                  className="chat-input"
                  id="chatInput"
                  placeholder="Describe your symptoms or ask a medical question..."
                  rows={3}
                />
                <div className="chat-input-actions">
                  <button className="btn-attach" title="Attach file">
                    <span>📎</span>
                  </button>
                  <button className="btn-image" title="Upload image">
                    <span>🖼️</span>
                  </button>
                  <button className="btn-send" id="sendButton">
                    <span>Send</span>
                    <span className="send-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Inline Medical Expert JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Medical Expert Chat Functionality
          document.addEventListener('DOMContentLoaded', function() {
            const chatInput = document.getElementById('chatInput');
            const sendButton = document.getElementById('sendButton');
            const chatMessages = document.getElementById('chatMessages');

            if (sendButton) {
              sendButton.addEventListener('click', async function() {
                const message = chatInput?.value.trim();
                if (!message) return;

                // Add user message
                const userDiv = document.createElement('div');
                userDiv.className = 'message user-message';
                userDiv.innerHTML = '<div class="message-content">' + message + '</div>';
                chatMessages.appendChild(userDiv);

                // Clear input
                if (chatInput) chatInput.value = '';

                // Show typing indicator
                const typingDiv = document.createElement('div');
                typingDiv.className = 'message ai-message typing';
                typingDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
                chatMessages.appendChild(typingDiv);

                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;

                try {
                  // Call Medical Expert API
                  const response = await fetch('/api/medical/chat', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message })
                  });

                  const data = await response.json();

                  // Remove typing indicator
                  chatMessages.removeChild(typingDiv);

                  // Add AI response
                  const aiDiv = document.createElement('div');
                  aiDiv.className = 'message ai-message';
                  aiDiv.innerHTML = '<div class="message-content">' + (data.response || 'Sorry, I could not process your request.') + '</div>';
                  chatMessages.appendChild(aiDiv);

                  // Scroll to bottom
                  chatMessages.scrollTop = chatMessages.scrollHeight;
                } catch (error) {
                  console.error('Error:', error);
                  chatMessages.removeChild(typingDiv);

                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'message error-message';
                  errorDiv.innerHTML = '<div class="message-content">⚠️ An error occurred. Please try again.</div>';
                  chatMessages.appendChild(errorDiv);
                }
              });
            }

            // Enter key to send
            if (chatInput) {
              chatInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendButton?.click();
                }
              });
            }
          });
        `
      }} />
    </>
  )
}
