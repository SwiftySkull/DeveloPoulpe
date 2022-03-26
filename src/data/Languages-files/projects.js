import denise from 'src/assets/images/project-denise-margoni.jpg';
import clevereen from 'src/assets/images/project-clevereen.jpg';
import relaxeco from 'src/assets/images/project-relaxeco.jpg';

export default {
  fr: {
    title: 'Page des projets',
    subtitle: 'Voici quelques projets sur lesquels j\'ai pu travailler jusqu\'à aujourd\'hui :',
    visit: 'Visiter le site',
    redirect: 'Vous allez être redirigé sur une nouvelle page',
    allProjects: [
      {
        id: 1,
        title: 'Denise Margoni',
        img: denise,
        content: '<p>Ce site est un projet familial  dans le but de répertorier toutes les peintures de Denise Margoni.</p><br><p>Avec plus de 1000 oeuvres peintes durant toute sa vie et actuellement stockées sans avoir de visiteurs pour en profiter, ce site permet de mettre des toiles choisies en avant afin de faire découvrir toute cette oeuvre.</p><p>Le site est composé du Front accessible aux utilisateurs et d\'une partie administration Back indépendante.</p><br><p>Pour la création de ce site j\'ai du prendre chaque tableau en photo, composer le fichiers de données correspondantes à chaque tableau, puis retravailler les photos avant de les sauvegarder.</p><p>L\'administration permet une gestion classique pour modifier toutes les informations des tableaux (titre, taille, photo, etc...) pour ainsi en garder une trace numérique mais aussi pourvoir savoir où se trouve chaque tableau. Il est de plus possible d\'effectuer des recherches de différents types pour retrouver une peinture en particulier.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Technos pour le Back : PHP Symfony, Twig, MySQL</p><br><p>Construction du site effectuée seul et maintenance au quotidien suivant les besoins et améliorations possibles.</p>',
        link: 'https://www.denise-margoni.fr/',
      },
      {
        id: 2,
        title: 'Clevereen',
        img: clevereen,
        content: '<p>Ce site est un site de présentation et de mise en relation avec une entreprise de construction de jeux vidéos mobile et de contenu VR pour le Metaverse.</p><br><p>Pour ce projet la demande était de faire une refont du site déjà existant qui était un peu dépassée pour les propriétaires.</p><p>Le site contient une partie Front accessible aux visiteurs, principalement des professionnels du domaine numérique et vidéoludique, afin de leur présenter de manière attrayante des jeux, des expériences. La prise de contact se fait via un formulaire de contact.</p><br><p>Pour leur permettre de gérer le site eux-mêmes, j\'ai aussi créé une partie administration Back avec une base de données, elle leur permet de gérer l\'affichage de leurs expériences, les informations qu\'ils souhaitent afficher, ainsi que la possibilité d\'ajouter des news avec un éditeur de texte personnalisé pour pouvoir donner un minimum de mise en page à leur contenu, en plus des templates déjà mis en place.</p><p>La mise en place supplémentaire d\'un système d\'identification pour l\'administration leur permettra en plus d\'embaucher des employés pour les aider tout en limitant des accès et garder la main sur leur contenu et leur site.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Technos pour le Back : PHP Symfony, Twig, MySQL</p><br><p>Construction du site effectuée seul en communiquant autant que nécessaire avec le client afin de lui fournir les meilleurs éléments possibles qu\'il pouvait souhaiter, la maintenance est effectuée au besoin actuellement.</p>',
        link: 'https://www.clevereen.com/',
      },
      {
        id: 3,
        title: 'Relax & Co',
        img: relaxeco,
        content: '<p>Ce site est un site vitrine pour proposer des services de massage en plus de mettre en avant une brochure de produits de bien-être.</p><br><p>Sur ce site j\'ai seulement effectué une mise à jour graphique au niveau du code pour le rendre Responsive, plus accessible et cohérent.</p><p>Ce projet a été très rapide à faire puisqu\'il ne s\'agissait que de retaper code en ayant déjà toute la trâme du design, seulement à reprendre pour qu\'il soit adaptable sur différents supports.</p><p>Ce site n\'a pas d\'administration ni de base de données, il ne s\'agit que d\'un site vitrine.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Pas de Techno pour une partie Back utilisée</p><br><p>Construction du site effectuée seul en reprenant un design existant, mises à jour et améliorations si nécessaires mais actuellement non prévues.</p>',
        link: 'http://relaxeco.free.fr/',
      },
    ],
  },
  en: {
    title: 'Projects page',
    subtitle: 'Here some projects I worked on until now :',
    visit: 'Visit the website',
    redirect: 'You will be redirect to a new web page',
    allProjects: [
      {
        id: 1,
        title: 'Denise Margoni',
        img: denise,
        content: '<p class="trad">Updating Traduction !</p><p>Ce site est un projet familial  dans le but de répertorier toutes les peintures de Denise Margoni.</p><br><p>Avec plus de 1000 oeuvres peintes durant toute sa vie et actuellement stockées sans avoir de visiteurs pour en profiter, ce site permet de mettre des toiles choisies en avant afin de faire découvrir toute cette oeuvre.</p><p>Le site est composé du Front accessible aux utilisateurs et d\'une partie administration Back indépendante.</p><br><p>Pour la création de ce site j\'ai du prendre chaque tableau en photo, composer le fichiers de données correspondantes à chaque tableau, puis retravailler les photos avant de les sauvegarder.</p><p>L\'administration permet une gestion classique pour modifier toutes les informations des tableaux (titre, taille, photo, etc...) pour ainsi en garder une trace numérique mais aussi pourvoir savoir où se trouve chaque tableau. Il est de plus possible d\'effectuer des recherches de différents types pour retrouver une peinture en particulier.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Technos pour le Back : PHP Symfony, Twig, MySQL</p><br><p>Construction du site effectuée seul et maintenance au quotidien suivant les besoins et améliorations possibles.</p>',
        link: 'https://www.denise-margoni.fr/',
      },
      {
        id: 2,
        title: 'Clevereen',
        img: clevereen,
        content: '<p class="trad">Updating Traduction !</p><p>Ce site est un site de présentation et de mise en relation avec une entreprise de construction de jeux vidéos mobile et de contenu VR pour le Metaverse.</p><br><p>Pour ce projet la demande était de faire une refont du site déjà existant qui était un peu dépassée pour les propriétaires.</p><p>Le site contient une partie Front accessible aux visiteurs, principalement des professionnels du domaine numérique et vidéoludique, afin de leur présenter de manière attrayante des jeux, des expériences. La prise de contact se fait via un formulaire de contact.</p><br><p>Pour leur permettre de gérer le site eux-mêmes, j\'ai aussi créé une partie administration Back avec une base de données, elle leur permet de gérer l\'affichage de leurs expériences, les informations qu\'ils souhaitent afficher, ainsi que la possibilité d\'ajouter des news avec un éditeur de texte personnalisé pour pouvoir donner un minimum de mise en page à leur contenu, en plus des templates déjà mis en place.</p><p>La mise en place supplémentaire d\'un système d\'identification pour l\'administration leur permettra en plus d\'embaucher des employés pour les aider tout en limitant des accès et garder la main sur leur contenu et leur site.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Technos pour le Back : PHP Symfony, Twig, MySQL</p><br><p>Construction du site effectuée seul en communiquant autant que nécessaire avec le client afin de lui fournir les meilleurs éléments possibles qu\'il pouvait souhaiter, la maintenance est effectuée au besoin actuellement.</p>',
        link: 'https://www.clevereen.com/',
      },
      {
        id: 3,
        title: 'Relax & Co',
        img: relaxeco,
        content: '<p class="trad">Updating Traduction !</p><p>Ce site est un site vitrine pour proposer des services de massage en plus de mettre en avant une brochure de produits de bien-être.</p><br><p>Sur ce site j\'ai seulement effectué une mise à jour graphique au niveau du code pour le rendre Responsive, plus accessible et cohérent.</p><p>Ce projet a été très rapide à faire puisqu\'il ne s\'agissait que de retaper code en ayant déjà toute la trâme du design, seulement à reprendre pour qu\'il soit adaptable sur différents supports.</p><p>Ce site n\'a pas d\'administration ni de base de données, il ne s\'agit que d\'un site vitrine.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Pas de Techno pour une partie Back utilisée</p><br><p>Construction du site effectuée seul en reprenant un design existant, mises à jour et améliorations si nécessaires mais actuellement non prévues.</p>',
        link: 'http://relaxeco.free.fr/',
      },
    ],
  },
};
