"use client"
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./store/Store";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
      </Provider>
      
      </body>
    </html>
  );
}
