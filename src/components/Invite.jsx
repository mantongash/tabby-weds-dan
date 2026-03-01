import rings from "../assets/images/rings.svg";
import monogram from "../assets/images/monogram-navy.svg";
import openEnvelope from "../assets/images/openEnvelope.png";
import closedEnvelope from "../assets/images/closed envelope.jpeg";
import arrow from "../assets/images/arrow.svg";
import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  AnimatePresence,
} from "motion/react";
import { useAnimate } from "motion/react";
import flower from "../assets/images/flower.png";
import {
  CalendarPlus,
  MapPin,
  Volume,
  UserCheck,
  Church,
  ConciergeBell,
  Smile,
  Frown,
  VolumeOff,
} from "lucide-react";
import { google } from "calendar-link";

import endlessLove from "../assets/audio/endless-love.mp3";

import { useState, useRef } from "react";
import { useParams } from "react-router";

function Invite() {
  const [showDirections, setShowDirections] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);
  const [willAttend, setWillAttend] = useState(false);
  const [mute, setMute] = useState(false);
  const [scope, animate] = useAnimate();

  const audioRef = useRef(null);

  const { slug } = useParams();
  console.log(slug);

  const event = {
    title: "Tabitha and Daniel's Wedding",
    description:
      "Come witness two hearts becoming one as Tabby and Dan begin their forever",
    start: "2026-04-11T10:00:00+03:00",
    location: "Christ the King Catholic Church, Muthua",
  };

  const googleUrl = google(event);

  async function handleOpen() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      audioRef.current.volume = 0.15;
    }
    animate(
      "#closedEnvelope",
      {
        y: 60,
        opacity: 0,
      },
      { duration: 0.5, ease: easeOut }
    );
    animate("#volume", { opacity: 1, y: 0 }, { duration: 1, ease: easeIn });
    animate("#button", { display: "none" });
    animate("#arrow", { display: "none" });
    animate("#tap", { display: "none" });

    await animate(
      "#openEnvelope",
      { opacity: 1, y: 0 },
      { duration: 1, ease: easeOut }
    );
    await animate(
      "#joyfully",
      { opacity: 1, x: 0 },
      { duration: 1, ease: easeIn }
    );
    animate(
      "#event-date",
      { opacity: 0, x: -500 },
      { duration: 1, ease: easeOut }
    );

    await animate(
      "#rings",
      { opacity: 0, x: 60 },
      { duration: 1, ease: easeIn }
    );
    await animate(
      "#monogram",
      { opacity: 1, x: 0 },
      { duration: 1, ease: easeIn }
    );
    await animate(
      "#name",
      { opacity: 1, y: 0, color: ["#D4AF37", "#D4AF37", "#0B1D51"] },
      { duration: 2, ease: easeIn }
    );

    animate("#header", { y: -80 }, { duration: 1, ease: easeIn });
    animate("#content", { y: -80 }, { duration: 1, ease: easeIn });
    animate(
      "#openEnvelope",
      {
        y: 60,
        opacity: 0,
      },
      { duration: 0.5, ease: easeOut }
    );

    await animate(
      "#border",
      { height: "700px", opacity: 1 },
      { duration: 2, ease: easeIn }
    );
    animate("#img1", { opacity: 1, y: 0 }, { duration: 2, ease: easeIn });
    animate("#img2", { opacity: 1, y: 0 }, { duration: 2, ease: easeIn });

    await animate("#celebrate", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#date", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#church", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#church", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#reception", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#ground", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#divider2", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#join-us", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#divider3", { opacity: 1, x: 0 }, { duration: 1 });
    await animate("#rsvp", { opacity: 1, y: 0 }, { duration: 1, ease: easeIn });
    await animate(
      "#calendar",
      { opacity: 1, x: 0 },
      { duration: 1, ease: easeIn }
    );
    await animate(
      "#directions",
      { opacity: 1, x: 0 },
      { duration: 1, ease: easeIn }
    );
  }

  return (
    <div
      className="flex overflow-hidden justify-center items-center flex-col"
      ref={scope}
    >
      <motion.div
        layout
        id="frame"
        initial={{ border: "none" }}
        className="flex flex-col items-center justify-center px-2  text-[#0B1D51] bg-[#f2f2f2] h-[700px] scroll-auto max-w-100 relative border-2 rounded-xl m-12 text-center"
      >
        <motion.div
          id="border"
          initial={{ height: 0, opacity: 0 }}
          className="h-fit border-2 rounded-md px-2 border-[#0B1D51] absolute w-full"
        ></motion.div>
        <motion.img
          id="img1"
          initial={{ opacity: 0, y: -60 }}
          src={flower}
          alt="flower"
          width={70}
          className="absolute top-[-5%] right-[-9%]"
        />
        <motion.img
          initial={{ opacity: 0, y: 60 }}
          id="img2"
          src={flower}
          alt="flower"
          width={70}
          className="absolute bottom-[-3%] left-[-10%]"
        />
        <motion.div id="header" className="flex flex-col items-center">
          <h2 className="tracking-widest font-bold">Tabitha Nafula</h2>
          <p className="text-xl tracking-widest">and</p>
          <h2 className="tracking-widest font-bold mb-5">Daniel Mbuthia</h2>
          <div className="flex justify-center items-center">
            <motion.img
              id="rings"
              src={rings}
              alt="Rings"
              className="block"
              width={40}
            />
            <motion.img
              id="monogram"
              initial={{ opacity: 0, x: -60 }}
              src={monogram}
              alt=""
              width={40}
              className="absolute block mb-5"
            />
          </div>

          <div className="h-[1px] w-[20%] bg-[#0B1D51] my-5"></div>
          <p className="flex justify-center relative mb-5">
            <motion.span
              id="joyfully"
              className="tracking-wider absolute block w-50 text-center"
              initial={{ opacity: 0, x: 500 }}
            >
              joyfully invite
            </motion.span>
            <span
              id="event-date"
              className="absolute tracking-[12px] font-extrabold rounded-xl bg-[#0B1D51] text-[#D4AF37] w-fit py-1 px-3 block"
              initial={{ opacity: 1, x: 0 }}
            >
              11.04.2026
            </span>
          </p>
        </motion.div>
        <div id="content" className="relative">
          {/*Invitation Content*/}
          <motion.div
            className="flex flex-col items-center leading-7 absolute p-[1em]"
            initial={{}}
          >
            <motion.p
              id="name"
              className="font-semibold italic text-1xl z-10 my-4 capitalize"
              initial={{ opacity: 0, y: 300, color: "#0B1D51" }}
            >
              {slug ? slug.split("-").join(" ") : "you"}
            </motion.p>
            <motion.p
              id="celebrate"
              className="tracking-wider"
              initial={{ opacity: "0", x: 500 }}
            >
              to celebrate their wedding ceremony
            </motion.p>
            <motion.p
              id="date"
              className="tracking-wider"
              initial={{ opacity: 0, x: -500 }}
            >
              on Saturday, 11<sup>th</sup> April 2026 at 10:00 a.m.
            </motion.p>
            <motion.p
              id="church"
              className="tracking-wider mb-5"
              initial={{ opacity: 0, x: 500 }}
            >
              Christ the King Catholic Church, Muthua
            </motion.p>
            <motion.p
              id="reception"
              className="tracking-wider"
              initial={{ opacity: 0, x: -500 }}
            >
              Reception to follow at
            </motion.p>
            <motion.p
              id="ground"
              className="tracking-wider text-center"
              initial={{ opacity: 0, x: 500 }}
            >
              St. Mary's Kagondo Catholic Church Grounds from 2:00 p.m.
            </motion.p>
            <motion.div
              id="divider2"
              className="h-px w-[20%] bg-[#0B1D51] my-5"
              initial={{ opacity: 0, x: -500 }}
            ></motion.div>

            <motion.p
              id="join-us"
              className=""
              initial={{ opacity: 0, x: 500 }}
            >
              Join us as we begin our forever.
            </motion.p>
            <motion.div
              id="divider3"
              className="h-px w-[20%] bg-[#0B1D51] my-5"
              initial={{ opacity: 0, x: 500 }}
            ></motion.div>
          </motion.div>
          <div className="flex items-center justify-center relative">
            <div className="relative mt-10">
              <motion.img
                id="closedEnvelope"
                src={closedEnvelope}
                alt=""
                initial={{ opacity: 1, y: 0 }}
                className="h-full w-full object-contain"
              />
              <motion.img
                id="openEnvelope"
                src={openEnvelope}
                alt="Open Envelope"
                className="absolute bottom-0  h-full w-full object-fill"
                initial={{ opacity: 0, y: 60 }}
              />
            </div>

            <motion.div
              id="button"
              className="w-30 h-30 border-15 border-[#D4AF37]  rounded-full opacity-[0.2] absolute top-[40%] left-[51%] translate-x-[-50%] translate-y-[-20%] cursor-pointer"
              initial={{ scale: 0.8, opacity: 1, zIndex: 100 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
              onClick={handleOpen}
            ></motion.div>

            <motion.img
              id="arrow"
              src={arrow}
              alt="pointing arrow"
              className="absolute top-[25%] right-[22%]"
              initial={{ y: 0 }}
              animate={{ y: 4 }}
              transition={{ duration: 1, repeat: Infinity, ease: easeInOut }}
            />

            <motion.p
              id="tap"
              className="absolute top-[17%] right-[5%] text-white"
              initial={{ y: 0 }}
              animate={{ y: 4 }}
              transition={{ duration: 1, repeat: Infinity, ease: easeInOut }}
            >
              Tap to open
            </motion.p>
          </div>
        </div>
      </motion.div>

      <footer
        className="flex flex-col gap-4 justify-center items-center  w-full"
        ref={scope}
      >
        <motion.button
          id="rsvp"
          initial={{ opacity: 0, y: -60 }}
          className="bg-[#D4AF37] text-[#0B1D51] flex justify-center items-center gap-[0.5em] p-2 rounded-xl cursor-pointer"
          onClick={() => setShowRsvp(true)}
        >
          <UserCheck />
          RSVP
        </motion.button>
        <div className="flex justify-center items-center gap-4 ">
          <motion.button
            id="calendar"
            initial={{ opacity: 0, x: -60 }}
            className="border-[#0B1D51] border text-[#0B1D51] flex justify-center items-center gap-[0.5em] p-2 rounded-xl cursor-pointer text-[.8rem]"
            onClick={() => window.open(googleUrl)}
          >
            <CalendarPlus />
            Add to Calendar
          </motion.button>
          <motion.button
            id="directions"
            initial={{ opacity: 0, x: 60 }}
            className="border-[#0B1D51] border text-[#0B1D51] flex justify-center items-center gap-[0.5em] p-2 rounded-xl cursor-pointer text-[.8rem]"
            onClick={() => setShowDirections(true)}
          >
            <MapPin />
            Directions
          </motion.button>
        </div>
      </footer>

      {/*RSVP Modal*/}
      <AnimatePresence>
        {showRsvp && (
          <motion.div
            className="flex flex-col w-70 gap-3 bg-white border border-[#D4AF37] p-7 rounded-md fixed z-40 shadow-md"
            exit={{ opacity: 0, y: -60 }}
            initial={{ opacity: 0, y: -60 }}
            animate={{
              opacity: showRsvp ? 1 : 0,
              y: showRsvp ? 0 : -60,
            }}
            transition={{
              duration: 0.5,
              ease: showRsvp ? easeIn : easeOut,
            }}
          >
            <h3 className="font-bold text-center">
              Kindly confirm your attendance
            </h3>
            <button
              className="bg-green-700 text-white w-full flex justify-center items-center text-[.8rem] rounded-md p-1 gap-2 cursor-pointer"
              onClick={() => setWillAttend(true)}
            >
              <Smile /> I will joyfully attend
            </button>

            {!willAttend && (
              <button className="bg-red-500 text-white w-full flex justify-center items-center text-[.8rem] rounded-md p-1 gap-2 cursor-pointer">
                <Frown /> I will regretfully decline
              </button>
            )}

            {willAttend && (
              <div className="flex flex-col justify-center items-center gap-1 p-1">
                <input
                  type="text"
                  className="p-1 border w-full"
                  placeholder="Your name"
                />
                <label htmlFor="guests"></label>
                <input
                  id="guests"
                  type="number"
                  min={1}
                  max={20}
                  value={1}
                  className="border w-full"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Leave the couple a message (optional)"
                  className="border w-full p-0.5"
                ></textarea>
                <button className="w-full bg-[#D4AF37] p-1 rounded-md cursor-pointer">
                  RSVP
                </button>
              </div>
            )}
            <span
              className="cursor-pointer absolute top-1 right-1 p-2"
              onClick={() => setShowRsvp(false)}
            >
              X
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Directions Modal */}
      <AnimatePresence>
        {showDirections && (
          <motion.div
            className="flex flex-col gap-3 w-70 bg-white border border-[#D4AF37] p-7 rounded-md fixed z-40 shadow-md"
            exit={{ opacity: 0, y: -60 }}
            initial={{ opacity: 0, y: -60 }}
            animate={{
              opacity: showDirections ? 1 : 0,
              y: showDirections ? 0 : -60,
            }}
            transition={{
              duration: 0.5,
              ease: showDirections ? easeIn : easeOut,
            }}
          >
            <h3 className="font-bold text-center">Getting There</h3>
            <a href="https://maps.app.goo.gl/KkayC5RLxfVHtT3N9" target="_blank">
              <button className="bg-[#0B1D51] text-[#D4AF37] w-full rounded-md flex justify-center items-center py-2 px-3 gap-3 ">
                <Church /> Church
              </button>
            </a>
            <a
              href="https://maps.app.goo.gl/L6ujf1RniCzPzkKy9"
              target="_blank"
            >
              <button className="bg-[#0B1D51] text-[#D4AF37] w-full rounded-md flex justify-center items-center py-2 px-3 gap-3">
                <ConciergeBell /> Reception
              </button>
            </a>
            <span
              className="cursor-pointer absolute top-1 right-1 p-2"
              onClick={() => setShowDirections(false)}
            >
              X
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        className="absolute top-1 right-[50%] translate-x-[50%]"
        id="volume"
      >
        {mute ? (
          <button
            className=" flex justify-center items-center border border-[#0B1D51] text-[#0B1D51] p-1 rounded-md cursor-pointer"
            onClick={() => setMute(!mute)}
          >
            <VolumeOff />
          </button>
        ) : (
          <button
            className="flex justify-center items-center border border-[#0B1D51] text-[#0B1D51] p-1 rounded-md cursor-pointer"
            onClick={() => setMute(!mute)}
          >
            <Volume />
          </button>
        )}
      </motion.div>

      <audio
        ref={audioRef}
        src={endlessLove}
        preload="auto"
        muted={mute}
        loop
      ></audio>
    </div>
  );
}

export default Invite;
