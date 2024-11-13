function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Megasofta
        </h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Add
          </a>
          <a href="#" className="hover:underline">
            List
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
