import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  GB: {
    translation: {
      "Home": "Home",
      "Sorting criteria": "Sorting criteria",
      "Price range": "Price range",
      "Search": "Search",
      "Filter by category": "Filter by category",
      "Details": "Details",
      "Payment method": "Payment method",
      "Name": "Name",
      "Phone Number": "Phone Number",
      "Submit": "Submit",
      "Checkout": "Checkout",
      "Proceed to Checkout": "Proceed to Checkout",
      "Cart": "Cart",
      "Cart totals": "Cart totals",
      "SUBTOTAL": "SUBTOTAL",
      "Shipping": "Shipping",
      "Flat rate:": "Flat rate:",
      "TOTAL": "TOTAL",
      "Wishlist": "Wishlist",
      "Reduce quantity": "Reduce quantity",
      "Increase quantity": "Increase quantity",
      "Language": "Language",
      "Contact": "Contact",
      "Explore": "Explore",
      "Add to wishlist": "Add to wishlist",
      "Add to cart": "Add to cart",
      "Remove": "Remove",
    },
  },
  RS: {
    translation: {
      "Home": "Početna strana",
      "Sorting criteria": "Kriterijum sortiranja",
      "Price range": "Cenovni rang",
      "Search": "Pretraga",
      "Filter by category": "Filter po kategorijama",
      "Details": "Detalji",
      "Payment method": "Način plaćanja",
      "Name": "Ime",
      "Phone Number": "Broj telefona",
      "Submit": "Pošalji",
      "Checkout": "Provera",
      "Proceed to Checkout": "Nastavi na proveru",
      "Cart": "Korpa",
      "Cart totals": "Sadrzaj korpe",
      "SUBTOTAL": "STAVKE",
      "Shipping": "Dostava",
      "Flat rate:": "Naknada:",
      "TOTAL": "UKUPNO",
      "Wishlist": "Lista želja",
      "Reduce quantity": "Umanji količinu",
      "Increase quantity": "Uvećaj količinu",
      "Language": "Jezik",
      "Contact": "Kontakti",
      "Explore": "Istraži",
      "Add to wishlist": "Dodaj u listu želja",
      "Add to cart": "Dodaj u kolica",
      "Remove": "Ukloni",
    },
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "GB",
    fallbackLng: "GB",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnNull: false,
  });

export default i18n;
