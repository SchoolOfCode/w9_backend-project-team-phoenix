export const weeks = [
  {
    week_number: 1,
    catagory_id: 1,
    contact_id: null,
  },
  {
    week_number: 1,
    catagory_id: 2,
    contact_id: null,
  },
  {
    week_number: 1,
    catagory_id: null,
    contact_id: 1,
  },
  {
    week_number: 8,
    catagory_id: 3,
    contact_id: null,
  },
  {
    week_number: 8,
    catagory_id: null,
    contact_id: 2,
  },
];

export const catagories = [
  {
    category_id: 1,
    catagory_name: "Useful links",
    title: "The shapes of css",
    content:
      "CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.",
    url: "https://css-tricks.com/the-shapes-of-css/",
    img: null,
  },
  {
    category_id: 2,
    catagory_name: "Useful links",
    title: "Git Branch",
    content:
      "This document is an in-depth review of the git branch command and a discussion of the overall Git branching model. Branching is a feature available in most modern version control systems. Branching in other VCS's can be an expensive operation in both time and disk space. In Git, branches are a part of your everyday development process. Git branches are effectively a pointer to a snapshot of your changes. When you want to add a new feature or fix a bug—no matter how big or how small—you spawn a new branch to encapsulate your changes. This makes it harder for unstable code to get merged into the main code base, and it gives you the chance to clean up your future's history before merging it into the main branch.",
    url: "https://www.atlassian.com/git/tutorials/using-branches",
    img: null,
  },
  {
    category_id: 3,
    catagory_name: "Docs",
    title: "React testing",
    content:
      "You want to write maintainable tests for your React components. As a part of this goal, you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, you want your testbase to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.",
    url: "https://testing-library.com/docs/react-testing-library/intro/",
    img: null,
  },
];

export const contactInfo = [
  {
    contact_id: 1,
    heading: "Contact Information",
    name: "Chris Meah",
    twitter: "https://twitter.com/TheMeahCat",
    linkedin: "https://www.linkedin.com/in/chrismeah/",
    description: "SOC CEO",
  },
  {
    contact_id: 2,
    name: "Nick Truby",
    heading: "Contact Information",
    twitter: null,
    linkedin: "https://www.linkedin.com/in/nicktruby/",
    description: "React professional in BT",
  },
];
