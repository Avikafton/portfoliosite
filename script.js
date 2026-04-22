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
                <h2 class="popup-main-title">UI/UX</h2>
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

                <h4>VÆRKTØJER</h4>

                <div class="popup-tags">
                  <span>Figma</span>
                  <span>Adobe XD</span>
                  <span>Photoshop</span>
                  <span>Illustrator</span>
                  <span>Notion</span>
                  <span>Maze</span>
                </div>
              </div>

              <div class="popup-col">
                <h4><img src="img/leverance.png" class="section-icon"> PROJEKT EKSEMPLER</h4>

                <div class="project-grid">

                  <div class="project-card">
                    <img src="img/news-app.webp">
                    <p><strong>Nyhedsapp</strong><br>Mobil UI/UX design</p>
                  </div>

                  <div class="project-card">
                    <img src="img/studyplanner.webp">
                    <p><strong>Studyplanner</strong><br>App design & struktur</p>
                  </div>

                  <div class="project-card">
                    <img src="img/foodhub.webp">
                    <p><strong>FoodHub</strong><br>Web app & UX flows</p>
                  </div>

                </div>
              </div>

            </div>

            <div class="popup-ui-extra">

              <div class="ui-row">
                <h4 style="color:#e78caf;">DESIGNPRINCIPPER</h4>
                <div class="ui-principles">
                  <div>
                    <strong>Brugerfokus</strong>
                    <p>Design med udgangspunkt i brugerens behov.</p>
                  </div>
                  <div>
                    <strong>Enkelt & intuitivt</strong>
                    <p>Rent layout med tydelig struktur.</p>
                  </div>
                  <div>
                    <strong>Iterativ proces</strong>
                    <p>Test, feedback og løbende forbedringer.</p>
                  </div>
                </div>
              </div>

              <div class="ui-row">
                <h4 style="color:#e78caf; margin:0;">FARVER</h4>

                <div style="display:block;">

                  <div class="ui-colors" style="margin-top:10px;">
                    <span style="background:#e78caf"></span>
                    <span style="background:#f8e4ea"></span>
                    <span style="background:#111"></span>
                    <span style="background:#666"></span>
                    <span style="background:#f7f7f7"></span>
                  </div>

                </div>
              </div>

              <div class="ui-row">
                <h4 style="color:#e78caf;">TYPOGRAFI</h4>
                <p><strong>Poppins</strong> – overskrift, brødtekst og accent</p>
              </div>

            </div>

          </div>
        `;
      }

      else if(type === "branding"){
        createSlider([
          {
            html:`<img class="popup-media active" src="img/toki.webp">`,
            title:"Toki",
            text:"Udvikling af <strong>visuel identitet</strong> for virksomhed uden eksisterende designlinje <br> – med fokus på <strong>strategisk positionering</strong> inden for bæredygtig emballage."
          },
          {
            html:`<img class="popup-media" src="img/simgames.webp">`,
            title:"Simgames – The Clubhouse",
            text:"<strong>Visuel identitet</strong> og <strong>designkoncept</strong> for Simgames på sociale medier og website i samarbejde med Simgolf - målrettet en yngre, eventorienteret målgruppe med fokus på et <strong>socialt og energisk udtryk</strong>."
          },
          {
            html:`<img class="popup-media" src="img/visit.webp">`,
            title:"Visit kampagne",
            text:"<strong>Konceptudvikling</strong> med fokus på <strong>autentiske oplevelser</strong> og <strong>kulturelt engagement</strong> for turister i København – herunder at inspirere besøgende til at opleve <strong>Assistens Kirkegården</strong> og de mange ikoniske navne, der er en del af stedets <strong>kulturarv</strong>."
          },
          {
            html:`<img class="popup-media" src="img/berrichi.webp">`,
            title:"Berrichi",
            text:"Udvikling og vedligeholdelse af <strong>SoMe-indhold</strong> samt opdatering af <strong>WordPress-website</strong> for Berrichi Danmark. Fokus på at understøtte <strong>brandets nordiske æstetik</strong> og et <strong>urbant visuelt udtryk</strong> målrettet miljøet i København."
          },
          {
            html:`<img class="popup-media" src="img/coffee.webp">`,
            title:"Fika Roasters",
            text:"Udvikling af <strong>brandidentitet</strong> og <strong>visuelt univers</strong> for kaffebrand i det københavnske byliv – med <strong>neutral, earthy æstetik</strong> og et <strong>roligt, inspirerende brandrum</strong> for hverdag og studieliv."
          }
        ]);
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
                <h2 class="popup-main-title">Sociale Medier</h2>
                <p class="popup-intro">
                  Jeg hjælper virksomheder med at skabe synlighed, engagere deres målgruppe
                  og opbygge stærke fællesskaber gennem kreativt indhold og strategisk planlægning.
                </p>
              </div>
            </div>

            <div class="popup-grid">

              <div class="popup-col">
                <h4><img src="img/kompetencer.png" class="section-icon"> DET JEG TILBYDER</h4>

                <ul class="checklist">
                  <li>Indholdsplanlægning</li>
                  <li>Opsætning og optimering af profiler</li>
                  <li>SoMe-content (billeder, grafik, reels)</li>
                  <li>Community management</li>
                  <li>Analyse og rapportering</li>
                </ul>

                <h4>VÆRKTØJER</h4>

                <div class="popup-tags">
                  <span>Meta Business Suite</span>
                  <span>Canva</span>
                  <span>CapCut</span>
                  <span>Later</span>
                  <span>Google Analytics</span>
                  <span>Metricool</span>
                  <span>ChatGPT</span>
                </div>
              </div>

              <div class="popup-col">
                <h4><img src="img/leverance.png" class="section-icon"> PROJEKT EKSEMPLER</h4>

                <div class="project-grid">

                  <div class="project-card">
                    <img src="img/meta-some.webp">
                    <p><strong>Meta-annoncer</strong><br>Facebook & Instagram ads</p>
                  </div>

                  <div class="project-card">
                    <img src="img/mucki-some.webp">
                    <p><strong>Mucki Content</strong><br>SoMe content & branding</p>
                  </div>

                  <div class="project-card">
                    <img src="img/simgames-some.webp">
                    <p><strong>Simgames</strong><br>Strategisk content</p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        `;
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