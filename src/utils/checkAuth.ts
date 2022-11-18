export function GetAuth(): string | null {
  const access_token = localStorage.getItem("access_token");
  return access_token;
}
