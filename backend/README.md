# projet-tutore-s6

## points d'API à créer

- getAll()                          # retourne tous les jeux
- [get-with-search-parameter(s)]    # retourne les jeux en fonction des paramêtres de la recherche
- getGame(id)                       # retourne les info d'un jeu unique (avec steam_appid par exemple)

## Changelog

Version 1.0 (initial version)
- Création skeleton projet Symfony
- Ajout elasticsearch-php (https://github.com/elastic/elasticsearch-php)
- Ajout templates/main/homepage.html.twig
- Ajout Controller/MainController.php + code simple d'exemple de récupération d'information (ElasticSearch) via une variable

Version 1.1
- Ajout API recherche liste de jeux (paramètre: nom de jeu)

Version 1.2 
- Séparation API gameFiche et searchGame

Version 1.3
- Modification des APIs dû au changement du logstash.conf

Version 1.4
- Ajout API Pagination

Version 1.5
- Ajout header-image API gameFiche

Version 1.6
- Ajout API recherche avancée

Version 1.7 (current version)
- Changement affichage informations Fiche.js
- Fix error 405
