/**
 * SAMPLE / DUMMY battery stock. Replace with your actual available
 * batteries and photos.
 * Availability changes often — customers confirm on WhatsApp.
 */
export type BatteryCondition = "Excellent" | "Very Good" | "Good" | "Fair";

export type Battery = {
  id: string;
  brand: string;
  model: string;
  capacityAh: number;
  type: "Tall Tubular" | "Short Tubular" | "Flat Plate";
  voltage: string;
  condition: BatteryCondition;
  /** Short note about the battery's tested state. */
  conditionNote: string;
  image: string;
  imageAlt: string;
};

export const batteries: Battery[] = [
  {
    id: "exide-150",
    brand: "Exide",
    model: "InvaMaster IMTT1500",
    capacityAh: 150,
    type: "Tall Tubular",
    voltage: "12V",
    condition: "Very Good",
    conditionNote: "Load tested, strong backup",
    image: "/images/thumbs/battery-collection.webp",
    imageAlt: "Used Exide tall tubular inverter batteries on trolleys",
  },
  {
    id: "mercury-220",
    brand: "Mercury",
    model: "Elite 220AH",
    capacityAh: 220,
    type: "Tall Tubular",
    voltage: "12V",
    condition: "Very Good",
    conditionNote: "High capacity, long backup",
    image: "/images/thumbs/battery-tubular.webp",
    imageAlt: "Used 220Ah tall tubular inverter battery",
  },
  {
    id: "amaron-200",
    brand: "Amaron",
    model: "Current AR200TN54",
    capacityAh: 200,
    type: "Tall Tubular",
    voltage: "12V",
    condition: "Excellent",
    conditionNote: "Lightly used, high backup",
    image: "/images/thumbs/battery-pair.webp",
    imageAlt: "Pair of used inverter batteries connected to inverters",
  },
  {
    id: "okaya-180",
    brand: "Okaya",
    model: "OPTT 18048",
    capacityAh: 180,
    type: "Tall Tubular",
    voltage: "12V",
    condition: "Good",
    conditionNote: "Tested, water topped-up",
    image: "/images/thumbs/battery-bank.webp",
    imageAlt: "Bank of used inverter batteries",
  },
  {
    id: "luminous-100",
    brand: "Luminous",
    model: "Red Charge RC 12000",
    capacityAh: 100,
    type: "Flat Plate",
    voltage: "12V",
    condition: "Good",
    conditionNote: "Ideal for small homes & shops",
    image: "/images/thumbs/battery-row.webp",
    imageAlt: "Row of used flat plate batteries",
  },
  {
    id: "exide-120",
    brand: "Exide",
    model: "Inva Red IR1200",
    capacityAh: 120,
    type: "Flat Plate",
    voltage: "12V",
    condition: "Fair",
    conditionNote: "Budget option, tested working",
    image: "/images/thumbs/battery-classic.webp",
    imageAlt: "Old Exide flat plate battery",
  },
];

export const capacityFilters = [
  { label: "All", test: () => true },
  { label: "Up to 120Ah", test: (b: Battery) => b.capacityAh <= 120 },
  { label: "150Ah – 180Ah", test: (b: Battery) => b.capacityAh >= 150 && b.capacityAh <= 180 },
  { label: "200Ah & above", test: (b: Battery) => b.capacityAh >= 200 },
] as const;
