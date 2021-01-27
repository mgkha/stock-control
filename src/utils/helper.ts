export function isBrowser() {
  return typeof window !== "undefined";
}

export function getRand(min: number, max: number) {
  return Math.floor(Math.random() * max - min) + min;
}

export function getNameFromEmail(email: string) {
  return email.split("@")[0];
}
