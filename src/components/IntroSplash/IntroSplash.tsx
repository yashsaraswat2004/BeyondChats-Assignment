import React from 'react';

const INTRO_DURATION = 3500;

const badgeDotColor = '#b3a5ff';
const leftBg = '#111';
const rightBg = '#C5C6F6';

export default function IntroSplash({ onFinish }: { onFinish: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onFinish, INTRO_DURATION);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 2000,
      display: 'flex',
      background: rightBg,
      overflow: 'hidden'
    }}>
      {/* Left Panel */}
      <div className="intro-left-panel">
        <div className="intro-left-content">
          
          <div style={{
            height: 56,
            width: 56,
            marginBottom: 32,
            marginLeft: -8,
            display: 'flex',
            alignItems: 'center'
          }}>
            <img
              src="/beyond_chats_logo.png"
              alt="logo of Beyond Chats"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                borderRadius: 12,
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
              }}
            />
          </div>
          <div className="intro-badge">
            <span className="intro-badge-dot" /> For Agents
          </div>
          <div className='intro-title' style={{ fontSize: '2.1rem', fontWeight: 500, marginBottom: 8 }}>Beyond Chats are Presenting</div>
          <div className="intro-title">AI Copilot</div>
        </div>
      </div>
      {/* Right Panel */}
      <div className="intro-right-panel">
        <div className="intro-copilot-window">
          <img
            src="/copilot-window.png"
            alt="AI Copilot Window"
            style={{
              width: '92%',
              maxWidth: 440,
              borderRadius: 18,
              boxShadow: '0 8px 32px rgba(108,99,255,0.12)'
            }}
          />
        </div>
      </div>
      <style>
        {`
        .intro-left-panel {
          position: absolute;
          left: 0;
          top: 0;
          width: 50vw;
          height: 100vh;
          background: ${leftBg};
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          z-index: 2;
          animation: slideInLeft 1.5s cubic-bezier(.77,0,.18,1) forwards;
        }
        .intro-left-content {
          width: 100%;
          padding-top: 48px;
          padding-left: 48px;
          text-align: left;
        }
        .intro-badge {
          display: inline-flex;
          align-items: center;
          background: #18181b;
          color: #fff;
          font-weight: 600;
          border-radius: 999px;
          padding: 4px 18px 4px 10px;
          font-size: 1.04rem;
          margin-bottom: 32px;
          border: 2px solid #fff;
          opacity: 0;
          animation: fadeInBadge 0.8s 1.0s forwards;
        }
        .intro-badge-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${badgeDotColor};
          display: inline-block;
          margin-right: 8px;
        }
        .intro-title {
          color: #fff;
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(-30px);
          animation: fadeInTitle 0.7s 1.7s forwards;
        }
        .intro-right-panel {
          position: absolute;
          right: 0;
          top: 0;
          width: 50vw;
          height: 100vh;
          background: ${rightBg};
          display: flex;
          align-items: flex-start;
          justify-content: center;
          z-index: 1;
        }
        .intro-copilot-window {
          width: 92%;
          max-width: 440px;
          margin-top: 64px;
          opacity: 0;
          transform: translateY(120px);
          animation: slideUpCopilot 1.1s 2.1s cubic-bezier(.77,0,.18,1) forwards;
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeInBadge {
          to { opacity: 1; }
        }
        @keyframes fadeInTitle {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpCopilot {
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </div>
  );
}
