class ProjectCard extends HTMLElement {
    connectedCallback() {

        const status = this.getAttribute("project-status");
        const image = this.getAttribute("project-image");
        const type = this.getAttribute("project-type");
        const title = this.getAttribute("project-title");
        const description = this.getAttribute("project-description");
        const languages = this.getAttribute("project-languages");
        const githubLink = this.getAttribute("github-link");



        // created the variables to get the attributes from the html file.

        //create the data tranfromers in a js for each loop
        const languageList = languages
            ? languages.split(",").map(l => l.trim())
            : [];


        this.innerHTML = `
                 <div class="project-card">
                    <div class="status-badge live">${status}</div>
                    <div class="project-image">
                        <img src="${image}" alt="image ${title}">
                        <div class="image-overlay"></div>
                        <div class="hover-overlay"></div>
                    </div>
                    <div class="project-content">
                        <div class="project-category">
                            <p>// ${type}</p>
                        </div>
                        <h2 class="project-title">${title}</h2>
                        <p class="project-description">${description}</p>
                        <div class="tech-tags">
                            ${languageList.map(lang => `<span class="tech-tag">${lang}</span>`).join('')}
                        </div>
                        <div class="project-actions">
                            <a class="btn-view" href="${githubLink}" target="_blank">
                                ZIE PROJECT
                            </a>
                            <a class="btn-github" href="${githubLink}" target="_blank">
                                <svg class="github-cat" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="corner-accent"></div>
                </div>


`;


        //CLICKER FOR THE BUTTON TO OPEN THE ALLERGEN PANEL
            
    }
}

customElements.define("project-card", ProjectCard);
// created the name of the class and the custom element to be used in the html file.
