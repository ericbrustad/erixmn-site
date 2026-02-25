import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "data", "content.json");

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: "admin";
  createdAt: string;
}

export interface Slide {
  id: string;
  src: string;
  alt: string;
  order: number;
  isLogo: boolean;
}

export interface PageSection {
  id: string;
  type: string;
  content: Record<string, string>;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  isSystem: boolean;
  sections: PageSection[];
  customHtml?: string;
}

export interface ContentData {
  users: User[];
  slides: Slide[];
  pages: Page[];
}

export function readData(): ContentData {
  if (!existsSync(DATA_PATH)) {
    throw new Error("Content data file not found");
  }
  return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
}

export function writeData(data: ContentData): void {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function getUsers(): User[] {
  return readData().users;
}

export function getUserByEmail(email: string): User | undefined {
  return readData().users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(user: User): void {
  const data = readData();
  data.users.push(user);
  writeData(data);
}

export function getSlides(): Slide[] {
  return readData().slides.sort((a, b) => a.order - b.order);
}

export function updateSlides(slides: Slide[]): void {
  const data = readData();
  data.slides = slides;
  writeData(data);
}

export function getPages(): Page[] {
  return readData().pages;
}

export function getPageBySlug(slug: string): Page | undefined {
  return readData().pages.find((p) => p.slug === slug);
}

export function getPageById(id: string): Page | undefined {
  return readData().pages.find((p) => p.id === id);
}

export function updatePage(page: Page): void {
  const data = readData();
  const idx = data.pages.findIndex((p) => p.id === page.id);
  if (idx >= 0) {
    data.pages[idx] = page;
  } else {
    data.pages.push(page);
  }
  writeData(data);
}

export function deletePage(id: string): boolean {
  const data = readData();
  const page = data.pages.find((p) => p.id === id);
  if (!page || page.isSystem) return false;
  data.pages = data.pages.filter((p) => p.id !== id);
  writeData(data);
  return true;
}
