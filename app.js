// ── MOVIE DATA (with YouTube trailer IDs) ─────────────────────────────────────
const MOVIES = [
  { id:1,  title:"Dune: Part Two",           type:"Movies", genre:"Sci-Fi",    year:2024, rating:4.8, duration:"2h 46m", match:97, emoji:"🏜️", color:["#3d2b00","#6b4500"], trailer:"8g18jFHCLXk", desc:"Paul Atreides unites with Chani and the Fremen to seek revenge against those who destroyed his family, and battles to prevent a terrible future only he can foresee.", cast:"Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin", director:"Denis Villeneuve", tags:["Epic","Sci-Fi","Action","Adventure"], featured:true },
  { id:2,  title:"Oppenheimer",              type:"Movies", genre:"Drama",     year:2023, rating:4.7, duration:"3h 1m",  match:95, emoji:"☢️", color:["#1a0f00","#3d2000"], trailer:"uYPbbksJxIg", desc:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.", cast:"Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.", director:"Christopher Nolan", tags:["Drama","History","Thriller"], featured:false },
  { id:3,  title:"Parasite",                 type:"Movies", genre:"Thriller",  year:2019, rating:4.9, duration:"2h 12m", match:99, emoji:"🏠", color:["#0a0a1a","#1a1a3d"], trailer:"5xH0HfJHsaY", desc:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", cast:"Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik", director:"Bong Joon-ho", tags:["Thriller","Drama","Dark Comedy"], featured:false },
  { id:4,  title:"Everything Everywhere All at Once", type:"Movies", genre:"Sci-Fi", year:2022, rating:4.8, duration:"2h 19m", match:98, emoji:"🌌", color:["#0d001a","#1a003d"], trailer:"wxN1T1uxQ2g", desc:"A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes.", cast:"Michelle Yeoh, Ke Huy Quan, Jamie Lee Curtis, Stephanie Hsu", director:"Daniel Kwan, Daniel Scheinert", tags:["Sci-Fi","Action","Comedy","Drama"], featured:false },
  { id:5,  title:"The Batman",               type:"Movies", genre:"Action",    year:2022, rating:4.5, duration:"2h 56m", match:92, emoji:"🦇", color:["#050510","#0a0a1a"], trailer:"mqqft2x_Aa4", desc:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.", cast:"Robert Pattinson, Zoë Kravitz, Paul Dano, Jeffrey Wright", director:"Matt Reeves", tags:["Action","Crime","Drama"], featured:false },
  { id:6,  title:"Top Gun: Maverick",        type:"Movies", genre:"Action",    year:2022, rating:4.6, duration:"2h 11m", match:94, emoji:"✈️", color:["#001a3d","#003d6b"], trailer:"qSqVVswa420", desc:"After 30 years, Maverick is still pushing the envelope as a test pilot. When he finds himself training a detachment of graduates, he must confront the ghosts of his past.", cast:"Tom Cruise, Jennifer Connelly, Miles Teller, Val Kilmer", director:"Joseph Kosinski", tags:["Action","Drama","Adventure"], featured:false },
  { id:13, title:"Interstellar",             type:"Movies", genre:"Sci-Fi",    year:2014, rating:4.9, duration:"2h 49m", match:98, emoji:"🪐", color:["#000d1a","#001a3d"], trailer:"zSWdZVtXT7E", desc:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival on a dying Earth.", cast:"Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine", director:"Christopher Nolan", tags:["Sci-Fi","Drama","Adventure"], featured:false },
  { id:14, title:"Inception",                type:"Movies", genre:"Sci-Fi",    year:2010, rating:4.8, duration:"2h 28m", match:96, emoji:"🌀", color:["#0a0a1a","#1a1a3d"], trailer:"YoHD9XEInc0", desc:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", cast:"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy", director:"Christopher Nolan", tags:["Sci-Fi","Action","Thriller"], featured:false },
  { id:15, title:"Get Out",                  type:"Movies", genre:"Horror",    year:2017, rating:4.6, duration:"1h 44m", match:95, emoji:"👁️", color:["#0a1a00","#1a3d00"], trailer:"DzfpyUB60YY", desc:"A young African-American visits his white girlfriend's parents for the weekend, where his uneasiness about their too-perfect town grows.", cast:"Daniel Kaluuya, Allison Williams, Bradley Whitford, Catherine Keener", director:"Jordan Peele", tags:["Horror","Thriller","Mystery"], featured:false },
  { id:16, title:"The Grand Budapest Hotel", type:"Movies", genre:"Comedy",    year:2014, rating:4.6, duration:"1h 39m", match:93, emoji:"🏨", color:["#3d001a","#6b0030"], trailer:"1Fg5iWmQjwk", desc:"A writer encounters the owner of an aging European hotel between the wars and learns of his friendship with a young employee who became his trusted confidant.", cast:"Ralph Fiennes, Tony Revolori, Saoirse Ronan, F. Murray Abraham", director:"Wes Anderson", tags:["Comedy","Drama","Adventure"], featured:false },
  { id:17, title:"Knives Out",               type:"Movies", genre:"Thriller",  year:2019, rating:4.7, duration:"2h 10m", match:96, emoji:"🔪", color:["#1a1200","#3d2900"], trailer:"qGqiHJTsRkQ", desc:"A detective investigates the death of a crime novelist at his estate the night of his 85th birthday — all the suspects are family.", cast:"Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis", director:"Rian Johnson", tags:["Mystery","Comedy","Thriller"], featured:false },
  { id:18, title:"Minari",                   type:"Movies", genre:"Drama",     year:2021, rating:4.6, duration:"1h 55m", match:94, emoji:"🌿", color:["#001a0d","#003d1a"], trailer:"IiFlnCCQUEQ", desc:"A Korean-American family moves to rural Arkansas in the 1980s to start a farm, navigating the American dream with hope, sacrifice, and family bonds.", cast:"Steven Yeun, Han Ye-ri, Alan S. Kim, Yuh-Jung Youn", director:"Lee Isaac Chung", tags:["Drama","Family","History"], featured:false },
  { id:19, title:"A Quiet Place",            type:"Movies", genre:"Horror",    year:2018, rating:4.5, duration:"1h 30m", match:93, emoji:"🤫", color:["#0a0f00","#1a2000"], trailer:"WR7cc5t7tv8", desc:"A family is forced to live in near silence while hiding from creatures that hunt by sound. One noise could mean the end.", cast:"Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe", director:"John Krasinski", tags:["Horror","Thriller","Sci-Fi"], featured:false },
  { id:20, title:"Whiplash",                 type:"Movies", genre:"Drama",     year:2014, rating:4.8, duration:"1h 47m", match:97, emoji:"🥁", color:["#1a0500","#3d0f00"], trailer:"7d_jQycdQGo", desc:"A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.", cast:"Miles Teller, J.K. Simmons, Melissa Benoist, Paul Reiser", director:"Damien Chazelle", tags:["Drama","Music","Thriller"], featured:false },
  { id:21, title:"The Shawshank Redemption", type:"Movies", genre:"Drama",     year:1994, rating:5.0, duration:"2h 22m", match:99, emoji:"🏛️", color:["#1a1000","#3d2500"], trailer:"6hB3S9bIaco", desc:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", cast:"Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler", director:"Frank Darabont", tags:["Drama","Crime","Hope"], featured:false },
  { id:22, title:"The Dark Knight",          type:"Movies", genre:"Action",    year:2008, rating:5.0, duration:"2h 32m", match:99, emoji:"🃏", color:["#050505","#101010"], trailer:"EXeTwQWrcwY", desc:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests of his ability to fight injustice.", cast:"Christian Bale, Heath Ledger, Aaron Eckhart, Maggie Gyllenhaal", director:"Christopher Nolan", tags:["Action","Crime","Drama"], featured:false },
  { id:23, title:"Spirited Away",            type:"Movies", genre:"Animation", year:2001, rating:4.9, duration:"2h 5m",  match:98, emoji:"🐉", color:["#001a1a","#003d3d"], trailer:"ByXuk9QqQkk", desc:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.", cast:"Daveigh Chase, Suzanne Pleshette, Miyu Irino", director:"Hayao Miyazaki", tags:["Animation","Fantasy","Adventure"], featured:false },
  { id:24, title:"La La Land",               type:"Movies", genre:"Romance",   year:2016, rating:4.5, duration:"2h 8m",  match:91, emoji:"🌟", color:["#1a0030","#3d0060"], trailer:"0pdqf4P9MB8", desc:"While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.", cast:"Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt", director:"Damien Chazelle", tags:["Romance","Music","Drama"], featured:false },
  { id:25, title:"Avengers: Endgame",        type:"Movies", genre:"Action",    year:2019, rating:4.7, duration:"3h 2m",  match:95, emoji:"⚡", color:["#0a001a","#1a003d"], trailer:"TcMBFSGVi1c", desc:"After the devastating events of Infinity War, the remaining Avengers must assemble once more to reverse Thanos's actions.", cast:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth", director:"Anthony & Joe Russo", tags:["Action","Sci-Fi","Adventure"], featured:false },
  { id:26, title:"Joker",                    type:"Movies", genre:"Thriller",  year:2019, rating:4.6, duration:"2h 2m",  match:93, emoji:"🎭", color:["#1a0a00","#3d1500"], trailer:"zAGVQLHvwOY", desc:"A mentally troubled stand-up comedian embarks on a downward spiral of revolution and bloody crime, becoming the Joker.", cast:"Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy", director:"Todd Phillips", tags:["Thriller","Drama","Crime"], featured:false },
  { id:27, title:"Black Panther",            type:"Movies", genre:"Action",    year:2018, rating:4.5, duration:"2h 14m", match:93, emoji:"🐾", color:["#0a0015","#15002a"], trailer:"xjDjIWPAapY", desc:"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.", cast:"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira", director:"Ryan Coogler", tags:["Action","Sci-Fi","Adventure"], featured:false },
  { id:28, title:"Spider-Man: No Way Home",  type:"Movies", genre:"Action",    year:2021, rating:4.7, duration:"2h 28m", match:95, emoji:"🕷️", color:["#001530","#003060"], trailer:"JfVOs4VSpmA", desc:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds appear.", cast:"Tom Holland, Zendaya, Benedict Cumberbatch, Willem Dafoe", director:"Jon Watts", tags:["Action","Sci-Fi","Adventure"], featured:false },
  { id:29, title:"Hereditary",               type:"Movies", genre:"Horror",    year:2018, rating:4.5, duration:"2h 7m",  match:92, emoji:"👻", color:["#0f0800","#201200"], trailer:"V6wWKNij_HY", desc:"When the matriarch of the Graham family passes away, her daughter's family begins to unravel cryptic and terrifying secrets about their ancestry.", cast:"Toni Collette, Milly Shapiro, Gabriel Byrne, Alex Wolff", director:"Ari Aster", tags:["Horror","Drama","Mystery"], featured:false },
  { id:30, title:"1917",                     type:"Movies", genre:"Drama",     year:2019, rating:4.7, duration:"1h 59m", match:96, emoji:"⚔️", color:["#0d1a00","#1a3300"], trailer:"YqNYrYUiMfg", desc:"During World War I, two British soldiers are given an impossible mission: deliver a message deep in enemy territory to stop 1,600 men from walking into a deadly trap.", cast:"George MacKay, Dean-Charles Chapman, Mark Strong, Andrew Scott", director:"Sam Mendes", tags:["Drama","War","Action"], featured:false },

  // ── SERIES ────────────────────────────────────────────────────────────────
  { id:7,  title:"Breaking Bad",             type:"Series", genre:"Thriller",  year:2008, rating:5.0, duration:"5 Seasons", match:99, emoji:"⚗️", color:["#001a00","#003d00"], trailer:"HhesaQXLuRY", desc:"A high school chemistry teacher diagnosed with cancer teams with a former student to secretly make and sell crystal meth.", cast:"Bryan Cranston, Aaron Paul, Anna Gunn, Dean Norris", director:"Vince Gilligan", tags:["Drama","Crime","Thriller"], featured:false },
  { id:8,  title:"Stranger Things",          type:"Series", genre:"Sci-Fi",    year:2016, rating:4.7, duration:"4 Seasons", match:96, emoji:"🔦", color:["#0d001a","#1a003d"], trailer:"b9EkMc79ZSU", desc:"When a young boy disappears, his mother and friends must confront terrifying supernatural forces, uncovering a secret government lab's darkest experiments.", cast:"Millie Bobby Brown, Finn Wolfhard, Winona Ryder, David Harbour", director:"The Duffer Brothers", tags:["Sci-Fi","Horror","Drama"], featured:false },
  { id:9,  title:"The Last of Us",           type:"Series", genre:"Drama",     year:2023, rating:4.9, duration:"2 Seasons", match:98, emoji:"🍄", color:["#1a0d00","#3d2000"], trailer:"uLtkt8BonwM", desc:"Twenty years after modern civilization has been destroyed, Joel must smuggle Ellie across a post-apocalyptic America.", cast:"Pedro Pascal, Bella Ramsey, Gabriel Luna, Anna Torv", director:"Craig Mazin, Neil Druckmann", tags:["Drama","Horror","Adventure"], featured:false },
  { id:10, title:"Wednesday",                type:"Series", genre:"Comedy",    year:2022, rating:4.5, duration:"2 Seasons", match:93, emoji:"🖤", color:["#0a0a0a","#1a1a1a"], trailer:"Di310WS93z0", desc:"Wednesday Addams investigates a murder spree while making new friends and uncovering her own supernatural powers at Nevermore Academy.", cast:"Jenna Ortega, Gwendoline Christie, Riki Lindhome, Percy Hynes White", director:"Tim Burton", tags:["Comedy","Fantasy","Mystery"], featured:false },
  { id:11, title:"House of the Dragon",      type:"Series", genre:"Action",    year:2022, rating:4.6, duration:"2 Seasons", match:94, emoji:"🐲", color:["#1a0000","#3d0000"], trailer:"DotnJ7tTA34", desc:"The story of House Targaryen, set 200 years before the events of Game of Thrones — a civil war over succession to the Iron Throne.", cast:"Paddy Considine, Matt Smith, Olivia Cooke, Emma D'Arcy", director:"Ryan Condal, Miguel Sapochnik", tags:["Fantasy","Drama","Action"], featured:false },
  { id:12, title:"Ted Lasso",                type:"Series", genre:"Comedy",    year:2020, rating:4.8, duration:"3 Seasons", match:97, emoji:"⚽", color:["#001a00","#003d1a"], trailer:"3u7EIiohs6U", desc:"An American college football coach is hired to manage an English soccer team despite having no experience, but his optimism wins everyone over.", cast:"Jason Sudeikis, Hannah Waddingham, Brett Goldstein, Juno Temple", director:"Bill Lawrence", tags:["Comedy","Drama","Sports"], featured:false },
  { id:31, title:"Game of Thrones",          type:"Series", genre:"Action",    year:2011, rating:4.7, duration:"8 Seasons", match:95, emoji:"👑", color:["#1a1000","#3d2500"], trailer:"KPLWWIOCOOQ", desc:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.", cast:"Emilia Clarke, Kit Harington, Peter Dinklage, Lena Headey", director:"David Benioff, D.B. Weiss", tags:["Fantasy","Drama","Action"], featured:false },
  { id:32, title:"The Crown",                type:"Series", genre:"Drama",     year:2016, rating:4.6, duration:"6 Seasons", match:93, emoji:"👸", color:["#001530","#002a50"], trailer:"JWtnJjn6ng0", desc:"Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.", cast:"Claire Foy, Matt Smith, Olivia Colman, Tobias Menzies", director:"Peter Morgan", tags:["Drama","History","Biography"], featured:false },
  { id:33, title:"Money Heist",              type:"Series", genre:"Thriller",  year:2017, rating:4.7, duration:"5 Seasons", match:96, emoji:"💰", color:["#1a0000","#3d0000"], trailer:"_InqQJRqGW4", desc:"A criminal mastermind recruits a band of robbers to carry out an elaborate heist on the Royal Mint of Spain.", cast:"Álvaro Morte, Úrsula Corberó, Itziar Ituño, Pedro Alonso", director:"Álex Pina", tags:["Thriller","Crime","Drama"], featured:false },
  { id:34, title:"Squid Game",               type:"Series", genre:"Thriller",  year:2021, rating:4.8, duration:"2 Seasons", match:97, emoji:"🟩", color:["#003d10","#006b1a"], trailer:"oqxAJKy0ii4", desc:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games with deadly high stakes.", cast:"Lee Jung-jae, Park Hae-soo, Wi Ha-joon, HoYeon Jung", director:"Hwang Dong-hyuk", tags:["Thriller","Drama","Survival"], featured:false },
  { id:35, title:"Ozark",                    type:"Series", genre:"Thriller",  year:2017, rating:4.7, duration:"4 Seasons", match:95, emoji:"💵", color:["#001a20","#003040"], trailer:"5oTDLRCFXhA", desc:"A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.", cast:"Jason Bateman, Laura Linney, Sofia Hublitz, Skylar Gaertner", director:"Bill Dubuque", tags:["Thriller","Drama","Crime"], featured:false },
  { id:36, title:"Dark",                     type:"Series", genre:"Sci-Fi",    year:2017, rating:4.9, duration:"3 Seasons", match:98, emoji:"🕳️", color:["#050510","#0a0a20"], trailer:"rrwycJ08PSA", desc:"A family saga with a supernatural twist set in a German town where the disappearance of two young children exposes the secrets among four families.", cast:"Louis Hofmann, Oliver Masucci, Karoline Eichhorn, Lisa Vicari", director:"Baran bo Odar", tags:["Sci-Fi","Thriller","Mystery"], featured:false },
  { id:37, title:"The Witcher",              type:"Series", genre:"Action",    year:2019, rating:4.4, duration:"3 Seasons", match:90, emoji:"⚔️", color:["#1a1000","#2a1500"], trailer:"ndl1W4ltcmg", desc:"Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.", cast:"Henry Cavill, Freya Allan, Anya Chalotra, Joey Batey", director:"Lauren Schmidt Hissrich", tags:["Fantasy","Action","Drama"], featured:false },
  { id:38, title:"Euphoria",                 type:"Series", genre:"Drama",     year:2019, rating:4.5, duration:"2 Seasons", match:92, emoji:"✨", color:["#1a003d","#2d0060"], trailer:"4pJI3qA0TFM", desc:"A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.", cast:"Zendaya, Hunter Schafer, Jacob Elordi, Sydney Sweeney", director:"Sam Levinson", tags:["Drama","Teen","Thriller"], featured:false },
  { id:39, title:"Peaky Blinders",           type:"Series", genre:"Thriller",  year:2013, rating:4.8, duration:"6 Seasons", match:97, emoji:"🎩", color:["#0f0a00","#1f1400"], trailer:"oVzVdvGIC7U", desc:"A gangster family epic set in 1919 Birmingham, England, centred on a gang who sew razor blades in the peaks of their caps.", cast:"Cillian Murphy, Helen McCrory, Paul Anderson, Tom Hardy", director:"Steven Knight", tags:["Crime","Drama","Thriller"], featured:false },
  { id:40, title:"Black Mirror",             type:"Series", genre:"Sci-Fi",    year:2011, rating:4.6, duration:"6 Seasons", match:94, emoji:"📱", color:["#0a0a0a","#141414"], trailer:"jDiMGXiWzLY", desc:"An anthology series exploring a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.", cast:"Various", director:"Charlie Brooker", tags:["Sci-Fi","Thriller","Anthology"], featured:false },
  { id:41, title:"Succession",               type:"Series", genre:"Drama",     year:2018, rating:4.9, duration:"4 Seasons", match:98, emoji:"🏢", color:["#0a0f1a","#10182a"], trailer:"OzYxJV_rmE8", desc:"The Roy family controls one of the biggest media conglomerates in the world. When the patriarch's health falters, his four children all try to gain his favor.", cast:"Brian Cox, Jeremy Strong, Sarah Snook, Kieran Culkin", director:"Jesse Armstrong", tags:["Drama","Comedy","Satire"], featured:false },
  { id:42, title:"Arcane",                   type:"Series", genre:"Animation", year:2021, rating:4.9, duration:"2 Seasons", match:99, emoji:"⚙️", color:["#0a001a","#1a0030"], trailer:"fXmAurh012s", desc:"Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League of Legends champions.", cast:"Hailee Steinfeld, Ella Purnell, Kevin Alejandro, Jason Spisak", director:"Pascal Charrue, Arnaud Delord", tags:["Animation","Action","Sci-Fi"], featured:false },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let myList       = JSON.parse(localStorage.getItem("noorflix_mylist") || "[]");
let activeFilter = "all";
let activeGenre  = "All";
let searchQuery  = "";

// ── HELPERS ───────────────────────────────────────────────────────────────────
function saveList() { localStorage.setItem("noorflix_mylist", JSON.stringify(myList)); }
function inList(id) { return myList.includes(id); }
function getStars(r) { const f = Math.round(r); return "★".repeat(f) + "☆".repeat(5-f); }
function getGradient(m) { return `linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})`; }

function getVisible() {
  let list = MOVIES.filter(m => {
    if (activeFilter === "mylist")  return inList(m.id);
    if (activeFilter === "Movies")  return m.type === "Movies";
    if (activeFilter === "Series")  return m.type === "Series";
    return true;
  });
  if (activeGenre !== "All") list = list.filter(m => m.genre === activeGenre);
  if (searchQuery) list = list.filter(m =>
    m.title.toLowerCase().includes(searchQuery) ||
    m.genre.toLowerCase().includes(searchQuery) ||
    String(m.year).includes(searchQuery)
  );
  return list;
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function renderHero() {
  const featured = MOVIES.find(m => m.featured) || MOVIES[0];
  document.getElementById("heroBg").style.background = getGradient(featured);
  document.getElementById("heroContent").innerHTML = `
    <div class="hero-badge">🎬 Now Streaming</div>
    <h1 class="hero-title">${featured.title}</h1>
    <div class="hero-meta">
      <span class="hero-match">${featured.match}% Match</span>
      <span class="hero-year">${featured.year}</span>
      <span class="hero-rating-badge">${featured.rating}★</span>
      <span class="hero-duration">${featured.duration}</span>
    </div>
    <p class="hero-desc">${featured.desc}</p>
    <div class="hero-actions">
      <button class="btn-play" onclick="openPlayer(${featured.id})">▶ Play Trailer</button>
      <button class="btn-more" onclick="openModal(${featured.id})">ℹ More Info</button>
    </div>
  `;
}

// ── GENRE TABS ────────────────────────────────────────────────────────────────
function renderGenreTabs() {
  const genres = ["All", ...new Set(MOVIES.map(m => m.genre))];
  document.getElementById("genreTabs").innerHTML = genres.map(g => `
    <button class="genre-tab ${g === activeGenre ? "active" : ""}" onclick="setGenre('${g}')">${g}</button>
  `).join("");
}

// ── CONTENT ROWS ──────────────────────────────────────────────────────────────
function renderContent() {
  const visible = getVisible();
  const area = document.getElementById("contentArea");
  if (visible.length === 0) {
    area.innerHTML = `<div class="empty-state"><div>🍿</div><p>${activeFilter === "mylist" ? "Your list is empty. Add titles with the + button!" : "No titles found."}</p></div>`;
    return;
  }
  const rows = [];
  if (activeFilter === "all" && !searchQuery && activeGenre === "All") {
    rows.push({ title:"🔥 Trending Now",       items: visible.filter(m => m.rating >= 4.7).slice(0,10) });
    rows.push({ title:"🎬 Top Movies",          items: visible.filter(m => m.type === "Movies").slice(0,10) });
    rows.push({ title:"📺 Popular Series",      items: visible.filter(m => m.type === "Series").slice(0,10) });
    rows.push({ title:"🚀 Sci-Fi & Fantasy",    items: visible.filter(m => ["Sci-Fi","Animation"].includes(m.genre)).slice(0,10) });
    rows.push({ title:"🏆 Award Winners",       items: visible.filter(m => m.rating >= 4.8).slice(0,10) });
    rows.push({ title:"😱 Thrillers & Horror",  items: visible.filter(m => ["Thriller","Horror"].includes(m.genre)).slice(0,10) });
    rows.push({ title:"😂 Comedy & Feel-Good",  items: visible.filter(m => ["Comedy","Romance"].includes(m.genre)).slice(0,10) });
  } else {
    rows.push({ title: activeFilter === "mylist" ? "❤️ My List" : `${visible.length} Titles`, items: visible });
  }
  area.innerHTML = rows.filter(r => r.items.length > 0).map(r => `
    <div class="row">
      <h2 class="row-title">${r.title}</h2>
      <div class="row-strip">${r.items.map(m => movieCard(m)).join("")}</div>
    </div>
  `).join("");
}

function movieCard(m) {
  const listed = inList(m.id);
  return `
    <div class="card" onclick="openModal(${m.id})">
      <div class="card-poster" style="background:${getGradient(m)}">
        <div class="card-poster-bg">${m.emoji}</div>
        <div class="card-gradient"></div>
        <div class="card-info">
          <p class="card-title">${m.title}</p>
          <div class="card-meta">
            <span class="card-genre-tag">${m.genre}</span>
            <span class="card-year-tag">${m.year}</span>
          </div>
          <div class="card-stars">${getStars(m.rating)}</div>
        </div>
        <div class="card-overlay"><div class="card-play-btn">▶</div></div>
      </div>
      <button class="mylist-btn ${listed ? "in-list" : ""}"
              onclick="event.stopPropagation();toggleList(${m.id})"
              title="${listed ? "Remove from list" : "Add to My List"}">${listed ? "✓" : "+"}</button>
    </div>
  `;
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal(id) {
  const m = MOVIES.find(m => m.id === id);
  if (!m) return;
  const listed = inList(m.id);
  document.getElementById("modalHero").style.cssText = `background:${getGradient(m)};height:380px;position:relative;`;
  document.getElementById("modalHero").innerHTML = `
    <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:8rem;">${m.emoji}</div>
    <div class="modal-hero-overlay"></div>
    <div class="modal-hero-content">
      <h2 class="modal-title">${m.title}</h2>
      <div class="modal-actions">
        <button class="btn-play" onclick="closeModal();openPlayer(${m.id})">▶ Play Trailer</button>
        <button class="btn-more" onclick="toggleList(${m.id});openModal(${m.id})">${listed ? "✓ In My List" : "+ My List"}</button>
      </div>
    </div>
  `;
  document.getElementById("modalBody").innerHTML = `
    <div>
      <div class="hero-meta" style="margin-bottom:14px;">
        <span class="hero-match">${m.match}% Match</span>
        <span class="hero-year">${m.year}</span>
        <span class="hero-rating-badge">${m.rating}★</span>
        <span class="hero-duration">${m.duration}</span>
      </div>
      <p class="modal-desc">${m.desc}</p>
      <div class="modal-tags">${m.tags.map(t => `<span class="modal-tag">${t}</span>`).join("")}</div>
      <p class="modal-cast"><strong>Cast:</strong> ${m.cast}</p>
    </div>
    <div class="modal-sidebar">
      <div class="modal-rating-stars">${getStars(m.rating)}</div>
      <p><span>Director: </span><strong>${m.director}</strong></p>
      <p><span>Genre: </span><strong>${m.genre}</strong></p>
      <p><span>Type: </span><strong>${m.type}</strong></p>
      <p><span>Year: </span><strong>${m.year}</strong></p>
      <p><span>Duration: </span><strong>${m.duration}</strong></p>
      <p><span>Rating: </span><strong>${m.rating} / 5</strong></p>
    </div>
  `;
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ── YOUTUBE PLAYER ────────────────────────────────────────────────────────────
function openPlayer(id) {
  const m = MOVIES.find(m => m.id === id);
  if (!m) return;

  document.getElementById("playerTitle").textContent = m.title;
  document.getElementById("playerSubtitle").textContent = m.year + " · " + m.duration + " · Official Trailer";

  // Inject YouTube iframe
  document.getElementById("youtubeFrame").innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${m.trailer}?autoplay=1&rel=0&modestbranding=1&color=white"
      title="${m.title} Trailer"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowfullscreen
    ></iframe>
  `;

  document.getElementById("videoPlayer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  document.getElementById("videoPlayer").classList.remove("open");
  document.getElementById("youtubeFrame").innerHTML = ""; // stop video
  document.body.style.overflow = "";
}

// ── MY LIST ───────────────────────────────────────────────────────────────────
function toggleList(id) {
  const m = MOVIES.find(m => m.id === id);
  if (!m) return;
  if (inList(id)) { myList = myList.filter(x => x !== id); showToast(`Removed "${m.title}" from My List`); }
  else { myList.push(id); showToast(`Added "${m.title}" to My List ✓`); }
  saveList(); render();
}

// ── FILTERS ───────────────────────────────────────────────────────────────────
function setGenre(g) { activeGenre = g; renderGenreTabs(); renderContent(); }

document.getElementById("navLinks").addEventListener("click", e => {
  const link = e.target.closest(".nav-link");
  if (!link) return;
  e.preventDefault();
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  link.classList.add("active");
  activeFilter = link.dataset.filter;
  activeGenre = "All";
  renderGenreTabs(); renderContent();
});

document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderContent();
});

window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 60);
});

// ── TOAST ─────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

// ── RENDER ────────────────────────────────────────────────────────────────────
function render() { renderHero(); renderGenreTabs(); renderContent(); }
render();
