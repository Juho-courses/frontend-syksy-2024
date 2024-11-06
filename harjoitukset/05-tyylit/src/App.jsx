import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
