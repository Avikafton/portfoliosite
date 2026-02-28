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
            text:"<strong>Fiktiv case:</strong> Udkast til UI/UX-design af nyhedsapp med fokus på intuitiv navigation, <br> tydeligt typografisk hierarki og en rolig, brugervenlig læseoplevelse."
          },
          {
            html:`<img class="popup-media" src="img/studyplanner.webp">`,
            title:"Studyplanner",
            text:"<strong>Fiktiv case:</strong> Design af studieplanlægningsapp med fokus på struktur, overblik og en motiverende brugeroplevelse for studerende eller individer med strukturvanskeligheder."
          },
          {
            html:`<img class="popup-media" src="img/foodhub.webp">`,
            title:"FoodHub",
            text:"<strong>Case:</strong> API-genereret madplatform til inspiration – med fokus på intuitiv navigation, klar informationsstruktur samt filtering og sortering efter sværhedsgrad, tid og cuisine i menuen."
          }
        ]);
      }

      else if(type === "branding"){
        createSlider([
          {
            html:`<img class="popup-media active" src="img/toki.webp">`,
            title:"Toki",
                       text:"<strong>Case:</strong> Udvikling af visuel identitet for virksomhed uden eksisterende designlinje <br> – med fokus på strategisk positionering inden for bæredygtig emballage."
          },
          {
            html:`<img class="popup-media" src="img/simgames.webp">`,
            title:"Simgames – The Clubhouse",
            text:"<strong>Eksamensprojekt</strong> (2. semester) i samarbejde med Simgolf og deres søstersite, Simgames. <br> Strategisk udvikling af visuel identitet og designkoncept målrettet en yngre, eventorienteret målgruppe."
          },
          {
            html:`<img class="popup-media" src="img/visit.webp">`,
            title:"Visit kampagne",
            text:"<strong>Case:</strong> Konceptudvikling med fokus på autentiske oplevelser og kulturelt engagement for turister i København – herunder at inspirere besøgende til at opleve Assistens Kirkegården og de mange ikoniske navne, der er en del af stedets kulturarv."
          },
          {
            html:`<img class="popup-media" src="img/berrichi.webp">`,
            title:"Berrichi",
            text:"<strong>Tidligere job:</strong> SoMe-ansvarlig og løbende opdatering af WordPress-hjemmeside for Berrichi Danmark. Fokus på at matche det urbane miljø i København og brandets nordiske æstetik."
          },
          {
            html:`<img class="popup-media" src="img/coffee.webp">`,
            title:"Fika Roasters",
            text:"<strong>Fiktiv case:</strong> Kaffebrand udviklet til det københavnske byliv med fokus på en neutral, <br> earthy æstetik og et inspirerende rum for både den travle hverdag og for studerende, der søger ro."
          }
        ]);
      }

      else if(type === "web"){
        createSlider([
          {
            html:`<img class="popup-media active" src="img/fika-web.png">`,
            title:"Fika Roasters Website",
            text:"<strong>Fiktiv case:</strong> Videreudvikling af Fika Roasters i form af webdesign baseret på tidligere udviklet brandidentitet. Designet tager udgangspunkt i eksisterende farver og stil med fokus på moderne, rolig æstetik og intuitiv navigation."
          },
          {
            html:`<img class="popup-media" src="img/port-site.webp">`,
            title:"Tidligere Portfolio",
            text:"<strong>Eksamensprojekt (1. semester):</strong> Portfolio-website med fokus på layout, typografisk hierarki og projektpræsentation. Alle illustrationer (MacBook, dockpanel m.m.) er tegnet i Adobe Illustrator. <br><br><a href='https://clinquant-duckanoo-808aff.netlify.app/' target='_blank' class='site-link'>Se sitet her</a>"
          },
          {
            html:`<img class="popup-media" src="img/interactive-web.webp">`,
            title:"Interaktivt SVG-kort",
            text:"<strong>Case:</strong> Interaktivt kort udviklet i SVG med fokus på struktur, attributter og brugerinteraktion. Kortet er designet i Illustrator og gjort dynamisk med JavaScript. <br><br><a href='https://interactive-svg.netlify.app/' target='_blank' class='site-link'>Se sitet her</a>"
          },
          {
            html:`<img class="popup-media" src="img/visit.webp">`,
            title:"Assistens-app",
            text:"<strong>Case:</strong> Website udviklet som præsentations- og informationsplatform for en kulturel Assistens-app. <br><br><a href='https://kafton-assistens.netlify.app/' target='_blank' class='site-link'>Se sitet her</a>"
          },
          {
            html:`<img class="popup-media" src="img/ocd-web.webp">`,
            title:"OCD Website",
            text:"<strong>Case – delopgave (1. semester):</strong> Website udviklet med formål at formidle OCD i øjenhøjde. Fokus på tydelig struktur, overskuelig informationsopbygning og et roligt visuelt udtryk, der understøtter emnets følsomme karakter."
          }
        ]);
      }

      else if(type === "illustration"){
        createSlider([
          `<img class="popup-media active" src="img/ai1.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai2.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai3.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai4.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai5.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai6.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai7.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai8.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai9.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai10.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai11.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai12.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai13.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai14.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai15.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai16.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai17.webp" loading="lazy">`,
          `<img class="popup-media" src="img/ai18.webp" loading="lazy">`
        ]);
      }

      else if(type === "some"){
        createSlider([     
          {
            html:`<img class="popup-media" src="img/meta-some.webp">`,
            title:"Meta-annoncer",
            text:"<strong>Færdighed:</strong> Jeg har grundlæggende forståelse for udarbejdelse af betalte kampagner på Facebook og Instagram – herunder opsætning af målgrupper, enkel opdeling og segmentering samt basal annonceadministration. Jeg har desuden kendskab til, hvordan man tilpasser budskaber til forskellige målgrupper og følger med i kampagners performance."
          },  
          {
            html:`<img class="popup-media" src="img/mucki-some.webp">`,
            title:"Mucki Content",
            text:"<strong>Case:</strong> Fra tidligere arbejde i feltet, hvor jeg hjalp Mucki Bar med at opbygge deres Instagram-platform. Her ses et udsnit af de opslag, jeg har udviklet med fokus på genkendelighed, farver og et visuelt udtryk, der understøtter brandets identitet og målgruppe."
          },
          {
            html:`<img class="popup-media" src="img/simgames-some.webp">`,
            title:"Simgames Content",
            text:"<strong>Eksamenscase:</strong> Strategisk udviklet SoMe-content med fokus på målgruppe, engagement og brandpositionering. Der er særligt arbejdet med fotografier i relationel kontekst for at skabe nærvær, fællesskabsfølelse og en visuel fortælling, der understøtter brandets identitet."
          },
          {
            html:`<img class="popup-media active" src="img/fika.some.webp">`,
            title:"Fika Roasters SoMe",
            text:"<strong>Fiktiv case:</strong> Eksempeludkast af visuelt SoMe-indhold til Fika Roasters med fokus på brandidentitet. Indholdet består af Instagram-grid, kampagneopslag og visuelle promotion-posts, hvor farver, typografi og billedstil er afstemt for at skabe et sammenhængende og genkendeligt univers."
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

    track.innerHTML = items.map(i => typeof i === "string" ? i : i.html).join("");

    let current = 0;
    const media = track.querySelectorAll(".popup-media");
    const left = popupContent.querySelector(".popup-arrow.left");
    const right = popupContent.querySelector(".popup-arrow.right");

    function show(i){
      media.forEach(m => m.classList.remove("active"));
      if(media[i]) media[i].classList.add("active");

      if(typeof items[i] === "object"){
        if(overlayTitle) overlayTitle.textContent = items[i].title || "";
        if(overlayDescription) overlayDescription.innerHTML = items[i].text || "";
      }
    }

    show(0);

    right.addEventListener("click", () => {
      current = (current + 1) % media.length;
      show(current);
    });

    left.addEventListener("click", () => {
      current = (current - 1 + media.length) % media.length;
      show(current);
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