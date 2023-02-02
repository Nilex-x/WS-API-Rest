# WS-API-Rest

Installation de NodeJS
===
* [Lien d'installation pour fedora](https://developer.fedoraproject.org/tech/languages/nodejs/nodejs.html)

* [Lien d'installation pour ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

Installations d'un outil
===
Insomnia est un client qui doit être télécharger pour être utiliser:
* [Insomnia](https://docs.insomnia.rest/insomnia/install)

Postman est un client et aussi un site web donc vous pouvez tester votre API sur postman il faut juste vous inscrire.
* [Postman](https://www.postman.com/)

Création d'un nouveau projet
===
Créer un nouveau dossier *my-api* puis créer votre projet npm avec cette commande:

```node
    npm init -y && touch index.js
```

Installation de Express
===
Express est une librairie qui permet de créer des points entrés sur votre Back-End.

Voilà comment install express sur votre projet:
```node
    npm install express
```

Voici un peu de documentation sur express: [Doc Express](https://expressjs.com/)

Étape 1
===

Maintenant c'est à votre tour de créer votre API donc vous aller devoir modifier le fichier index.js qui est à la racine de votre projet.

Votre but est de créer un point d'entré à la racine de votre API qui renvoie au client "Hello World !".

Voici le résultat attendu:

![Objectif](https://github.com/Nilex-x/WS-API-Rest/blob/main/Images/Step1.png)
