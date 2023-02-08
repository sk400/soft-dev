import { Header } from "components";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="px-5 py-3 sm:py-5 max-w-6xl mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
