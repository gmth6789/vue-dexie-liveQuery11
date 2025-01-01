import Dexie from "dexie";

export const db = new Dexie("vuedbsample");

db.version(1).stores({
  items: "++id, name"
});
