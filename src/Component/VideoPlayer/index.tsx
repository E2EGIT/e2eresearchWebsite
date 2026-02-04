import { useEffect, useRef, useState } from "react";

export default function CustomVideo(props: any) {
  const { urlsMp4, urlsWebm, poster } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <div
      className="position-relative d-inline-block w-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <video
        ref={videoRef}
        playsInline
        controls={isPlaying}
        preload="metadata"
        muted={false}
        poster={poster}
        controlsList="nodownload noremoteplayback noplaybackrate"
        disablePictureInPicture
        className="mw-100 w-100 max-w-full rounded-2 video-boxshadow">
        <source src={urlsWebm} type="video/webm" />
        <source src={urlsMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Overlay logic */}
      {(!isPlaying || hovered) && (
        <button
          onClick={togglePlay}
          className="position-absolute top-50 start-50 translate-middle rounded-circle shadow btn-video"
          style={{
            width: "70px",
            height: "70px",
            fontSize: "28px",
            opacity: 0.9,
          }}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
      )}
    </div>
  );
}
