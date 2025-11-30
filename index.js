const projectData = [
    {
        image: 'img/karen-zhao-jLRIsfkWRGo-unsplash.jpg',
        title: 'The Mocha Brew',
        description: 'A coffee shop page made with HTML & CSS',
        link: 'https://leon-noyan.github.io/'
    },
    {
        image: 'img/karen-zhao-jLRIsfkWRGo-unsplash.jpg',
        title: 'Watch-List',
        description: 'A movie watchlist page, made with HTML, CSS & JS',
        link: 'https://leon-noyan.github.io/Watch-List/'
    },
    {
        image: 'img/ebuy.png',
        title: 'E-buy',
        description: 'An E-commerce made with HTML, CSS & JS',
        link: 'https://leon-noyan.github.io/E-handel/'
    }
]

function renderProjects(projects) {
    const projectsBox = document.querySelector('.my-projects')

    projectsBox.innerHTML = ''

    projects.forEach((e) => {
        const card = document.createElement('div')
        card.classList.add('cards', 'project-card')
        card.innerHTML = `
    <img src='${e.image}' class='project-images' alt='Project picture' />
    <div class="card-content">
      <h4>${e.title}</h4>
      <p>${e.description}</p>
        <a href="${e.link}" target="_blank" class="view-project-btn">
            View Project
        </a>
      </div>
    `
        projectsBox.appendChild(card)
    })
}

renderProjects(projectData)
