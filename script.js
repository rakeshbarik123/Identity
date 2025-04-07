document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Personal data
    const personalData = {
        skills: [
            {
                name: "Web Development",
                description: "Building responsive and interactive websites",
                icon: "fa-code"
            },
            {
                name: "App Development",
                description: "Creating mobile applications for various platforms",
                icon: "fa-mobile-screen"
            },
            {
                name: "UI/UX Design",
                description: "Designing user-friendly interfaces and experiences",
                icon: "fa-pen-fancy"
            },
            {
                name: "Problem Solving",
                description: "Analyzing complex issues and developing solutions",
                icon: "fa-puzzle-piece"
            },
            {
                name: "Technical Learning",
                description: "Quickly grasping new technologies and concepts",
                icon: "fa-book-open"
            },
            {
                name: "Collaboration",
                description: "Working effectively in team environments",
                icon: "fa-people-group"
            }
        ]
    };

    // Populate skills
    const skillsContainer = document.getElementById('skills-container');
    personalData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <i class="fas ${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        skillsContainer.appendChild(skillElement);
    });

    // Personality type reveal
    const typeRevealBtn = document.getElementById('type-reveal');
    const typeDisplay = document.getElementById('personality-type');
    
    typeRevealBtn.addEventListener('click', function() {
        typeDisplay.style.display = 'block';
        typeRevealBtn.style.display = 'none';
    });

    // Contact form submission
    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('sender-name').value;
        const email = document.getElementById('sender-email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Message submitted:', { name, email, message });
        
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        messageForm.reset();
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});