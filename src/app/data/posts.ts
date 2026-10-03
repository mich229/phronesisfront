export type Post = {
  id: number;
  cat: string;
  featured: boolean;
  title: string;
  date: string;
  readTime: string;
  img: string;
  excerpt: string;
};

export const allPosts: Post[] = [
  { id: 1, cat: "Stratégie", featured: true, title: "Diversifier intelligemment son portefeuille en 2025 : les règles fondamentales", date: "10 juil. 2025", readTime: "5 min", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop&auto=format", excerpt: "La diversification reste la règle d'or de tout investisseur avisé. Découvrez les principes pour construire un portefeuille robuste face aux aléas des marchés." },
  { id: 2, cat: "Formation", featured: false, title: "ETF et fonds indiciels : l'essentiel pour débutants", date: "3 juil. 2025", readTime: "7 min", img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&h=360&fit=crop&auto=format", excerpt: "Les ETF ont révolutionné l'accès aux marchés financiers. Un guide complet pour comprendre et intégrer ces instruments à votre stratégie." },
  { id: 3, cat: "Marché", featured: false, title: "Marchés émergents : tendances et opportunités en 2025", date: "27 juin 2025", readTime: "6 min", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=360&fit=crop&auto=format", excerpt: "Asie du Sud-Est, Afrique subsaharienne, Amérique latine : où se trouvent les meilleures opportunités parmi les économies en développement ?" },
  { id: 4, cat: "Actualités", featured: false, title: "Compte-rendu : assemblée générale du club — juin 2025", date: "20 juin 2025", readTime: "4 min", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&fit=crop&auto=format", excerpt: "Retour sur les décisions prises lors de notre assemblée générale : bilan semestriel, nouvelles allocations et cap stratégique." },
  { id: 5, cat: "Stratégie", featured: false, title: "Investissement ESG : entre performance financière et impact durable", date: "15 juin 2025", readTime: "8 min", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=360&fit=crop&auto=format", excerpt: "L'investissement responsable n'est plus un compromis sur la performance. Comment intégrer les critères ESG sans sacrifier le rendement." },
  { id: 6, cat: "Formation", featured: false, title: "Les ratios financiers indispensables pour analyser une action", date: "8 juin 2025", readTime: "10 min", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&fit=crop&auto=format", excerpt: "P/E, EV/EBITDA, ROE, dette nette… Maîtriser ces indicateurs clés vous permettra d'évaluer la santé financière d'une entreprise avec précision." },
];