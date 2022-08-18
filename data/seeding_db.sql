BEGIN;

INSERT INTO "categories" ( "name", "description", "url_image") VALUES 
( 'Nouveautès De La Semaine', 'Tu retrouveras ici toutes les nouvelles sorties de la semaine', 'https://images.pexels.com/photos/7915414/pexels-photo-7915414.jpeg' ),
( 'Jeux Solo', 'tu cherches des jeux en solo? Tu es au bon endroit.', 'https://images.pexels.com/photos/7360387/pexels-photo-7360387.jpeg'),
( 'Populaires', 'Cette section regroupe les jeux les plus populaires de ces dernières années, jettes-y un oeil.', 'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg'),
( 'Multijoueurs', 'Ici sont regroupès les jeux auxquels tu pourras jouer avec tes amis en ligne ou en local, tu trouveras sûrement ton bonheur !', 'https://images.pexels.com/photos/7862338/pexels-photo-7862338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
( 'Action', 'Si tu es du genre à tirer sur tout ce qui bouge, tu es tombé sur la bonne catégorie.', 'https://images.pexels.com/photos/6498960/pexels-photo-6498960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
( 'Sport', 'Quoi de plus important que le sport? eh bien les jeux de sport tiens !', 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

INSERT INTO "articles" ("title", "description","resume", "url_image", "media_type", "categories_id" ) VALUES
('Dragons Legends arrive avec un mode solo !', 'Avec près d’une dizaine de millions de joueurs connectés chaque semaine,
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
 partie solo, ni si certaines modifications de gameplay ou de personnage seront déployées pour l’occasion. Au final, il apparaît donc que Dragons Legends s''inscrit 
 en vecteur d''une nouvelle approche du RPG. Innovant, passionnant, riche et sincèrement profond, il mêle à l''intensité de l''action une trame scénaristique intéressante 
 et un approfondissement psychologique majeur. Joyau sombre à ne pas mettre entre toutes les mains, il brûle d''une chaleur jusqu''alors inconnue.Un nouveu porte-étendard 
 du jeu de rôle japonais est sur le point de naître. Certains détesteront, d''autres se laisseront submerger par un choc rafraîchissant et salvateur, qui les conduira dans 
 une terra incognita. Sa sera à vous de choisir si le pacte en vaut la peine.','C’est sur les réseaux sociaux que les développeurs ont officiellement annoncé la nouvelle, dans un message retweeté plus de 20 000 fois par les internautes. 
 Une initiative qui pourrait ouvrir la voie à d’autres events temporaires, ou à la mise en place de nouveaux modes permanents. 
 Car c’est bien un événement aux allures de test grandeur nature que s’apprête à déployer Axen Entertainment sur Dragons Legends. 
 Sur Reddit, le community manager du studio Willy Frechette a en eff...', 'https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg', 'Article', 1), 

( 'Clowns killer, vous ne verrez plus jamais les clowns de la même façon..', 'Les studios Rekou Games ont décider de frapper fort avec ce nouveau jeu, en effet contre toute attente,
ils ont annoncés il y a quelques heures la sortie d''un nouveau jeu mélant action et horreur, le tout accompagné d''un mode histoire, et d''un mode arcade.
Si nous en savons pas beaucoup plus pour le moment, un teaser devrait sortir au courant de la soirée, une chose est sûre, malgrès que l''éditeur n''est pas un spécialiste dans 
le développement de jeux AAA, il ne nous a jamais déçu par le passé en développant une grande variétée de jeux de bonnes qualités. ce jeu monde-ouvert multijoueurs du genre Zombie Survival Horror 
vous donne le contrôle d''un survivant non armé qui ne possède qu''un pantalon, un t-shirt et une lampe torche accompagnée de sa pile. Le survivant doit alors se rendre à 
l''intérieur d''un pays infesté de clowns zombies pour trouver des armes, de la nourriture et tout ce dont il aura besoin pour survivre dans ce monde désormais hostile.
Bien que ce jeu soit multijoueurs, chaque survivant est seul et n''a aucun allié. Il est tout de même possible de s''allier à d''autres joueurs, mais il faut rester très 
méfiant et attentif. L''objectif principal est de rester en vie. Le joueur commence avec des vêtements basiques, un peu de nourriture ainsi qu''un chiffon pouvant servir 
de bandage et doit explorer Chernarus, un État fictif dans lequel les habitants ayant contracté un virus ont été transformés en clowns zombifiés. Il doit visiter des points
d''intérêt tels que des villes, villages, fermes et bases militaires pour y trouver de l''eau, de la nourriture, des armes, des munitions, des médicaments et de l''équipement
qui l''aideront à survivre. Le matériel trouvé n''est pas toujours utile ou utilisable directement par le joueur (munitions inadaptées, chargeurs vides, boîte de conserve 
nécessitant un ouvre boîte...). Pour subvenir à leurs besoins vitaux, les joueurs peuvent aussi chasser des animaux et cultiver légumes pour ensuite les cuisiner.
Le personnage est régi par des statistiques : la quantité de sang, les points de vie, le niveau de faim, le niveau de soif et la température corporelle. Un joueur qui a 
faim, soif ou qui a trop froid verra son sang et ses points de vie baisser jusqu''à mener à la mort.Les développeurs prévoient d''implémenter des indices audio ou animation 
pour vous indiquer votre faim, soif, fatigue, maladie, la réintroduction d''un système de karma, et un système de gestion des fractures amélioré.Ils envisagent aussi 
l''ajout de véhicules deux roues et aériens. La possibilité d''avoir des animaux de compagnie a aussi été évoqué.','Les studios Rekou Games ont décider de frapper fort avec ce nouveau jeu, en effet contre toute attente,
ils ont annoncés il y a quelques heures la sortie d''un nouveau jeu mélant action et horreur, le tout accompagné d''un mode histoire, et d''un mode arcade.
Si nous en savons pas beaucoup plus pour le moment, un teaser devrait sortir au courant de la soirée, une chose est sûre, malgrès que l''éditeur n''est pas un spécialiste dans 
le dév...', 'https://cdn.pixabay.com/photo/2020/12/18/15/08/clown-5842288_960_720.jpg', 'Article', 2 ),

( 'Zombies Shooters, est enfin sortie, préparez vos armes!', 'On l''attendais depuis des mois, le voilà enfin parmis nous . Si il est souvent comparè à Call Of Duty et son mode Zombie qu''on ne présente plus,
ce dernièr n''as absolument rien à lui envier. Cette année le jeu édité par Calox nous a gâtè niveau nouveautès : un mode arcade multi-joueurs, un graphisme interessant,
et un mode histoire plein de rebondissement, bref vous l''aurez compris, en quelques heures de jeu on a pas eu le temps de s''ennuyer. le jeu idéal à offrir en période des 
fêtes d''Haloween.Proposé sur PC, Xbox one et PlayStation 4, ce jeu d''action-aventure horreur vous propose de prendre le contrôle d''un joueur qui se réveille dans une 
chambre d''hôtel sur une île paradisiaque où tous les humains ont été transformés en zombies à cause d''un virus. L''objectif est de rester en vie en trouvant des armes 
sur l''île pour combattre les huit types de zombies (contaminé, assassin, kamikaze ou encore boucher).
Ce jeu de tir à la première personne a des côtés de RPG puisque le personnage peut monter en niveau, améliorer ses armes, les réparer ou en créer de nouvelles et répartir 
des points de compétences. Basé sur le solo, il est tout de même possible de jouer jusqu''à quatre en réseau local. Pour progresser dans le jeu, augmenter de niveau, récupérer
de l''argent, des armes ou des plans servant à leur modification, le joueur pourra accomplir de nombreuses quêtes données par les différents personnages non-joueurs.','Cette année le jeu édité par Calox nous a gâtè niveau nouveautès : un mode arcade multi-joueurs, un graphisme interessant,
et un mode histoire plein de rebondissement, bref vous l''aurez compris, en quelques heures de jeu on a pas eu le temps de s''ennuyer. le jeu idéal à offrir en période des 
fêtes d''Haloween.Proposé sur PC, Xbox one et PlayStation 4, ce jeu d''action-aventure hor...', 'https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_960_720.jpg', 'Article', 5),

( 'NFL Pro 2022 , Le football américain débarque sur vos écrans', 'Il faut le reconnaître, pour un néophyte en football américain, Madden NFL est le genre de Goliath qui donne le vertige. A force de versions et d''ajouts, 
la simulation phare de nos cousins américains a fini par devenir de plus en plus complexe et de moins en moins accessible, un constat qui n''a pas échappé à Shoklight Sports 
et ses réseaux d''informateurs. Le leitmotiv de NFL Pro 22 ? Satisfaire tous ceux qui ne passent pas leur vie devant ESPN, tout en contenant les adeptes d''une simu pointue.
Drôle de pari.Pour un joueur occasionnel, le gain de temps est considérable : non seulement les matchs filent à toute allure (vingt minutes grand maximum), 
idéal pour les courtes sessions, et surtout on ne perd plus de temps à chercher une bonne tactique, puisque l''I.A. se charge de trouver la plus efficace et / ou la plus 
surprenante en fonction du comportement de l''adversaire sur les précédentes tentatives. En attaque, par exemple, les courses à suivre ou les passeurs privilégiés sont 
indiqués en rouge. Il suffit même de laisser appuyé sur A ou Croix pour que l''ordi prenne en main la défense tout seul. Si l''on préférera gérer soi-même les débordements 
en défense, force est de reconnaître que les choix sont souvent judicieux en attaque. L''ordi n''hésitera pas à privilégier les courses si l''équipe tend à avoir l''avantage 
sur le plan physique, par exemple. En cas de désaccord avec l''I.A., le joueur pourra toujours improviser en dernier recours avec des audibles. Si vous n''êtes pas un minimum familier
avec les règles du foot américain, alors il y a de grandes chances pour que NFL Pro 22 vous laisse sur le carreau. Il n''y a aucun moyen de comprendre voire d’apprendre
les touches, si ce n’est un simple menu expliquant à quoi sert telle ou telle touche. Alors en jeu, n''en parlons même pas. Le titre vous propose d''adopter une stratégie 
parmi une sélection. Là aussi, le joueur lambda optera pour une stratégie au hasard, sans savoir ce vers quoi elle pourrait aboutir. Toutefois, pour le joueur habitué aux 
règles de la NFL, le jeu procurera une vraie sensation de plaisir. Les matchs sont, par exemple, une vraie réussite. Les joueurs répondent parfaitement bien et la sensation
procurée lors d''un touchdown ou des points récoltés est incroyable. Sur ce point, NFL Pro 22  reste une valeur sûre, et difficile à l''heure actuelle de faire mieux. 
On pourrait en revanche pester sur le fait que les fonctionnalités de la DualSense ne soient pas exploitées sur PS5, mais ce serait vraiment pour chercher la petite bête.','Madden NFL est le genre de Goliath qui donne le vertige. A force de versions et d''ajouts, 
la simulation phare de nos cousins américains a fini par devenir de plus en plus complexe et de moins en moins accessible, un constat qui n''a pas échappé à Shoklight Sports 
et ses réseaux d''informateurs. Le leitmotiv de NFL Pro 22 ? Satisfaire tous ceux qui ne passent pas leur vie devant ESPN, tout en contenant les adeptes d''une simu pointue.
Drôle de pari.Pour un joueur occasionnel, le gain de temps est considérable : non seulement les matchs filent à toute allure (vingt minutes grand maximum), 
idéal pour les courtes sessions, et surtout on ne perd plus de temps à chercher une bonne tactique, puisque l''I.A. se charge de tro...','https://cdn.pixabay.com/photo/2019/02/25/19/44/quarterback-4020388_960_720.jpg', 'Article', 6),

( 'Skull Mountaine 2, le jeu multi à essayer à tout prix !', 'Si pour le précédent opus le jeu était concentré sur un mode solo, cette fois-ci Nacon Interactive a écouté son public
en mettant en avant le jeu en équipe pour ce nouvel opus. Et cette fois les nouveautés sont à la hauteur des attentes! si on avait pu souligner quelques points négatifs pour 
le 1er chapitre de la licence, pas mal de ces points on étés corrigès : une histoire totalement remodelé mélangeant aventure et stratégie, un gameplay plus facile à prendre en main, et ce fameux mode coop tant attendu
en ravirons plus d''un ! Le jeu est déjà en vente , mais depêchez-vous : premier arrivé premier servi !, les producteurs ont également prévus de mettre en vente quelques DLC pour parfaire l''aventure et améliorer encore plus l''expérience utilisateur. ','cette fois-ci Nacon Interactive a écouté son public
en mettant en avant le jeu en équipe pour ce nouvel opus. Et cette fois les nouveautés sont à la hauteur des attentes! si on avait pu souligner quel...', 'https://cdn.pixabay.com/photo/2017/03/30/22/28/skull-2189889_960_720.jpg', 'Article', 2),

( 'Among Us arrive enfin avec une nouvelle Map! ', 'Among Us, l''un des phénomènes de 2020, va recevoir dans un futur proche une nouvelle mise à jour majeure. 
Bien que cette dernière n''a toujours pas de date de sortie, Innersloth, le studio derrière le jeu, vient de dévoiler l''un de ces nombreux ajouts. Depuis 20h ce soir, 
la mise à jour Airship est accessible à tous les joueurs et ajoute donc une quatrième carte au jeu. Il s''agit de la plus grande carte d''Among Us à ce jour, et elle 
s''accompagne de nouveaux éléments de gameplay. Tout d''abord, les joueurs peuvent choisir leur zone d''apparition, et ainsi sélectionner l''une des 17 pièces de la carte 
The Airship. Les joueurs peuvent également y accomplir de nouvelles tâches, dont le polissage de bijoux ou encore l''expulsion des ordures. 
Notons par ailleurs l''ajout d''échelles de plates-formes mobiles et l''apparition d''un nouveau pack payant d''éléments cosmétiques, avec des tenues et des chapeaux. 
InnerSloth indique à ce sujet que chaque nouvelle tenue du pack dispose de sa propre animation de mise à mort. Concernant le système de compte, il est désormais activé, 
et accompagné d''un nouveau code de conduite, consultable sur leurs site officiel.l est à noter que sur cette nouvelle carte, l''alarme de sabotage est légèrement 
différente et pourrait vous perturber lors de vos premières parties. De plus, vous allez pouvoir désormais choisir la pièce où vous allez réapparaître après un meeting
d''urgence.','Innersloth, le studio derrière le jeu, vient de dévoiler l''un de ces nombreux ajouts. Depuis 20h ce soir, 
la mise à jour Airship est accessible à tous les joueurs et ajoute donc une quatrième carte au jeu. Il s''agit de la plus grande carte d''Among Us à ce jour, et elle 
s''accompagne de nouveaux éléments de gameplay. Tout d''abord, les joueurs peuvent choisir leur zone d''apparition, et ainsi sélectionner l''une des 17 pièces de la carte 
The Airship. Les joueurs peuvent également y accomplir de nouvelles tâches, dont le polis...', 'https://cdn.pixabay.com/photo/2021/01/13/00/31/among-us-5912927_960_720.jpg', 'Article', 3),

( 'Among Us, le jeu incontournable de l''année !', 'Développé par la petite équipe d''InnerSloth, Among Us est paru dans la plus grande discrétion en juin 2018 sur PC, 
iOS et Android. Il faudra finalement attendre deux ans pour que le jeu se forge une place de choix dans les classements Twitch et Steam. Son concept convivial et accessible
en fait un passe-temps prisé du confinement mondial. Mais sa popularité est-elle réellement légitime ? Dans la veine des Loups Garous de Thiercelieux, Among Us repose sur 
un concept tout aussi simple : à bord d''un vaisseau, un joueur (ou plus) désigné imposteur est chargé de tuer le reste de l''équipage, occupé à réaliser des tâches dans 
différentes pièces. À chaque corps sans vie retrouvé, ou lorsque les suspicions s''alourdissent, une réunion peut être lancée afin de voter contre le(s) coupable(s). 
Jouable en ligne ou en local, et de quatre à 15 joueurs, la petite production d''InnerSloth a tout d''un titre auquel on accepterait volontiers de participer lors d''un 
apéro entre amis.
Disponible à la fois sur PC et sur mobile, il a l''avantage d’être cross-platform. Néanmoins, s''il est doté de commandes particulièrement accessibles sur PC, 
les déplacements seront largement moins confortables depuis l''écran tacticle d''un appareil mobile. Notons enfin des graphismes des plus basiques et un poids plume qui 
permettent à n''importe quelle configuration de s''y essayer. L''objectif des équipiers est d''accomplir toutes les tâches avant d''être assassinés, un objectif secondaire 
étant de trouver et d''éliminer les imposteurs (Pour ça il a des systèmes de sécurité comme des caméras ou une carte permettant de visualiser l''emplacement de chaque 
joueur). Le but des imposteurs est de tuer tous les membres d''équipage et en assassiner suffisamment pour que le nombre d''imposteurs soit égal au nombre de membres 
d''équipage, soit en les tuant directement, soit par sabotage. Le but des fantômes est d''aider leurs coéquipiers vivants. Lorsqu''un imposteur effectue un sabotage, il y a 
soit une conséquence immédiate (telle que l''extinction de toutes les lumières), soit un compte à rebours au cours duquel le sabotage doit être réparé, sinon tous les 
membres d''équipage meurent. Les sabotages peuvent être résolus par les membres d''équipage de différentes manières selon le sabotage effectué. Si un joueur trouve un 
cadavre, il peut le signaler, ce qui mènera à une réunion de groupe où les joueurs discutent de qui, selon eux, est un imposteur, sur la base des preuves entourant le 
meurtre. Si un vote à la majorité relative est atteint, la personne choisie est éjectée de la carte, meurt, et il est possible de révéler si elle était ou non un imposteur.
Les joueurs peuvent également appeler une « réunion d''urgence » en appuyant sur un bouton de la carte à tout moment, le nombre de réunions d''urgence convoquées par une 
seule personne étant limité. Le jeu peut être joué avec un chat vocal ou un chat textuel, dans lequel les joueurs ne peuvent communiquer que pendant les réunions, et 
seulement s''ils sont vivants, bien que les fantômes puissent parler entre eux. Diverses options de personnalisation des aspects du jeu comme la portée de vision et les 
réunions d''urgence sont disponibles avant chaque partie.','Développé par la petite équipe d''InnerSloth, Among Us est paru dans la plus grande discrétion en juin 2018 sur PC, 
iOS et Android. Il faudra finalement attendre deux ans pour que le jeu se forge une place de choix dans les classements Twitch et Steam. Son concept convivial et accessible
en fait un passe-temps prisé du confinement mondial. Mais sa popularité est-elle réellement légitime ? Dans la veine des Loups Garous de Thiercelieux, Among Us repose sur 
un concept tout aussi simple : à bord d''un vaisseau, un joueur (ou plus) désigné imposteur est chargé de tuer le reste de l''équipage, occupé à réaliser des tâches dans 
différentes pièces. À chaque corps sans vie retrouvé, ou lorsque les suspicions s''alourdisse...', 'https://cdn.pixabay.com/photo/2021/03/09/14/20/among-us-6081990_960_720.jpg', 'Article', 3),

( 'Minecraft, le jeu qu''on ne présente plus', 'Jeu bac à sable indépendant et pixelisé dont le monde infini est généré aléatoirement, Minecraft permet au joueur de récolter divers matériaux, 
d''élever des animaux et de modifier le terrain selon ses choix, en solo ou en multi (via des serveurs). Il doit également survivre en se procurant de la nourriture et en 
se protégeant des monstres qui apparaissent la nuit et dans des donjons. Il peut également monter de niveau afin d''acheter des enchantements. Son mode multi vous permetteras
de laisser libre cours à votre imagination avec d''infinies possibilités.Le joueur, par défaut droitier, peut utiliser ses deux mains, mais seule la main de préférence peut effectuer des actions 
telles que combattre, casser ou poser des blocs. Il possède un inventaire de 27 cases, chacune pouvant contenir jusqu''à 64 objets d''un même type (un stack) 17, ainsi qu''une barre d''accès rapide
de neuf cases (l''inventaire rapide), en plus d''une case pour la seconde main. Dans son inventaire, il peut fabriquer des objets grâce à une grille de fabrication de deux cases sur deux (ne permettant 
pas de fabriquer tous les objets) ou enfiler une armure. Bien que le jeu ne se termine jamais à proprement parler, il possède une fin officielle : il s''agit d''un long dialogue entre deux personnages
qui s''affiche quand le joueur a tué l''Ender Dragon, un boss vivant dans la dimension de l''End, dimension qui propose un défi réservé aux joueurs chevronnés à cause de sa difficulté et du fait que 
l''End n''est accessible qu''à la fin de nombreux prérequis. Après cette scène, le joueur réapparait à la surface et peut continuer à jouer normalement. Il est également possible de « terminer » Minecraft
en collectant tous les trophées ou en rassemblant un exemplaire de chaque matière ou chaque objet du jeu récupérable en survie par exemple.
Selon l''imagination et la patience du joueur Minecraft ne possède pas de limite.', 'Jeu bac à sable indépendant et pixelisé dont le monde infini est généré aléatoirement, Minecraft permet au joueur de 
récolter divers matériaux, d''élever des animaux et de modifier le terrain selon ses choix, en solo ou en multi (via des serveurs). Il doit égal...', 'https://cdn.pixabay.com/photo/2014/11/13/15/23/minecraft-529459_960_720.jpg', 'Article', 2),

('Mario Kart 8 Deluxe : Le jeu multi par excellence, un must-have !', 'Alors que la Nintendo Switch a été conçue comme une console multi, voici qu''un jeu phare du genre 
pointe le bout de son nez. Mario Kart 8 Deluxe sur Switch se présente comme la version ultime de l''épisode sorti sur Wii U en 2014, et le moins que l''on puisse dire, c’est
que le pari est réussi ! Le principe de base, on le connaît par coeur : des courses de karts endiablées où on se balance les pires crasses en espérant ne pas prendre une 
carapace bleue juste devant la ligne d’arrivée. En cela, Mario Kart 8 est déjà une réussite, sans doute un des meilleurs opus de la série. La bonne chose, c’est qu''avec 
cette version Deluxe, c’est tout le contenu qui se retrouve boosté avec l’ensemble des DLC parus déjà inclus sur la galette. Pas sûr que cela manque, parce qu''avec 48 
circuits sans compter les versions Miroir, on a plus qu''il n''en faut en matière de diversité ! On est logé à la même enseigne au niveau des personnages avec 41 pilotes, 
sans compter les Mii. On note d’ailleurs l’arrivée de nouveaux venus, le roi Boo et les Inklings de Splatoon.
Parmi les nouveautés de gameplay, la possibilité de stocker deux options en même temps comme dans Double Dash risque de causer encore plus de carnage sur la piste, 
avantageant clairement les retournements de situation pour encore plus de fun. Comme souvent, le facteur chance à un fort impact sur le résultat final, mais on en attend 
pas moins d’un tel jeu. On note toutefois l''arrivée d''un troisième niveau de mini-turbo sur les dérapages, le mauve, long à sortir mais terriblement efficace. Vu qu''on 
peut jouer un peu sur les virages pour l''effectuer plus efficacement, ce mini-turbo mauve reste un poil plus technique que le Fire Hopping (action de sautiller après un
mini-turbo pour prolonger son effet), ce dernier ayant été retiré du jeu, ce qui n''est pas plus mal vu qu''il n''apportait rien de concret. Pour conclure, si en lui-même 
Mario Kart 8 Deluxe est déjà un must-have du jeu de course multi, il bénéficie en plus des spécificités de la Switch, pouvant être joué seul ou à plusieurs dans toutes les
configurations possibles. Certes, à deux sur un petit écran, ça peut parfois être compliqué, mais le fait d''avoir le choix reste un excellent point, sans oublier qu''il 
reste un des rares jeux qui permet à deux joueurs ensemble de jouer en ligne à partir de la même console. À ce sujet, le online offre le mode Bataille et le mode Course 
tout en permettant d''organiser des tournois, très intéressant pour le jeu communautaire.','Alors que la Nintendo Switch a été conçue comme une console multi, voici qu''un jeu phare du genre 
pointe le bout de son nez. Mario Kart 8 Deluxe sur Switch se présente comme la version ultime de l''épisode sorti sur Wii U en 2014, et le moins que l''on puisse dire, c’est
que le pari est réussi ! Le principe de base, on le connaît par coeur : des courses de karts endia...', 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg', 'Article', 4 ),

('Spider-Man : L''Araignée côtoie-t-elle les sommets de l''Open World ?', 'Si on se hasardait à faire un parallèle entre la franchise vidéoludique et cinématographique, 
on pourrait comparer ce nouveau Spider-Man aux deux premiers films de la trilogie de Sam Raimi sortis en 2002 puis 2004. En effet, les deux œuvres entretiennent de nombreux
points communs à commencer par la vision des réalisateurs, ancrée dans les origines du héros à travers le traitement du personnage mais aussi celui de ses ennemis. 
De fait, si les deux longs-métrages de Raimi respiraient la passion pour l''âge d''or du Tisseur, le jeu d''Insomniac prend lui aussi le pari de miser sur les icônes qui 
ont alimenté les premières aventures de Spidey tout en actualisant le propos. En s''imprégnant de la formule Sony à travers une histoire forte, des personnages creusés et 
une mise en scène léchée, Spider-Man dépoussière le personnage sans pour autant singer ce qui se fait actuellement au cinéma. Et c''est là que le projet devient intéressant
car au-delà du fait que le jeu fasse partie du canon officiel des comics, Insomniac propose sa propre vision du personnage. Sans renier les traits de caractère du personnage, 
ce Spider-Man parvient malgré tout à surprendre, à émouvoir tout en véhiculant un incroyable sentiment de puissance et de liberté. N''est-ce pas là ce qu''on attend d''un 
tel jeu ? Assurément. Dans ses grandes lignes, Spider-Man ne réinvente pas la roue et opte même pour une structure classique architecturée autour d''une histoire principale, 
de quêtes annexes et autres collectibles à récupérer. Néanmoins, le titre a pour lui de s''appuyer sur un gameplay parfaitement huilé et surtout un système de jeu savamment 
pensé afin de minimiser le côté redondant de l''ensemble tout en préservant intact le plaisir de jeu. Sur ce point, Spider-Man étonne, autant dans son ingéniosité que dans 
sa finition. De fait, à l''image d''un certain God of War, tout est lié dans Spider-Man et incite constamment à alterner entre les différentes quêtes annexes pour récupérer 
différents types de jetons indispensables pour obtenir de nouvelles capacités, des gadgets ainsi que des costumes. On ne se fera donc pas prier d''autant que le jeu propose 
un bon challenge en Normal, le mode Difficile réclamant pour sa part une maîtrise absolue du gameplay. On appréciera aussi d''avoir quelques missions secondaires renvoyant à 
d''autres personnages gravitant autour de Spidey à l''image de ce qui avait été fait dans les Batman Arkham, l''une des références évidentes du jeu d''Insomniac. 
Spider-Man reprend donc le meilleur de plusieurs jeux en peaufinant quantité de petites choses afin de proposer le quartier de Manhattan dans laquelle on aime se balader 
de building en building tout en arpentant les rues au détour desquelles on pourra assister à un braquage, un vol de voiture, des tentatives d''intimidation, bref, autant 
de raisons de sauver la veuve et l''orphelin.','Si on se hasardait à faire un parallèle entre la franchise vidéoludique et cinématographique, 
on pourrait comparer ce nouveau Spider-Man aux deux premiers films de la trilogie de Sam Raimi sortis en 2002 puis 2004. En effet, les deux œuvres entretiennent de nombreux
points communs à commencer par la vision des réalisateurs, ancrée dans les origines du héros à travers le traitement du personnage mais aussi celui de ses ennemis. 
De fait, si les deux longs-métrages de Raimi respiraient la passion pour l''âge d''or du Tiss...', 'https://cdn.pixabay.com/photo/2021/03/11/17/46/spider-man-6087809_1280.jpg', 'Article', 5 );


--La table d'utilisateurs
INSERT INTO "users" ("user_name","email","birth_date", "password" ) VALUES
('Alfred','a.martins@gamer.com','08/12/1988','12345'),
('Gaara','g.chunins@gamer.com','12/09/2002','12345'),
('Selena','s.loranos@gamer.com','10/02/1999','12345'),
('Valérie','v.prunes@gamer.com','13/07/2000','12345');


COMMIT;
