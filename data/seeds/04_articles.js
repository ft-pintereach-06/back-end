const articles = [
  { 
    article_title: 'Mystery Cases: What Happens When Modern Medicine Lacks a Diagnosis or Cure?', 
    article_url: 'https://www.discovermagazine.com/health/mystery-cases-what-happens-when-modern-medicine-lacks-a-diagnosis-or-cure',
    article_importance: "LOW",
  },
  { 
    article_title: 'Penn Medicine requiring all health system employees to receive COVID-19 vaccine', 
    article_url: 'https://local21news.com/news/local/penn-medicine-requiring-all-health-system-employees-to-receive-covid-19-vaccine',
    article_importance: "MEDIUM",
  },
  { 
    article_title: 'The Strange Biology of the Fish That Lives for a Century', 
    article_url: 'https://interestingengineering.com/strange-biology-of-fish-lives-for-century',
    article_importance: "HIGH",
  },
  { 
    article_title: 'Solving a Long-Standing Biological Mystery: How Cells Measure Themselves', 
    article_url: 'https://scitechdaily.com/solving-a-long-standing-biological-mystery-how-cells-measure-themselves/',
    article_importance: "HIGH",
  },
  { 
    article_title: 'Genetically engineered microbes convert waste plastic into vanillin', 
    article_url: 'https://www.chemistryworld.com/news/genetically-engineered-microbes-convert-waste-plastic-into-vanillin/4013767.article',
    article_importance: "MEDIUM",
  },
  { 
    article_title: 'Chemists at UWEC examine 12-pound ice chunk for answers', 
    article_url: 'https://wkow.com/2021/06/16/chemists-at-uwec-examine-12-pound-ice-chunk-for-answers/',
  },
]

exports.articles = articles

exports.seed = function(knex) {
  return knex('articles').insert(articles)
}

