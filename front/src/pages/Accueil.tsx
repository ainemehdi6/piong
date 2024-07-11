import React, { useEffect, useState } from "react";
import Article from "../components/Accueil/Article";
import Tournament from "../components/Accueil/Tournament";
import Meeting from "../components/Accueil/Meeting";
import imgAccueil from "../assets/img/accueil-img.png";
import logoPiong from "../assets/images/logo-piong/logo-piong-light.svg";
import { Article as ArticleType } from "../utils/types";
import { Event as EventType } from "../utils/types";

function Accueil() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [tournaments, setTournaments] = useState<EventType[]>([]);
  const [meetings, setMeetings] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles/lasts")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));

    fetch("http://localhost:5000/api/events/upcoming/tournament")
      .then((response) => response.json())
      .then((data) => setTournaments(data))
      .catch((error) => console.error("Error fetching tournaments:", error));

    fetch("http://localhost:5000/api/events/upcoming/meeting")
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error("Error fetching meetings:", error));
  }, []);

  return (
    <>
      <div className="w-full min-h-[92vh]">
        <div className="flex h-[89vh] flex-col">
          <div className="flex flex-row justify-between w-full px-8">
            {articles.map((article) => (
              <Article key={article.id} title={article.title} createdAt={article.createdAt} image={article.image} />
            ))}
          </div>
          <div className="flex flex-row px-12 h-full">
            <div className="h-full w-2/12 flex flex-col justify-between">
              <h1>Tournament</h1>
              {tournaments.map((tournament) => (
                <Tournament
                  key={tournament.id}
                  title={tournament.title}
                  eventStartDate={tournament.eventStartDate}
                  flyer={tournament.flyer}
                />
              ))}
              <h1>Meeting</h1>
              {meetings.map((meeting) => (
                <Meeting
                  key={meeting.id}
                  title={meeting.title}
                  eventStartDate={meeting.eventStartDate}
                  flyer={meeting.flyer}
                />
              ))}
            </div>
            <div className="bg-white rounded-xl w-10/12 h-full flex flex-row justify-center">
              <div className="w-7/12 p-12 h-full flex flex-col justify-around">
                <div className="flex items-center">
                  <img className="h-8" src={logoPiong} alt="Logo Piong" />
                  <span className="pl-4">TENNIS DE TABLE POUR TOUS</span>
                </div>
                <span className="pl-8">Piong est une association de tennis de table ouverte à tous.</span>
                <span className="pl-8">Notre objectif est d'offrir un accès au tennis de table pour TOUS !</span>
                <span className="pl-8">
                  Localisée dans la métropole lilloise, notre association organise différents évènements tels que des
                  tournois ou d'autres moments de convivialité.
                </span>
              </div>
              <div className="w-5/12 h-auto flex justify-center items-center p-12">
                <img className="h-auto m-0" src={imgAccueil} alt="Accueil" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;
