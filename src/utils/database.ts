import {
  getDatabase,
  ref,
  connectDatabaseEmulator,
  Database,
  onValue as _onValue,
} from "firebase/database";

let db: Database;

export const getDB = (): Database => {
  if (db) {
    return db;
  }

  db = getDatabase();

  if (process.env.REACT_APP_DEV_MODE) {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, "127.0.0.1", 9000);
  }

  return db;
};

export const onValue = (path: string, callback: (snapshot: any) => void) => {
  const starCountRef = ref(getDB(), path);
  return _onValue(starCountRef, (snapshot) => {
    callback(snapshot.val());
  });
};
