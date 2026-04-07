import { Link } from "react-router-dom";

interface SeminarHeaderProps {
  className?: string;
}

export default function SeminarHeader({ className }: SeminarHeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-sm uppercase tracking-wide hover:text-neutral-300 transition-colors">
          ← Школа
        </Link>
        <nav className="flex gap-8">
          <a
            href="#program-seminar"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Программа
          </a>
          <a
            href="#contact-seminar"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Запись
          </a>
        </nav>
      </div>
    </header>
  );
}