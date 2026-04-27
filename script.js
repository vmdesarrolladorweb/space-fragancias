// ===== DECANTS =====
const decants = [
    {name:"9AM DIVE", brand:"AFNAN", img:"9AMDive.jpeg", price:6000, zoom:1., position:"50% 68%", stock:true},
    {name:"ANSAAM SILVER", brand:"LATTAFA", img:"AnsaamSilver.jpeg", price:8000, zoom:1., position:"50% 58%", stock:true},
    {name:"9PM ELIXIR", brand:"AFNAN", img:"9PMElixir.jpeg", price:8000, zoom:1., position:"50% 68%", stock:true},
    {name:"AL NOBLE SAFEER", brand:"LATTAFA", img:"AlNobleSafeer.jpeg", price:5000, zoom:1., position:"80% 55%", stock:true},
    {name:"AL QIAM GOLD", brand:"LATTAFA", img:"AlQiamGold.jpeg", price:6000, zoom:1., position:"50% 60%", stock:true},
    {name:"ASAD", brand:"LATTAFA", img:"Asad.jpeg", price:6000, zoom:1., position:"50% 67%", stock:true},
    {name:"ASAD BOURBON", brand:"LATTAFA", img:"AsadBourbon.jpeg", price:6500, zoom:1.1, position:"50% 60%", stock:true},
    {name:"EROS FLAME", brand:"VERSACE", img:"ErosFlame.jpeg", price:14000, zoom:1.2, position:"50% 65%", stock:true},
    {name:"EXTRAVAGANT LOVER", brand:"MAISON ALHAMBRA", img:"Extravagantlover.jpeg", price:7000, zoom:1.1, position:"50% 67%", stock:true},
    {name:"FAKHAR PLATIN", brand:"LATTAFA", img:"FakharPlatin.jpeg", price:5500, zoom:1., position:"50% 50%", stock:true},
    {name:"HAWAS ICE", brand:"RASASI", img:"HawasIce.jpeg", price:7500, zoom:1.1, position:"50% 64%", stock:true},
    {name:"HIS CONFESSION", brand:"MAISON ALHAMBRA", img:"HisConfession.jpeg", price:6500, zoom:1., position:"50% 47%", stock:true},
    {name:"HONOR & GLORY", brand:"LATTAFA", img:"HonorGlory.jpeg", price:5500, zoom:1.1, position:"50% 65%", stock:true},
    {name:"INTENSE MAN", brand:"ARMAF", img:"IntenseMan.jpeg", price:6500, zoom:1., position:"50% 55%", stock:true},
    {name:"ISHQ AL SHUYUKH", brand:"LATTAFA", img:"IshqAlShuyukh.jpeg", price:6000, zoom:1., position:"50% 63%", stock:true},
    {name:"JASSOR", brand:"LATTAFA", img:"Jasoor.jpeg", price:8000, zoom:1., position:"50% 65%", stock:true},
    {name:"KHAMRAH QAHWA", brand:"LATTAFA", img:"KhamrahQahwa.jpeg", price:5500, zoom:1.2, position:"50% 65%", stock:true},
    {name:"MASHRABYA", brand:"LATTAFA", img:"Mashrabya.jpeg", price:5500, zoom:1., position:"50% 65%", stock:true},
    {name:"ODYSSEY AQUA", brand:"ARMAF", img:"OdysseyAqua.jpeg", price:7000, zoom:1.1, position:"50% 67%", stock:true},
    {name:"ODYSSEY LIMONI", brand:"ARMAF", img:"OdysseyLimoni.jpeg", price:6500, zoom:1.2, position:"50% 67%", stock:false},
    {name:"OUD FOR GLORY", brand:"LATTAFA", img:"OudForGlory.jpeg", price:5500, zoom:1.1, position:"50% 62%", stock:true},
    {name:"SALVO EDP", brand:"MAISON ALHAMBRA", img:"SalvoEDP.jpeg", price:5500, zoom:1., position:"50% 62%", stock:true},
    {name:"SCEPTRE MALACHITE", brand:"MAISON ALHAMBRA", img:"SceptreMalachite.jpeg", price:8000, zoom:1., position:"50% 65%", stock:true},
    {name:"SPECTRE GHOST", brand:"FRENCH AVENUE", img:"SpectreGhost.jpeg", price:9000, zoom:1.2, position:"50% 60%", stock:true},
    {name:"TERIAQ INTENSE", brand:"LATTAFA", img:"TeriaqIntense.jpeg", price:6000, zoom:1., position:"50% 67%", stock:true},
    {name:"THE KINGDOM", brand:"LATTAFA", img:"TheKingdom.jpeg", price:6500, zoom:1., position:"50% 68%", stock:true},
    {name:"TOY BOY", brand:"MOSCHINO", img:"ToyBoy.jpeg", price:13000, zoom:1., position:"50% 65%", stock:true},
    {name:"URBAN MAN ELIXIR", brand:"ARMAF", img:"UrbanManElixir.jpeg", price:6500, zoom:1., position:"50% 61%", stock:true},
    {name:"VICTORIOSO NERO", brand:"MAISON ALHAMBRA", img:"VictoriosoNero.jpeg", price:5000, zoom:1., position:"50% 62%", stock:true},
    {name:"WAJOOD", brand:"LATTAFA", img:"Wajood.jpeg", price:7500, zoom:1.1, position:"50% 70%", stock:true},
    {name:"VINTAGE RADIO", brand:"LATTAFA", img:"VintageRadio.jpeg", price:6000, zoom:1., position:"50% 60%", stock:true},
	{name:"9PM NIGHT OUT", brand:"AFNAN", img:"9PMNightOut.jpeg", price:8000, zoom:1.2, position:"50% 55%", stock:true},
    {name:"ASAD ELIXIR", brand:"LATTAFA", img:"AsadElixir.jpeg", price:6500, zoom:1., position:"50% 48%", stock:true},
    {name:"DETOUR NOIR", brand:"AL HARAMAIN", img:"DetourNoir.jpeg", price:6000, zoom:1., position:"50% 55%", stock:true},
    {name:"HAWAS BLACK", brand:"RASASI", img:"HawasBlack.jpeg", price:6000, zoom:1., position:"50% 50%", stock:true},
    {name:"HAWAS FIRE", brand:"RASASI", img:"HawasFire.jpeg", price:7500, zoom:1., position:"50% 48%", stock:true},
	{name:"MANDARIN SKY", brand:"ARMAF", img:"MandarinSky.jpeg", price:6000, zoom:1.2, position:"50% 55%", stock:true},
    {name:"LIQUID BRUN", brand:"FRENCH AVENUE", img:"LiquidBrun.jpeg", price:7000, zoom:1.1, position:"50% 53%", stock:true},
	{name:"AMBER OUD DUBAI NIGHT", brand:"AL HARAMAIN", img:"DubaiNight.jpeg", price:8500, zoom:1., position:"50% 50%", stock:true},
    {name:"AMBER OUD GOLD EDITION", brand:"AL HARAMAIN", img:"GoldEdition.jpeg", price:8500, zoom:1., position:"50% 63%", stock:true}
];

// ===== FRASCOS =====
const full = [
    {name:"MASHRABYA", brand:"LATTAFA", img:"Mashrabya.jpeg", price:8000, zoom:1., position:"50% 65%", stock:false},
	{name:"MANDARIN SKY", brand:"ARMAF", img:"MandarinSky.jpeg", price:55000, zoom:1.2, position:"50% 55%", stock:true},
    {name:"ODYSSEY AQUA", brand:"ARMAF", img:"OdysseyAqua.jpeg", price:9000, zoom:1.1, position:"50% 67%", stock:false},
    {name:"ODYSSEY LIMONI", brand:"ARMAF", img:"OdysseyLimoni.jpeg", price:8500, zoom:1.2, position:"50% 67%", stock:false},
    {name:"OUD FOR GLORY", brand:"LATTAFA", img:"OudForGlory.jpeg", price:8000, zoom:1.1, position:"50% 62%", stock:false},
    {name:"SALVO EDP", brand:"MAISON ALHAMBRA", img:"SalvoEDP.jpeg", price:8000, zoom:1., position:"50% 62%", stock:false},
    {name:"SCEPTRE MALACHITE", brand:"MAISON ALHAMBRA", img:"SceptreMalachite.jpeg", price:8000, zoom:1., position:"50% 65%", stock:false},
    {name:"SPECTRE GHOST", brand:"MAISON ALHAMBRA", img:"SpectreGhost.jpeg", price:10000, zoom:1.2, position:"50% 60%", stock:false},
    {name:"TERIAQ INTENSE", brand:"LATTAFA", img:"TeriaqIntense.jpeg", price:9000, zoom:1., position:"50% 67%", stock:false},
    {name:"THE KINGDOM", brand:"LATTAFA", img:"TheKingdom.jpeg", price:9000, zoom:1., position:"50% 68%", stock:false},
    {name:"TOY BOY", brand:"MOSCHINO", img:"ToyBoy.jpeg", price:14000, zoom:1., position:"50% 65%", stock:false},
    {name:"URBAN MAN ELIXIR", brand:"ARMAF", img:"UrbanManElixir.jpeg", price:9000, zoom:1., position:"50% 61%", stock:false},
    {name:"VICTORIOSO NERO", brand:"MAISON ALHAMBRA", img:"VictoriosoNero.jpeg", price:8000, zoom:1., position:"50% 62%", stock:false},
    {name:"WAJOOD", brand:"LATTAFA", img:"Wajood.jpeg", price:8500, zoom:1.1, position:"50% 70%", stock:false},
    {name:"AMBER OUD GOLD EDITION", brand:"AL HARAMAIN", img:"GoldEdition.jpeg", price:10000, zoom:1., position:"50% 63%", stock:false},
	{name:"9AM DIVE", brand:"AFNAN", img:"9AMDive.jpeg", price:8000, zoom:1., position:"50% 68%", stock:false},
    {name:"ANSAAM SILVER", brand:"LATTAFA", img:"AnsaamSilver.jpeg", price:8000, zoom:1., position:"50% 58%", stock:false},
    {name:"9PM ELIXIR", brand:"AFNAN", img:"9PMElixir.jpeg", price:87000, zoom:1., position:"50% 68%", stock:true},
    {name:"AL NOBLE SAFEER", brand:"LATTAFA", img:"AlNobleSafeer.jpeg", price:8000, zoom:1., position:"80% 55%", stock:false},
	{name:"VINTAGE RADIO", brand:"LATTAFA", img:"VintageRadio.jpeg", price:60000, zoom:1., position:"50% 60%", stock:true},
    {name:"AL QIAM GOLD", brand:"LATTAFA", img:"AlQiamGold.jpeg", price:8000, zoom:1., position:"50% 60%", stock:false},
    {name:"ASAD", brand:"LATTAFA", img:"Asad.jpeg", price:8000, zoom:1., position:"50% 67%", stock:false},
    {name:"ASAD BOURBON", brand:"LATTAFA", img:"AsadBourbon.jpeg", price:8000, zoom:1.1, position:"50% 60%", stock:false},
    {name:"EROS FLAME", brand:"VERSACE", img:"ErosFlame.jpeg", price:15000, zoom:1.2, position:"50% 65%", stock:false},
    {name:"EXTRAVAGANT LOVER", brand:"MAISON ALHAMBRA", img:"Extravagantlover.jpeg", price:8000, zoom:1.1, position:"50% 67%", stock:false},
    {name:"FAKHAR PLATIN", brand:"LATTAFA", img:"FakharPlatin.jpeg", price:8000, zoom:1., position:"50% 50%", stock:false},
    {name:"HAWAS ICE", brand:"RASASI", img:"HawasIce.jpeg", price:8500, zoom:1.1, position:"50% 64%", stock:false},
    {name:"HIS CONFESSION", brand:"MAISON ALHAMBRA", img:"HisConfession.jpeg", price:8500, zoom:1., position:"50% 47%", stock:false},
    {name:"HONOR & GLORY", brand:"LATTAFA", img:"HonorGlory.jpeg", price:8000, zoom:1.1, position:"50% 65%", stock:false},
    {name:"INTENSE MAN", brand:"ARMAF", img:"IntenseMan.jpeg", price:8000, zoom:1., position:"50% 55%", stock:false},
    {name:"ISHQ AL SHUYUKH", brand:"LATTAFA", img:"IshqAlShuyukh.jpeg", price:8000, zoom:1., position:"50% 63%", stock:false},
    {name:"JASSOR", brand:"LATTAFA", img:"Jasoor.jpeg", price:8000, zoom:1., position:"50% 65%", stock:false},
    {name:"KHAMRAH QAHWA", brand:"LATTAFA", img:"KhamrahQahwa.jpeg", price:8000, zoom:1.2, position:"50% 65%", stock:false}
];

// ================= GENERADOR DE CARDS =================
function crearCard(p, tipo) {
    const esDisponible = p.stock;

    return `
        <div class="card-${tipo === "decant" ? 'decant' : 'full-size'}">
            <div class="img-container">
                <img src="Perfumes/${p.img}"
                     style="--zoom: ${p.zoom || 1};
                            object-position: ${p.position || '50% 50%'};
                            transform: scale(${p.zoom || 1});"
                     alt="${p.name}"
                     class="product-image"
                     data-name="${p.name}"
                     data-brand="${p.brand}"
                     data-price="${p.price}"
					 data-stock="${p.stock}">
            </div>
            <div class="card-content">
                <h2>${p.name}</h2>
                <p>${p.brand}</p>
                ${p.stock ? `<span class="price">$${p.price.toLocaleString('es-AR')}</span>` : ``}

                <div class="stock ${esDisponible ? 'available' : 'sold'}">
                    ${esDisponible ? '✅ DISPONIBLE' : '❌ AGOTADO'}
                </div>

                <button onclick="consultar('${p.name.replace(/'/g, "\\'")}')">
                    CONSULTAR DISPONIBILIDAD
                </button>
            </div>
        </div>
    `;
}


// ================= ORDENAR STOCK =================
const decantsOrdenados = [...decants].sort((a, b) => b.stock - a.stock);
const fullOrdenados = [...full].sort((a, b) => b.stock - a.stock);

// ================= RENDER =================
document.getElementById("decantsContainer").innerHTML =
    decantsOrdenados.map(p => crearCard(p)).join("");

document.getElementById("fullContainer").innerHTML =
    fullOrdenados.map(p => crearCard(p)).join("");

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
    const enStock = imgElement.dataset.stock === "true";

if (enStock) {
    lightboxPrice.textContent = `$${parseInt(imgElement.dataset.price).toLocaleString('es-AR')}`;
} else {
    lightboxPrice.textContent = "AGOTADO";
}

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

// ================= FUNCIÓN CONSULTAR (WHATSAPP) - CON PRECIO =================
function consultar(nombre) {
    // Detectamos en qué pestaña está el usuario
    const tabActiva = document.querySelector(".tab-content.active").id;

    const esDecantTab = tabActiva === "decantsContainer" || tabActiva.includes("decant");
    const esFrascoTab = tabActiva === "fullContainer" || tabActiva.includes("full");

    let tipo = "";
    let precio = 0;
	let enStock = false;

    if (esDecantTab) {
    const perfume = decants.find(d => d.name.toLowerCase() === nombre.toLowerCase());
    tipo = "decant";
    precio = perfume ? perfume.price : 0;
    enStock = perfume ? perfume.stock : false;
} 
else if (esFrascoTab) {
    const perfume = full.find(f => f.name.toLowerCase() === nombre.toLowerCase());
    tipo = "frasco completo";
    precio = perfume ? perfume.price : 0;
    enStock = perfume ? perfume.stock : false;
}

    const precioFormateado = (enStock && precio > 0)
    ? ` - $${precio.toLocaleString('es-AR')}`
    : "";

    let mensaje = "";

if (enStock) {
    mensaje = `Hola! 👋\nConsulto por el stock de *${nombre}* (${tipo}${precioFormateado}) en Space Fragancias.\n¿Sigue disponible?`;
} else {
    mensaje = `Hola! 👋\nMe interesaría saber cómo puedo conseguir *${nombre}* (${tipo}) aunque actualmente esté agotado.\n¿Va a ingresar nuevamente?`;
}

    const numero = "5493498435466"; // Cambia si es necesario
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

console.log("✅ Space Fragancias - Mensaje WhatsApp con precio según pestaña activa");