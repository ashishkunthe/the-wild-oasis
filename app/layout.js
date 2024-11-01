import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild oasis",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main> {children}</main>
        <p>Copy right by Wild Oasis</p>
      </body>
    </html>
  );
}
