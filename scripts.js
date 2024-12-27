document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav-list__link");
    const icons = {
        default: {
            home: "./img/Home-gray.svg",
            wallet: "./img/Vector-1.png",
            profile: "./img/Profile.svg",
            settings: "./img/Vector-3.png",
        },
        active: {
            home: "./img/Home-white.svg", // Замените на путь к активной иконке
            wallet: "./img/Wallet-white.svg",
            profile: "./img/Profile-white.svg",
            settings: "./img/Setting-white.svg",
        },
    };

    // Функция для сброса иконок к состоянию "по умолчанию"
    function resetIcons() {
        menuLinks.forEach(link => {
            const img = link.querySelector("img");
            if (img) {
                const type = img.alt.toLowerCase();
                img.src = icons.default[type];
            }
        });
    }

    // Установка обработчиков событий на пункты меню
    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Предотвращаем немедленный переход

            resetIcons(); // Сбрасываем все иконки

            // Меняем иконку на активную
            const img = link.querySelector("img");
            if (img) {
                const type = img.alt.toLowerCase();
                img.src = icons.active[type];
            }

            // Обновляем классы активного элемента
            menuLinks.forEach(link => link.classList.remove("nav-list__link--active"));
            link.classList.add("nav-list__link--active");

            // Переход на другую страницу после изменения иконок
            setTimeout(() => {
                window.location.href = link.href; // Переход на страницу
            }, 100); // Задержка 100 мс
        });
    });
});
