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
        createSlider([
          {
            html:`<img class="popup-media active" src="img/news-app.webp">`,
            title:"Nyheds-app",
            text:"Udvikling af <strong>UI/UX‑design</strong> til nyhedsapp med fokus på <strong>intuitiv navigation</strong>, tydeligt <strong>typografisk hierarki</strong> og en <strong>rolig læseoplevelse</strong>."
          },
          {
            html:`<img class="popup-media" src="img/studyplanner.webp">`,
            title:"Studyplanner",
            text:"Design af <strong>studieplanlægningsapp</strong> med fokus på <strong>struktur</strong>, <strong>overblik</strong> og en <strong>motiverende brugeroplevelse</strong> for studerende."
          },
          {
            html:`<img class="popup-media" src="img/foodhub.webp">`,
            title:"FoodHub",
            text:"Udvikling af <strong>API‑baseret madplatform</strong> med fokus på <strong>klar informationsstruktur</strong>, <strong>intuitiv navigation</strong> samt <strong>filtrering og sortering</strong> efter tid, sværhedsgrad og cuisine."
          }
        ]);
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
        createSlider([
          {
            html:`<img class="popup-media active" src="img/fika-web.webp">`,
            title:"Fika Roasters Website",
            text:"Udvikling af <strong>webdesign</strong> for Fika Roasters baseret på eksisterende <strong>brandidentitet</strong>. Fokus på <strong>rolig visuel æstetik</strong>, genkendelige brandfarver og <strong>intuitiv navigation</strong>."
          },
          {
            html:`<img class="popup-media" src="img/port-site.webp">`,
            title:"Tidligere Portfolio",
            text:"Portfolio‑website udviklet med fokus på <strong>layout</strong>, <strong>typografisk hierarki</strong> og tydelig <strong>projektpræsentation</strong>. Illustrationer og interface‑elementer er designet i <strong>Adobe Illustrator</strong>. <br><br><a href='https://clinquant-duckanoo-808aff.netlify.app/' target='_blank' class='site-link'>Se sitet her</a>"
          },
          {
            html:`<img class="popup-media" src="img/interactive-web.webp">`,
            title:"Interaktivt SVG-kort",
            text:"Udvikling af <strong>interaktivt SVG‑kort</strong> med fokus på <strong>brugerinteraktion</strong>, struktur og dynamiske elementer. Designet i <strong>Illustrator</strong> og gjort interaktivt med <strong>JavaScript</strong>. <br><br><a href='https://interactive-svg.netlify.app/' target='_blank' class='site-link'>Se sitet her</a>"
          },
          {
            html:`<img class="popup-media" src="img/visit.webp">`,
            title:"Assistens-app",
            text:"<strong>Informations- og præsentationsplatform</strong> for en kulturel app med <strong>klar informationsstruktur</strong> og <strong>brugervenlig</strong> navigation.<br><br><a href='https://kafton-assistens.netlify.app/' target='_blank' class='site-link'>Se sitet her</a>"
          },
          {
            html:`<img class="popup-media" src="img/ocd-web.webp">`,
            title:"OCD Website",
            text:"Website udviklet til <strong>formidling af OCD</strong> med fokus på <strong>overskuelig struktur</strong>, tydelig information og et <strong>roligt visuelt udtryk</strong> til et følsomt emne."
          }
        ]);
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
        createSlider([     
          {
            html:`<img class="popup-media" src="img/meta-some.webp">`,
            title:"Meta-annoncer",
            text:"Opsætning af <strong>Meta‑annoncer</strong> på Facebook og Instagram med fokus på <strong>målgrupper</strong>, <strong>segmentering</strong> og løbende <strong>performance‑analyse</strong> af kampagner."
          },  
          {
            html:`<img class="popup-media" src="img/mucki-some.webp">`,
            title:"Mucki Content",
            text:"Udvikling af <strong>SoMe‑content</strong> til Mucki Bar med fokus på <strong>visuel genkendelighed</strong>, farver og et <strong>brandudtryk</strong>, der styrker relationen til målgruppen."
          },
          {
            html:`<img class="popup-media" src="img/simgames-some.webp">`,
            title:"Simgames Content",
            text:"Udvikling af <strong>strategisk SoMe‑content</strong> med fokus på <strong>målgruppe</strong>, <strong>engagement</strong> og <strong>brandpositionering</strong>. Fotografier er brugt til at skabe en <strong>visuel fortælling</strong> omkring fællesskab og oplevelse."
          },
          {
            html:`<img class="popup-media active" src="img/fika.some.webp">`,
            title:"Fika Roasters SoMe",
            text:"Udvikling af <strong>SoMe‑univers</strong> for Fika Roasters med fokus på <strong>brandidentitet</strong>, <strong>Instagram‑grid</strong> og visuelle kampagneopslag, der skaber et <strong>sammenhængende brandudtryk</strong>."
          },
        ]);
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