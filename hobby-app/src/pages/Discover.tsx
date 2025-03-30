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

      {/* Opponent Info Speech Bubble */}
      <div className="absolute top-4 left-4 bg-[#e0f6f7] border-4 border-black px-4 py-3 shadow-[4px_4px_0_#000]">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{opponent.name},</h2>
          <span className="text-lg font-bold">{opponent.age}</span>
          <span className="text-sm">{opponent.location}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {opponent.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="px-2 py-1 text-sm font-semibold text-white border-2 border-black shadow bg-gray-600"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>

      {/* Opponent Avatar */}
      <img
        src={opponent.avatar}
        alt={opponent.name}
        className="absolute top-36 right-20 w-16 h-16"
      />

      {/* User Avatar */}
      <img
        src="https://archives.bulbagarden.net/media/upload/9/9a/Spr_RS_May.png"
        alt="You"
        className="absolute bottom-32 left-20 w-20 h-20"
      />

      {/* User Name Bubble */}
      <div className="absolute bottom-44 right-16 bg-[#e0f6f7] border-4 border-black px-4 py-2 shadow-[4px_4px_0_#000]">
        <span className="font-bold text-lg">Bob, 24</span>
      </div>

      {/* Match Confirmation Box */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-6 py-3">
        <MatchConfirm onConfirm={handleConfirm} onCancel={handleCancel} />
      </div>

      <Navbar />
    </div>
  );
};

export default DiscoverPage;