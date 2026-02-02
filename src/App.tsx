import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1e1e2f]">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
