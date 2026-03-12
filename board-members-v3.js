class BoardMembers extends HTMLElement {
  connectedCallback() {
    const members = [
      {
        name: "Mariann Skar",
        role: "President",
        org: "",
        image: "https://static.wixstatic.com/media/5ded79_af84bfe0caea439db1bf8a1b951f4199~mv2.jpg/v1/crop/x_0,y_57,w_408,h_410/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.jpg"
      },
      {
        name: "Morten Skov Mogensen",
        role: "",
        org: "Blue Cross Denmark, Denmark",
        image: "https://static.wixstatic.com/media/5ded79_65069d79178144e0ba77ed864d4f9a4c~mv2.jpg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1731491323600.jpg"
      },
      {
        name: "Viljam Borrsenko",
        role: "",
        org: "Public Foundation of Hope, Estonia",
        image: "https://static.wixstatic.com/media/5ded79_4a62aa69d0d34691b4c00cd1f1d3d7e4~mv2.png/v1/crop/x_0,y_31,w_408,h_422/fill/w_210,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/85035269_1130891343909028_8153486685464690688_n-removebg-preview_edited.png"
      },
      {
        name: "Edva Jacobsen",
        role: "",
        org: "Blue Cross Faroe Islands, Faroe Islands",
        image: "https://static.wixstatic.com/media/5ded79_2eb4cb13f0154b10b4af8ec692587d1c~mv2.jpeg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image.jpeg"
      },
      {
        name: "Juha Mikkonen",
        role: "",
        org: "EHYT ry, Finland",
        image: "https://static.wixstatic.com/media/5ded79_9f9cd87b29314d1b916d7e73bc93068e~mv2.png/v1/fill/w_210,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mikkonen-Juha1.png"
      },
      {
        name: "Adalsteinn Gunnarsson",
        role: "",
        org: "IOGT Iceland, Iceland",
        image: "https://static.wixstatic.com/media/5ded79_28240f4d746142839de5f9728d9addb8~mv2.jpg/v1/fill/w_210,h_217,al_c,lg_1,q_80,enc_avif,quality_auto/Allalaaditud%20fail%20(1)_jfif.jpg"
      },
      {
        name: "Almers Ludviks",
        role: "",
        org: "Partneri Association, Latvia",
        image: "https://static.wixstatic.com/media/5ded79_30f8781485b14b8fa4cb2be5e7afb027~mv2.jpg/v1/crop/x_1,y_0,w_493,h_495/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Almers-Ludviks-wp.jpg"
      },
      {
        name: "Nijole Gostautaite Midttun",
        role: "",
        org: "NTAKK, Lithuania",
        image: "https://static.wixstatic.com/media/5ded79_5e28c37622df4e2fae1762f02b741f62~mv2.jpg/v1/fill/w_210,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/EO5i_-DWoAInts8.jpg"
      },
      {
        name: "Stig Erik Sørheim",
        role: "",
        org: "ACTIS, Norway",
        image: "https://static.wixstatic.com/media/5ded79_e090988dc1ac4f69943d67d9e68913ca~mv2.png/v1/fill/w_216,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image_edited.png"
      },
      {
        name: "Peter Moilanen",
        role: "",
        org: "SLAN, Sweden",
        image: "https://static.wixstatic.com/media/5ded79_010b3d590ce649949d343fe14d8a3793~mv2.png/v1/crop/x_0,y_28,w_408,h_410/fill/w_216,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PM2_Foto-Pierre-Andersson-800x1200__1_-removebg-preview.png"
      }
    ];

    const title = this.getAttribute("title") || "Board";

    const style = `
      :host {
        display: block;
        width: 100%;
        box-sizing: border-box;
        color: #1c1c1c;
        background: transparent;
      }

      *, *::before, *::after {
        box-sizing: border-box;
      }

      .board-wrap {
        width: 100%;
        max-width: 1320px;
        margin: 0 auto;
        padding: 56px 28px 36px;
      }

      .board-title {
        text-align: center;
        margin-bottom: 48px;
      }

      .board-title h2 {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(34px, 4vw, 52px);
        font-weight: 500;
        line-height: 1.08;
        letter-spacing: 0.02em;
        color: #1e1e1e;
      }

      .board-title .line {
        width: 34px;
        height: 3px;
        background: #1e1e1e;
        margin: 16px auto 0;
        border-radius: 999px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        column-gap: 28px;
        row-gap: 58px;
        align-items: start;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-width: 0;
      }

      .image-wrap {
        width: min(100%, 210px);
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        overflow: hidden;
        background: #e7e7e7;
        margin-bottom: 22px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
      }

      .image-wrap img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
      }

      .name {
        margin: 0 0 16px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(18px, 1.45vw, 21px);
        font-style: italic;
        font-weight: 400;
        line-height: 1.08;
        color: #1f1f1f;
        min-height: 2.3em;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 190px;
      }

      .meta {
        display: flex;
        flex-direction: column;
        gap: 7px;
        align-items: center;
        max-width: 190px;
      }

      .role {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        line-height: 1.3;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #111111;
      }

      .org {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        line-height: 1.35;
        letter-spacing: 0.01em;
        color: #111111;
        text-transform: uppercase;
      }

      @media (max-width: 900px) {
        .board-wrap {
          padding: 42px 20px 36px;
        }

        .board-title {
          margin-bottom: 38px;
        }

        .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 24px;
          row-gap: 42px;
        }

        .image-wrap {
          width: min(100%, 220px);
        }

        .name,
        .meta {
          max-width: 220px;
        }
      }

      @media (max-width: 560px) {
        .board-wrap {
          padding: 34px 16px 30px;
        }

        .board-title {
          margin-bottom: 30px;
        }

        .board-title h2 {
          font-size: clamp(28px, 8vw, 38px);
        }

        .grid {
          grid-template-columns: 1fr;
          row-gap: 34px;
        }

        .image-wrap {
          width: min(100%, 210px);
          margin-bottom: 18px;
        }

        .name {
          min-height: auto;
          margin-bottom: 12px;
          max-width: 230px;
        }

        .meta {
          max-width: 230px;
          gap: 6px;
        }

        .org,
        .role {
          font-size: 13px;
        }
      }
    `;

    const cards = members.map((member) => `
      <article class="card">
        <div class="image-wrap">
          <img src="${member.image}" alt="${member.name}" loading="lazy">
        </div>
        <h3 class="name">${member.name}</h3>
        <div class="meta">
          ${member.role ? `<p class="role">${member.role}</p>` : ``}
          ${member.org ? `<p class="org">${member.org}</p>` : ``}
        </div>
      </article>
    `).join("");

    this.innerHTML = `
      <style>${style}</style>
      <section class="board-wrap" aria-label="${title}">
        <div class="board-title">
          <h2>${title}</h2>
          <div class="line"></div>
        </div>
        <div class="grid">
          ${cards}
        </div>
      </section>
    `;
  }
}

customElements.define("board-members", BoardMembers);
