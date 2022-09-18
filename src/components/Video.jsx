import useVideo from "../hooks/useVideo";

export default function Video({ src }) {
  const [videoRef] = useVideo();

  return (
    <video loop muted autoPlay ref={videoRef} className="w-full">
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}
