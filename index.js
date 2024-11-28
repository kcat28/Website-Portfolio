let currentPage = 0;
const projTitle = document.querySelector('.systemProject h3');
const projDescription = document.querySelectorAll('.systemProject p');
const projList = document.querySelector('.systemProject ul');
const buttonLink = document.querySelector('.buttonlink a')
const buttonUpdate = document.querySelector('#buttonUpdate button')

document.getElementById('buttonUpdate').addEventListener('click', () => {

    const projects = [{
        title: "Ticketing System Application",
        description: "The application, developed with Java Swing for its graphical interface, supports logging in for both customers and administrators. Users can submit tickets to an office, enabling administrators to efficiently address their concerns. This digital ticketing system aims to reduce long queues and streamline processes effectively.",
        technologies: 'Java, Swing, MySQL',
        keyFeatures: [
                "CRUD Operations",
                "Distinct UI managing customers and admin users",
                "User Registration and auto fill of data for existing users",
                "File Image Submission for customers",
                "Image Viewer for Admins"
        ],
        githubLink: "https://github.com/kcat28/RequestTicketingSYS",
    }, {
        title: "Customer Relation Management Application",
        description: "Developed with Java and mySQL, the application consolidates an organization’s customer base data offering insights through detailed interpretations of data enabling businesses to manage interactions, track sales, and monitor customer feedback effectively.",
        technologies: 'Java, Swing, MySQL',
        keyFeatures: [
                "CRUD Operations",
                "Consolidated customer-related information",
                "Track Sales, Feedback, and Customer base",
                "Search Function and Interpreted Data",
                "Product Sections"
        ],
        githubLink: "https://github.com/kcat28/CRM_proj",
    }];

    function updateProject(){
        const project = projects[currentPage];
        projTitle.textContent = project.title;
        projDescription[0].innerHTML = `<strong>Description:</strong> ${project.description}`;
        projDescription[1].innerHTML = `<strong>Technologies used:</strong> ${project.technologies}`;

        projList.innerHTML = '';
        project.keyFeatures.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        projList.appendChild(li);

    });
        buttonLink.href = project.githubLink;
        buttonLink.querySelector('button').textContent = 'View on Github';
        buttonUpdate.textContent = currentPage === 0 ? ">" : "<";
    }
    currentPage = currentPage === 0 ? 1 : 0;
    updateProject();
});


