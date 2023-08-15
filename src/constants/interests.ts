/**
 * Favorites:
 * Animated Movie: Your Name
 * Real People Movie: La La Land
 * Shows: Neon Genesis Evangelion
 * Albums: MBDTF
 * Games: Minecraft, Rocket League
 */

import { IFavorites } from "../types/interests";

export const movies = [
  "La La Land",
  "Good Burger",
  "The Nice Guys",
  "Your Name",
  "Spider-Man 3",
];

export const shows = [
  "Neon Genesis Evangelion",
  "Dragon Ball",
  "The Boys",
  "Attack on Titan",
];

export const music = ["Kanye", "City Pop", "Joe Hisaishi"];

export const hobbies = ["Learning Japanese", "Reading"];

const moviesUnused: IFavorites = {
  category: "Movies",
  item: [
    {
      name: "La La Land",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
    },
    {
      name: "Good Burger",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c0/Good_Burger_film_poster.jpg",
    },
    {
      name: "The Nice Guys",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e9/The_Nice_Guys_poster.png",
    },
    {
      name: "Your Name",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    },
    {
      name: "Spider-Man 3",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/7a/Spider-Man_3%2C_International_Poster.jpg",
    },
  ],
};

const showsUnused: IFavorites = {
  category: "Shows",
  item: [
    {
      name: "Neon Genesis Evangelion",
      image: "",
    },
  ],
};
