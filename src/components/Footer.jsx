const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 text-center text-gray-400">
      <p className="text-lg">
        © {new Date().getFullYear()} Bombothu Suma. All Rights Reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with React.js • Tailwind CSS • Framer Motion
      </p>
    </footer>
  );
};

export default Footer;