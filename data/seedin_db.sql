BEGIN

INSERT INTO "categories" ("id", "name", "description", "url_image") VALUES 
(1, 'Nouveautès De La Semaine', 'Tu retrouveras ici toutes les nouvelles sorties de la semaine', 'https://www.pexels.com/fr-fr/photo/homme-jouer-technologie-debout-7915414/' ),
(2, 'Jeux Solo', 'tu cherches des jeux en solo? Tu es au bon endroit.', 'https://www.pexels.com/fr-fr/photo/homme-technologie-montre-neon-7360387/'),
(3, 'Populaires', 'Cette section regroupe les jeux les plus populaires de ces dernières années, jettes-y un oeil.', 'https://www.pexels.com/fr-fr/photo/moniteur-d-ordinateur-a-ecran-plat-3977908/'),
(4, 'Multijoueurs', 'Ici sont regroupès les jeux auxquels tu pourras jouer avec tes amis en ligne ou en local, tu trouveras sûrement ton bonheur !', 'https://www.pexels.com/fr-fr/photo/amis-hommes-etre-assis-jouer-7915520/'),
(5, 'Action', 'Si tu es du genre à tirer sur tout ce qui bouge, tu es tombé sur la bonne catégorie.', 'https://www.pexels.com/fr-fr/photo/paysage-homme-gens-femme-7047538/'),
(6,'Sport', 'Quoi de plus important que le sport? eh bien les jeux de sport tiens !', 'https://www.pexels.com/fr-fr/photo/deux-personnes-tenant-des-consoles-de-jeu-noires-442576/')

INSERT INTO "articles" ("id", "title", "description", "url_image", "media_type"  ) VALUES
(1, "Dragons Legends arrive avec un mode solo !", "Avec près d’une dizaine de millions de joueurs connectés chaque semaine,
 Dragon Legends sorti en février dernièr, fait toujours le bonheur de sa communauté. Et si jusqu’à présent les parties se déroulaient en multi, c’est 
 un tout nouveau mode qui s’apprête à faire son arrivée ingame. Plébiscité par les joueurs, le mode solo, baptisé Iron Crown 
 sera prochainement disponible dans le jeu et pour une durée limitée. 
 C’est sur les réseaux sociaux que les développeurs ont officiellement annoncé la nouvelle, dans un message retweeté plus de 20 000 fois par les internautes. 
 Une initiative qui pourrait ouvrir la voie à d’autres events temporaires, ou à la mise en place de nouveaux modes permanents. 
Car c’est bien un événement aux allures de test grandeur nature que s’apprête à déployer Axen Entertainment sur Dragons Legends. 
Sur Reddit, le community manager du studio Willy Frechette a en effet détaillé : “Pour le moment, nous allons attendre que ce nouveau 
mode soit déployé, voir ce qui se passe et quels types de retours nous obtenons. Nous reparlerons du mode Solo quand les joueurs 
auront pu le tester”. Si les retours de la communauté sont favorables, on peut donc imaginer de nouvelles initiatives similaires à l’avenir. 
Face à cette semaine un peu spéciale, les mécanismes de jeu risquent donc de changer un peu pour les joueurs, qui pourront néanmoins toujours 
se rabattre sur le classique mode trio si la nouveauté ne leur plait pas. Pour tester le mode solo, et tenter de remporter la couronne par ses propres moyens, 
rendez-vous dans quelques jours sur Dragons Legends. À noter que le jeu n’a pas encore précisé combien de joueurs pourront participer à une même 
partie solo, ni si certaines modifications de gameplay ou de personnage seront déployées pour l’occasion. 
", "https://www.pexels.com/fr-fr/photo/dragon-horntail-hongrois-a-universal-studios-3359734/"), "Article"

(2, "Clowns killer, vous ne verrez plus jamais les clowns de la même façon..", "Les studios Rekou Games ont décider de frapper fort avec ce nouveau jeu, en effet contre toute attente,
ils ont annoncés il y a quelques heures la sortie d'un nouveau jeu mélant action et horreur, le tout accompagné d'un mode histoire, et d'un mode arcade.
Si nous en savons pas beaucoup plus pour le moment, un teaser devrait sortir au courant de la soirée, une chose est sûre, malgrès que l'éditeur n'est pas un spécialiste dans 
le développement de jeux AAA, il ne nous a jamais déçu par le passé en développant une grande variétée de jeux de bonnes qualités. Restez connectés sur le blog pour plus d'infos dans les prochains jours .", "https://pixabay.com/fr/illustrations/pitre-angoissant-personnage-affiche-5842288/", "Article" ),

(3, "Zombies Shooters, est enfin sortie, préparez vos armes!", "On l'attendais depuis des mois, le voilà enfin parmis nous . Si il est souvent comparè à Call Of Duty et son mode Zombie qu'on ne présente plus,
ce dernièer n'as absolument rien à lui envier. Cette année le jeu édité par Calox nous a gâtè niveau nouveautès : un mode arcade multi-joueurs, un graphisme interessant,
et un mode histoire plein de rebondissement, bref vous l'aurez compris, en quelques heures de jeu on a pas eu le temps de s'ennuyer. le jeu idéal à offrir en période des fêtes d'Haloween.", "https://pixabay.com/fr/photos/fantaisie-sombre-craindre-2530602/",
 "Article"),

(4, "NFL Pro 2022", "Le football américain débarque sur vos écrans", "Il faut le reconnaître, pour un néophyte en football américain, Madden NFL est le genre de Goliath qui donne le vertige. A force de versions et d'ajouts, 
la simulation phare de nos cousins américains a fini par devenir de plus en plus complexe et de moins en moins accessible, un constat qui n'a pas échappé à Shoklight Sports 
et ses réseaux d'informateurs. Le leitmotiv de NFL Pro 22 ? Satisfaire tous ceux qui ne passent pas leur vie devant ESPN, tout en contenant les adeptes d'une simu pointue.
Drôle de pari.Pour un joueur occasionnel, le gain de temps est considérable : non seulement les matchs filent à toute allure (vingt minutes grand maximum), 
idéal pour les courtes sessions, et surtout on ne perd plus de temps à chercher une bonne tactique, puisque l'I.A. se charge de trouver la plus efficace et / ou la plus 
surprenante en fonction du comportement de l'adversaire sur les précédentes tentatives. En attaque, par exemple, les courses à suivre ou les passeurs privilégiés sont 
indiqués en rouge. Il suffit même de laisser appuyé sur A ou Croix pour que l'ordi prenne en main la défense tout seul. Si l'on préférera gérer soi-même les débordements 
en défense, force est de reconnaître que les choix sont souvent judicieux en attaque. L'ordi n'hésitera pas à privilégier les courses si l'équipe tend à avoir l'avantage 
sur le plan physique, par exemple. En cas de désaccord avec l'I.A., le joueur pourra toujours improviser en dernier recours avec des audibles. Restez connectés, l'article test arrive très bientôt pour votre plus grand plaisir !",
"https://pixabay.com/fr/illustrations/strat%c3%a8ge-football-am%c3%a9ricain-sport-4020388/", "Article"),

(5, "Skull Mountaine 2, le jeu multi à essayer à tout prix !", "Si pour le précédent opus le jeu était concentré sur un mode solo, cette fois-ci Nacon Interactive a écouté son public
en mettant en avant le jeu en équipe pour ce nouvel opus. Et cette fois les nouveautés sont à la hauteur des attentes! si on avait pu souligner quelques points négatifs pour 
le 1er chapitre de la licence, pas mal de ces points on étés corrigès : une histoire totalement remodelé mélangeant aventure et stratégie, un gameplay plus facile à prendre en main, et ce fameux mode coop tant attendu
en ravirons plus d'un ! Le jeu est déjà en vente , mais depêchez-vous : premier arrivé premier servi ! ", "https://pixabay.com/fr/illustrations/cr%c3%a2ne-montagnes-mer-bateau-ciel-2189889/", "Article"),

(6, "Among Us arrive enfin avec une nouvelle Map! ", "Among Us, l'un des phénomènes de 2020, va recevoir dans un futur proche une nouvelle mise à jour majeure. 
Bien que cette dernière n'a toujours pas de date de sortie, Innersloth, le studio derrière le jeu, vient de dévoiler l'un de ces nombreux ajouts. Depuis 20h ce soir, 
la mise à jour Airship est accessible à tous les joueurs et ajoute donc une quatrième carte au jeu. Il s'agit de la plus grande carte d'Among Us à ce jour, et elle 
s'accompagne de nouveaux éléments de gameplay. Tout d'abord, les joueurs peuvent choisir leur zone d'apparition, et ainsi sélectionner l'une des 17 pièces de la carte 
The Airship. Les joueurs peuvent également y accomplir de nouvelles tâches, dont le polissage de bijoux ou encore l'expulsion des ordures. 
Notons par ailleurs l'ajout d'échelles de plates-formes mobiles et l'apparition d'un nouveau pack payant d'éléments cosmétiques, avec des tenues et des chapeaux. 
InnerSloth indique à ce sujet que chaque nouvelle tenue du pack dispose de sa propre animation de mise à mort. Concernant le système de compte, il est désormais activé, 
et accompagné d'un nouveau code de conduite, consultable sur leurs site officiel. ", "https://pixabay.com/fr/illustrations/parmi-nous-%c3%a9quipier-imposteur-6081990/", "Article"),

(7, "Among Us, le jeu incontournable de l'année !", "Développé par la petite équipe d’InnerSloth, Among Us est paru dans la plus grande discrétion en juin 2018 sur PC, 
iOS et Android. Il faudra finalement attendre deux ans pour que le jeu se forge une place de choix dans les classements Twitch et Steam. Son concept convivial et accessible
en fait un passe-temps prisé du confinement mondial. Mais sa popularité est-elle réellement légitime ? Dans la veine des Loups Garous de Thiercelieux, Among Us repose sur 
un concept tout aussi simple : à bord d’un vaisseau, un joueur (ou plus) désigné imposteur est chargé de tuer le reste de l’équipage, occupé à réaliser des tâches dans 
différentes pièces. À chaque corps sans vie retrouvé, ou lorsque les suspicions s’alourdissent, une réunion peut être lancée afin de voter contre le(s) coupable(s). 
Jouable en ligne ou en local, et de quatre à 15 joueurs, la petite production d’InnerSloth a tout d’un titre auquel on accepterait volontiers de participer lors d’un 
apéro entre amis.
Disponible à la fois sur PC et sur mobile, il a l'avantage d’être cross-platform. Néanmoins, s'il est doté de commandes particulièrement accessibles sur PC, 
les déplacements seront largement moins confortables depuis l'écran tacticle d'un appareil mobile. Notons enfin des graphismes des plus basiques et un poids plume qui 
permettent à n’importe quelle configuration de s’y essayer.", "https://pixabay.com/fr/illustrations/parmi-nous-jeu-mod%c3%a8le-astronaute-5912927/", "Article"),

(8, "Minecraft, le jeu qu'on ne présente plus", "Jeu bac à sable indépendant et pixelisé dont le monde infini est généré aléatoirement, Minecraft permet au joueur de récolter divers matériaux, 
d'élever des animaux et de modifier le terrain selon ses choix, en solo ou en multi (via des serveurs). Il doit également survivre en se procurant de la nourriture et en 
se protégeant des monstres qui apparaissent la nuit et dans des donjons. Il peut également monter de niveau afin d'acheter des enchantements. Son mode multi vous permetteras
de laisser libre cours à votre imagination avec d'infinies possibilités", "https://pixabay.com/fr/illustrations/minecraft-ch%c3%a2teau-rendre-jeu-vid%c3%a9o-529459/", "Article");


--La table de liaison entre les articles et les catégories correspondantes.
INSERT INTO "articles_has_categories" ("articles_id", "categories_id") VALUES
(1, 1 2 4),
(2,1 2 5),
(3, 1 2 4 5),
(4, 1 6 4 2),
(5, 1 2 4),
(6, 1 3 4),
(7,3 4),
(8, 2 3 4);

--La table d'utilisateurs
INSERT INTO "users" ("id", "name","email","birth_date", "password","url_picture") VALUES
(1, "Alfred", "a.martin@gamer.com", "08/12/1988", "12345", "https://pixabay.com/fr/vectors/homme-personne-avatar-visage-156584/"),
(2, "Gaara", "g.chunin@gamer.com","12/09/2002", "12345", "https://pixabay.com/fr/illustrations/naruto-ninja-gar%c3%a7on-jeune-gaara-6383641/"),
(3,"Selena", "s.lorano@gamer.com","10/02/1999", "12345", "https://pixabay.com/fr/illustrations/femme-beaut%c3%a9-dessin-anim%c3%a9-avatar-6616607/"),
(4,"Valérie", "v.prune@gamer.com","13/07/2000", "12345", "https://pixabay.com/fr/vectors/avatar-dessin-anim%c3%a9-les-yeux-femme-2026510/");


COMMIT