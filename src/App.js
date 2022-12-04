import dbRef, {userName, connectedRef } from './server/firebase';
import './App.css';
import { useEffect } from 'react';

function App() {
  const participantRef = dbRef.child("participants");
  useEffect(() => {
    connectedRef.on("value", (snap) => {
      if (snap.val()) {
        
        const defaultPreferences = {
          Audio: true,
          video: false,
          screen: false,
        }
        const userRef= participantRef.push({
          userName,
          preference: defaultPreferences,
        });
        userRef.onDisconnect().remove();
      }
    });
  },);
  return <div className="App">{userName}</div>;
}

export default App;
