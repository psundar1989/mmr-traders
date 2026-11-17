export const galleryCategories = ["Metal Scrap", "Batteries", "Paper, Glass & Plastic", "Scrap Yards"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

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

/**
 * Order matters for the "All" bento layout: in each block of 12, items
 * 0 and 5 are tall and items 1 and 7 are wide, which tiles a 4×4 grid
 * exactly (see Gallery.tsx). Keep the total a multiple of 12.
 */
export const galleryImages: GalleryImage[] = [
  // Block 1
  { ...img("scrap-yard-cars"), alt: "Old cars and mixed metal piled up in a scrap yard", caption: "Scrap yard", category: "Scrap Yards" },
  { ...img("glass-bottles-recycling"), alt: "Sack full of empty green glass bottles for recycling", caption: "Glass bottles", category: "Paper, Glass & Plastic" },
  { ...img("scrap-batteries-pallet"), alt: "Pallet stacked with old scrap car batteries", caption: "Old scrap batteries", category: "Batteries" },
  { ...img("newspaper-bundles"), alt: "Bundles of old newspapers tied up for recycling", caption: "Old newspapers", category: "Paper, Glass & Plastic" },
  { ...img("copper-wire-scrap"), alt: "Heap of stripped copper wire scrap", caption: "Copper wire scrap", category: "Metal Scrap" },
  { ...img("battery-row"), alt: "Row of old sealed batteries", caption: "Used UPS batteries", category: "Batteries" },
  { ...img("plastic-waste-pile"), alt: "Large heap of mixed plastic scrap at a recycling yard", caption: "Plastic scrap", category: "Paper, Glass & Plastic" },
  { ...img("steel-scrap-pile"), alt: "Large pile of iron and steel scrap at a yard", caption: "Iron & steel scrap", category: "Metal Scrap" },
  { ...img("beer-bottles"), alt: "Crate of empty brown glass beer bottles", caption: "Old beer bottles", category: "Paper, Glass & Plastic" },
  { ...img("aluminium-pellets"), alt: "Worker pouring shredded aluminium scrap", caption: "Aluminium scrap", category: "Metal Scrap" },
  { ...img("electronic-scrap"), alt: "Shredded electronic and electrical scrap", caption: "Electrical scrap", category: "Metal Scrap" },
  { ...img("cardboard-bales"), alt: "Workers unloading bales of scrap cardboard from a truck", caption: "Cardboard & paper bales", category: "Paper, Glass & Plastic" },
  // Block 2
  { ...img("battery-collection"), alt: "Used inverter batteries stacked on trolleys", caption: "Used inverter batteries", category: "Batteries" },
  { ...img("scrap-yard-daikoku"), alt: "Metal scrap yard with a crane and piles of sorted scrap", caption: "Industrial scrap yard", category: "Scrap Yards" },
  { ...img("plastic-bales-truck"), alt: "Truck loaded with bales of plastic waste for recycling", caption: "Plastic waste bales", category: "Paper, Glass & Plastic" },
  { ...img("rusty-iron-bands"), alt: "Pile of rusty old iron scrap bands and strips", caption: "Old iron scrap", category: "Metal Scrap" },
  { ...img("newspapers-stack"), alt: "Tall stacks of old newspapers", caption: "Newspaper raddi", category: "Paper, Glass & Plastic" },
  { ...img("battery-tubular"), alt: "Tall tubular 220Ah inverter battery", caption: "Tall tubular battery", category: "Batteries" },
  { ...img("old-machinery"), alt: "Old rusted industrial machinery", caption: "Old machinery", category: "Metal Scrap" },
  { ...img("metal-scrap-pile"), alt: "Tangled pile of mixed metal scrap", caption: "Mixed metal scrap", category: "Metal Scrap" },
  { ...img("motorcycle-batteries"), alt: "Old motorcycle batteries collected at a recycling station", caption: "Bike batteries", category: "Batteries" },
  { ...img("hero-scrap-yard"), alt: "Crane lifting scrap metal at a scrap yard", caption: "Scrap materials handling", category: "Scrap Yards" },
  { ...img("scrap-container"), alt: "Scrap container filled with metal scrap", caption: "Scrap container", category: "Metal Scrap" },
  { ...img("scrap-yard-emr"), alt: "Industrial scrap metal yard with a large pile of baled scrap", caption: "Baled metal scrap", category: "Scrap Yards" },
];
