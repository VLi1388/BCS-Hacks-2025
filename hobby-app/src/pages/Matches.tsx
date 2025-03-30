import { useState, useEffect } from "react";
import ProfileCard, { UserProfile } from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import ash from "@/assets/ash.png";
import hatsune from "@/assets/hatsune.png";
import { useNavigate } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget"; // Import the chat widget

const matchedProfiles: UserProfile[] = [
  {
    id: "1",
    name: "Ash",
    age: 24,
    bio: "Competitive gamer and strategy expert. Always up for a challenge!",
    avatar: ash,
    hobbies: ["Gaming", "Strategy", "Esports"],
    location: "New York, NY",
  },
  {
    id: "2",
    name: "Hatsune",
    age: 22,
    bio: "Music producer and rhythm game lover. Let's jam and game together!",
    avatar: hatsune,
    hobbies: ["Music", "Rhythm Games", "Singing"],
    location: "Tokyo, Japan",
  },
];

const MatchesPage = () => {
  const [matches, setMatches] = useState<UserProfile[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<UserProfile | null>(
    null
  );
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSelectConversation = (id: string) => {
    const partner = matchedProfiles.find((profile) => profile.id === id);
    if (partner) {
      setSelectedPartner(partner);
      // Fetch messages for the selected partner
      setMessages([]); // Mocked empty messages for now
    }
  };

  const handleSendMessage = (text: string) => {
    if (selectedPartner) {
      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        senderId: "current-user",
        receiverId: selectedPartner.id,
        text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newMessage]);
    }
  };

  useEffect(() => {
    setMatches(matchedProfiles);
  }, []);

  return (
    <>
      <Layout />
      <Navbar />
      <div className="flex flex-col items-center text-center px-4 py-6">
        <h1 className="font-pixel text-4xl text-game-black mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
          Your Matches
        </h1>
        <p className="text-game-black font-pixel text-sm mb-6">
          People who share your hobbies
        </p>

        <div className="w-full max-w-md space-y-6">
          {matches.length > 0 ? (
            matches.map((match) => (
              <ProfileCard
                key={match.id}
                profile={match}
                showActions={false}
                showConnect={true}
                onMessage={handleSelectConversation} // Pass the function as a prop
              />
            ))
          ) : (
            <div className="pixel-card flex flex-col items-center justify-center p-8">
              <h2 className="font-pixel text-xl text-game-black mb-4">
                No matches yet!
              </h2>
              <p className="text-center mb-6">
                Keep exploring profiles to find people who share your interests.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Chat Widget */}
      {selectedPartner && (
        <ChatWidget
          partner={selectedPartner}
          onClose={() => setSelectedPartner(null)}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  );
};

export default MatchesPage;
