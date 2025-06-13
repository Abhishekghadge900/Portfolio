function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p>&copy; {currentYear} Built with ❤️ by Abhishek Ghadge</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;