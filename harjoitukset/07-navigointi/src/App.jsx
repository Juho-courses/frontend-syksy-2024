import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import { Routes, Route, Outlet } from "react-router-dom";
import ListView from "./views/ListView";
import AddView from "./views/AddView";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainBody />} />
          <Route path="/list" element={<ListView />} />
          <Route path="/add" element={<AddView />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function Layout() {
  return (
    <main className="flex-grow container mx-auto p-4">
      <Outlet />
    </main>
  );
}

export default App;
