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
  {
    name: "Hithesh Rai Purushothama",
    role: "President",
    program: "Graduate student, Artificial Intelligence Engineering (Materials Science and Engineering)",
  },
  {
    name: "Akash Jay Makhija",
    role: "Vice President",
    program: "Graduate student, Electrical Engineering",
  },
  {
    name: "Rudra Patel",
    role: "Treasurer",
    program: "Graduate student, Electrical Engineering",
  },
];

export const advisor: Officer = {
  name: "Nick Rolston",
  role: "Faculty Advisor",
  program: "Assistant Professor, School of Electrical, Computer and Energy Engineering",
};
