import avanza from "../assets/car-avanza.png";
import ertiga from "../assets/car-ertiga.png";
import innova from "../assets/car-innova.png";
import fortuner from "../assets/car-fortuner.png";
import xpander from "../assets/car-xpander.png";
import brio from "../assets/car-brio.png";
import agya from "../assets/car-agya.png";
import alphard from "../assets/car-alphard.png";
import veloz from "../assets/car-veloz.png";
import rush from "../assets/car-rush.png";

export type Category =
  | "BEST CHOICE"
  | "CITY CAR (LCGC)"
  | "L-MPV"
  | "MPV"
  | "HATCHBACK"
  | "SUV"
  | "MEDIUM SUV"
  | "SEDAN"
  | "LUXURY CAR"
  | "MINI BUS";

export const CATEGORIES: Category[] = [
  "BEST CHOICE",
  "CITY CAR (LCGC)",
  "L-MPV",
  "MPV",
  "HATCHBACK",
  "SUV",
  "MEDIUM SUV",
  "SEDAN",
  "LUXURY CAR",
  "MINI BUS",
];

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  categories: Category[];
  price24h: string;
}

export const VEHICLES: Vehicle[] = [
  { id: "innova-bensin", name: "Toyota Innova Reborn Bensin", image: innova, categories: ["BEST CHOICE", "MPV"], price24h: "650 K" },
  { id: "innova-diesel", name: "Toyota Innova Reborn Diesel", image: innova, categories: ["MPV"], price24h: "700 K" },
  { id: "agya-facelift", name: "Toyota Agya / Ayla Facelift", image: agya, categories: ["BEST CHOICE", "CITY CAR (LCGC)"], price24h: "350 K" },
  { id: "xpander", name: "Mitsubishi Xpander", image: xpander, categories: ["BEST CHOICE", "L-MPV"], price24h: "500 K" },
  { id: "fortuner", name: "Toyota Fortuner", image: fortuner, categories: ["BEST CHOICE", "SUV", "MEDIUM SUV"], price24h: "1.2 JT" },
  { id: "fortuner-gr", name: "Toyota Fortuner GR", image: fortuner, categories: ["BEST CHOICE", "SUV"], price24h: "1.4 JT" },
  { id: "veloz", name: "Toyota Veloz", image: veloz, categories: ["BEST CHOICE", "L-MPV"], price24h: "550 K" },
  { id: "brio-old", name: "Honda Brio Old", image: brio, categories: ["CITY CAR (LCGC)", "HATCHBACK"], price24h: "350 K" },
  { id: "brio-satya", name: "Honda Brio Satya", image: brio, categories: ["CITY CAR (LCGC)", "HATCHBACK"], price24h: "400 K" },
  { id: "agya", name: "Toyota Agya", image: agya, categories: ["CITY CAR (LCGC)"], price24h: "350 K" },
  { id: "ayla", name: "Daihatsu Ayla", image: agya, categories: ["CITY CAR (LCGC)"], price24h: "350 K" },
  { id: "avanza", name: "Toyota Avanza", image: avanza, categories: ["L-MPV"], price24h: "450 K" },
  { id: "ertiga", name: "Suzuki Ertiga", image: ertiga, categories: ["L-MPV"], price24h: "450 K" },
  { id: "rush", name: "Toyota Rush", image: rush, categories: ["SUV"], price24h: "600 K" },
  { id: "pajero", name: "Mitsubishi Pajero", image: fortuner, categories: ["SUV", "MEDIUM SUV"], price24h: "1.1 JT" },
  { id: "alphard", name: "Toyota Alphard", image: alphard, categories: ["LUXURY CAR"], price24h: "2.5 JT" },
  { id: "vellfire", name: "Toyota Vellfire", image: alphard, categories: ["LUXURY CAR"], price24h: "2.8 JT" },
  { id: "bmw-5", name: "BMW 5 Series", image: alphard, categories: ["LUXURY CAR", "SEDAN"], price24h: "2.0 JT" },
];

export const WHATSAPP_URL = "https://wa.me/6281234567890";
