// ===== DECANTS =====
const decants = [
    {name:"9AM DIVE", brand:"AFNAN", img:"9AMDive.jpeg", price:12000, zoom:1.3, position:"50% 72%"},
    {name:"ANSAAM SILVER", brand:"LATTAFA", img:"AnsaamSilver.jpeg", price:12000, zoom:1.1, position:"50% 58%"},
    {name:"9PM ELIXIR", brand:"AFNAN", img:"9PMElixir.jpeg", price:13000, zoom:1.3, position:"50% 75%"},
    {name:"AL NOBLE SAFEER", brand:"LATTAFA", img:"AlNobleSafeer.jpeg", price:11000, zoom:1.2, position:"50% 55%"},
    {name:"AL QIAM GOLD", brand:"LATTAFA", img:"AlQiamGold.jpeg", price:11500, zoom:1.1, position:"50% 65%"},
    {name:"ASAD", brand:"LATTAFA", img:"Asad.jpeg", price:12000, zoom:1.3, position:"50% 75%"},
    {name:"ASAD BOURBON", brand:"LATTAFA", img:"AsadBourbon.jpeg", price:13000, zoom:1.5, position:"50% 65%"},
    {name:"EROS FLAME", brand:"VERSACE", img:"ErosFlame.jpeg", price:15000, zoom:1.5, position:"50% 70%"},
    {name:"EXTRAVAGANT LOVER", brand:"MAISON ALHAMBRA", img:"Extravagantlover.jpeg", price:11000, zoom:1.4, position:"50% 75%"},
    {name:"FAKHAR PLATIN", brand:"LATTAFA", img:"FakharPlatin.jpeg", price:12000, zoom:1.3, position:"50% 50%"},
    {name:"HAWAS ICE", brand:"RASASI", img:"HawasIce.jpeg", price:15000, zoom:1.4, position:"50% 70%"},
    {name:"HIS CONFESSION", brand:"MAISON ALHAMBRA", img:"HisConfession.jpeg", price:11000, zoom:1.1, position:"50% 60%"},
    {name:"HONOR & GLORY", brand:"LATTAFA", img:"HonorGlory.jpeg", price:12000, zoom:1.3, position:"50% 70%"},
    {name:"INTENSE MAN", brand:"ARMAF", img:"IntenseMan.jpeg", price:16000, zoom:1.3, position:"50% 60%"},
    {name:"ISHQ AL SHUYUKH", brand:"LATTAFA", img:"IshqAlShuyukh.jpeg", price:11500, zoom:1.2, position:"50% 67%"},
    {name:"JASSOR", brand:"LATTAFA", img:"Jasoor.jpeg", price:11000, zoom:1.3, position:"50% 67%"},
    {name:"KHAMRAH QAHWA", brand:"LATTAFA", img:"KhamrahQahwa.jpeg", price:13000, zoom:1.5, position:"50% 70%"},
    {name:"MASHRABYA", brand:"LATTAFA", img:"Mashrabya.jpeg", price:11500, zoom:1.3, position:"50% 70%"},
    {name:"ODYSSEY AQUA", brand:"ARMAF", img:"OdysseyAqua.jpeg", price:12000, zoom:1.3, position:"50% 70%"},
    {name:"ODYSSEY LIMONI", brand:"ARMAF", img:"OdysseyLimoni.jpeg", price:12000, zoom:1.4, position:"50% 70%"},
    {name:"OUD FOR GLORY", brand:"LATTAFA", img:"OudForGlory.jpeg", price:13000, zoom:1.5, position:"50% 68%"},
    {name:"SALVO EDP", brand:"MAISON ALHAMBRA", img:"SalvoEDP.jpeg", price:11000, zoom:1.4, position:"50% 65%"},
    {name:"SCEPTRE MALACHITE", brand:"MAISON ALHAMBRA", img:"SceptreMalachite.jpeg", price:11500, zoom:1.3, position:"50% 70%"},
    {name:"SPECTRE GHOST", brand:"MAISON ALHAMBRA", img:"SpectreGhost.jpeg", price:11500, zoom:1.5, position:"50% 65%"},
    {name:"TERIAQ INTENSE", brand:"LATTAFA", img:"TeriaqIntense.jpeg", price:12000, zoom:1.3, position:"50% 75%"},
    {name:"THE KINGDOM", brand:"LATTAFA", img:"TheKingdom.jpeg", price:12000, zoom:1.4, position:"50% 72%"},
    {name:"TOY BOY", brand:"MOSCHINO", img:"ToyBoy.jpeg", price:15000, zoom:1.3, position:"50% 70%"},
    {name:"URBAN MAN ELIXIR", brand:"ARMAF", img:"UrbanManElixir.jpeg", price:12000, zoom:1.4, position:"50% 65%"},
    {name:"VICTORIOSO NERO", brand:"MAISON ALHAMBRA", img:"VictoriosoNero.jpeg", price:11000, zoom:1.4, position:"50% 66%"},
    {name:"WAJOOD", brand:"LATTAFA", img:"Wajood.jpeg", price:8500, zoom:1.4, position:"50% 77%"},
	{name:"AMBER OUD GOLD EDITION", brand:"AL HARAMAIN", img:"GoldEdition.jpeg", price:12000, zoom:1.3, position:"50% 67%"},
];

// ===== FRASCOS =====
const full = [
    {name:"9PM", brand:"AFNAN", img:"9pm.jpeg", price:90000},
    {name:"KHAMRAH", brand:"LATTAFA", img:"khamrah.jpeg", price:85000},
    {name:"ASAD", brand:"LATTAFA", img:"Asad.jpeg", price:80000},
    {name:"FAKHAR", brand:"LATTAFA", img:"fakhar.jpeg", price:78000},
    {name:"EROS", brand:"VERSACE", img:"eros.jpeg", price:120000},
    {name:"EROS FLAME", brand:"VERSACE", img:"erosflame.jpeg", price:120000},
    {name:"DYLAN BLUE", brand:"VERSACE", img:"dylanblue.jpeg", price:110000},
    {name:"TOY BOY", brand:"MOSCHINO", img:"toyboy.jpeg", price:100000},
    {name:"LIMONI", brand:"MAISON ALHAMBRA", img:"limoni.jpeg", price:70000},
    {name:"SCEPTRE MALACHITE", brand:"MAISON ALHAMBRA", img:"sceptremalachite.jpeg", price:75000},
    {name:"SPECTRE GHOST", brand:"MAISON ALHAMBRA", img:"spectreghost.jpeg", price:75000},
    {name:"HIS CONFESSION", brand:"MAISON ALHAMBRA", img:"hisconfession.jpeg", price:72000},
    {name:"VICTORIOSO NERO", brand:"MAISON ALHAMBRA", img:"victoriosonero.jpeg", price:72000}
];

// ================= GENERADOR DE CARDS =================
function crearCard(p, tipo) {
    const esDecant = tipo === "decant";
    return `
        <div class="card-${esDecant ? 'decant' : 'full-size'}">
            <div class="img-container">
                <img src="Perfumes/${p.img}"
                     style="--zoom: ${p.zoom || 1};
                            object-position: ${p.position || '50% 50%'};
                            transform: scale(${p.zoom || 1});"
                     alt="${p.name}"
                     class="product-image"
                     data-name="${p.name}"
                     data-brand="${p.brand}"
                     data-price="${p.price}">
            </div>
            <div class="card-content">
                <h2>${p.name}</h2>
                <p>${p.brand}</p>
                <span class="price">$${p.price.toLocaleString('es-AR')}</span>
                <div class="stock ${esDecant ? 'available' : 'sold'}">
                    ${esDecant ? '✅ DISPONIBLE' : '❌ AGOTADO'}
                </div>
                <button onclick="consultar('${p.name.replace(/'/g, "\\'")}')">
                    CONSULTAR DISPONIBILIDAD
                </button>
            </div>
        </div>
    `;
}

// Render cards
document.getElementById("decantsContainer").innerHTML = decants.map(p => crearCard(p, "decant")).join("");
document.getElementById("fullContainer").innerHTML = full.map(p => crearCard(p, "full")).join("");

// ================= LIGHTBOX CON ZOOM (solo ruedita y móvil) =================
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxName = document.getElementById("lightbox-name");
const lightboxBrand = document.getElementById("lightbox-brand");
const lightboxPrice = document.getElementById("lightbox-price");
const closeLightboxBtn = document.querySelector(".close-lightbox");

let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

function openLightbox(imgElement) {
    lightboxImage.src = imgElement.src;
    lightboxName.textContent = imgElement.dataset.name;
    lightboxBrand.textContent = imgElement.dataset.brand;
    lightboxPrice.textContent = `$${parseInt(imgElement.dataset.price).toLocaleString('es-AR')}`;

    scale = 1;
    translateX = 0;
    translateY = 0;
    lightboxImage.style.transform = `translate(0px, 0px) scale(1)`;

    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeLightboxFunc() {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
}

function updateTransform() {
    lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// Zoom con rueda del mouse
lightboxImage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.92 : 1.08;
    scale = Math.min(Math.max(0.6, scale * factor), 8);
    updateTransform();
});

// Soporte básico para pinch en celular
let lastDistance = 0;
lightboxImage.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();
        const dist = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        if (lastDistance > 0) {
            const factor = dist > lastDistance ? 1.06 : 0.94;
            scale = Math.min(Math.max(0.6, scale * factor), 8);
            updateTransform();
        }
        lastDistance = dist;
    }
}, { passive: false });

lightboxImage.addEventListener("touchend", () => lastDistance = 0);

// Arrastrar cuando está ampliada
lightboxImage.addEventListener("mousedown", (e) => {
    if (scale > 1.05) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
    }
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
});

document.addEventListener("mouseup", () => isDragging = false);

// Eventos del lightbox
closeLightboxBtn.addEventListener("click", closeLightboxFunc);
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightboxFunc();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("show")) closeLightboxFunc();
});

// Abrir lightbox
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("product-image")) {
        openLightbox(e.target);
    }
});

// ================= TAB, SELECT, FILTRO, WHATSAPP =================
// ================= TAB, SELECT, FILTRO, WHATSAPP =================

document.querySelectorAll(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
        filtrar();
    });
});

const marcasUnicas = [...new Set([...decants.map(p => p.brand), ...full.map(p => p.brand)])].sort();

const selectButton = document.getElementById("selectButton");
const selectOptions = document.getElementById("selectOptions");
let currentMarca = "all";

function crearOpciones() {
    selectOptions.innerHTML = `<div class="select-option" data-value="all">TODAS LAS MARCAS</div>`;
    marcasUnicas.forEach(marca => {
        const div = document.createElement("div");
        div.className = "select-option";
        div.textContent = marca;
        div.dataset.value = marca.toLowerCase();
        selectOptions.appendChild(div);
    });

    selectOptions.querySelectorAll(".select-option").forEach(option => {
        option.addEventListener("click", () => {
            currentMarca = option.dataset.value;
            selectButton.innerHTML = `${option.textContent} <span class="arrow">▼</span>`;
            selectOptions.classList.remove("show");
            selectButton.classList.remove("open");
            filtrar();
        });
    });
}

selectButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = selectOptions.classList.contains("show");
    selectOptions.classList.toggle("show", !isOpen);
    selectButton.classList.toggle("open", !isOpen);
});

document.addEventListener("click", () => {
    selectOptions.classList.remove("show");
    selectButton.classList.remove("open");
});

crearOpciones();

const searchInput = document.getElementById("search");

function filtrar() {
    const texto = searchInput.value.toLowerCase().trim();
    document.querySelectorAll(".card-decant, .card-full-size").forEach(card => {
        const contenido = card.innerText.toLowerCase();
        const coincideTexto = !texto || contenido.includes(texto);
        const coincideMarca = currentMarca === "all" || contenido.includes(currentMarca);
        card.style.display = (coincideTexto && coincideMarca) ? "flex" : "none";
    });
}

searchInput.addEventListener("keyup", filtrar);

// ================= FUNCIÓN CONSULTAR (WHATSAPP) =================
function consultar(nombre) {
    const perfumeDecant = decants.find(d => d.name.toLowerCase() === nombre.toLowerCase());
    const perfumeFrasco = full.find(f => f.name.toLowerCase() === nombre.toLowerCase());

    let aclaracion = "";

    if (perfumeDecant && perfumeFrasco) {
        aclaracion = " (tanto en decant como en frasco completo)";
    } else if (perfumeDecant) {
        aclaracion = " (decant)";
    } else if (perfumeFrasco) {
        aclaracion = " (frasco completo)";
    }

    const mensaje = `Hola! 👋\nConsulto por el stock de **${nombre}**${aclaracion} en Space Fragancias.\n¿Está disponible?`;

    const numero = "5493498435466"; // Cambia por tu número si es necesario
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

console.log("✅ Space Fragancias - Diseño original restaurado + Zoom activado + Mensaje WhatsApp mejorado");