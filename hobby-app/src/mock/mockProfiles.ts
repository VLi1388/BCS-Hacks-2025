export interface UserProfile {
  id: string;
  name: string;
  age: number;
  bio: string;
  avatar?: string;
  hobbies: string[];
  location: string;
}

export const mockProfiles: UserProfile[] = [
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
    id: "2",
    name: "Jordan",
    age: 25,
    bio: "Art lover and amateur musician. Would love to jam together or visit galleries!",
    hobbies: ["Art", "Music", "Reading"],
    location: "Portland, OR",
  },
  {
    id: "3",
    name: "Casey",
    age: 30,
    bio: "Sports fanatic and cooking enthusiast. Let's catch a game or try a new recipe together!",
    avatar:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=150&h=150&q=80",
    hobbies: ["Sports", "Cooking", "Gaming"],
    location: "San Francisco, CA",
  },
  {
    id: "4",
    name: "Taylor",
    age: 26,
    bio: "Book worm and hiking enthusiast. Tell me about your favorite trails and novels!",
    hobbies: ["Reading", "Hiking", "Art"],
    location: "Denver, CO",
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
