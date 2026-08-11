import { Calendar } from 'lucide-react';

export default function MoveHeader() {
  return (
    <header
      className="
        sticky top-0 z-30
        flex h-16 items-center justify-between
        border-b border-blue-600/70
        bg-black/95
        px-4 backdrop-blur
        sm:px-6
      "
    >
      <h1 className="text-xl font-black italic text-blue-500">
        MOVE
      </h1>

      <div className="flex items-center gap-2">
        <span className="hidden text-[10px] font-black uppercase tracking-widest text-pink-500 sm:block">
          @MOVE.ALPHAVILLE
        </span>

        <Calendar className="h-5 w-5 text-blue-500" />
      </div>
    </header>
  );
}
