import SRoutes from "./routes";
import Navbar from "./pages/General/Nav";
import GlobalStyle from "./global";

function App() {
  return (
    <div>
      <SRoutes />
      <GlobalStyle />
      <Navbar />
    </div>
  );
}

export default App;
