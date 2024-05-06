export let featureList = ["Reporting and Analytics", "Create Enquiry", "Duplicate Enquiry", "Create Quotation", "Create Visit", "Add Discount", "Add Menu", "User Management", "User Roles & Accessible", "Assign lead owner", "Timeline", "Contract document"];
export let plansList = [
  {
    title: "Reporting and Analytics",
    trial: true,
    starter: true,
    advance: true,
  },
  {
    title: "Create Enquiry",
    trial: false,
    starter: true,
    advance: false,
  },
  {
    title: "Duplicate Enquiry",
    trial: true,
    starter: false,
    advance: true,
  },
  {
    title: "Create Quotation",
    trial: false,
    starter: true,
    advance: true,
  },
  {
    title: "Create Visit",
    trial: true,
    starter: true,
    advance: false,
  },
  {
    title: "Add Discount",
    trial: false,
    starter: true,
    advance: true,
  },
  {
    title: "Add Menu",
    trial: false,
    starter: false,
    advance: true,
  },
  {
    title: "User Management",
    trial: true,
    starter: true,
    advance: false,
  },
  {
    title: "User Roles & Accessible",
    trial: false,
    starter: true,
    advance: true,
  },
  {
    title: "Assign lead owner",
    trial: false,
    starter: true,
    advance: true,
  },
];
export let planCards = {
  base: {
    title: "Base",
    venues: 2,
    users: false,
    main: false,
  },
  starter: {
    title: "Starter",
    venues: 5,
    price: 2400,
    users: true,
    main: true,
  },
  pro: {
    title: "Pro",
    venues: 10,
    users: false,
    main: false,
  },
};
