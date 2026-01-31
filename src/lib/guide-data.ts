export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  content: string; // HTML string or specific structure
}

export const guidesData: Record<string, GuideArticle> = {
  "norme-garde-corps-nf-p01-012": {
    slug: "norme-garde-corps-nf-p01-012",
    title: "Norme NF P01-012 : Tout Comprendre sur la Sécurité des Garde-Corps",
    description: "Hauteur, résistance, espacement : les exigences réglementaires pour vos garde-corps expliquées simplement.",
    category: "Normes",
    date: "2024-02-15",
    author: "Service Technique",
    content: `
      <h2>Qu'est-ce que la norme NF P01-012 ?</h2>
      <p>La norme française <strong>NF P01-012</strong> définit les règles de sécurité relatives aux dimensions des garde-corps et rampes d'escalier. Elle a pour objectif principal de prévenir les chutes accidentelles dans le vide, que ce soit pour les adultes ou les enfants.</p>
      
      <h2>Quand un garde-corps est-il obligatoire ?</h2>
      <p>Selon l'article R.111-15 du Code de la Construction et de l'Habitation, un garde-corps est obligatoire dès lors que la <strong>hauteur de chute est supérieure ou égale à 1 mètre</strong>. En dessous de cette hauteur, il n'est pas strictement obligatoire, mais une protection (comme une murette ou des jardinières) est vivement recommandée pour éviter les accidents.</p>

      <h2>Les Règles d'Or de la Norme</h2>
      
      <h3>1. La Hauteur Minimale</h3>
      <p>Pour être conforme, le haut de la main courante doit se situer à une hauteur minimale par rapport à la zone de stationnement (dalle, marche...) :</p>
      <ul>
        <li><strong>1 mètre</strong> (1000 mm) au niveau des paliers, balcons, terrasses et loggias.</li>
        <li>On tolère <strong>80 cm</strong> (800 mm) si l'épaisseur du garde-corps est supérieure à 50 cm (cas des murets épais).</li>
        <li>Pour les escaliers, la hauteur doit être comprise entre <strong>80 cm et 1 mètre</strong>, mesurée à la verticale du nez de marche.</li>
      </ul>

      <h3>2. La Zone de Sécurité (Zone de Stationnement Précaire)</h3>
      <p>Pour éviter qu'un enfant ne puisse escalader le garde-corps, les 45 premiers centimètres (en partant du sol) doivent être "infranchissables". C'est la zone de sécurité.</p>
      <ul>
        <li>Elle doit être pleine (verre, tôle) ou comporter des barreaux verticaux serrés.</li>
        <li>Aucun élément horizontal ne doit permettre de prendre appui (effet d'échelle) dans cette zone de 45 cm.</li>
      </ul>

      <h3>3. L'Espacement des Remplissages</h3>
      <p>Pour empêcher le passage d'un corps ou d'une tête d'enfant, les vides doivent être limités :</p>
      <ul>
        <li><strong>Barreaux verticaux :</strong> l'espace entre deux barreaux ne doit pas dépasser <strong>11 cm</strong>.</li>
        <li><strong>Lisses horizontales (câbles, tubes) :</strong> au-delà de la zone de sécurité de 45 cm, l'espace ne doit pas dépasser <strong>18 cm</strong>. Si les lisses sont dans la zone de sécurité (ce qui est interdit sauf si elles sont très rapprochées), l'espace doit être inférieur à 5 cm.</li>
      </ul>

      <h2>La Résistance (Norme NF P01-013)</h2>
      <p>Le garde-corps doit résister à une poussée latérale. Pour les habitations privées, cette résistance doit être de <strong>60 DaN</strong> (environ 60 kg) par mètre linéaire. Dans les lieux publics (ERP), cette exigence monte à 100 DaN.</p>

      <h2>Conclusion</h2>
      <p>Respecter la norme NF P01-012 est essentiel non seulement pour votre sécurité et celle de vos proches, mais aussi pour votre responsabilité civile en cas d'accident. Tous nos produits sont conçus pour faciliter le respect de ces normes lors de l'installation.</p>
    `
  },
  "pose-au-sol-vs-nez-de-dalle": {
    slug: "pose-au-sol-vs-nez-de-dalle",
    title: "Pose à la Française ou à l'Anglaise : Que Choisir ?",
    description: "Avantages et inconvénients de la fixation au sol (Française) et latérale (Anglaise).",
    category: "Installation",
    date: "2024-03-10",
    author: "Équipe Installation",
    content: `
      <h2>Deux Méthodes de Fixation Principales</h2>
      <p>Lors de la conception de votre garde-corps, l'une des premières questions techniques à se poser est le mode de fixation. Il existe deux types principaux : la pose à la française (sur le plat de la dalle) et la pose à l'anglaise (en applique sur le côté).</p>

      <h2>1. La Pose à la Française (Sur Dalle)</h2>
      <p>C'est la méthode la plus courante et la plus classique. Le garde-corps est fixé directement sur le sol de votre terrasse, balcon ou sur les marches de l'escalier.</p>
      
      <h3>Les Avantages :</h3>
      <ul>
        <li><strong>Simplicité d'installation :</strong> C'est généralement la pose la plus facile à réaliser, ne nécessitant pas d'échafaudage pour l'extérieur (si l'accès est sécurisé).</li>
        <li><strong>Stabilité :</strong> La fixation gravitaire est naturellement robuste.</li>
        <li><strong>Adaptabilité :</strong> Convient à presque tous les types de supports.</li>
      </ul>

      <h3>Les Inconvénients :</h3>
      <ul>
        <li><strong>Perte d'espace :</strong> Les poteaux étant fixés sur le sol, vous perdez environ 10 à 15 cm sur le pourtour de votre terrasse ou la largeur de votre escalier.</li>
        <li><strong>Étanchéité :</strong> Il faut être vigilant lors du perçage pour ne pas compromettre l'étanchéité d'une terrasse extérieure.</li>
      </ul>

      <h2>2. La Pose à l'Anglaise (En Applique / Nez de Dalle)</h2>
      <p>Ici, le garde-corps est fixé sur la tranche de la dalle béton ou sur le limon de l'escalier. Il est "suspendu" sur le côté.</p>

      <h3>Les Avantages :</h3>
      <ul>
        <li><strong>Gain de place :</strong> Vous conservez la totalité de la surface utile de votre terrasse ou de vos marches. C'est idéal pour les petits espaces ou les escaliers étroits.</li>
        <li><strong>Esthétique :</strong> Cette pose est souvent jugée plus moderne et aérienne. Elle dégage visuellement le sol.</li>
        <li><strong>Facilité de nettoyage :</strong> Rien ne gêne le passage du balai ou de la serpillière sur les bords.</li>
      </ul>

      <h3>Les Inconvénients :</h3>
      <ul>
        <li><strong>Installation plus complexe :</strong> Elle peut nécessiter un échafaudage ou une nacelle si l'accès par l'extérieur est difficile.</li>
        <li><strong>Support requis :</strong> Il faut que la dalle ou le limon soit suffisamment solide et épais pour accueillir les chevilles de fixation latéralement.</li>
      </ul>

      <h2>Comment Choisir ?</h2>
      <p>Le choix dépendra souvent de trois critères :</p>
      <ol>
        <li><strong>L'espace disponible :</strong> Si vous manquez de place, privilégiez l'anglaise.</li>
        <li><strong>La configuration technique :</strong> Avez-vous un "bord" solide pour fixer en applique ? Si non, la française s'impose.</li>
        <li><strong>Le budget :</strong> La pose à l'anglaise nécessite parfois des pièces de fixation plus onéreuses ou une main d'œuvre plus importante.</li>
      </ol>
    `
  },
  "choisir-materiau-garde-corps": {
    slug: "choisir-materiau-garde-corps",
    title: "Inox, Verre, Alu : Quel Matériau pour votre Garde-Corps ?",
    description: "Comparatif complet des matériaux : esthétique, résistance, entretien et prix.",
    category: "Matériaux",
    date: "2024-01-22",
    author: "Design & Conception",
    content: `
      <h2>Le Choix du Matériau : Une Question de Goût et de Contraintes</h2>
      <p>Le garde-corps n'est pas qu'un élément de sécurité, c'est aussi un élément majeur de l'esthétique de votre façade ou de votre intérieur. Voici les caractéristiques des principaux matériaux.</p>

      <h2>L'Inox (Acier Inoxydable)</h2>
      <p>Le roi du garde-corps moderne. Il est solide, durable et intemporel.</p>
      <ul>
        <li><strong>Avantages :</strong> Très résistant, aspect moderne "brossé" ou "miroir", se marie bien avec le bois et le verre.</li>
        <li><strong>Inconvénients :</strong> Nécessite un choix précis de la nuance (304 ou 316) pour ne pas s'oxyder.</li>
        <li><strong>Utilisation :</strong> Partout. Utilisez l'Inox 316 (A4) impérativement en extérieur, bord de mer ou piscine. L'Inox 304 (A2) suffit en intérieur sain.</li>
      </ul>

      <h2>Le Verre</h2>
      <p>Pour la transparence et le design épuré.</p>
      <ul>
        <li><strong>Avantages :</strong> Ne coupe pas la vue, laisse passer la lumière, agit comme un pare-vent efficace sur une terrasse. Sécurité maximale (pas d'escalade possible).</li>
        <li><strong>Inconvénients :</strong> Lourd à manipuler, nécessite un nettoyage régulier (traces de doigts, pluie), prix plus élevé.</li>
        <li><strong>Sécurité :</strong> Doit être du verre feuilleté trempé ou feuilleté simple (type 44.2 ou 55.2) pour retenir les éclats en cas de bris.</li>
      </ul>

      <h2>L'Aluminium</h2>
      <p>L'alternative légère et colorée.</p>
      <ul>
        <li><strong>Avantages :</strong> Ne rouille pas (inoxydable par nature), léger, thermolaquage possible dans toutes les couleurs (RAL). Souvent moins cher que l'inox.</li>
        <li><strong>Inconvénients :</strong> Moins rigide que l'acier ou l'inox, peut se rayer, aspect parfois moins "noble" que l'inox massif.</li>
      </ul>

      <h2>Le Bois</h2>
      <p>Chaleur et tradition.</p>
      <ul>
        <li><strong>Avantages :</strong> Aspect chaleureux, naturel, prix abordable (selon essence).</li>
        <li><strong>Inconvénients :</strong> Demande beaucoup d'entretien (vernis, lasure) surtout en extérieur. Vieillit et peut travailler avec le temps.</li>
      </ul>

      <h2>Le Câble (Remplissage)</h2>
      <p>Souvent associé à l'inox ou au bois.</p>
      <ul>
        <li><strong>Avantages :</strong> Très discret, aspect nautique/accastillage, économique.</li>
        <li><strong>Attention :</strong> Interdit dans la zone de sécurité (les 45 premiers cm) s'il permet l'escalade, sauf si les câbles sont très rapprochés (ce qui perd de son intérêt esthétique). Souvent combiné avec une plaque de verre ou de tôle en partie basse.</li>
      </ul>
    `
  },
  "entretien-garde-corps-inox": {
    slug: "entretien-garde-corps-inox",
    title: "Comment Entretenir et Faire Briller son Garde-Corps Inox",
    description: "L'inox ne rouille pas... à condition de l'entretenir ! Nos conseils d'experts.",
    category: "Entretien",
    date: "2024-04-05",
    author: "Service Après-Vente",
    content: `
      <h2>L'Inox Rouille-t-il ?</h2>
      <p>C'est une idée reçue courante : "l'inox ne rouille pas". En réalité, l'acier inoxydable s'auto-protège grâce à une couche de chrome. Si cette couche est agressée par des polluants extérieurs, une oxydation de surface (taches de thé) peut apparaître. Ce n'est pas le métal qui pourrit, mais la surface qui est contaminée.</p>

      <h2>La Règle d'Or : Le Nettoyage Régulier</h2>
      <p>Tout comme vous lavez vos vitres, vous devez nettoyer votre garde-corps. La fréquence dépend de l'environnement :</p>
      <ul>
        <li><strong>Intérieur :</strong> 1 à 2 fois par an.</li>
        <li><strong>Extérieur (ville/campagne) :</strong> 2 à 3 fois par an.</li>
        <li><strong>Bord de mer / Piscine :</strong> 3 à 4 fois par an, ou dès que des taches apparaissent.</li>
      </ul>

      <h2>Comment Nettoyer ?</h2>
      
      <h3>Ce qu'il faut faire :</h3>
      <ol>
        <li>Utiliser une éponge douce ou un chiffon microfibre.</li>
        <li>Utiliser de l'eau tiède savonneuse (liquide vaisselle, savon de Marseille) ou un nettoyant vitres classique.</li>
        <li>Rincer à l'eau claire.</li>
        <li>Essuyer avec un chiffon sec pour éviter les traces d'eau (calcaire).</li>
        <li>Pour faire briller et protéger : utiliser un spray ou une lingette imbibée d'huile de protection spéciale inox (disponible en magasin de bricolage).</li>
      </ol>

      <h3>Ce qu'il ne faut JAMAIS faire :</h3>
      <ul>
        <li><strong>Jamais d'eau de Javel</strong> ou de produits chlorés : le chlore est le pire ennemi de l'inox, il attaque sa couche protectrice instantanément.</li>
        <li><strong>Jamais de tampons abrasifs</strong> (Scotch-Brite vert, paille de fer) : ils rayent la surface et créent des nids à corrosion.</li>
        <li><strong>Jamais d'acide chlorhydrique</strong>.</li>
      </ul>

      <h2>Que faire si des taches de rouille apparaissent ?</h2>
      <p>Pas de panique, le garde-corps n'est pas fichu. Il s'agit d'une contamination de surface.</p>
      <ol>
        <li>Utilisez un "nettoyant désoxydant" spécial inox.</li>
        <li>Appliquez le produit avec un chiffon doux en frottant dans le sens du brossage de l'inox.</li>
        <li>Laissez agir quelques minutes (selon notice).</li>
        <li>Rincez abondamment et séchez.</li>
        <li>Appliquez une huile de protection pour recréer la barrière protectrice.</li>
      </ol>
    `
  },
  "prix-garde-corps-guide": {
    slug: "prix-garde-corps-guide",
    title: "Quel Budget pour un Garde-Corps ? Le Guide des Prix",
    description: "Comprendre les devis : prix au mètre linéaire, coût de la pose et options.",
    category: "Budget",
    date: "2024-02-28",
    author: "Service Commercial",
    content: `
      <h2>Combien coûte un garde-corps ?</h2>
      <p>C'est la question la plus fréquente, mais la réponse dépend de nombreux facteurs. Le prix est généralement calculé au <strong>mètre linéaire (ml)</strong>.</p>

      <h2>Fourchettes de Prix Indicatives (Hors Pose)</h2>
      <p>Ces prix sont donnés à titre indicatif pour des kits prêts à poser :</p>
      
      <h3>1. Garde-Corps à Barres ou Câbles (Inox)</h3>
      <ul>
        <li><strong>Entrée de gamme :</strong> 120€ - 180€ / ml</li>
        <li><strong>Moyen de gamme :</strong> 180€ - 250€ / ml</li>
        <li><strong>Haut de gamme :</strong> > 300€ / ml</li>
      </ul>
      <p>C'est souvent la solution la plus économique.</p>

      <h3>2. Garde-Corps Verre et Inox</h3>
      <ul>
        <li><strong>Standard :</strong> 250€ - 400€ / ml</li>
        <li>Le prix varie énormément selon l'épaisseur du verre et le système de pinces.</li>
      </ul>

      <h3>3. Garde-Corps Tout Verre (Profil de sol)</h3>
      <ul>
        <li><strong>Haut de gamme :</strong> 400€ - 800€ / ml</li>
        <li>C'est la solution la plus onéreuse en raison du coût du verre épais (souvent 16mm ou plus) et du profilé aluminium technique lourd.</li>
      </ul>

      <h2>Le Coût de l'Installation</h2>
      <p>Si vous faites appel à un professionnel pour la pose, il faut ajouter le coût de la main d'œuvre.</p>
      <ul>
        <li><strong>Tarif horaire moyen :</strong> 45€ à 70€ HT / heure.</li>
        <li><strong>Au forfait :</strong> Comptez entre 40€ et 100€ par mètre linéaire posé, selon la complexité (accès, découpes, nature du sol).</li>
      </ul>

      <h2>Comment Optimiser son Budget ?</h2>
      <ol>
        <li><strong>Poser soi-même :</strong> Nos kits sont conçus pour être installés par des bricoleurs avertis. L'économie sur la main d'œuvre est significative (30 à 50% du coût total).</li>
        <li><strong>Choisir le bon matériau :</strong> L'Inox 304 est moins cher que le 316. Si vous êtes en intérieur loin de la mer, le 304 suffit amplement.</li>
        <li><strong>Standardiser :</strong> Essayez de concevoir votre projet pour limiter les angles complexes et les découpes sur mesure qui augmentent le coût.</li>
      </ol>
    `
  },
  "securite-piscine-norme-nf-p90-306": {
    slug: "securite-piscine-norme-nf-p90-306",
    title: "Sécuriser sa Piscine : La Norme NF P90-306",
    description: "Barrières de piscine : obligations, hauteur, portillon. Protégez vos enfants.",
    category: "Piscine",
    date: "2024-05-12",
    author: "Expert Sécurité",
    content: `
      <h2>L'Obligation de Sécurité Piscine</h2>
      <p>Depuis 2004, toutes les piscines privées enterrées ou semi-enterrées doivent être équipées d'un dispositif de sécurité normalisé pour prévenir les noyades, notamment des jeunes enfants.</p>

      <h2>Les 4 Dispositifs Autorisés</h2>
      <ol>
        <li>L'alarme (NF P90-307)</li>
        <li>La couverture de sécurité (bâche) (NF P90-308)</li>
        <li>L'abri de piscine (véranda) (NF P90-309)</li>
        <li><strong>La barrière de protection (NF P90-306)</strong> : C'est souvent la solution la plus sûre car elle empêche physiquement l'accès à l'eau en permanence.</li>
      </ol>

      <h2>Les Exigences de la Norme NF P90-306 pour les Barrières</h2>
      <p>Pour qu'une barrière soit conforme, elle doit respecter des critères stricts :</p>

      <h3>1. La Hauteur</h3>
      <p>La barrière doit avoir une hauteur minimale de <strong>1,10 mètre</strong> entre deux points d'appui. L'objectif est qu'un enfant de moins de 5 ans ne puisse pas l'enjamber.</p>

      <h3>2. La Garde au Sol</h3>
      <p>L'espace entre le sol et le bas de la barrière doit être inférieur à <strong>25 mm</strong> (ou 102 mm selon la rigidité, mais on vise le plus faible possible) pour éviter qu'un enfant ne passe dessous.</p>

      <h3>3. Le Remplissage</h3>
      <p>Comme pour les garde-corps classiques, la barrière ne doit pas offrir de prise pour l'escalade. Les surfaces doivent être lisses ou les barreaux verticaux espacés de moins de 102 mm.</p>

      <h3>4. L'Accès (Le Portillon)</h3>
      <p>C'est le point critique. Le portillon d'accès doit être équipé d'un système de verrouillage :</p>
      <ul>
        <li><strong>Double action :</strong> Il faut deux actions simultanées ou consécutives pour l'ouvrir (ex: soulever + tourner).</li>
        <li><strong>Fermeture automatique :</strong> Le portillon doit se refermer et se verrouiller seul après passage (charnières à ressort).</li>
        <li>Le système de déverrouillage doit être placé à une hauteur inaccessible aux enfants (généralement > 1,50m ou avec un système complexe).</li>
      </ul>

      <h2>L'Installation</h2>
      <p>La barrière doit être installée à au moins <strong>1 mètre</strong> du bord de l'eau pour permettre la circulation autour du bassin sans être gêné. Elle doit entourer complètement le bassin (sauf si un mur de l'habitation fait office de clôture, à condition que ses ouvertures soient sécurisées).</p>
    `
  }
};
