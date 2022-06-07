import denise from 'src/assets/images/project-denise-margoni.jpg';
import clevereen from 'src/assets/images/project-clevereen.jpg';
import relaxeco from 'src/assets/images/project-relaxeco.jpg';
import retrospective from 'src/assets/images/project-retrospective.jpg';

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
        content: '<p>Ce site est un projet familial  dans le but de répertorier toutes les peintures de Denise Margoni.</p><br><p>Avec plus de 1000 oeuvres peintes durant toute sa vie et actuellement stockées sans avoir de visiteurs pour en profiter, ce site permet de mettre des toiles choisies en avant afin de faire découvrir toute cette oeuvre.</p><p>Le site est composé du Front accessible aux utilisateurs et d\'une partie administration Back indépendante.</p><br><p>Pour la création de ce site j\'ai du prendre chaque tableau en photo, composer le fichiers de données correspondantes à chaque tableau, puis retravailler les photos avant de les sauvegarder.</p><p>L\'administration permet une gestion classique pour modifier toutes les informations des tableaux (titre, taille, photo, etc...) pour ainsi en garder une trace numérique mais aussi pourvoir savoir où se trouve chaque tableau. Il est de plus possible d\'effectuer des recherches de différents types pour retrouver une peinture en particulier.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Technos pour le Back : PHP Symfony, Twig, MySQL.</p><br><p>Construction du site effectuée seul et maintenance au quotidien suivant les besoins et améliorations possibles.</p>',
        link: 'https://www.denise-margoni.fr/',
      },
      {
        id: 2,
        title: 'Retrospective Denise Margoni',
        img: retrospective,
        content: '<p>Ce site est complémentaire au site précédent denise-margoni.fr. En effet il s\'agit ici d\'une visite virtuelle de l\'une exposition.</p><br><p>Le site propose une visite à l\'aide de flèches/indicateurs pour se déplacer ainsi que la possibilité d\'afficher en plein écran les tableaux ou les textes présentés.</p><br><p>Les tableaux sont reliés à la base de données du site précédent pour que les informations restent toujours à jour.</p><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Le Back est le même que le projet précédent.</p><br><p>Construction du site effectuée seul après avoir pris toutes les photos nécessaires de l\'exposition. Mises à jour et améliorations effectuées si nécessaire.</p>',
        link: 'https://retrospective-paimpol-2022.denise-margoni.fr/',
      },
      {
        id: 3,
        title: 'Clevereen',
        img: clevereen,
        content: '<p>Ce site est un site de présentation et de mise en relation avec une entreprise de construction de jeux vidéos mobile et de contenu VR pour le Metaverse.</p><br><p>Pour ce projet la demande était de faire une refonte du site déjà existant qui était un peu dépassée pour les propriétaires.</p><p>Le site contient une partie Front accessible aux visiteurs, principalement des professionnels du domaine numérique et vidéoludique, afin de leur présenter de manière attrayante des jeux, des expériences. La prise de contact se fait via un formulaire de contact.</p><br><p>Pour leur permettre de gérer le site eux-mêmes, j\'ai aussi créé une partie administration Back avec une base de données, elle leur permet de gérer l\'affichage de leurs expériences, les informations qu\'ils souhaitent afficher, ainsi que la possibilité d\'ajouter des news avec un éditeur de texte personnalisé pour pouvoir donner un minimum de mise en page à leur contenu, en plus des templates déjà mis en place.</p><p>La mise en place supplémentaire d\'un système d\'identification pour l\'administration leur permettra en plus d\'embaucher des employés pour les aider tout en limitant des accès et garder la main sur leur contenu et leur site.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back">Technos pour le Back : PHP Symfony, Twig, MySQL.</p><br><p>Construction du site effectuée seul en communiquant autant que nécessaire avec le client afin de lui fournir les meilleurs éléments possibles qu\'il pouvait souhaiter, la maintenance est effectuée au besoin actuellement.</p>',
        link: 'https://www.clevereen.com/',
      },
      {
        id: 4,
        title: 'Relax & Co',
        img: relaxeco,
        content: '<p>Ce site est un site vitrine pour proposer des services de massage en plus de mettre en avant une brochure de produits de bien-être.</p><br><p>Sur ce site j\'ai seulement effectué une mise à jour graphique au niveau du code pour le rendre Responsive, plus accessible et cohérent.</p><p>Ce projet a été très rapide à faire puisqu\'il ne s\'agissait que de retaper du code en ayant déjà toute la trâme du design, seulement à reprendre pour qu\'il soit adaptable sur différents supports.</p><p>Ce site n\'a pas d\'administration ni de base de données, il ne s\'agit que d\'un site vitrine.</p><br><p class="techno-front">Technos pour le Front : React et Redux.</p><p class="techno-back" style="height: 0" /><br><p>Construction du site effectuée seul en reprenant un design existant, mises à jour et améliorations si nécessaires mais actuellement non prévues.</p>',
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
        content: '<p>This website is a familial project in order to list all the paintings of Denise Margoni.</p><br><p>With more than 1000 paintings done during her whole life and stored with no visitors to enjoy them, this website allows to highlights chosen paintings to make people discover her work.</p><p>The website is composed of the Front-End which is accessible to users and an independant Back-End.</p><br><p>To create it, I had to take photos of every paintings, create the data file for everyone then work on the photos before saving them.</p><p>The administration allows a classic management to update all the informations (title, size, picture, etc...) in order to keep a digital trace but also being able to know where are each of the paintings. It is also possible to make different types of researchse to find a specific painting.</p><br><p class="techno-front">Front-End Tools : React and Redux.</p><p class="techno-back">Back-End Tools : PHP Symfony, Twig, MySQL</p><br><p>Build of the website done by myself and daily updates depending on the needs and possible improvements.</p>',
        link: 'https://www.denise-margoni.fr/',
      },
      {
        id: 2,
        title: 'Retrospective Denise Margoni',
        img: retrospective,
        content: '<p>This website is complementary to the previous project denise-margoni.fr.Indeed this is a virtual tour of an exhibition.</p><br><p>The website offers a tour with arrows/indicators to move and the possibility to display in full screen the paintings or writings presented.</p><br><p>Paintings are linked to the database of the previous project to keep the painting informations updated.</p><p class="techno-front">Front-End Tools : React and Redux.</p><p class="techno-back">Bak-End is the same as the previous project.</p><br><p>Building of the website done by myself after taking all the necessary photos of the exhibition. Updates and improvements done if necessary.</p>',
        link: 'https://retrospective-paimpol-2022.denise-margoni.fr/',
      },
      {
        id: 3,
        title: 'Clevereen',
        img: clevereen,
        content: '<p>This website is a presentation and linking website between clients and a video game creation company (mobile games and VR games for Metaverse).</p><br><p>For this project, the request was to create a new design which seems a little older for the owners.</p><p>The website contains a Front-End accessible to users, mostly digital and gaming professionnals in order to present them some games or experiments. The contact is made through a contact form.</p><br><p>In order to let them manage the website by them-selves, I also created an administrative Back-End with a database, it allows them to manage the display of the experiments, the informations they want to show but they can also add some news with a custom text editor to give more layout to the content.</p><p>Additional implementation of an identification system will allows them to hire employees who could help them but still limitating access and keeping hands on the content of their website.</p><br><p class="techno-front">Front-End Tools : React and Redux.</p><p class="techno-back">Back-End Tools : PHP Symfony, Twig, MySQL</p><br><p>Building of the website done by myself while communicating as much as necessary with the client in order to provide him the best elements possible he could want, updates are made if necessary.</p>',
        link: 'https://www.clevereen.com/',
      },
      {
        id: 4,
        title: 'Relax & Co',
        img: relaxeco,
        content: '<p>This website is a showcase website to offer massage services and to highlight a wellness products brochure.</p><br><p>On this website I only made an design update to make the website responsive, more accessible and more consistent.</p><p>This project was fast because I only had to redesign it while being able to copy all the style elements but making it more adaptable to different media.</p><p>This website does not contain a Back-End side, it is only a showcase website.</p><br><p class="techno-front">Front-End Tools : React and Redux.</p><p class="techno-back" style="height: 0" /><br><p>Building of the website done by myself taking the original design ; updates and improvements if necessary but actually not planned.</p>',
        link: 'http://relaxeco.free.fr/',
      },
    ],
  },
};
