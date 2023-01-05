export default function getLocalStorage(storageName: string) {
  const storage = localStorage.getItem(storageName);
  if (storage === null || storage === undefined) {
    return [];
  } else {
    return JSON.parse(storage);
  }
}
