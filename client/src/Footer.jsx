const Footer = () => {
  return (
    <footer className="bg-black text-white py-4" style={{backgroundColor: 'black', color: 'white', width: '100%'}}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left space-y-2 sm:space-y-0">
        <p>
          Made by{' '}
          <a 
            href="https://connorwilson.azurewebsites.net/?company=mayancalculator" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-300"
          >
            Connor Wilson
          </a>
        </p>
      </div>
    </footer>
  );
};


export default Footer;