interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-[0.2em] font-medium">
          Народы России
        </div>
        <nav className="flex gap-8">
          <a
            href="#chapters"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Главы
          </a>
          <a
            href="#about"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            О проекте
          </a>
        </nav>
      </div>
    </header>
  );
}
