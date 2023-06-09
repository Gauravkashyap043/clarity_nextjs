import "./globals.css";
export const metadata = {
  title: "Practice Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="border border-white w-[400px] h-screen rounded m-auto relative">
          {children}
        </div>
      </body>
    </html>
  );
}
