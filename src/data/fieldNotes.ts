/** Retrospectives must be backed by event records, photographs or approved testimony. */
export type FieldNote = {
  eventSlug: string;
  introduction: string;
  observations: { title: string; body: string }[];
  photographs: { src: string; caption: string }[];
  quote?: { text: string; attribution: string };
};

export const fieldNotes: FieldNote[] = [{
  eventSlug: "asu-aep-solar-fab-tour-2026",
  introduction: "Solar technology was the starting point. Inside the ASU AEP Solar Fab, the visit brought students closer to the materials, equipment and working environment behind photovoltaic fabrication.",
  observations: [
    {
      title: "Start with the material",
      body: "Students examined thin samples up close. The photograph records a moment of handling and comparison, alongside the tour’s broader focus on the materials and processes behind photovoltaic devices.",
    },
    {
      title: "Look beyond a single device",
      body: "The facility photographs show process equipment, storage and work areas throughout the fabrication space. The visit followed how photovoltaic devices move through fabrication, connecting the device to the environment in which it is made.",
    },
    {
      title: "Notice how people enter the process",
      body: "Students wore cleanroom gowns, hair covers, face masks and gloves inside the facility. Those details are visible alongside the samples and tools: the working environment includes people and procedures as well as equipment.",
    },
  ],
  photographs: [
    { src: "/images/gallery/19-solar-fab-sample.jpg", caption: "Students examine thin samples inside the fabrication facility." },
    { src: "/images/gallery/20-solar-fab-cleanroom.jpg", caption: "Process equipment and work areas in the amber-lit cleanroom bay." },
    { src: "/images/gallery/21-solar-fab-briefing.jpg", caption: "The group gathers for a discussion outside the cleanroom." },
  ],
}];
