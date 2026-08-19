/**
 * Chapter leadership. Add a `program` line only when it is verified, and a
 * `photo` only when you have an approved headshot — the layout is designed to
 * read well without either.
 */

export type Officer = {
  name: string;
  role: string;
  program?: string;
  photo?: string;
};

export const officers: Officer[] = [
  { name: "Hithesh Rai Purushothama", role: "President" },
  { name: "Akash Jay Makhija", role: "Vice President" },
  { name: "Rudra Patel", role: "Treasurer" },
];

export const advisor: Officer = {
  name: "Prof. Nicholas Rolston",
  role: "Faculty Advisor",
};
