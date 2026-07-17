const news = [
    {
        category: "CRIME & SAFETY",
        title: "3 Students Killed, 4 Critical After Train Collides With School Van",
        description: "Four people, including three school students and a local resident, lost their lives after a local train struck a school van in Murshidabad, West Bengal. Four other students and the driver remain in critical condition.",
        image: "images/news1.jpg"
    },
    {
        /* POSITION CHANGED: Swapped from index 3 to index 1 */
        category: "CYBERSECURITY",
        title: "Microsoft Security Chief Announces Major Cybersecurity Changes",
        description: "Microsoft's cybersecurity division is undergoing major restructuring, with leadership introducing new engineering teams and AI-driven security initiatives following company-wide changes.",
        image: "images/news4.jpg"
    },
    {
        category: "TECH POLICY",
        title: "Google DeepMind Researcher Resigns Over Pentagon AI Deal",
        description: "A Google DeepMind researcher resigned after criticizing the company's AI agreement with the Pentagon, stating it conflicted with the organization's original AI safety principles.",
        image: "images/news3.jpg"
    },
    {
        /* POSITION CHANGED: Swapped from index 1 to index 3 */
        category: "SPORTS WORLD",
        title: "Lionel Messi Responds to Favouritism Claims",
        description: "Lionel Messi dismissed criticism surrounding Argentina's journey to the FIFA World Cup final, saying the team earned every victory through hard work and performance on the field.",
        image: "images/news2.jpg"
    },
    {
        category: "CRICKET",
        title: "India Coach Backs Rohit Sharma Despite Poor Form",
        description: "India batting coach Sitanshu Kotak expressed confidence in Rohit Sharma despite his recent struggles, saying the experienced opener remains an important player for the national team.",
        image: "images/news5.jpg"
    }
];

const container = document.getElementById("newsContainer");

// Generate distinct layout variants matching top-tier news publications
news.forEach((item, index) => {
    let layoutClass = "standard-feature";
    
    if (index === 0) {
        layoutClass = "hero-feature";        // Row 1: Heavyweight lead story
    } else if (index === 1 || index === 2) {
        layoutClass = "secondary-feature";   // Row 2: Secondary items side-by-side
    }

    container.innerHTML += `
        <article class="story-card ${layoutClass}">
            <div class="story-image-wrapper">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="story-text-container">
                <div class="story-meta">${item.category || 'BREAKING'}</div>
                <h2><a href="#" class="story-title">${item.title}</a></h2>
                <p class="story-excerpt">${item.description}</p>
            </div>
        </article>
    `;
});