export const metadata = {
  title: "Home page",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
    return (
      <div className="border border-white w-[400px] h-screen rounded m-auto relative">
        {children}
      </div>
    );
  }
  