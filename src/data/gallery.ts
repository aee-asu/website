/**
 * The curated visual archive. Keep it selective — this is an edit, not a dump.
 *
 * To add a photo: run `python scripts/prepare_images.py` after adding your file
 * to scripts/selection.json, then add an entry here with honest alt text.
 * `span` controls how much room the image takes in the editorial grid.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  event: string;
  date: string;
  width: number;
  height: number;
  /** "wide" images take two columns on large screens. */
  span?: "wide";
};

const HACKATHON = "ASU Energy Hackathon";
const HACKATHON_DATE = "April 2026";

const TABLING = "Taste of the MU";
const TABLING_DATE = "August 2026";

export const gallery: GalleryImage[] = [
  {
    src: "/images/gallery/17-tabling-table.jpg",
    alt: "Two officers at the chapter's table during a student organization fair, with flyers, pens and giveaways laid out and a tablet showing the chapter website.",
    event: TABLING,
    date: TABLING_DATE,
    width: 2000,
    height: 1500,
    span: "wide",
  },
  {
    src: "/images/gallery/02-mentor-review.jpg",
    alt: "A mentor leans over a lecture-hall bench to look at a team's laptop while other participants work in the background.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 2000,
    height: 1500,
    span: "wide",
  },
  {
    src: "/images/gallery/01-teams-working.jpg",
    alt: "Teams working at laptops across the tiered benches of a full lecture hall during the hackathon.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1800,
    height: 2400,
  },
  {
    src: "/images/gallery/04-opening-session.jpg",
    alt: "A speaker presents a slide titled 'Solving Critical Workflows Across the Value Chain' to seated participants.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1800,
    height: 2700,
  },
  {
    src: "/images/gallery/03-team-table.jpg",
    alt: "A group of students gathered around one end of a bench in discussion, laptops open in front of them.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 2000,
    height: 1500,
    span: "wide",
  },
  {
    src: "/images/gallery/13-hardware-parts.jpg",
    alt: "Motors, wheels, small components and assembly instructions spread across a table for the hardware track.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/14-solar-prototype.jpg",
    alt: "A hardware prototype on a table: a small solar panel wired to a breadboard and microcontroller.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/11-team-laptops.jpg",
    alt: "Four teammates at a bench turn to the camera behind their laptops and a hand-written team card.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/12-demo-laptop.jpg",
    alt: "Two students hold up a laptop showing their project dashboard at their team's table.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/16-huddle.jpg",
    alt: "Participants and a mentor huddle over a laptop covered in stickers while a volunteer takes notes.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/15-discussion.jpg",
    alt: "Students seated around a shared table mid-discussion, papers and a laptop between them.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1800,
    height: 2400,
  },
  {
    src: "/images/gallery/06-judges.jpg",
    alt: "Four judges stand together beside the hackathon banner before judging begins.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1600,
    height: 2133,
  },
  {
    src: "/images/gallery/05-challenge-team.jpg",
    alt: "A team from one of the companies that set a hackathon challenge, standing together in front of the event banner.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1024,
    height: 768,
    span: "wide",
  },
  {
    src: "/images/gallery/07-award-hardware.jpg",
    alt: "A team receives a certificate on stage from two organizers at the closing awards.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1600,
    height: 2133,
  },
  {
    src: "/images/gallery/08-award-group.jpg",
    alt: "A winning team lines up across the stage holding their certificate during the awards.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1600,
    height: 2133,
  },
  {
    src: "/images/gallery/09-certificate.jpg",
    alt: "Two members of a winning team hold up their certificate and pitchfork hands in front of the projection screen.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/gallery/10-award-software.jpg",
    alt: "A winning team stands with an organizer holding their certificate after the software track results.",
    event: HACKATHON,
    date: HACKATHON_DATE,
    width: 1600,
    height: 2133,
  },
];
