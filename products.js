/* =========================================
   NUR VULCANIZATION
   PRODUCTS JAVASCRIPT
========================================= */


/* ================= PRODUCTS ================= */

const products = [

    /* ===== ЖАМАУЛАР ===== */

    {
        id: 1,
        name: "Дөңгелекке арналған жамау 75 мм",
        category: "patch",
        categoryName: "Жамау",
        price: 850,
        stock: 25,
        description: "Дөңгелек шиналарын жөндеуге арналған сапалы жамау. Вулканизация кезінде қолдануға ыңғайлы.",
        image: "https://tse4.mm.bing.net/th/id/OIP.8U6ytHy0bV49rVpxi3CUvgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 2,
        name: "Дөңгелекке арналған жамау 100 мм",
        category: "patch",
        categoryName: "Жамау",
        price: 1200,
        stock: 20,
        description: "Шинаның зақымдалған бөлігін жөндеуге арналған үлкен өлшемді жамау.",
        image: "https://tse4.mm.bing.net/th/id/OIP.3Cn_Mw5PiZvEN0xIK3-MogAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 3,
        name: "Резина жамауға арналған комплект",
        category: "patch",
        categoryName: "Жамау",
        price: 2500,
        stock: 15,
        description: "Резина мен шиналарды жөндеуге арналған практикалық комплект.",
        image: "https://tse4.mm.bing.net/th/id/OIP.fMdG7SF62wpW69CcyVPgMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 4,
        name: "Камераға арналған жамау 45 мм",
        category: "patch",
        categoryName: "Жамау",
        price: 650,
        stock: 35,
        description: "Автокөлік камераларын жөндеуге арналған 45 мм жамау.",
        image: "https://tse4.mm.bing.net/th/id/OIP.U31Kz92k9mTpS-diUFS3PQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 5,
        name: "Камераға арналған жамау 60 мм",
        category: "patch",
        categoryName: "Жамау",
        price: 750,
        stock: 30,
        description: "Камераны жылдам жөндеуге арналған 60 мм жамау.",
        image: "https://tse2.mm.bing.net/th/id/OIP.qPdwydiqr637NjpC3YLtPAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 6,
        name: "Жүк көлігіне арналған үлкен жамау",
        category: "patch",
        categoryName: "Жамау",
        price: 1800,
        stock: 12,
        description: "Жүк көліктерінің үлкен шиналарын жөндеуге арналған жамау.",
        image: "https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtoaksessuary/1365413/1000x1000/152792696.jpg"
    },


    /* ===== ҚҰРАЛДАР ===== */

    {
        id: 7,
        name: "Вулканизация пышағы",
        category: "tool",
        categoryName: "Құралдар",
        price: 4200,
        stock: 10,
        description: "Шина жөндеу кезінде резинамен жұмыс істеуге арналған арнайы құрал.",
        image: "https://image.made-in-china.com/2f0j00fYbUOIVPVuph/Explosion-Proof-Knife-Common-Is-Al-Cu-80-193mm.jpg"
    },

    {
        id: 8,
        name: "Дөңгелек жөндеу инесі",
        category: "tool",
        categoryName: "Құралдар",
        price: 3500,
        stock: 14,
        description: "Шинаның тесілген жерін жөндеу кезінде қолданылатын арнайы ине.",
        image: "https://cf.shopee.com.br/file/ea354b727917ef60d4ae2a28e5404e8b"
    },

    {
        id: 9,
        name: "Шина монтаждау қалағы",
        category: "tool",
        categoryName: "Құралдар",
        price: 5500,
        stock: 9,
        description: "Шинаны дискке орнату және шешуге арналған берік монтаждау құралы.",
        image: "https://tse3.mm.bing.net/th/id/OIP.ge0VnySVLpVRElQm2IarWAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 10,
        name: "Монтаждау ломигі",
        category: "tool",
        categoryName: "Құралдар",
        price: 4500,
        stock: 11,
        description: "Дөңгелек шиналарын монтаждау және шешуге арналған берік лом.",
        image: "https://ir.ozone.ru/s3/multimedia-1-h/7528704605.jpg"
    },

    {
        id: 11,
        name: "Шина қысымын өлшейтін манометр",
        category: "tool",
        categoryName: "Құралдар",
        price: 6500,
        stock: 8,
        description: "Шинадағы ауа қысымын дәл тексеруге арналған манометр.",
        image: "https://images.nexusapp.co/assets/b7/91/10/301138226.jpg"
    },

    {
        id: 12,
        name: "Автокөлік компрессоры",
        category: "tool",
        categoryName: "Құралдар",
        price: 18500,
        stock: 6,
        description: "Автокөлік шиналарын үрлеуге арналған ықшам компрессор.",
        image: "https://www.4x4shop.dk/images/l_tycm1-p.jpg"
    },

    {
        id: 13,
        name: "Дөңгелек шешетін кілт",
        category: "tool",
        categoryName: "Құралдар",
        price: 3200,
        stock: 17,
        description: "Автокөлік дөңгелектерін шешуге арналған ыңғайлы кілт.",
        image: "https://tse1.explicit.bing.net/th/id/OIP.Hbe6bt7U6sk_PxjcMtsDrAHaGJ?r=0&w=500&h=415&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 14,
        name: "Баллон кілті",
        category: "tool",
        categoryName: "Құралдар",
        price: 2800,
        stock: 20,
        description: "Дөңгелек болттарын бұрап шешуге арналған баллон кілті.",
        image: "https://cdn.vseinstrumenti.ru/images/goods/ruchnoj-instrument/instrument-dlya-avtoservisa-i-garazha/672646/1200x800/68553889.jpg"
    },

    {
        id: 15,
        name: "Шинаға арналған қысқыш",
        category: "tool",
        categoryName: "Құралдар",
        price: 3900,
        stock: 13,
        description: "Шинамен жұмыс істеуге арналған ыңғайлы қысқыш.",
        image: "https://tse4.mm.bing.net/th/id/OIP.JJE-BWS0d8i45buLRHnrIQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },


    /* ===== ХИМИЯ ===== */

    {
        id: 16,
        name: "Резина желімі 250 мл",
        category: "chemical",
        categoryName: "Химия",
        price: 3200,
        stock: 18,
        description: "Резина және шиналарды жамау кезінде қолданылатын желім.",
        image: "https://tse4.mm.bing.net/th/id/OIP.gsYVazKU6z0XAUYsiyVrvAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 17,
        name: "Резина желімі 500 мл",
        category: "chemical",
        categoryName: "Химия",
        price: 5200,
        stock: 14,
        description: "Кәсіби вулканизация жұмыстарына арналған 500 мл резина желімі.",
        image: "https://tse3.mm.bing.net/th/id/OIP.4CwT2La5lt6dJBu8y4zDKAHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 18,
        name: "Вулканизацияға арналған сұйықтық",
        category: "chemical",
        categoryName: "Химия",
        price: 4500,
        stock: 10,
        description: "Шина жөндеу және вулканизация жұмыстарына арналған арнайы сұйықтық.",
        image: "https://moxie.by/sites/default/files/styles/polnyi_tovar/public/prod-images/tech761.jpg?itok=6tnaYPGm"
    },

    {
        id: 19,
        name: "Резина тазалағыш сұйықтық",
        category: "chemical",
        categoryName: "Химия",
        price: 2800,
        stock: 16,
        description: "Жөндеу алдында резина бетін тазалауға арналған сұйықтық.",
        image: "https://avatars.mds.yandex.net/i?id=2653ea5f98aaded08618882967f45e2a_l-8496961-images-thumbs&n=13"
    },

    {
        id: 20,
        name: "Шина монтаждау пастасы",
        category: "chemical",
        categoryName: "Химия",
        price: 3500,
        stock: 12,
        description: "Шинаны монтаждау кезінде жұмысты жеңілдетуге арналған паста.",
        image: "https://cdn1.ozone.ru/s3/multimedia-1-m/c600/6996138826.jpg"
    },

    {
        id: 21,
        name: "Шинаға арналған монтаждау майы",
        category: "chemical",
        categoryName: "Химия",
        price: 4200,
        stock: 9,
        description: "Шинаны монтаждау және демонтаждау кезінде қолданылатын арнайы май.",
        image: "https://ir.ozone.ru/s3/multimedia-h/c1000/6309438017.jpg"
    },


    /* ===== АКСЕССУАРЛАР ===== */

    {
        id: 22,
        name: "Ниппель комплекті",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 1800,
        stock: 25,
        description: "Автокөлік дөңгелектеріне арналған ниппельдер комплекті.",
        image: "https://tse4.mm.bing.net/th/id/OIP.IFmrpaemokX3RUsOA52Q-gHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 23,
        name: "Автокөлік ниппельдері 4 дана",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 2200,
        stock: 20,
        description: "Автокөлік шиналарына арналған 4 дана ниппель.",
        image: "https://tse2.mm.bing.net/th/id/OIP.HUmhyc4eMNFuortJhFFBjwHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 24,
        name: "Ниппель қақпағы 4 дана",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 900,
        stock: 30,
        description: "Шина ниппельдерін шаңнан және кірден қорғауға арналған қақпақтар.",
        image: "https://tse4.mm.bing.net/th/id/OIP.GSgm7K_hzLN2bGePHyTcOwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
        id: 25,
        name: "Дөңгелек жөндеу комплекті",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 6500,
        stock: 10,
        description: "Жолда шинаны жөндеуге арналған негізгі құралдар комплекті.",
        image: "https://ir.ozone.ru/s3/multimedia-x/6671697693.jpg"
    },

    {
        id: 26,
        name: "Шинаға арналған жіптер комплекті",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 2400,
        stock: 22,
        description: "Шинаның тесілген жерін жөндеуге арналған арнайы жіптер.",
        image: "https://avatars.mds.yandex.net/get-mpic/17661051/2a0000019d3950dacb738cf82a101a13a343/orig"
    },

    {
        id: 27,
        name: "Дөңгелек жөндеуге арналған қолғап",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 1900,
        stock: 18,
        description: "Шина жөндеу кезінде қолды қорғауға арналған жұмыс қолғаптары.",
        image: "https://avatars.mds.yandex.net/get-mpic/22086085/pic0019a058e06d922624254929a1e28bed/orig"
    },

    {
        id: 28,
        name: "Шина жөндеу жиынтығы PRO",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 12500,
        oldPrice: 15000,
        discount: 17,
        stock: 8,
        description:
            "Шинаны жол жағдайында жөндеуге арналған PRO жиынтық. Жинақта шинаны жөндеуге қажетті негізгі құралдар мен материалдар бар.",
        image: "12.png"
    },

    {
        id: 29,
        name: "Вентиль өзегі 10 дана",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 1500,
        stock: 25,
        description: "Автокөлік дөңгелектерінің вентильдеріне арналған 10 дана өзек.",
        image: "https://ir.ozone.ru/s3/multimedia-1-z/w1200/7452664883.jpg"
    },

    {
        id: 30,
        name: "Дөңгелекке арналған шағылыстырғыш",
        category: "accessory",
        categoryName: "Аксессуарлар",
        price: 1300,
        stock: 15,
        description: "Дөңгелекке арналған шағылыстырғыш аксессуар.",
        image: "https://s3.amazonaws.com/images.ecwid.com/images/77897509/3349218445.jpg"
    }

];


/* ================= VARIABLES ================= */

let cart = [];

let currentCategory = "all";

let searchText = "";

let selectedProductId = null;

let favorites =
    JSON.parse(
        localStorage.getItem("nurFavorites")
    ) || [];


/* ================= ELEMENTS ================= */

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const productResult =
    document.getElementById("productResult");

const sortSelect =
    document.getElementById("sortSelect");

const cartButton =
    document.getElementById("cartButton");

const cartPanel =
    document.getElementById("cartPanel");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const toast =
    document.getElementById("toast");


/* ================= MODAL ELEMENTS ================= */

const productModalOverlay =
    document.getElementById(
        "productModalOverlay"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalCategory =
    document.getElementById(
        "modalCategory"
    );

const modalName =
    document.getElementById(
        "modalName"
    );

const modalPrice =
    document.getElementById(
        "modalPrice"
    );

const modalStock =
    document.getElementById(
        "modalStock"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalCartButton =
    document.getElementById(
        "modalCartButton"
    );

const favoriteModal =
    document.getElementById(
        "favoriteModal"
    );


/* ================= FORMAT PRICE ================= */

function formatPrice(price) {

    return price.toLocaleString("kk-KZ")
        + " ₸";

}


/* ================= RENDER PRODUCTS ================= */

function renderProducts() {

    productsGrid.innerHTML = "";


    let filteredProducts =
        products.filter(function(product) {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            return categoryMatch &&
                   searchMatch;

        });


    /* ================= SORT ================= */

    if (sortSelect.value === "cheap") {

        filteredProducts.sort(
            function(a, b) {

                return a.price - b.price;

            }
        );

    }


    if (sortSelect.value === "expensive") {

        filteredProducts.sort(
            function(a, b) {

                return b.price - a.price;

            }
        );

    }


    if (sortSelect.value === "stock") {

        filteredProducts.sort(
            function(a, b) {

                return b.stock - a.stock;

            }
        );

    }


    productResult.textContent =
        filteredProducts.length +
        " тауар";


    /* ================= NO RESULTS ================= */

    if (filteredProducts.length === 0) {

        productsGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    Тауар табылмады
                </h3>

                <p>
                    Іздеу сөзін немесе
                    категорияны өзгертіп көріңіз.
                </p>

            </div>

        `;

        return;

    }


    /* ================= CARDS ================= */

    filteredProducts.forEach(
        function(product) {

            const card =
                document.createElement("article");


            card.className =
                "product-card";


            const isFavorite =
                favorites.includes(
                    product.id
                );


            const hasDiscount =
                product.discount &&
                product.discount > 0;


            card.innerHTML = `

                <div
                    class="product-image"
                    data-id="${product.id}"
                >

                    ${
                        hasDiscount
                        ?
                        `
                        <span class="discount-badge">
                            -${product.discount}%
                        </span>
                        `
                        :
                        ""
                    }


                    <button
                        class="
                            favorite-button
                            ${isFavorite ? "active" : ""}
                        "
                        data-id="${product.id}"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>


                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="
                            this.src='images/no-image.jpg'
                        "
                    >

                </div>


                <div class="product-info">

                    <p class="product-category">
                        ${product.categoryName}
                    </p>


                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <div class="stock">

                        ${
                            product.stock > 0
                            ?
                            `📦 Қоймада:
                             ${product.stock} дана`
                            :
                            `❌ Қоймада жоқ`
                        }

                    </div>


                    <div class="product-bottom">

                        <div>

                            ${
                                hasDiscount
                                ?
                                `
                                <div class="old-price">
                                    ${formatPrice(
                                        product.oldPrice
                                    )}
                                </div>
                                `
                                :
                                ""
                            }


                            <span
                                class="product-price"
                            >
                                ${formatPrice(
                                    product.price
                                )}
                            </span>

                        </div>


                        <button
                            class="add-button"
                            data-id="${product.id}"
                            ${
                                product.stock <= 0
                                ? "disabled"
                                : ""
                            }
                        >
                            Себетке
                        </button>

                    </div>

                </div>

            `;


            productsGrid.appendChild(card);

        }
    );


    /* ================= ADD TO CART ================= */

    document
        .querySelectorAll(".add-button")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    const id =
                        Number(
                            button.dataset.id
                        );

                    addToCart(id);

                }
            );

        });


    /* ================= FAVORITES ================= */

    document
        .querySelectorAll(".favorite-button")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    toggleFavorite(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });


    /* ================= OPEN PRODUCT ================= */

    document
        .querySelectorAll(".product-card")
        .forEach(function(card) {

            card.addEventListener(
                "click",
                function() {

                    const id =
                        Number(
                            card
                                .querySelector(
                                    ".product-image"
                                )
                                .dataset.id
                        );

                    openProductModal(id);

                }
            );

        });

}


/* ================= FAVORITES ================= */

function toggleFavorite(productId) {

    if (
        favorites.includes(productId)
    ) {

        favorites =
            favorites.filter(
                function(id) {

                    return id !== productId;

                }
            );


        showToast(
            "Таңдаулылардан өшірілді"
        );

    } else {

        favorites.push(productId);


        showToast(
            "Таңдаулыларға қосылды ❤️"
        );

    }


    localStorage.setItem(
        "nurFavorites",
        JSON.stringify(favorites)
    );


    renderProducts();

}


/* ================= PRODUCT MODAL ================= */

function openProductModal(productId) {

    const product =
        products.find(
            function(item) {

                return item.id === productId;

            }
        );


    if (!product) {

        return;

    }


    selectedProductId =
        productId;


    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;


    modalCategory.textContent =
        product.categoryName;


    modalName.textContent =
        product.name;


    /* ================= PRICE ================= */

    if (
        product.discount &&
        product.discount > 0
    ) {

        modalPrice.innerHTML = `

            <span class="old-price">
                ${formatPrice(
                    product.oldPrice
                )}
            </span>

            ${formatPrice(
                product.price
            )}

            <span class="modal-discount">
                -${product.discount}%
            </span>

        `;

    } else {

        modalPrice.textContent =
            formatPrice(
                product.price
            );

    }


    /* ================= STOCK ================= */

    modalStock.textContent =
        product.stock > 0
        ?
        `📦 Қоймада:
         ${product.stock} дана`
        :
        `❌ Қазіргі уақытта
         тауар жоқ`;


    /* ================= DESCRIPTION ================= */

    modalDescription.textContent =
        product.description ||
        "Бұл тауар туралы ақпарат жақында қосылады.";


    /* ================= FAVORITE ================= */

    const isFavorite =
        favorites.includes(
            productId
        );


    favoriteModal.textContent =
        isFavorite
        ? "♥"
        : "♡";


    favoriteModal.classList.toggle(
        "active",
        isFavorite
    );


    /* ================= SHOW ================= */

    productModalOverlay.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* ================= CLOSE MODAL ================= */

function closeProductModal() {

    productModalOverlay.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeProductModal
);


productModalOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            productModalOverlay
        ) {

            closeProductModal();

        }

    }
);


/* ================= MODAL CART ================= */

modalCartButton.addEventListener(
    "click",
    function() {

        if (!selectedProductId) {

            return;

        }


        addToCart(
            selectedProductId
        );


        closeProductModal();

    }
);


/* ================= MODAL FAVORITE ================= */

favoriteModal.addEventListener(
    "click",
    function() {

        if (!selectedProductId) {

            return;

        }


        toggleFavorite(
            selectedProductId
        );


        favoriteModal.textContent =
            favorites.includes(
                selectedProductId
            )
            ? "♥"
            : "♡";


        favoriteModal.classList.toggle(
            "active",
            favorites.includes(
                selectedProductId
            )
        );

    }
);


/* ================= ADD TO CART ================= */

function addToCart(productId) {

    const product =
        products.find(
            function(item) {

                return item.id === productId;

            }
        );


    if (!product) {

        return;

    }


    if (product.stock <= 0) {

        showToast(
            "Бұл тауар қоймада жоқ!"
        );

        return;

    }


    const existingItem =
        cart.find(
            function(item) {

                return item.id === productId;

            }
        );


    if (existingItem) {

        if (
            existingItem.quantity
            < product.stock
        ) {

            existingItem.quantity++;

        } else {

            showToast(
                "Қоймадағы тауар саны шектеулі!"
            );

            return;

        }

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    renderCart();

    showToast(
        "Тауар себетке қосылды!"
    );

}


/* ================= REMOVE ================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            function(item) {

                return item.id !== productId;

            }
        );


    saveCart();

    renderCart();

}


/* ================= QUANTITY ================= */

function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            function(item) {

                return item.id === productId;

            }
        );


    if (!item) {

        return;

    }


    const product =
        products.find(
            function(product) {

                return product.id === productId;

            }
        );


    item.quantity += amount;


    if (
        item.quantity <= 0
    ) {

        removeFromCart(
            productId
        );

        return;

    }


    if (
        product &&
        item.quantity > product.stock
    ) {

        item.quantity =
            product.stock;

        showToast(
            "Қоймадағы тауар саны шектеулі!"
        );

    }


    saveCart();

    renderCart();

}


/* ================= RENDER CART ================= */

function renderCart() {

    cartItems.innerHTML =
        "";


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>
                    🛒
                </div>

                <p>
                    Себет бос
                </p>

                <span>
                    Тауарларды қосыңыз
                </span>

            </div>

        `;

    } else {


        cart.forEach(
            function(item) {

                const cartItem =
                    document.createElement(
                        "div"
                    );


                cartItem.className =
                    "cart-item";


                cartItem.innerHTML = `

                    <div
                        class="cart-item-image"
                    >

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            onerror="
                                this.src='images/no-image.jpg'
                            "
                        >

                    </div>


                    <div
                        class="cart-item-info"
                    >

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            ${formatPrice(
                                item.price
                            )}
                        </p>


                        <div
                            class="quantity"
                        >

                            <button
                                class="minus"
                                data-id="${item.id}"
                            >
                                −
                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                class="plus"
                                data-id="${item.id}"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-button"
                        data-id="${item.id}"
                    >
                        Өшіру
                    </button>

                `;


                cartItems.appendChild(
                    cartItem
                );

            }
        );


        /* ================= MINUS ================= */

        document
            .querySelectorAll(".minus")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        changeQuantity(
                            Number(
                                button.dataset.id
                            ),
                            -1
                        );

                    }
                );

            });


        /* ================= PLUS ================= */

        document
            .querySelectorAll(".plus")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        changeQuantity(
                            Number(
                                button.dataset.id
                            ),
                            1
                        );

                    }
                );

            });


        /* ================= REMOVE ================= */

        document
            .querySelectorAll(".remove-button")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        removeFromCart(
                            Number(
                                button.dataset.id
                            )
                        );

                    }
                );

            });

    }


    updateCartSummary();

}


/* ================= CART SUMMARY ================= */

function updateCartSummary() {

    let count = 0;

    let total = 0;


    cart.forEach(
        function(item) {

            count +=
                item.quantity;


            total +=
                item.price *
                item.quantity;

        }
    );


    cartCount.textContent =
        count;


    cartTotal.textContent =
        formatPrice(total);

}


/* ================= SAVE CART ================= */

function saveCart() {

    localStorage.setItem(
        "nurCart",
        JSON.stringify(cart)
    );

}


/* ================= LOAD CART ================= */

function loadCart() {

    const savedCart =
        localStorage.getItem(
            "nurCart"
        );


    if (savedCart) {

        try {

            cart =
                JSON.parse(
                    savedCart
                );

        } catch (error) {

            cart = [];

        }

    }


    renderCart();

}


/* ================= OPEN CART ================= */

function openCart() {

    cartPanel.classList.add(
        "show"
    );

    cartOverlay.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


/* ================= CLOSE CART ================= */

function closeCartPanel() {

    cartPanel.classList.remove(
        "show"
    );

    cartOverlay.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


/* ================= CART EVENTS ================= */

cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartPanel
);


cartOverlay.addEventListener(
    "click",
    closeCartPanel
);


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    function() {

        searchText =
            searchInput.value.trim();

        renderProducts();

    }
);


/* ================= CATEGORY ================= */

document
    .querySelectorAll(".category")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {


                document
                    .querySelectorAll(
                        ".category"
                    )
                    .forEach(
                        function(btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.category;


                renderProducts();

            }
        );

    });


/* ================= SORT ================= */

sortSelect.addEventListener(
    "change",
    function() {

        renderProducts();

    }
);


/* ================= TOAST ================= */

function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function() {

            toast.classList.remove(
                "show"
            );

        },
        1800
    );

}


/* ================= WHATSAPP ================= */

function orderViaWhatsApp() {

    if (
        cart.length === 0
    ) {

        showToast(
            "Алдымен тауар таңдаңыз!"
        );

        return;

    }


  

    const phone =
        "+7 705 881 01 87";


    let message =
        "Сәлеметсіз бе! NUR VULCANIZATION дүкенінен тапсырыс бергім келеді:";


    let total = 0;


    cart.forEach(
        function(item) {

            const itemTotal =
                item.price *
                item.quantity;


            total +=
                itemTotal;


            message +=
                `• ${item.name}%0A` +
                `  Саны: ${item.quantity}%0A` +
                `  Бағасы: ${formatPrice(
                    itemTotal
                )}%0A%0A`;

        }
    );


    message +=
        `Жалпы сома: ${formatPrice(
            total
        )}`;


    const whatsappURL =
        `https://wa.me/${phone}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* ================= CHECKOUT ================= */

checkoutButton.addEventListener(
    "click",
    orderViaWhatsApp
);


/* ================= START ================= */

renderProducts();

loadCart();