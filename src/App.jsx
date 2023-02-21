import SRoutes from "./routes";
import Navbar from "./pages/General/Nav";
import GlobalStyle from "./global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <SRoutes />
    </div>
  );
}

export default App;
