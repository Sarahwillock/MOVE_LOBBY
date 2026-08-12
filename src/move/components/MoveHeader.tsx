import MoveCalendar from './MoveCalendar';

export default function MoveHeader() {
  return (
    <header
      className="
        sticky top-0 z-30
        flex min-h-16
        items-center justify-between
        border-b border-blue-600/70
        bg-black/95
        px-4
        backdrop-blur
        sm:px-6
      "
    >
      <h1 className="text-xl font-black italic uppercase text-blue-500">
        MOVE
      </h1>

      <div className="flex items-center gap-3">
        <a
          href="https://www.instagram.com/move.alphaville/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram MOVE Alphaville"
          className="
            hidden
            text-[10px]
            font-black uppercase
            tracking-widest
            text-pink-500
            transition-colors
            hover:text-blue-500
            sm:block
          "
        >
          @MOVE.ALPHAVILLE
        </a>

        <MoveCalendar />
      </div>
    </header>
  );
}
