---
marp: true
theme: uncover
class: invert
style: |
  a {
      color: #ff7f00;
  }

  strong {
      color: #ff7f00;
  }
---

<!-- _footer: EL AINE El Mehdi - THOMAS Robin - BONAL Alexis -->

# Cahier des charges

![width:500](logo-piong.svg)

Tennis de table pour tous

---

<!-- paginate: true -->

## L'association

Association de tennis de table ouverte à tous.

Métropole lilloise  

Organisation tournois et rassemblement conviviaux 

---

## Référencement

Nom de domaine : **[www.piong.fr](www.piong.fr)**

Mots clés : _piong, tennis de table, Lille, pongiste, tournois, championnat_

---

## Organisation

Les membres du groupe sont tous développeurs et développeront leurs fonctionnalités.

Chacun devra s'assurer du respect de certains points :

- **El Mehdi** : Développeur Back-End
- **Robin** : Développeur Front-End
- **Alexis** : Développeur Full-Stack - Responsable Infra

---

## Charte graphique

Couleur Principale : **Orange** (#ff7f00)
Couleur Secondaire : **Gris Foncé** (#202228)
Couleur Fond : **Gris Clair** (#D9DBE0)
---

## Page - Accueil

- La prochaine **compétition**
- Les **4** derniers articles
- Le prochain **rassemblement convivial**
- Présentatation associassion

---

## Page - Articles

- 10 Articles les plus récents

Chargement des plus Anciens au scroll.

---

## Page - Évènements

Liste des évènements par type

Deux sous pages pour regrouper :

- les compétitions
- les rassemblements

---

## Page - Contact

Page de contact pour
**contacter l'association**

---

## Page - Connexion

Page regroupant **inscription** et **connexion**

---

## Page - Administration

Panel offrant une gestion sur :

- les **articles**
- les **évènements**
- les **utilisateurs**

---

## Fonctionnalité - Articles

|                   | Publique | Membres | Administrateur |
| ----------------- | -------- | ------- | -------------- |
| Voir              | **X**    | **X**   | **X**          |
| Réagir, commenter |          | **X**   | **X**          |
| Rédiger           |          |         | **X**          |

---

## Fonctionnalité - Évènements

|            | Publique | Membres | Administrateur |
| ---------- | -------- | ------- | -------------- |
| Voir       | **X**    | **X**   | **X**          |
| Participer |          | **X**   | **X**          |
| Ajouter    |          |         | **X**          |

---

## Fonctionnalité - Authentification

|                         | Publique | Membres | Administrateur |
| ----------------------- | -------- | ------- | -------------- |
| Inscrire                | **X**    |         |                |
| Connecter               |          | **X**   | **X**          |
| Valider une inscription |          |         | **X**          |

---

## Entité - Article

| **Article**            |
| ---------------------- |
| Titre                  |
| Image mise en avant    |
| Catégorie (Facultatif) |
| Auteur                 |
| Contenu (MD)           |

---

## Entité - Évènement

| **Évènement**               |
| --------------------------- |
| Titre                       |
| Flyer mise en avant         |
| Compétition / Rassemblement |
| Contenu (MD)                |

---

## Entité - Utilisateur

| **Utilisateur**      |
| -------------------- |
| email (login)        |
| Mot de passe (hashé) |
| Rôle                 |
| Nom                  |
| Prénom               |
| Tél                  |

---

## Entité - Compétiteur

| **Compétiteur**  |
| ---------------- |
| _...Utilisateur_ |
| Num. License     |

---

## Outils

- **Discord**
- **Github**

---

## Pile technique

Nous utiliserons **TypeScript** pour le projet

| **Backend**        | **Frontend** |
| ------------------ | ------------ |
| Node               | Vite         |
| Express            | React        |
| MongoDB + Mongoose | Tailwind             |
