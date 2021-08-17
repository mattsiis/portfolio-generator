const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

//  create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
        return '';
    };

    return `
        <section class="my-3" id="about">
            <h2 class="Text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <p>${aboutText}</p>
        </section>
    `;
};

const generateProjects = projectsArr => {
    console.log(projectsArr)
    const projectHtmlArr = projectsArr.map(({ name, description, languages, link}) => {
        return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <h5 class="portfolio-languages">
                    build with:
                    ${languages.join(', ')}
                </h5>
                <p>${description}</p>
                <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
            </div>
            `
    });

    return `
        <section class="my-3" id="orotfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
                ${projectHtmlArr.join('')}
            </div>
        </section>
    `;
};

module.exports = generatePage;
module.exports = templateData => {
    // destructure projects and about data from templateData
    const { about, github, projects, ...header } = templateData;


  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <header>    
            <div class="container flex-row justify-space-between align-center>
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
                <nav class="flex-row">
                    <a class="m1-2 my-1 px-2 py-1 bg-secondary text-dark" href="{header.github}">GitHub</a>
                </nav>
            </div>
        </header>
        
        <main class="container my-5">
            ${generateAbout(about)}
            ${generateProjects(projects)}
        </main>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy;> ${new Date().getFullYear()} by ${header.name} </h3>
        </footer>
    </body>
    </html>
    `
}