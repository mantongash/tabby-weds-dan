import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { div } from "motion/react-client";

function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    (async () => {
      const q = query(collection(db, "rsvp"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setMessages((prev) => [...prev, doc.data()]);

        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);
  return (
    <div>D4AF37
        <h2 className="text-center border-b-3 border-b-[#D4AF37] py-4"><span className="text-[#D4AF37]">&hearts;</span> Wall of Love <span className="text-[#D4AF37]">&hearts;</span></h2>
      {messages &&
        messages.map((message) => {
          if (message.message !== "" || message.name !== "") {
            return (
              <div className="mt-4 max-w-[400px] mx-auto border-b p-4">
                <h3 className="font-bold">{message.message !== "" && message.message}</h3>
                <p className="italic text-blue-600">- {message.name !== "" ? message.name : "Anonymous"}</p>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Messages;
