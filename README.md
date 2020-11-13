# Projet-Web-2020-HorseWebsite

Pour se connecter en tant qu'administrateur, il faut : 

1 - Ouvrir Intellij à partir de Projet-Web-2020-HorseWebsite-front/Back/Horse-Projet-5A-2020. 
Puis accéder à la base de donnée après avoir activer l'application "HorseProjet5A2020Application" en faisant un click droit et
en sélectionnant "run Projet5A2020Application main()". 

2 - Ouvrir un onglet dans un navigateur et écrire : http://localhost:8080/h2-console
 

3 - Créer un Administrateur avec la ligne de code suivante dans la base de donnée : 

INSERT INTO WEBSITE_ADMIN  VALUES('id', 'email', 'nom', 'prénom', 'mdp', 'numéro de téléphone');

Puis pour visualiser le remplissage de la table : 

SELECT * FROM WEBSITE_ADMIN 

4 - Maintenant, il faut activer le front à partir de VSCode dans le repertory suivant :
Projet-Web-2020-HorseWebsite-front/Front/Front-Horse-WebSite
Puis activer le serveur dans le terminal avec la commande : 
ng serve

Ensuite, pour voir votre compte, il vous suffit d'aller sur la page d'acceuil du site, 
cliquer sur le le bouton "Administrateur" et remplir le formulaire d'authentification pour pouvoir accéder à votre page. 

A partir de la page d'acceuil, vous pouvez accéder à la création de compte d'un cavalier, d'un moniteur ou d'un administrateur. 
A vous de jouer :)

