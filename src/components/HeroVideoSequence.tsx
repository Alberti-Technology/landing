import { useRef, useState } from "react";

export default function HeroVideoSequence() {
  const scenesRef = useRef<HTMLVideoElement>(null);
  const dashboardRef = useRef<HTMLVideoElement>(null);
  const [showDashboard, setShowDashboard] = useState(true);

  const startDashboard = () => {
    const dashboard = dashboardRef.current;
    if (!dashboard) return;
    dashboard.currentTime = 0;
    void dashboard.play();
    setShowDashboard(true);
  };

  const restartScenes = () => {
    const scenes = scenesRef.current;
    if (!scenes) return;
    scenes.currentTime = 0;
    void scenes.play();
    setShowDashboard(false);
  };

  return (
    <>
      <video
        ref={scenesRef}
        className={`heroVideo heroVideoPrimary ${showDashboard ? "videoHidden" : "videoVisible"}`}
        src="/escenas-trabajando-web.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={startDashboard}
      />
      <video
        ref={dashboardRef}
        className={`heroVideo heroVideoDashboard ${showDashboard ? "videoVisible" : "videoHidden"}`}
        src="/dashboard.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={restartScenes}
      />
      <div className={`dashboardMessage ${showDashboard ? "dashboardMessageVisible" : ""}`}>
        <span>MONITOREO EN TIEMPO REAL</span>
        <strong>Aumenta la productividad de tus procesos con IA y visualizá en tiempo real todo lo que ocurre en tu planta</strong>
      </div>
    </>
  );
}
