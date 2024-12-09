import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import MenSection from "./pages/MenSection";
import Navbar from "./components/Navbar";
import WomenSection from "./pages/Women";
import Kids from "./pages/Kids";
import Home_Living from "./pages/Home_Living";
import Studio from "./pages/Studio";
import MensApparel from "./pages/MensApparel";
import MensFootware from "./pages/MensFootware";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";
import Beauty from "./pages/Beauty";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/editprofile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/mensection"
          element={
            <PrivateRoute>
              <MenSection />
            </PrivateRoute>
          }
        />
        <Route
          path="/kidsection"
          element={
            <PrivateRoute>
              <Kids />
            </PrivateRoute>
          }
        />
        <Route
          path="/womensection"
          element={
            <PrivateRoute>
              <WomenSection />
            </PrivateRoute>
          }
        />
        <Route
          path="/homeliving"
          element={
            <PrivateRoute>
              <Home_Living />
            </PrivateRoute>
          }
        />
        <Route
          path="/studio"
          element={
            <PrivateRoute>
              <Studio />
            </PrivateRoute>
          }
        />
        <Route
          path="/beauty"
          element={
            <PrivateRoute>
              <Beauty />
            </PrivateRoute>
          }
        />
        <Route path="/mensapparel" element={<MensApparel />} />
        <Route
          path="/mensfootware"
          element={
            <PrivateRoute>
              <MensFootware />
            </PrivateRoute>
          }
        />
        <Route
          path="/mensapparel/product/:id"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
