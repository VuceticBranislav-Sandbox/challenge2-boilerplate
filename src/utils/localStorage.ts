
export default function getLocalStorage() {
  const wishlistStorage = localStorage.getItem("wishlistStorage");
  if (wishlistStorage === null || wishlistStorage === "undefined") {
    return [];
  } else {
    return JSON.parse(wishlistStorage);
  }
}
