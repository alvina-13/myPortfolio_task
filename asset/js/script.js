function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

function createLink(href, text, className) {
    const a = document.createElement("a");
    a.href = href;
    if (className) a.className = className;
    a.textContent = text;
    return a;
}

// Header
function createHeader() {
    const header = createElement("header", "site-header");
    const nav = createElement("nav", "navbar");

    const logo = createElement("a", "logo");
    logo.href = "#home";
    const logoImg = document.createElement("img");
    logoImg.src = "./asset/image/photo.jpg";
    logoImg.alt = "Logo";
    logo.appendChild(logoImg);

    const navList = createElement("ul", "nav-links");
    const items = [
        { href: "#home", text: "Ana Səhifə" },
        { href: "#about", text: "Haqqımda" },
        { href: "#skills", text: "Bacariqlarim" },
        { href: "#projects", text: "Layihələr" },
        { href: "#contact", text: "Əlaqə" },
    ];

    items.forEach(({ href, text }) => {
        const li = createElement("li");
        li.appendChild(createLink(href, text));
        navList.appendChild(li);
    });

    const burger = createElement("button", "burger");
    burger.setAttribute("aria-label", "Menyu");
    burger.setAttribute("aria-expanded", "false");
    ["span", "span", "span"].forEach(() => burger.appendChild(createElement("span")));

    burger.addEventListener("click", () => {
        const expanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", String(!expanded));
        navList.classList.toggle("open");
    });

    nav.appendChild(logo);
    nav.appendChild(navList);
    nav.appendChild(burger);
    header.appendChild(nav);
    return header;
}

// Hero
function createHero() {
    const hero = createElement("section", "hero");
    hero.id = "home";

    const container = createElement("div", "hero-container");
    const title = createElement("h1", "hero-title", "Alvina Mehtiyeva");
    const subtitle = createElement(
        "p",
        "hero-subtitle",
        "Frontend Developer · UI/UX həvəskarı"
    );

    const ctaWrap = createElement("div", "hero-cta");
    const ctaPrimary = createLink("#projects", "Layihələrimə bax", "btn primary");
    const ctaSecondary = createLink("mailto:koklerovaalvina@gmail.com", "Əlaqə saxla", "btn ghost");

    ctaWrap.appendChild(ctaPrimary);
    ctaWrap.appendChild(ctaSecondary);

    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(ctaWrap);
    hero.appendChild(container);

    return hero;
}

// About
function createAbout() {
    const about = createElement("section", "about");
    about.id = "about";

    const container = createElement("div", "about-container");

    const imgWrap = createElement("div", "about-img");
    const img = document.createElement("img");
    img.src = "./asset/image/photo.jpg";
    img.alt = "Mənim şəkilim";
    imgWrap.appendChild(img);

    const textWrap = createElement("div", "about-text");
    const title = createElement("h2", null, "Haqqımda");
    const desc = createElement(
        "p",
        null,
        "Mən Bakı Dövlət Universitetinin Tətbiqi riyaziyyat və Kibernetika fakultəsinin Kompüter elmləri ixtisasını bitirmişəm. Əlavə olaraq Code Academy kursu üzrə bilik və bacarıqlarımı təkminləşdirmişəm. Hal hazırda Texnoera Academy kursunda təhsil alıram. JavaScript, HTML, CSS və responsive dizayn sahəsində təcrübəm var. Portfoliomda layihələrimə baxa bilərsiniz."
    );

    textWrap.appendChild(title);
    textWrap.appendChild(desc);

    container.appendChild(imgWrap);
    container.appendChild(textWrap);

    about.appendChild(container);
    return about;
}

// Skills
function createSkills() {
    const skills = createElement("section", "skills");
    skills.id = "skills";

    const container = createElement("div", "skills-container");
    container.appendChild(createElement("h2", "skills-title", "Bacarıqlarım"));

    const skillsData = [
        { name: "HTML", level: "90%", icon: "fab fa-html5" },
        { name: "CSS", level: "85%", icon: "fab fa-css3-alt" },
        { name: "SCSS", level: "35%", icon: "fab fa-sass" },
        { name: "JavaScript", level: "80%", icon: "fab fa-js" },
        { name: "C#", level: "45%", icon: "fas fa-code" },
        { name: "React", level: "70%", icon: "fab fa-react" },
        { name: "UI/UX Design", level: "45%", icon: "fas fa-pencil-ruler" }
    ];

    const grid = createElement("div", "skills-grid");

    skillsData.forEach(({ name, level, icon }) => {
        const skillCard = createElement("div", "skill-card");

        const skillHeader = createElement("div", "skill-header");
        const i = document.createElement("i");
        i.className = icon;
        i.style.marginRight = "0.5rem";
        skillHeader.appendChild(i);
        skillHeader.appendChild(createElement("span", null, name));
        skillCard.appendChild(skillHeader);

        const bar = createElement("div", "skill-bar");
        const fill = createElement("div", "skill-fill");
        fill.setAttribute("data-width", level);
        fill.style.width = "0";
        bar.appendChild(fill);
        skillCard.appendChild(bar);
        grid.appendChild(skillCard);
    });

    container.appendChild(grid);
    skills.appendChild(container);

    return skills;
}

// Projects
function createProjects() {
    const projects = createElement("section", "projects");
    projects.id = "projects";

    const container = createElement("div", "projects-container");
    container.appendChild(createElement("h2", "projects-title", "Layihələrim"));

    const projectsData = [
        {
            title: "Portfolio Saytı",
            desc: "Mənim şəxsi portfolio layihəm, HTML, CSS, JS istifadə olunub.",
            link: "https://github.com/alvina-13/myPortfolio_task.git"
        },
        {
            title: "ToDo App",
            desc: "ToDo.",
            link: "https://github.com/alvina-13/to-do-list-task.git"
        },
        {
            title: "Milyonçu oyunu",
            desc: "15 sualdan ibarət oyundur.",
            link: "https://github.com/alvina-13/milyoncu-task.git"
        }
    ];

    const grid = createElement("div", "projects-grid");

    projectsData.forEach(({ title, desc, link }) => {
        const card = createElement("div", "project-card");

        const cardTitle = createElement("h3", null, title);
        const cardDesc = createElement("p", null, desc);
        const cardLink = createLink(link, "Layihəyə bax", "btn primary");

        card.appendChild(cardTitle);
        card.appendChild(cardDesc);
        card.appendChild(cardLink);

        grid.appendChild(card);
    });

    container.appendChild(grid);
    projects.appendChild(container);
    return projects;
}

// Contact
function createContact() {
    const contact = createElement("section", "contact");
    contact.id = "contact";

    const container = createElement("div", "contact-container");

    const title = createElement("h2", "contact-title", "Əlaqə");
    container.appendChild(title);

    const form = createElement("form", "contact-form");
    form.innerHTML = `
        <input type="text" name="name" placeholder="Adınız" required>
        <input type="email" name="email" placeholder="Email" required>
        <textarea name="message" placeholder="Mesajınız" rows="5" required></textarea>
        <button type="submit" class="btn primary">Göndər</button>
    `;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mesajınız göndərildi!");
        form.reset();
    });

    container.appendChild(form);

    const social = createElement("div", "contact-social");
    const socials = [
        { href: "https://github.com/alvina-13", text: "GitHub", icon: "fab fa-github" },
        { href: "https://www.linkedin.com/feed/", text: "LinkedIn", icon: "fab fa-linkedin" },
        { href: "https://instagram.com/", text: "İnstagram", icon: "fab fa-instagram" },
    ];

    socials.forEach(({ href, text, icon }) => {
        const a = createLink(href, text, "btn ghost");
        a.target = "_blank";
        const i = document.createElement("i");
        i.className = icon;
        i.style.marginRight = "0.5rem";
        a.prepend(i);

        social.appendChild(a);
    });

    container.appendChild(social);
    contact.appendChild(container);

    return contact;
}

// Footer
function createFooter() {
    const footer = createElement("footer", "site-footer");
    const text = createElement(
        "p",
        null,
        `© ${new Date().getFullYear()} Alvina Mehtiyeva. Bütün hüquqlar qorunur.`
    );
    footer.appendChild(text);
    return footer;
}

// Skills animate
function animateSkills() {
    const skillsSection = document.getElementById("skills");
    const skillFills = document.querySelectorAll(".skill-fill");

    function fillBars() {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos - 100) {
            skillFills.forEach((fill) => {
                const width = fill.getAttribute("data-width");
                fill.style.transition = "width 2s ease-in-out";
                fill.style.width = width;
            });
            window.removeEventListener("scroll", fillBars);
        }
    }

    window.addEventListener("scroll", fillBars);
}

// Init App
function initApp() {
    const app = document.getElementById("app");
    app.appendChild(createHeader());
    app.appendChild(createHero());
    app.appendChild(createAbout());
    app.appendChild(createSkills());
    app.appendChild(createProjects());
    app.appendChild(createContact());
    app.appendChild(createFooter());

    // Sticky Navbar
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Skills animasiya
    animateSkills();
}

document.addEventListener("DOMContentLoaded", initApp);




