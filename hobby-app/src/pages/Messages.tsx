import { useState, useEffect } from "react";
import PixelAvatar from "./../components/PixelAvatar";
import Navbar from "./../components/Navbar";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "./../components/ProfileCard";

const matchedProfiles: UserProfile[] = [
  {
    id: "1",
    name: "Alex",
    age: 28,
    bio: "Enthusiastic gamer and hiking lover. Looking for people to game with or explore trails!",
    avatar:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Gaming", "Hiking", "Cooking"],
    location: "Seattle, WA",
  },
  {
    id: "5",
    name: "Riley",
    age: 29,
    bio: "Music producer and gamer. Let's game together or collaborate on tracks!",
    avatar:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Music", "Gaming", "Art"],
    location: "Austin, TX",
  },
];

const MessagesPage = () => {
  const [conversations, setConversations] = useState<UserProfile[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setConversations(matchedProfiles);
  }, []);

  const handleSelectConversation = (id: string) => {
    navigate(`/messages/${id}`);
  };

  return (
    <div className="min-h-screen bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAXSURBVDiNY/z//z8DNYCJgUbAaCANDQQAE4kMGO4wIRQAAAAASUVORK5CYII=')] bg-repeat">
      <header className="py-6 text-center">
        <h1 className="font-pixel text-2xl text-game-black">Messages</h1>
        <p className="text-sm mt-2">Chat with your hobby matches</p>
      </header>

      <main className="px-4 pb-24 pt-4 max-w-md mx-auto">
        <div className="pixel-card">
          {conversations.length > 0 ? (
            <ul className="divide-y-2 divide-game-black">
              {conversations.map((conversation) => (
                <li
                  key={conversation.id}
                  className="py-4 px-2 flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleSelectConversation(conversation.id)}
                >
                  <PixelAvatar
                    src={conversation.avatar}
                    alt={conversation.name}
                    size="md"
                  />

                  <div className="flex-1">
                    <h3 className="font-pixel text-sm text-game-black">
                      {conversation.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {conversation.hobbies.slice(0, 2).join(", ")}
                      {conversation.hobbies.length > 2 ? "..." : ""}
                    </p>
                  </div>

                  <div className="w-2 h-2 rounded-full bg-game-green animate-pulse"></div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center p-8">
              <h2 className="font-pixel text-xl text-game-black mb-4">
                No messages yet!
              </h2>
              <p className="text-center mb-6">
                Match with people to start conversations.
              </p>
            </div>
          )}
        </div>
      </main>

      <Navbar />
    </div>
  );
};

export default MessagesPage;
