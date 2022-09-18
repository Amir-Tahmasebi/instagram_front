import InstagramLogo from "./../assets/img/Instagram-logo.png";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <img src={InstagramLogo} alt="" className="w-24 h-auto mb-38" />
      <p className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Loading
      </p>
    </div>
  );
}
