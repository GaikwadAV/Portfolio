import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center p-4 border-t mt-6">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://www.linkedin.com/in/ganeshlbh/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Ganesh-14389/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:gbhange18@gmail.com"><FaEnvelope /></a>
      </div>
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ganesh Bhange. All rights reserved.</p>
    </footer>
  );
}