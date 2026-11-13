export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-5">
      <p className="text-white font-pixel text-xs sm:text-sm tracking-widest">
        LOADING...
      </p>
      <div className="w-48 h-2 border border-white/60 p-[2px] overflow-hidden">
        <div className="h-full w-1/2 bg-white animate-loading" />
      </div>
    </div>
  );
}