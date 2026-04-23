document.addEventListener("DOMContentLoaded", () => {

  /* ======================================================
     TOOL HOVER
  ====================================================== */

  const tools = document.querySelectorAll('.tool-zone');
  const tooltip = document.createElement('div');

  Object.assign(tooltip.style, {
    position: 'fixed',
    background: '#111',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    pointerEvents: 'none',
    opacity: '0',
    transition: 'opacity .2s ease',
    zIndex: '9999'
  });

  document.body.appendChild(tooltip);

  tools.forEach(tool => {
    tool.addEventListener('mouseenter', () => {
      tooltip.textContent = tool.dataset.name || "";
      tooltip.style.opacity = 1;
    });

    tool.addEventListener('mousemove', e => {
      tooltip.style.left = e.clientX + 15 + 'px';
      tooltip.style.top = e.clientY + 15 + 'px';
    });

    tool.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
  });


  /* ======================================================
     SKILLS ACCORDION
  ====================================================== */

  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(item => {
    const btn = item.querySelector('.skill-pill');
    const symbol = item.querySelector('.skill-symbol');

    if (!btn) return;

    btn.addEventListener('click', () => {

      skillItems.forEach(el => {
        if (el !== item) {
          el.classList.remove('open');
          const otherSymbol = el.querySelector('.skill-symbol');
          if (otherSymbol) otherSymbol.textContent = '+';
        }
      });

      item.classList.toggle('open');

      if (symbol) {
        symbol.textContent = item.classList.contains('open') ? '−' : '+';
      }
    });
  });


  /* ======================================================
     PROJECT POPUP SYSTEM
  ====================================================== */

  const cards = document.querySelectorAll(".project-card");
  const popup = document.getElementById("projectPopup");
  const popupClose = document.getElementById("popupClose");
  const popupContent = document.getElementById("popupContent");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      const type = card.dataset.project;
      const cacheKey = "popup_" + type;
      const cached = sessionStorage.getItem(cacheKey);

      // Use cache for static popups (not sliders)
      if (cached && type !== "motion" && type !== "illustration") {
        popupContent.innerHTML = cached;
        popup.classList.add("active");
        return;
      }
      const title = card.querySelector(".project-label").innerText;

      popupContent.innerHTML = "";

      if(type === "motion"){
        createSlider([
          `<video class="popup-media active" muted loop autoplay playsinline>
             <source src="video/ae-video.mp4" type="video/mp4">
           </video>`,

          `<video class="popup-media" muted loop autoplay playsinline>
             <source src="video/me.webm" type="video/webm">
           </video>`,

          `<video class="popup-media" muted loop autoplay playsinline>
             <source src="video/chill-video.mp4" type="video/mp4">
           </video>`,
          `<video class="popup-media" muted loop autoplay playsinline>
             <source src="video/mac-ae.mp4" type="video/mp4">
           </video>`
        ]);
      }

      else if(type === "ui"){
        popupContent.innerHTML = `
          <div class="popup-static">

            <div class="popup-header">
              <div class="popup-icon">
                <img src="img/pintool.svg" style="width:32px;height:32px;">
              </div>
              <div>
                <h2 class="popup-main-title">UI/UX design</h2>
                <p class="popup-intro">
                 Jeg arbejder med UI/UX design med fokus på brugervenlighed, struktur og visuel kvalitet. Jeg har erfaring med at udvikle wireframes, prototyper og færdige interfaces i værktøjer som Figma, og jeg har arbejdet med brugerflows, informationsarkitektur og usability tests for at skabe bedre digitale oplevelser.
                </p>
              </div>
            </div>

            <div class="popup-grid">

              <div class="popup-col">
                <h4><img src="img/kompetencer.png" class="section-icon">MINE KOMPETENCER</h4>

                <ul class="checklist">
                  <li>Brugerindsigt & adfærdsanalyse</li>
                  <li>Persuasive designoptimering</li>
                  <li>Wireframes, prototyper & interaktionsdesign</li>
                  <li>Brugerflows & informationsarkitektur</li>
                  <li>Usability tests & datadrevet optimering</li>
                </ul>

                <h4>
                  <img src="img/leverance.png" class="section-icon"> VÆRKTØJER
                </h4>

                <div class="popup-tags">
                  <span>Figma</span>
                  <span>FigJam</span>
                  <span>Photoshop</span>
                  <span>Illustrator</span>
                  <span>Google Lighthouse</span>
                </div>
              </div>

              <div class="popup-col">
                <h4 style="color:#e78caf;">
                  DESIGNPRINCIPPER
                </h4>

                <div class="ui-principles">
                  <div>
                    <strong>Brugerfokus</strong>
                    <p>Tydelig struktur og nem navigation for hurtigt overblik.</p>
                  </div>
                  <div>
                    <strong>Enkelt & intuitivt</strong>
                    <p>Rent layout og klart hierarki, der er let at scanne.</p>
                  </div>
                  <div>
                    <strong>Iterativ proces</strong>
                    <p>Løbende test og justering for bedre flow og UX.</p>
                  </div>
                </div>

                <h4 style="color:#e78caf; margin-top:20px;">FARVER</h4>

                <div class="ui-colors" style="margin-top:10px;">
                  <span style="background:#e78caf"></span>
                  <span style="background:#f8e4ea"></span>
                  <span style="background:#111"></span>
                  <span style="background:#666"></span>
                  <span style="background:#f7f7f7"></span>
                </div>

                <h4 style="color:#e78caf; margin-top:20px;">TYPOGRAFI</h4>
                <p><strong>Poppins</strong></p>
                                <p class="ui-typography-text"> overskrift, brødtekst og accent</p>
              </div>

            </div>

           
            <div class="project-grid web-projects-box">

              <h4 style="color:#e78caf; margin-bottom:10px;">PROJEKTEKSEMPLER</h4>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/news-app.webp">
                </div>
                <div class="project-content">
                  <h3>Nyhedsapp</h3>
                  <span class="project-type">Mobil UI/UX design</span>
                  <p>Design af nyhedsapp med fokus på struktur, læsbarhed og brugerflow.</p>
                  <div class="project-tags">
                    <span>UI Design</span>
                    <span>UX</span>
                    <span>Prototype</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/studyplanner.webp">
                </div>
                <div class="project-content">
                  <h3>Studyplanner</h3>
                  <span class="project-type">App design & struktur</span>
                  <p>Planlægningsapp med fokus på overblik, struktur og brugervenlig navigation.</p>
                  <div class="project-tags">
                    <span>UX</span>
                    <span>Flow</span>
                    <span>Wireframes</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/foodhub.webp">
                </div>
                <div class="project-content">
                  <h3>FoodHub</h3>
                  <span class="project-type">Web app & UX flows</span>
                  <p>Webapp med fokus på brugerflows, informationsarkitektur og interaktion.</p>
                  <div class="project-tags">
                    <span>UX</span>
                    <span>IA</span>
                    <span>Brugercentreret</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        `;
        sessionStorage.setItem(cacheKey, popupContent.innerHTML);
      }

     else if(type === "branding"){
  popupContent.innerHTML = `
    <div class="popup-static">

      <div class="popup-header">
        <div class="popup-icon">
          <img src="img/pintool.svg" style="width:32px;height:32px;">
        </div>
        <div>
          <h2 class="popup-main-title">Branding</h2>
          <p class="popup-intro">
         Udvikling af visuelle identiteter med fokus på koncept, målgruppe og et sammenhængende brandunivers.
          </p>
        </div>
      </div>

      <div class="project-grid web-projects-box">

        <h4 style="color:#e78caf; margin-bottom:10px;">PROJEKTEKSEMPLER</h4>

        <div class="project-card">
          <div class="project-image">
            <img src="img/toki.webp">
          </div>
          <div class="project-content">
            <h3>Toki</h3>
            <span class="project-type">Branding & identitet</span>
            <p>Visuel identitet med fokus på strategisk positionering inden for bæredygtig emballage.</p>
            <div class="project-tags">
              <span>Branding</span>
              <span>Strategi</span>
              <span>Identitet</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="img/simgames.webp">
          </div>
          <div class="project-content">
            <h3>Simgames</h3>
            <span class="project-type">Branding & SoMe</span>
            <p>Visuel identitet og designkoncept målrettet en yngre, eventorienteret målgruppe.</p>
            <div class="project-tags">
              <span>Branding</span>
              <span>SoMe</span>
              <span>Koncept</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="img/visit.webp">
          </div>
          <div class="project-content">
            <h3>Visit kampagne</h3>
            <span class="project-type">Koncept & kampagne</span>
            <p>Konceptudvikling med fokus på autentiske oplevelser og kulturelt engagement.</p>
            <div class="project-tags">
              <span>Koncept</span>
              <span>Kampagne</span>
              <span>Storytelling</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="img/berrichi.webp">
          </div>
          <div class="project-content">
            <h3>Berrichi</h3>
            <span class="project-type">SoMe & branding</span>
            <p>Udvikling af visuelt content og vedligeholdelse af brandets digitale udtryk.</p>
            <div class="project-tags">
              <span>Branding</span>
              <span>Content</span>
              <span>WordPress</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="img/coffee.webp">
          </div>
          <div class="project-content">
            <h3>Fika Roasters</h3>
            <span class="project-type">Branding & visuel stil</span>
            <p>Udvikling af roligt og æstetisk brandunivers med fokus på café- og hverdagsliv.</p>
            <div class="project-tags">
              <span>Branding</span>
              <span>Visuel stil</span>
              <span>Identitet</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
  sessionStorage.setItem(cacheKey, popupContent.innerHTML);
}

      else if(type === "web"){
        popupContent.innerHTML = `
          <div class="popup-static">
      
            <div class="popup-header">
              <div class="popup-icon">
                <img src="img/code.svg" style="width:32px;height:32px;">
              </div>
              <div>
                <h2 class="popup-main-title">Webudvikling</h2>
                <p class="popup-intro">
                Udvikling af websites og webshops med fokus på performance, struktur og brugeroplevelse. Arbejder med alt fra opsætning i WordPress og WooCommerce til frontend-udvikling, optimering og vedligeholdelse af eksisterende løsninger.
                </p>
              </div>
            </div>
            <div class="popup-grid">
      
              <div class="popup-col">
                <h4><img src="img/kompetencer.png" class="section-icon"> KOMPETENCER</h4>
      
                <div class="skill-row">
                  <img src="img/wp.svg" class="skill-icon">
                  <div>
                    <strong>WordPress</strong>
                    <p>WordPress-løsninger med fokus på brugervenlighed og struktur.</p>
                  </div>
                </div>
      
                <div class="skill-row">
                  <img src="img/woo.svg" class="skill-icon">
                  <div>
                    <strong>WooCommerce</strong>
                    <p>Webshops med produkter, betaling og simpelt købsflow.</p>
                  </div>
                </div>
      
                <div class="skill-row">
                  <img src="img/frontend.svg" class="skill-icon">
                  <div>
                    <strong>Frontend</strong>
                    <p>Responsive interfaces med HTML, CSS, JavaScript, Astro og Supabase.</p>
                  </div>
                </div>
      
                <div class="skill-row">
                  <img src="img/speed.svg" class="skill-icon">
                  <div>
                    <strong>Performance & SEO</strong>
                    <p>Performance og SEO-optimering for bedre hastighed og synlighed.</p>
                  </div>
                </div>
      
              </div>
      
              <div class="popup-col">
                <h4><img src="img/leverance.png" class="section-icon"> HVAD JEG LEVERER</h4>
      
                <ul class="checklist">
                  <li>Skræddersyede web- og shopløsninger</li>
                  <li>Brugervenligt og responsivt design</li>
                  <li>Fokus på performance og konvertering</li>
                  <li>Moderne teknologier og integrationer</li>
                  <li>Vedligeholdelse og løbende optimering</li>
                </ul>
      
                <h4>TEKNOLOGIER</h4>
      
                <div class="popup-tags">
                  <span>WordPress</span>
                  <span>WooCommerce</span>
                  <span>Elementor</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                  <span>Astro</span>
                  <span>Supabase</span>
                </div>
      
              </div>
      
            </div>
      
            <div class="project-grid web-projects-box">
              <h4 style="color:#e78caf; margin-bottom:10px;">PROJEKTEKSEMPLER</h4>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/svalerne.webp">
                </div>
                <div class="project-content">
                  <h3>Foreningen Svalerne</h3>
                  <span class="project-type">Woocommerce website</span>
                  <p>Redesignet webshop udviklet i WordPress med WooCommerce.</p>
                  <div class="project-tags">
                    <span>WordPress</span>
                    <span>WooCommerce</span>
                    <span>UX/UI redesign</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/fikaroasters.webp">
                </div>
                <div class="project-content">
                  <h3>Fika Roasters</h3>
                  <span class="project-type">WordPress website</span>
                  <p>Website med fokus på et tydeligt koncept omkring kaffe og kage, hvor struktur og design understøtter brandets univers.</p>
                  <div class="project-tags">
                    <span>WordPress</span>
                    <span>Design</span>
                    <span>UX/UI</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/simgamesweb.webp">
                </div>
                <div class="project-content">
                  <h3>Simgames</h3>
                  <span class="project-type">Astro website</span>
                  <p>Website bygget som et tydeligt spilunivers med minigolf i fokus, udviklet i Astro med integration af backend via Supabase API’er.</p>
                  <div class="project-tags">
                    <span>Astro</span>
                    <span>Supabase</span>
                    <span>API integration</span>
                  </div>
                </div>
              </div>

            </div>
      
          </div>
        `;
        sessionStorage.setItem(cacheKey, popupContent.innerHTML);
        popup.classList.add("active");
      }

      else if(type === "illustration"){
        createSlider([
          `<img class="popup-media active" src="img/ai1.webp">`,
          `<img class="popup-media" src="img/ai2.webp">`,
          `<img class="popup-media" src="img/ai3.webp">`,
          `<img class="popup-media" src="img/ai4.webp">`,
          `<img class="popup-media" src="img/ai5.webp">`,
          `<img class="popup-media" src="img/ai6.webp">`,
          `<img class="popup-media" src="img/ai7.webp">`,
          `<img class="popup-media" src="img/ai8.webp">`,
          `<img class="popup-media" src="img/ai9.webp">`,
          `<img class="popup-media" src="img/ai10.webp">`,
          `<img class="popup-media" src="img/ai11.webp">`,
          `<img class="popup-media" src="img/ai12.webp">`,
          `<img class="popup-media" src="img/ai13.webp">`,
          `<img class="popup-media" src="img/ai14.webp">`,
            `<img class="popup-media" src="img/ai15.webp">`,
              `<img class="popup-media" src="img/ai16.webp">`,
                `<img class="popup-media" src="img/ai17.webp">`,
                  `<img class="popup-media" src="img/ai18.webp">`
        ]);
      }

      else if(type === "some"){
        popupContent.innerHTML = `
          <div class="popup-static">

            <div class="popup-header">
              <div class="popup-icon">
                <img src="img/heart.svg" style="width:35px;height:35px;">
              </div>
              <div>
                <h2 class="popup-main-title">SoMe & content</h2>
                <p class="popup-intro">
                Arbejder med sociale medier med fokus på synlighed, målretning og performance. Erfaring med opsætning og optimering af Meta-annoncer, udvikling af content samt analyse af kampagner for at skabe målbare resultater.
                </p>
              </div>
            </div>

            <div class="popup-grid">

              <div class="popup-col">
                <h4><img src="img/kompetencer.png" class="section-icon"> DET JEG TILBYDER</h4>

             <ul class="checklist">
                  <li>Opsætning og håndtering af Meta-annoncer</li>
                  <li>Målretning og segmentering af målgrupper</li>
                  <li>Optimering af kampagner og performance</li>
                  <li>Udarbejdelse af annonceindhold</li>
                  <li>Analyse, tracking og rapportering</li>
                </ul>
              </div>

              <div class="popup-col">
                <h4><img src="img/leverance.png" class="section-icon"> VÆRKTØJER</h4>

                <div class="popup-tags">
                  <span>Meta Business Suite</span>
                  <span>Canva</span>
                  <span>CapCut</span> 
                  <span>ChatGPT</span>
                  <span>Adobe After Effects</span>
                  <span>Adobe Firefly</span>
                  <span>Adobe Photoshop</span>
                 
                </div>

                <h4 style="margin-top:20px;">
                  <img src="img/medier.png" class="section-icon"> MEDIER
                </h4>

                <div class="popup-tags">
                  <span>Instagram</span>
                  <span>Facebook</span>
                  <span>YouTube</span>
                  <span>TikTok</span>
                </div>
              </div>

            </div>

       
            <div class="project-grid web-projects-box">

              <h4 style="color:#e78caf; margin-bottom:10px;">PROJEKTEKSEMPLER</h4>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/meta-some.webp">
                </div>
                <div class="project-content">
                  <h3>Meta-annoncer</h3>
                  <span class="project-type">Facebook & Instagram ads</span>
                  <p>Udvikling og opsætning af målrettede annoncer med fokus på synlighed og konvertering.</p>
                  <div class="project-tags">
                    <span>Meta Ads</span>
                    <span>Strategi</span>
                    <span>Performance</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/mucki-some.webp">
                </div>
                <div class="project-content">
                  <h3>Mucki Content</h3>
                  <span class="project-type">SoMe content & branding</span>
                  <p>Udvikling af visuelt content og branding med fokus på genkendelighed og engagement.</p>
                  <div class="project-tags">
                    <span>Content</span>
                    <span>Branding</span>
                    <span>Visuals</span>
                  </div>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <img src="img/simgames-some.webp">
                </div>
                <div class="project-content">
                  <h3>Simgames</h3>
                  <span class="project-type">Strategisk content</span>
                  <p>Strategisk planlægning og content med fokus på målgruppe og engagement.</p>
                  <div class="project-tags">
                    <span>Strategy</span>
                    <span>Content</span>
                    <span>Engagement</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        `;
        sessionStorage.setItem(cacheKey, popupContent.innerHTML);
      }

      popup.classList.add("active");
    });
  });


  function createSlider(items){

    popupContent.innerHTML += `
      <div class="popup-slider">
        <button class="popup-arrow left">‹</button>
        <div class="popup-slider-track"></div>
        <button class="popup-arrow right">›</button>
        <div class="popup-overlay-text">
          <h3 class="popup-overlay-title"></h3>
          <p class="popup-overlay-description"></p>
        </div>
      </div>
    `;

    const track = popupContent.querySelector(".popup-slider-track");
    const overlayTitle = popupContent.querySelector(".popup-overlay-title");
    const overlayDescription = popupContent.querySelector(".popup-overlay-description");

    let current = 0;
    let media = [];
    const left = popupContent.querySelector(".popup-arrow.left");
    const right = popupContent.querySelector(".popup-arrow.right");

    function renderSlide(i){

      // Inject slide only if not already created
      if (!track.children[i]) {
        const slideHTML = typeof items[i] === "string"
          ? items[i]
          : items[i].html;

        track.insertAdjacentHTML("beforeend", slideHTML);
      }

      media = track.querySelectorAll(".popup-media");

      media.forEach(m => m.classList.remove("active"));
      if (media[i]) media[i].classList.add("active");

      if(typeof items[i] === "object"){
        if(overlayTitle) overlayTitle.textContent = items[i].title || "";
        if(overlayDescription) overlayDescription.innerHTML = items[i].text || "";
      } else {
        if(overlayTitle) overlayTitle.textContent = "";
        if(overlayDescription) overlayDescription.innerHTML = "";
      }
    }


    renderSlide(0);

    right.addEventListener("click", () => {
      current = (current + 1) % items.length;
      renderSlide(current);
    });

    left.addEventListener("click", () => {
      current = (current - 1 + items.length) % items.length;
      renderSlide(current);
    });
  }


  if(popupClose){
    popupClose.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }

  if(popup){
    popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup-overlay")) {
        popup.classList.remove("active");
      }
    });
  }

});

