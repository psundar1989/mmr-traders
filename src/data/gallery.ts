export type GalleryCategory = "Scrap" | "Batteries";

export type GalleryImage = {
  src: string;
  thumb: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

const img = (name: string) => ({
  src: `/images/${name}.webp`,
  thumb: `/images/thumbs/${name}.webp`,
});

export const galleryImages: GalleryImage[] = [
  { ...img("steel-scrap-pile"), alt: "Large pile of iron and steel scrap at a yard", caption: "Scrap iron collection", category: "Scrap" },
  { ...img("battery-collection"), alt: "Used inverter batteries stacked on trolleys", caption: "Used inverter batteries", category: "Batteries" },
  { ...img("aluminium-pellets"), alt: "Worker pouring shredded aluminium scrap", caption: "Aluminium scrap", category: "Scrap" },
  { ...img("copper-pipes"), alt: "Close-up of copper pipe being measured", caption: "Copper scrap", category: "Scrap" },
  { ...img("hero-scrap-yard"), alt: "Crane lifting scrap metal at a scrap yard", caption: "Scrap materials handling", category: "Scrap" },
  { ...img("battery-tubular"), alt: "Tall tubular 220Ah inverter battery", caption: "Tall tubular battery", category: "Batteries" },
  { ...img("old-machinery"), alt: "Old rusted industrial machinery", caption: "Old machinery", category: "Scrap" },
  { ...img("battery-row"), alt: "Row of old sealed batteries", caption: "Battery collection", category: "Batteries" },
  { ...img("aluminium-collection"), alt: "Aluminium sections and metal scrap collected outdoors", caption: "Aluminium & metal scrap", category: "Scrap" },
  { ...img("electronic-scrap"), alt: "Shredded electronic and electrical scrap", caption: "Electrical scrap", category: "Scrap" },
  { ...img("battery-pair"), alt: "Two used inverter batteries connected to inverters", caption: "Tested used batteries", category: "Batteries" },
  { ...img("scrap-container"), alt: "Scrap container filled with metal scrap", caption: "Scrap materials", category: "Scrap" },
];
