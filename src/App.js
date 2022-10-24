import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="shop"
          element={
            <div>
              <h2>Ay yo come back later, yeah?</h2>
            </div>
          }
        />
        <Route
          path="contact"
          element={
            <div>
              <h2>Ay yo come back later, yeah?</h2>
            </div>
          }
        />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
