import Markdown from "react-markdown";
import img from "../assets/img/placeholder.jpg";
import P from "../components/Paragraphs/P";
import H1 from "../components/Headings/H1";
import H2 from "../components/Headings/H2";
import H3 from "../components/Headings/H3";
import H4 from "../components/Headings/H4";
import H5 from "../components/Headings/H5";
import H6 from "../components/Headings/H6";
import UL from "../components/Lists/UL";

const markdown = `Le ping-pong, malgré son apparente simplicité, est un sport exigeant qui demande précision, stratégie et rapidité d'exécution. Même les joueurs expérimentés peuvent parfois tomber dans des pièges courants. 
Voici 5 erreurs fréquemment observées et comment les corriger :

## 1. Positionnement du corps :

* **Erreur :** Une mauvaise posture, le poids mal réparti, un manque de mobilité des hanches et des épaules.
* **Correction :** 
    * Maintenez une position stable avec les pieds légèrement écartés, le poids du corps centré.
    * Gardez le dos droit et les genoux fléchis.
    * Soyez flexible et prêt à vous déplacer rapidement en utilisant vos hanches et vos épaules.

## 2. Contact avec la balle :

* **Erreur :**  Un contact trop tôt ou trop tard, un bras rigide, un mouvement de raquette inefficace.
* **Correction :** 
    * Déplacez votre raquette vers la balle plutôt que de la frapper.
    * Concentrez-vous sur un contact précis au milieu de la balle.
    * Gardez votre bras souple et utilisez vos poignets pour générer de la puissance.

## 3. Service :

* **Erreur :**  Un service trop faible, trop haut, ou non précis.
* **Correction :** 
    * Développez une technique de service efficace avec une bonne rotation et une trajectoire imprévisible.
    * Entraînez-vous à servir dans différents endroits du terrain.
    * Adaptez votre service à votre adversaire et à la situation du jeu.

## 4. Retour de balle :

* **Erreur :**  Un retour de balle trop lent, trop puissant, ou sans direction.
* **Correction :** 
    * Analysez le service de votre adversaire et anticipez son prochain coup.
    * Adaptez votre retour en fonction de la vitesse et de la rotation de la balle.
    * Concentrez-vous sur la précision et la trajectoire du retour.

## 5. Gestion du stress :

* **Erreur :**  Se laisser submerger par la pression, perdre concentration et faire des erreurs impulsives.
* **Correction :** 
    * Restez calme et concentré sur chaque point.
    * Visualisez vos coups et votre stratégie.
    * Prenez des pauses si nécessaire pour vous recentrer.


En travaillant sur ces erreurs et en vous entraînant régulièrement, vous pourrez améliorer votre jeu de ping-pong et atteindre un niveau supérieur. N'oubliez pas que la pratique et la patience sont les 
clés du succès.`;

function Article() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-[40vh] my-8 flex justify-center">
          <img className="h-full w-auto rounded-xl" src={img} alt="" />
        </div>
        <div className="px-24 pb-12">
          <H1>Les 5 erreurs les plus courantes en ping-pong et comment les corriger</H1>
          <Markdown
            components={{
              p: P,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              ul: UL,
            }}
          >
            {markdown}
          </Markdown>
        </div>
      </div>
    </>
  );
}

export default Article;
