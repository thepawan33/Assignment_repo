import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm sm:text-base">&copy; 2025 Pavan Singh</p>
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/thepawan33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-singh-44172b243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://ps-personal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <LanguageIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
