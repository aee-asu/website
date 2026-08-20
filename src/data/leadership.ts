/**
 * Chapter leadership. Add a `program` line only when it is verified, and a
 * `photo` only when you have an approved headshot — the layout is designed to
 * read well without either, and falls back to initials where a photo is
 * missing.
 *
 * Portraits are square and metadata-free, built by scripts/prepare_headshots.py
 * rather than cropped by hand. Add the source there and re-run it.
 */

export type Officer = {
  name: string;
  role: string;
  program?: string;
  photo?: string;
};

export const officers: Officer[] = [
  {
    name: "Hithesh Rai Purushothama",
    role: "President",
    program: "Graduate student, Artificial Intelligence Engineering (Materials Science and Engineering)",
    photo: "/images/officers/hithesh-rai-purushothama.jpg",
  },
  {
    name: "Akash Jay Makhija",
    role: "Vice President",
    program: "Graduate student, Electrical Engineering",
    photo: "/images/officers/akash-jay-makhija.jpg",
  },
  {
    name: "Rudra Patel",
    role: "Treasurer",
    program: "Graduate student, Electrical Engineering",
    photo: "/images/officers/rudra-patel.jpg",
  },
];

export const advisor: Officer = {
  name: "Nick Rolston",
  role: "Faculty Advisor",
  program: "Assistant Professor, School of Electrical, Computer and Energy Engineering",
  photo: "/images/officers/nick-rolston.jpg",
};
