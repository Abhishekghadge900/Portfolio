function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <p className="text-center">
          &copy; {currentYear} Built with <span aria-label="love">❤️</span> by Abhishek Ghadge
        </p>
      </div>
    </footer>
  );
}

export default Footer;
