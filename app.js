
const app = document.querySelector('#app');

// ======================= ABOUT =======================
function renderAbout() {
    fetch("about.html")
        .then(res => res.text())
        .then(html => {
            const temp = document.createElement("div");
            temp.innerHTML = html;

            const content = temp.querySelector("main").innerHTML;

            app.innerHTML = `
                <section class="about_me">
                    ${content}
                </section>
            `;
        });
}


// ======================= PROJECTS =======================
function renderProjects() {
    fetch("projects.html")
        .then(res => res.text())
        .then(html => {
            const temp = document.createElement("div");
            temp.innerHTML = html;

            const content = temp.querySelector("main").innerHTML;

            app.innerHTML = `
                <section class="projects_section">
                    ${content}
                </section>
            `;
        });
}

// ======================= SKILLS =======================
function renderSkills() {
    fetch("skill.html")
        .then(res => res.text())
        .then(html => {
            const temp = document.createElement("div");
            temp.innerHTML = html;

            const content = temp.querySelector("main").innerHTML;

            app.innerHTML = `
                <section class="skills_section">
                    ${content}
                </section>
            `;
        });
}

// ======================= BLOG =======================

function renderBlog() {
    fetch("blog.html")
        .then(response => response.text())
        .then(html => {
            const temp = document.createElement("div");
            temp.innerHTML = html;

            const blogContent = temp.querySelector("main").innerHTML;

            app.innerHTML = `
                <section class="blog_section">
                    ${blogContent}
                </section>
            `;
        });
}


// ======================= CONTACT =======================
function renderContact() {
    app.innerHTML = `
    <section class="contact_section">
        <h2>Contact Me</h2>

        <p>Email direto:</p>
        <p><a href="mailto:annaitalia143@gmail.com">annaitalia143@gmail.com</a></p>

        <p>Para ver todas as minhas redes sociais e links profissionais:</p>

        <a class="btn_contato" href="https://beacons.ai/geovanna_alves" target="_blank">
            Ver todas as minhas redes sociais
        </a>
    </section>
    `;
}


// ======================= NAVIGATION =======================
document.querySelectorAll("a[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const page = link.dataset.page;

        if (page === "about") renderAbout();
        if (page === "projects") renderProjects();
        if (page === "skills") renderSkills();
        if (page === "blog") renderBlog();
        if (page === "contact") renderContact();
    });
});

// ======================= INITIAL PAGE =======================
renderAbout();

