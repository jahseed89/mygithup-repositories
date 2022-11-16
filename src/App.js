import { BrowserRouter } from "react-router-dom";
import GlobalRoutes from '../src/navigations/GlobalRoute'
const App = () => {
  return (
    <BrowserRouter>
      <GlobalRoutes />
    </BrowserRouter>
  );
};

export default App;