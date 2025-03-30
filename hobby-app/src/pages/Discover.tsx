import Navbar from "@/components/Navbar";
import bg from "./discoverBckgrd.png";

const DiscoverPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background image fills the whole screen */}
      <div
        className="fixed inset-0 bg-contain bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          imageRendering: "pixelated",
        }}
      />

      {/* Page content sits on top */}
      <div className="p-6">
        <p className="text-white text-2xl font-bold">
          testrgdszjgdszfs and more and more text and more and more...
        </p>
      </div>

      <Navbar />
    </div>
  );
};

export default DiscoverPage;