export const CONTACT_EMAIL = "attafi.islam.24@gmail.com";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/islamattafi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/islamattafi" },
  { label: "YouPic", href: "https://youpic.com/islamattafi" },
] as const;

export type ReelCategory = "hospitality" | "realEstate" | "automotive";

// Reels hosted on Google Drive (shared as "anyone with the link").
// To add a reel: upload to Drive, share by link, paste the file ID here,
// and add a 9:16 poster image in src/assets/reels/.
export type ReelId =
  | "luxury"
  | "damac"
  | "businessLunch"
  | "zedCapital"
  | "gclass"
  | "fakhara"
  | "prestora"
  | "cappuccino"
  | "sobha";

export const REELS: { id: ReelId; driveId: string; category: ReelCategory }[] = [
  { id: "luxury", driveId: "1-K6wPC0JKW08ON8P1hbCsQ6a21HlkEXj", category: "hospitality" },
  { id: "damac", driveId: "1DTrsHxvtpXFM35ZUATSHnvCuaj0yJ7Ba", category: "realEstate" },
  { id: "businessLunch", driveId: "1uB144yH9KsfngVkW3uB0jRP5dGx_dJvL", category: "hospitality" },
  { id: "zedCapital", driveId: "19Y1RlixzxzYyYOhesOLx-bwlq--lMLlK", category: "realEstate" },
  { id: "gclass", driveId: "1IIsGhZk4RfW02VV7oJpZGr3IEfbn0rJg", category: "automotive" },
  { id: "fakhara", driveId: "1Iic5-5LxZhiB7VLqnfYlsXjRrqxOEd2L", category: "hospitality" },
  { id: "prestora", driveId: "1UGHw5pJYiI00ywpCpYgOj1w3Cxg8OeoO", category: "realEstate" },
  { id: "cappuccino", driveId: "1YWv8eWsk83cMiasQUFmjdSAcsUDxiadH", category: "hospitality" },
  { id: "sobha", driveId: "1K90RsUfKPsxhkhf5pxuC2uSA6Vcz7emg", category: "realEstate" },
];
