// This file defines the user profile types used across the application

export interface UserProfile {
  id: string;
  username: string;
  password: string;
  name: string;
  age: string;
  location: string;
  bio: string;
  hobbies: string[];
  avatar?: string;
  figurine?: string;
  matching: string[]; // Store IDs instead of full objects to avoid circular reference
}

export const mockProfiles: UserProfile[] = [
  {
    id: "1",
    name: "Alex",
    username: "Alex",
    password: "123456",
    age: "28",
    bio: "Enthusiastic gamer and hiking lover. Looking for people to game with or explore trails!",
    avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=150&h=150&q=80",
    figurine: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", // Bulbasaur
    hobbies: ["Gaming", "Hiking", "Cooking"],
    location: "Seattle, WA",
    matching: [],
  },
  {
    id: "2",
    name: "Jordan",
    username: "Jordan",
    password: "123456",
    age: "25",
    bio: "Art lover and amateur musician. Would love to jam together or visit galleries!",
    figurine: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", // Charmander
    hobbies: ["Art", "Music", "Reading"],
    location: "Portland, OR",
    matching: [],
  },
  {
    id: "3",
    name: "Casey",
    username: "Casey",
    password: "123456",
    age: "30",
    bio: "Sports fanatic and cooking enthusiast. Let's catch a game or try a new recipe together!",
    avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=150&h=150&q=80",
    figurine: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", // Squirtle
    hobbies: ["Sports", "Cooking", "Gaming"],
    location: "San Francisco, CA",
    matching: [],
  },
  {
    id: "4",
    name: "Taylor",
    username: "Taylor",
    password: "123456",
    age: "26",
    bio: "Book worm and hiking enthusiast. Tell me about your favorite trails and novels!",
    figurine: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", // Pikachu
    hobbies: ["Reading", "Hiking", "Art"],
    location: "Denver, CO",
    matching: [],
  },
  {
    id: "5",
    name: "Riley",
    username: "Riley",
    password: "123456",
    age: "29",
    bio: "Music producer and gamer. Let's game together or collaborate on tracks!",
    avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=150&h=150&q=80",
    figurine: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png", // Jigglypuff
    hobbies: ["Music", "Gaming", "Art"],
    location: "Austin, TX",
    matching: [],
  },
];
