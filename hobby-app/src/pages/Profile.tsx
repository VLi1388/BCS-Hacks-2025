import {useState } from 'react'
import userIcon from '../assets/userIcon.jpg'
import HobbyBadge from '@/components/HobbyBadge';
import PixelButton from '@/components/PixelButton';
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

const allHobbies = [
  "Gaming", "Hiking", "Cooking", "Art", 
  "Music", "Reading", "Sports", "Photography",
  "Gardening", "Crafting", "Dancing", "Writing"
];

const ProfilePage = () => {
  const [name, setName] = useState<string>("Bob");
    const [hobbies, setHobbies] = useState<string[]>(["Gaming", "Hiking", "Cooking", "Art", 
    "Music"]);
    const [age, setAge] = useState<string>("29");
    const [location, setLocation] = useState<string>("Vancouver");
    const [image, setImage] = useState<string>(userIcon);
    const [bio, setBio] = useState<string>("Tell other users about yourself and your hobbies!");
    const [isEditing, setIsEditing] = useState(false);

    const toggleHobby = (hobby: string) => {
      if (hobbies.includes(hobby)) {
          setHobbies(prev => prev.filter(h => h !== hobby));
      } else {
        if (hobbies.length < 5) {
          setHobbies(prev => [...prev, hobby]);
        }
      }
    };

    const handleSave = () => {
      // Validate
      if (!name.trim() || !bio.trim() || !location.trim() || hobbies.length === 0) {
        console.log("Not filled out");
        return;
      }
      setIsEditing(false);
    };

    return (
      <>
        <Layout />
        <Navbar />
        <div className='flex flex-col items-center text-center'>
            {/* Header */}
            <div className="text-center mb-8 ">
                <h1 className="font-pixel text-4xl text-game-black mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                    Profile Page
                </h1>
                <p className="text-game-black font-pixel text-sm">Welcome to your gaming profile!</p>
            </div>
            
            {/* Main Card */}
          {!isEditing && <div className="bg-white border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] w-300">
            {/* Profile Header */}
            <div className="flex items-center gap-5 mb-6 pb-6 border-b-2 border-dashed border-gray-300">
                <div className="relative">
                    <img 
                        src={image} 
                        alt="User profile" 
                        className="w-24 h-24 rounded-lg border-4 border-black object-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-game-green text-xs rounded-full border-2 border-black flex items-center justify-center font-pixel text-white">
                        <span>✓</span>
                    </div>
                </div>
                <div>
                    <h3 className="font-pixel text-2xl text-game-black mb-1">
                        {name}, <span className="text-game-blue">{age}</span>
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                            📍 {location}
                        </span>
                        <span className="text-xs bg-game-purple text-white px-2 py-1 rounded-full">
                            👤 Level 5
                        </span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="mb-6">
                <h4 className="font-pixel text-sm mb-3 text-game-black px-2 py-1 bg-gray-100 rounded-md inline-block">📝 About me</h4>
                <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-200">
                    <p className="text-sm mb-2 italic">{bio}</p>
                </div>
            </div>

            {/* Hobbies Section */}
            <div className="mb-6">
                <h4 className="font-pixel text-sm mb-3 text-game-black px-2 py-1 bg-gray-100 rounded-md inline-block">🎮 Hobbies</h4>
                <div className="flex flex-wrap gap-2 bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-200">
                {hobbies.map(hobby => (
                  <HobbyBadge key={hobby} hobby={hobby} active />
                ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center mt-8">
              <PixelButton onClick={() => setIsEditing(true)}>
                    Edit Profile
              </PixelButton>
            </div>
          </div>}

          {isEditing && <div>
            <div className="flex gap-5 mb-6 pb-6 border-b-2 border-dashed border-gray-300">
                <div className="relative">
                    <img 
                        src={image} 
                        alt="User profile" 
                        className="w-24 h-24 rounded-lg border-4 border-black object-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-game-green text-xs rounded-full border-2 border-black flex items-center justify-center font-pixel text-white">
                        <span>✓</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="pixel-input w-full h-10 rounded-md font-pixel p-2"
                    />
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value || "0")}
                      placeholder="Age"
                      className="pixel-input w-full h-10 rounded-md font-pixel p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                    <label className="font-pixel text-sm block mb-2 text-game-black">LOCATION</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State"
                      className="pixel-input w-full h-10 rounded-md font-pixel p-2"
                    />
              </div>

            <div className="mb-6">
              <label className="font-pixel text-sm block mb-2 text-game-black">ABOUT ME</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell others about yourself..."
                  className="pixel-input w-full h-24 resize-none rounded-md font-pixel p-2"
                />
            </div>
            <div className="mb-6">
              <h3 className="font-pixel text-sm mb-3 text-game-black">MY HOBBIES</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {allHobbies.map(hobby => (
                  <HobbyBadge
                    key={hobby}
                    hobby={hobby}
                    active={hobbies.includes(hobby)}
                    onClick={() => toggleHobby(hobby)}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
            <div className="space-x-4">
                <PixelButton
                  variant="danger"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </PixelButton>
                
                <PixelButton
                  variant="success"
                  onClick={handleSave}
                >
                  Save
                </PixelButton>
              </div>
            </div>  
          </div>}
            
            {/* Footer */}
            <footer className="text-center mt-10 mb-10 pb-10 text-gray-500 text-xs font-pixel">
                Hobby Connect • Share Your Passion
            </footer>
        </div>
      </>  
    )
};

export default ProfilePage;
