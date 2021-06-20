const articles = [
  { 
    name: 'Mystery Cases: What Happens When Modern Medicine Lacks a Diagnosis or Cure?', 
    url: 'https://www.discovermagazine.com/health/mystery-cases-what-happens-when-modern-medicine-lacks-a-diagnosis-or-cure',
    category: 'Health',
    rank: 1,
    board_id: 1
  },
  { 
    name: 'Penn Medicine requiring all health system employees to receive COVID-19 vaccine', 
    url: 'https://local21news.com/news/local/penn-medicine-requiring-all-health-system-employees-to-receive-covid-19-vaccine',
    category: 'COVID-19',
    rank: 2,
    board_id: 1
  },
  { 
    name: 'The Strange Biology of the Fish That Lives for a Century', 
    url: 'https://interestingengineering.com/strange-biology-of-fish-lives-for-century',
    category: 'Zoology',
    rank: 3,
    board_id: 2
  },
  { 
    name: 'Solving a Long-Standing Biological Mystery: How Cells Measure Themselves', 
    url: 'https://scitechdaily.com/solving-a-long-standing-biological-mystery-how-cells-measure-themselves/',
    category: 'Biology',
    rank: 4,
    board_id: 2
  },
  { 
    name: 'Genetically engineered microbes convert waste plastic into vanillin', 
    url: 'https://www.chemistryworld.com/news/genetically-engineered-microbes-convert-waste-plastic-into-vanillin/4013767.article',
    category: 'Chemistry',
    rank: 5,
    board_id: 3
  },
  { 
    name: 'Chemists at UWEC examine 12-pound ice chunk for answers', 
    url: 'https://wkow.com/2021/06/16/chemists-at-uwec-examine-12-pound-ice-chunk-for-answers/',
    category: 'Chemistry',
    board_id: 3
  },
]

exports.articles = articles

exports.seed = function(knex) {
  return knex('articles').insert(articles)
}

