# Web_Dofus_Quest

Veuillez suivre les étapes pour pouvoir lancer l'application tranquillement 😄

1.  ## Base de données : 

    La base de données se nomme : firstBDD

    Pour la lancer il faut :

        1. la créer
        2. ouvrir un terminal dans le dossier lib du dossier hsql de base
        3. lancer la commande : java -cp hsqldb.jar org.hsqldb.server.Server --database.0 file:mydb --dbname.0 firstBDD



2. ## L'API Spring
    
    Simplement executer le fichier DofusQuestProjectApplication dans le dossier src/main/java/com.example.Dofus_Quest_Project 😉



3. ## L'application React

    Quelques étapes pour lancer l'application en local :

        1. ouvrir un terminal dans le dossier front-react du projet
        2. lancer l'application avec la commande : npm start 
        3. ouvrir un navigateur et indiquer dans l'URL 'localhost:3000' pour être rediriger vers l'applicaiton

---



## Quelques petites infos 

Lors du premier lancement de l'application les jeux de données seront directement insérés dans la base de données.
Ainsi des identifiants existeront déjà, vous pourrez par exemple utiliser les identifiants :

    * Id : Bidouche
    * Mdp : admin

### Explication de l'application 

Cette dernière est une application pour la gestion de ses quêtes sur le jeu Dofus. 
Toutes les quêtes du jeu sont sauvegardées dans la base de données et des succès sont caractérisés par plusieurs quêtes.

Vous pourrez grâce à l'application :

* Vous connecter/créer un "compte" qui caractérisera votre avancée sur un personnage
* Voir toutes les quêtes du jeu et les indiquer comme faites ou non sur votre personnage
* Voir celles que vous avez déjà réalisées
* Voir tous les succès
* Rechercher sur chacune des pages les éléments par leur niveau, nom, localisation, etc.

