/**
 * Scrap categories we buy. Images are placeholders — replace the files
 * in /public/images (and /public/images/thumbs) with your own photos.
 */
export type ScrapCategory = {
  id: string;
  name: string;
  description: string;
  examples: string[];
  image: string;
  imageAlt: string;
};

export const scrapCategories: ScrapCategory[] = [
  {
    id: "iron",
    name: "Iron Scrap",
    description: "Old iron rods, gates, grills, sheets, pipes and rusted iron items of any quantity.",
    examples: ["Rods & angles", "Gates & grills", "Iron sheets"],
    image: "/images/thumbs/rusty-iron-bands.webp",
    imageAlt: "Pile of rusty old iron scrap bands and strips",
  },
  {
    id: "steel",
    name: "Steel Scrap",
    description: "Stainless steel and mild steel scrap — utensils, furniture, pipes, cut pieces and bundles.",
    examples: ["SS utensils", "Steel furniture", "MS cuttings"],
    image: "/images/thumbs/steel-scrap.webp",
    imageAlt: "Compacted bales of steel scrap",
  },
  {
    id: "aluminium",
    name: "Aluminium Scrap",
    description: "Aluminium vessels, window sections, sheets, cans, wires and castings bought at good rates.",
    examples: ["Vessels & cans", "Window sections", "Castings"],
    image: "/images/thumbs/aluminium-scrap.webp",
    imageAlt: "Pressed aluminium scrap blocks in a container",
  },
  {
    id: "copper",
    name: "Copper Scrap",
    description: "Copper wires, cables, pipes, motor windings and transformer copper at the best market price.",
    examples: ["Wires & cables", "Copper pipes", "Motor winding"],
    image: "/images/thumbs/copper-wire-scrap.webp",
    imageAlt: "Heap of stripped copper wire scrap",
  },
  {
    id: "brass",
    name: "Brass Scrap",
    description: "Brass taps, valves, fittings, lamps, vessels and other brass items weighed accurately.",
    examples: ["Taps & valves", "Pipe fittings", "Brass vessels"],
    image: "/images/thumbs/brass-parts.webp",
    imageAlt: "Old brass tap bodies, valves and fittings laid out for scrap",
  },
  {
    id: "old-metal",
    name: "Old Metal Items",
    description: "Old tools, household metal items, cupboards, cots, drums and mixed metal scrap.",
    examples: ["Old tools", "Cupboards & cots", "Metal drums"],
    image: "/images/thumbs/old-metal-tools.webp",
    imageAlt: "Collection of old metal hand tools",
  },
  {
    id: "machinery",
    name: "Old Machinery",
    description: "Unused or broken machines, motors, pumps, generators and industrial equipment.",
    examples: ["Motors & pumps", "Generators", "Industrial machines"],
    image: "/images/thumbs/old-machinery.webp",
    imageAlt: "Old rusted industrial machinery",
  },
  {
    id: "electrical",
    name: "Electrical Scrap",
    description: "Old wiring, switchgear, circuit boards, UPS units, inverters and electronic waste.",
    examples: ["Cables & switchgear", "Circuit boards", "Old UPS / inverters"],
    image: "/images/thumbs/electrical-scrap.webp",
    imageAlt: "Pile of electronic and electrical scrap with circuit boards",
  },
  {
    id: "newspapers",
    name: "Old Newspapers",
    description: "Old newspapers, magazines, books, notebooks and cardboard (paper raddi) bought by weight at fair rates.",
    examples: ["Newspapers", "Books & magazines", "Cardboard boxes"],
    image: "/images/thumbs/old-newspapers.webp",
    imageAlt: "Stack of old folded newspapers ready for recycling",
  },
  {
    id: "glass-bottles",
    name: "Old Beer Bottles",
    description: "Empty beer bottles, liquor bottles and other glass bottles — loose or in crates, any quantity.",
    examples: ["Beer bottles", "Liquor bottles", "Glass jars"],
    image: "/images/thumbs/beer-bottles.webp",
    imageAlt: "Crate of empty brown glass beer bottles",
  },
  {
    id: "plastic",
    name: "Plastic Scrap Items",
    description: "PET bottles, plastic buckets, chairs, drums, containers and hard plastic household items.",
    examples: ["PET bottles", "Buckets & drums", "Plastic furniture"],
    image: "/images/thumbs/plastic-scrap.webp",
    imageAlt: "Compressed bales of plastic bottle scrap",
  },
  {
    id: "scrap-batteries",
    name: "Old Scrap Batteries",
    description: "Dead car, bike, truck and UPS batteries bought at the best lead scrap rates — safe disposal assured.",
    examples: ["Car & truck batteries", "Bike batteries", "UPS batteries"],
    image: "/images/thumbs/scrap-batteries.webp",
    imageAlt: "Pallet stacked with old scrap lead-acid batteries",
  },
  {
    id: "inverter-batteries",
    name: "Old Inverter Batteries",
    description: "Old or dead inverter batteries of all brands — tubular and flat plate. Get cash or exchange value.",
    examples: ["Tall tubular", "Flat plate", "All brands"],
    image: "/images/thumbs/inverter-batteries-old.webp",
    imageAlt: "Old inverter batteries connected for home power backup",
  },
  {
    id: "other",
    name: "Other Recyclable Scrap Materials",
    description: "Mixed scrap, rubber, cartons, e-waste and other recyclable materials — send a photo for a quote.",
    examples: ["Mixed scrap", "Cartons & rubber", "Bulk lots"],
    image: "/images/thumbs/recyclable-scrap.webp",
    imageAlt: "Bags of mixed recyclable scrap material",
  },
];
