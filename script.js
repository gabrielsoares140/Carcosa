/* ========================= */
/* INTRO                     */
/* ========================= */

const intro = document.getElementById("intro-screen");
const site = document.getElementById("site");

document
.getElementById("enterBtn")
.addEventListener("click",()=>{

    intro.style.opacity = "0";

    setTimeout(()=>{

        intro.style.display = "none";
        site.style.display = "flex";

    },1000);

});

/* ========================= */
/* NAVEGAÇÃO                 */
/* ========================= */

const buttons =
document.querySelectorAll(".menu-btn");

const pages =
document.querySelectorAll(".page");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const target =
        btn.dataset.section;

        pages.forEach(page=>{

            page.classList.remove("active");

        });

        buttons.forEach(button=>{

            button.classList.remove("active");

        });

        btn.classList.add("active");

        document
        .getElementById(target)
        .classList.add("active");

    });

});

/* ========================= */
/* VISUALIZADOR DE LIVROS    */
/* ========================= */

const viewer =
document.getElementById("history-viewer");

const historyTitle =
document.getElementById("historyTitle");

const historySubtitle =
document.getElementById("historySubtitle");

const historyText =
document.getElementById("historyText");

/* ========================= */
/* GERAR LIVROS              */
/* ========================= */

const grid =
document.querySelector(".library-grid");

if(grid && typeof books !== "undefined"){

    for(const id in books){

        const book = books[id];

        grid.innerHTML += `

            <div
            class="history-book"
            data-book="${id}">

                <div class="book-icon">
                    ${book.icon}
                </div>

                <h3>
                    ${book.title}
                </h3>

                <span>
                    ${book.era}
                </span>

            </div>

        `;

    }

}

/* ========================= */
/* ABRIR LIVRO               */
/* ========================= */

document.addEventListener("click",(event)=>{

    const card =
    event.target.closest(".history-book");

    if(!card) return;

    const id =
    card.dataset.book;

    const book =
    books[id];

    if(!book) return;

    historyTitle.innerHTML =
    book.title;

    historySubtitle.innerHTML =
    book.subtitle;

    historyText.innerHTML =
    book.content;

    viewer.style.display =
    "block";

});

/* ========================= */
/* FECHAR LIVRO              */
/* ========================= */

document
.getElementById("closeViewer")
.addEventListener("click",()=>{

    viewer.style.display =
    "none";

});

/* ========================= */
/* PERSONAGENS               */
/* ========================= */

const charViewer =
document.getElementById("character-viewer");

const charTitle =
document.getElementById("characterTitle");

const charStory =
document.getElementById("characterStory");

document
.querySelectorAll(".open-character")
.forEach(card=>{

    card.addEventListener("click",()=>{

        const id =
        card.dataset.character;

        if(
            typeof personagens === "undefined" ||
            !personagens[id]
        ){
            return;
        }

        charTitle.innerHTML =
        personagens[id].nome;

        charStory.innerHTML =
        personagens[id].historia;

        charViewer.style.display =
        "block";

    });

});

/* ========================= */
/* FECHAR PERSONAGEM         */
/* ========================= */

document
.getElementById("closeCharacter")
.addEventListener("click",()=>{

    charViewer.style.display =
    "none";

});

/* ========================= */
/* PESQUISA DE LIVROS        */
/* ========================= */

const search =
document.getElementById("searchBook");

if(search){

    search.addEventListener("input",()=>{

        const value =
        search.value.toLowerCase();

        document
        .querySelectorAll(".history-book")
        .forEach(book=>{

            const title =
            book.innerText.toLowerCase();

            book.style.display =
            title.includes(value)
            ? "block"
            : "none";

        });

    });

}