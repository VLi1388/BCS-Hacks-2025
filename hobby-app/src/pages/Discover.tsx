import Navbar from "@/components/Navbar";
import bg from "./discoverBckgrd.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchConfirm from "../components/MatchConfirm";

const mockDiscoverProfiles = [
  {
    id: "1",
    name: "John",
    age: 24,
    location: "Portland, OR",
    avatar: "https://archives.bulbagarden.net/media/upload/a/a9/Spr_B2W2_Hilbert.png",
    hobbies: ["Cooking", "Travel", "Game", "Music", "Swim"],
  },
  {
    id: "2",
    name: "May",
    age: 22,
    location: "Austin, TX",
    avatar: "https://archives.bulbagarden.net/media/upload/5/5b/Spr_B2W2_Rosa.png",
    hobbies: ["Reading", "Art", "Tech", "Dance", "Fitness"],
  },
];

const DiscoverPage = () => {
  const [opponentIndex, setOpponentIndex] = useState(0);
  const opponent = mockDiscoverProfiles[opponentIndex];
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/messages");
  };

  const handleCancel = () => {
    setOpponentIndex((prev) => (prev + 1) % mockDiscoverProfiles.length);
  };

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



      {/* Match Confirmation Box */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-6 py-1">
        <MatchConfirm onConfirm={handleConfirm} onCancel={handleCancel} />
      </div>

      <Navbar />
    </div>
  );
};

export default DiscoverPage;