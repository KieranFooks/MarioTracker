# recrutementing1-3ie-2021-kieran.fooks

Projet de **kieran.fooks** pour le recrutement de 3IE.

**Application web réalisée avec l'aide de Angular 11.0.5.**

## Features
### Elements obligatoires
[x] - Consultation de l'historique des courses

[x] - Consultation du classement des joueurs

[x] - Création d'une nouvelle course

### Elements additionnels
[x] - Comparaison entre deux joueurs

[x] - Score Elo dans le classement des joueurs

[x] - Création de course avec plus de 4 joueurs (jusqu'à 12, limite du jeu)

[x] - Consultation des statistiques complètes d'un joueur

## Installation

Pré-requis : [npm](https://www.npmjs.com/get-npm)

1. Installer (dans ./mario/) :
```
npm install
```

### Serveur de développement 
2. Lancer le serveur (serveur de dev) :
```
npm start
```
  ou pour ouvrir automatiquement un onglet dans le navigateur par défaut (et passer l'étape 3)
```
npm start -o
```

3. Se connecter à l'adresse donné par le serveur à l'aide d'un navigateur (ex: localhost:4200)

### Lancer un serveur http de production localement

2. Build :
```
npm build -- --prod
```

3. Installer http-server de npm globalement :
```
npm install http-server -g
```

4. Lancer http-server avec le build et le proxy pour les requêtes :
```
http-server dist/mario -P https://mariokart-recrutement.3ie.fr .
```

## Commentaires
### Général
L'application est divisée en 5 parties, naviguables à l'aide de tab présents en haut de la page.

### Historique des courses
Les courses sont affichées dans une liste à gauche. Lors de la séléction d'un élément par l'utilisateur, le classement des joueurs de la course apparaît avec la vignette, le nom du circuit et le cylindre des véhicules.

### Classement des joueurs
Les joueurs sont classés dans un tableau avec divers informations: le nombre de courses courues, le ratio, le score et le Elo (ajouté par un appel à api/EloRankings).

### Ajout d'une nouvelle course
L'utilisateur peut sélectionner 4 participants, leurs positions respectives, un circuit ainsi que la taille des cylindres des véhicules afin de créer une nouvelle course qui sera sauvegardé. Il ne peut soumettre de course avant d'avoir séléctionné au moins un joueur avec sa position, un circuit et un moteur, le bouton d'envoi étant désactivé. De plus, si un doublon de joueur est présent ou qu'une place est occupé par deux joueurs, l'utilisateur recevra une notification (snackbar de Angular material) le prévenant de l'erreur.

Si les données rentrées sont valides, le bouton "Submit" s'active, et l'utilisateur reçoit une notification lorsque l'envoi est confirmé. 

### Comparaison de joueurs (Bonus)
L'utilisateur sélectionne deux joueurs qu'il souhaite comparer et obtient différentes statistiques retournées par un appel à api/Players/{id1}/Compare/{id2}. Ceci inclut un historique des courses.

### Statistiques d'un joueur
Un sélecteur permet à l'utilisateur de consulter les statistiques d'un joueur. Ceci inclut l'historique des courses, une comparaison avec tous les autres joueurs ainsi que des statistiques par circuit.
