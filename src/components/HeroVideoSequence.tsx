import { useCallback, useRef, useState } from "react";

const MIN_BUFFER_SECONDS = 18;

export default function HeroVideoSequence() {
  const scenesRef = useRef<HTMLVideoElement>(null);
  const dashboardRef = useRef<HTMLVideoElement>(null);
  const [showDashboard, setShowDashboard] = useState(true);

  const hasEnoughBuffer = useCallback((video: HTMLVideoElement) => {
    for (let index = 0; index < video.buffered.length; index += 1) {
      const start = video.buffered.start(index);
      const end = video.buffered.end(index);

      if (video.currentTime >= start && video.currentTime <= end) {
        const remainingDuration = Math.max(0, video.duration - video.currentTime);
        return end - video.currentTime >= Math.min(MIN_BUFFER_SECONDS, remainingDuration);
      }
    }

    return false;
  }, []);

  const startDashboard = () => {
    const dashboard = dashboardRef.current;
    if (!dashboard) return;
    dashboard.currentTime = 0;
    void dashboard.play();
    setShowDashboard(true);
  };

  const playScenesWhenReady = () => {
    const scenes = scenesRef.current;
    const dashboard = dashboardRef.current;
    if (!scenes || !dashboard) return;

    if (!hasEnoughBuffer(scenes)) {
      dashboard.currentTime = 0;
      void dashboard.play();
      return;
    }

    void scenes.play().then(() => setShowDashboard(false)).catch(() => {
      dashboard.currentTime = 0;
      void dashboard.play();
    });
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
        onWaiting={startDashboard}
        onStalled={startDashboard}
      />
      <video
        ref={dashboardRef}
        className={`heroVideo heroVideoDashboard ${showDashboard ? "videoVisible" : "videoHidden"}`}
        src="/dashboard.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={playScenesWhenReady}
      />
      <div className={`dashboardMessage ${showDashboard ? "dashboardMessageVisible" : ""}`}>
        <span>MONITOREO EN TIEMPO REAL</span>
        <strong>Aumenta la productividad de tus procesos con IA y visualizá en tiempo real todo lo que ocurre en tu planta</strong>
      </div>
    </>
  );
}
