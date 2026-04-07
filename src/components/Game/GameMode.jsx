import React, { useEffect, useRef, useState } from 'react';
import './GameMode.css';

const GameMode = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const [gameType, setGameType] = useState('flappy'); // 'flappy' or 'languages'
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'gameOver'

  const levels = [
    { title: "Discover Coding (10th)", color: "#3b82f6" },
    { title: "HTML CSS JS Learning", color: "#f97316" },
    { title: "React Learning", color: "#06b6d4" },
    { title: "Blogger 600 Views Achievement", color: "#ec4899" },
    { title: "College Projects", color: "#8b5cf6" },
    { title: "Android Development", color: "#22c55e" },
    { title: "Game Development", color: "#ef4444" }
  ];

  const languages = [
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "JS", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Node", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Kotlin", color: "#7F52FF" },
    { name: "Godot", color: "#478CBF" },
    { name: "Unity", color: "#FFFFFF" }
  ];

  useEffect(() => {
    if (!isOpen || gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let frame = 0;
    let animationId;
    let particles = [];

    // --- GAME 1: FLAPPY JOURNEY ---
    let bird = { x: 100, y: 200, radius: 15, velocity: 0, gravity: 0.5, jump: -8 };
    let pipes = [];
    let pipeWidth = 80;
    let pipeGap = 160;
    let pipeIndex = 0;

    // --- GAME 2: LANGUAGE CATCHER ---
    let player = { x: 400, y: 350, width: 120, height: 20, speed: 15 }; // Wider board
    let fallingObjects = [];
    let activeKeys = {};

    const createParticles = (x, y, color) => {
      for(let i=0; i<15; i++) {
        particles.push({
          x, y,
          dx: (Math.random()-0.5)*12,
          dy: (Math.random()-0.5)*12,
          life: 1,
          color,
          size: Math.random()*4+2
        });
      }
    };

    const handleAction = () => {
      if (gameState !== 'playing') return;
      if (gameType === 'flappy') {
        bird.velocity = bird.jump;
      }
    };

    const update = () => {
      frame++;

      if (gameType === 'flappy') {
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;

        if (bird.y + bird.radius > canvas.height || bird.y - bird.radius < 0) {
          setGameState('gameOver');
        }

        if (frame % 90 === 0) {
          let height = Math.random() * (canvas.height - pipeGap - 120) + 60;
          let levelData = levels[pipeIndex % levels.length];
          pipes.push({ x: canvas.width, height, label: levelData.title, color: levelData.color });
          pipeIndex++;
        }

        pipes.forEach((pipe, i) => {
          pipe.x -= 3.5;
          if (bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + pipeWidth) {
            if (bird.y - bird.radius < pipe.height || bird.y + bird.radius > pipe.height + pipeGap) {
              setGameState('gameOver');
            }
          }
          if (pipe.x + pipeWidth < 0) {
            pipes.splice(i, 1);
            setScore(s => s + 1);
          }
        });
      } else {
        // Move board with keys
        if (activeKeys['ArrowLeft'] && player.x > 0) player.x -= player.speed;
        if (activeKeys['ArrowRight'] && player.x < canvas.width - player.width) player.x += player.speed;

        // Adaptive Difficulty
        const spawnRate = Math.max(8, 30 - Math.floor(score / 50) * 3);
        const baseSpeed = 4 + (score / 100);

        if (frame % spawnRate === 0) {
          let lang = languages[Math.floor(Math.random() * languages.length)];
          fallingObjects.push({
            x: Math.random() * (canvas.width - 60),
            y: -50,
            ...lang,
            speed: baseSpeed + Math.random() * 4
          });
        }

        fallingObjects.forEach((obj, i) => {
          obj.y += obj.speed;
          if (obj.y + 20 > player.y && obj.x > player.x - 30 && obj.x < player.x + player.width + 30) {
            fallingObjects.splice(i, 1);
            setScore(s => s + 10);
            createParticles(obj.x, obj.y, obj.color);
          } else if (obj.y > canvas.height) {
            fallingObjects.splice(i, 1);
            setGameState('gameOver');
          }
        });
      }

      particles.forEach((p, i) => {
        p.x += p.dx; p.y += p.dy; p.life -= 0.02;
        if(p.life <= 0) particles.splice(i, 1);
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;
      for(let i=0; i<canvas.width; i+=40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke(); }
      for(let i=0; i<canvas.height; i+=40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke(); }

      if (gameType === 'flappy') {
        // Bird
        ctx.shadowBlur = 20; ctx.shadowColor = '#60a5fa';
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#000';
        ctx.beginPath(); ctx.arc(bird.x + 8, bird.y - 4, 3, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0;

        pipes.forEach(pipe => {
          ctx.shadowBlur = 15; ctx.shadowColor = pipe.color;
          let grad = ctx.createLinearGradient(pipe.x, 0, pipe.x + pipeWidth, 0);
          grad.addColorStop(0, '#0f172a'); grad.addColorStop(0.5, pipe.color); grad.addColorStop(1, '#0f172a');
          ctx.fillStyle = grad;
          ctx.fillRect(pipe.x, 0, pipeWidth, pipe.height);
          ctx.fillRect(pipe.x, pipe.height + pipeGap, pipeWidth, canvas.height);
          ctx.shadowBlur = 0;

          // Milestone Label
          ctx.save();
          ctx.translate(pipe.x + pipeWidth/2, pipe.height + pipeGap/2);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 12px Inter';
          ctx.textAlign = 'center';
          ctx.fillText(pipe.label.toUpperCase(), 0, 0);
          ctx.restore();
        });
      } else {
        // Player (Board)
        ctx.shadowBlur = 25; ctx.shadowColor = '#3b82f6';
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.roundRect(player.x, player.y, player.width, player.height, 8);
        ctx.fill();

        fallingObjects.forEach(obj => {
          ctx.shadowBlur = 15; ctx.shadowColor = obj.color;
          ctx.fillStyle = obj.color;
          ctx.font = 'bold 24px Inter';
          ctx.textAlign = 'center';
          ctx.fillText(obj.name, obj.x + 30, obj.y);
        });
        ctx.shadowBlur = 0;
      }

      particles.forEach(p => {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      ctx.globalAlpha = 1;

      update();
      animationId = requestAnimationFrame(draw);
    };

    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'ArrowUp') handleAction();
      activeKeys[e.key] = true;
    };
    const handleKeyUp = (e) => { activeKeys[e.key] = false; };

    const handleCanvasTouch = (e) => {
      e.preventDefault();
      if (gameType === 'flappy') handleAction();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('touchstart', handleCanvasTouch, { passive: false });

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('touchstart', handleCanvasTouch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, gameState, gameType]);

  const startGame = (type) => {
    setGameType(type);
    setScore(0);
    setGameState('playing');
  };

  if (!isOpen) return null;

  return (
    <div className="game-overlay">
      <div className="game-modal arcade-ui">
        <button className="close-btn" onClick={onClose}>✕</button>

        {gameState === 'menu' && (
          <div className="game-menu">
            <h2 className="glitch-text">ARCADE MODE</h2>
            <div className="menu-grid">
              <div className="menu-card" onClick={() => startGame('flappy')}>
                <div className="card-icon">🚀</div>
                <h3>Flappy Journey</h3>
                <p>Navigate through career milestones. Avoid the obstacles!</p>
                <button className="btn glow-btn">Launch</button>
              </div>
              <div className="menu-card" onClick={() => startGame('languages')}>
                <div className="card-icon">💻</div>
                <h3>Language Master</h3>
                <p>Catch the technologies I master. Speed increases!</p>
                <button className="btn glow-btn">Launch</button>
              </div>
            </div>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="game-container">
            <div className="game-hud">
              <div className="hud-left">
                <span className="hud-label">SCORE:</span>
                <span className="hud-value">{score}</span>
              </div>
              <div className="hud-title">{gameType === 'flappy' ? 'FLAPPY JOURNEY' : 'LANGUAGE MASTER'}</div>
              <div className="hud-right">
                 <button className="hud-btn" onClick={() => setGameState('menu')}>Exit</button>
              </div>
            </div>

            <div className="canvas-wrapper">
              <canvas ref={canvasRef} width={800} height={400} />
              {gameType === 'flappy' && (
                <div className="mobile-tap-area" onTouchStart={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
                }}>
                  <span>TAP TO JUMP</span>
                </div>
              )}
            </div>

            {gameType === 'languages' && (
              <div className="mobile-arrows">
                <button
                  className="arrow-btn"
                  onTouchStart={(e) => { e.preventDefault(); window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' })); }}
                  onTouchEnd={(e) => { e.preventDefault(); window.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft' })); }}
                >←</button>
                <button
                  className="arrow-btn"
                  onTouchStart={(e) => { e.preventDefault(); window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' })); }}
                  onTouchEnd={(e) => { e.preventDefault(); window.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight' })); }}
                >→</button>
              </div>
            )}

            <div className="pc-hints">
              {gameType === 'flappy' ? '[SPACE] OR [UP] TO JUMP' : '[←][→] TO MOVE'}
            </div>
          </div>
        )}

        {gameState === 'gameOver' && (
          <div className="game-over">
            <div className="over-content">
              <h2 className="crash-text">SYSTEM CRASH</h2>
              <div className="final-score">
                <span>FINAL SCORE</span>
                <div className="score-num">{score}</div>
              </div>
              <div className="over-actions">
                <button className="btn glow-btn" onClick={() => setGameState('playing')}>Reboot</button>
                <button className="btn outline" onClick={() => setGameState('menu')}>Menu</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameMode;