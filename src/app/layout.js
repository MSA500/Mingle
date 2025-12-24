import "./globals.css";
import AuthProvider from "@/context/AuthContext";

export const metadata = {
  title: "Mingle Chat App",
  description: "A chat app where you can share your emotions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
