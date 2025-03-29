import { useState } from "react";
import PixelAvatar from "./PixelAvatar";
import HobbyBadge from "./HobbyBadge.tsx";
import PixelButton from "./PixelButton";
import { Heart, X, MessageCircle } from "lucide-react";

export type UserProfile = {
  id: string;
  name: string;
  age: number;
  bio: string;
  avatar?: string;
  hobbies: string[];
  location: string;
};

type ProfileCardProps = {
  profile: UserProfile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
  onMessage?: (id: string) => void;
  showActions?: boolean;
  showConnect?: boolean;
};

const ProfileCard = ({
  profile,
  onLike,
  onPass,
  onMessage,
  showActions = true,
  showConnect = false,
}: ProfileCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | "">("");

  const handleLike = () => {
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      onLike(profile.id);
      setIsAnimating(false);
      setDirection("");
    }, 500);
  };

  const handlePass = () => {
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      onPass(profile.id);
      setIsAnimating(false);
      setDirection("");
    }, 500);
  };

  const handleMessage = () => {
    onMessage?.(profile.id);
  };

  return (
    <div
      className={`pixel-card w-full max-w-sm mx-auto transition-all duration-500 
        ${
          isAnimating
            ? `transform ${
                direction === "right"
                  ? "translate-x-full opacity-0"
                  : "translate-x-[-100%] opacity-0"
              }`
            : ""
        }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <PixelAvatar src={profile.avatar} alt={profile.name} size="lg" />
        <div>
          <h3 className="font-pixel text-lg text-game-black">
            {profile.name}, {profile.age}
          </h3>
          <p className="text-sm mt-1">{profile.location}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2">{profile.bio}</p>
      </div>

      <div className="mb-6">
        <h4 className="font-pixel text-sm mb-2 text-game-black">HOBBIES</h4>
        <div className="flex flex-wrap gap-2">
          {profile.hobbies.map((hobby) => (
            <HobbyBadge key={hobby} hobby={hobby} active />
          ))}
        </div>
      </div>

      {showActions && (
        <div className="flex justify-center gap-6">
          <PixelButton
            variant="danger"
            onClick={handlePass}
            className="rounded-full flex items-center justify-center w-12 h-12 p-0"
          >
            <X className="w-6 h-6" />
          </PixelButton>

          <PixelButton
            variant="success"
            onClick={handleLike}
            className="rounded-full flex items-center justify-center w-12 h-12 p-0"
          >
            <Heart className="w-6 h-6" />
          </PixelButton>
        </div>
      )}

      {showConnect && (
        <div className="flex justify-center mt-4">
          <PixelButton
            variant="primary"
            onClick={handleMessage}
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> Message
          </PixelButton>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
