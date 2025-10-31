// ここからコードを書いてください

const setupTabs = () => {
    const tab_home = document.querySelector('[data-tab="home"]');
    const tab_converter = document.querySelector('[data-tab="converter"]');
    const sectionHome = document.getElementById("home");
    const sectionConverter = document.getElementById("converter");

    // ホームボタン
    tab_home.addEventListener("click",function(event){
        event.preventDefault();
        // console.log(`homeクリック`);
        sectionConverter.classList.add("hidden");
        sectionHome.classList.remove("hidden");
    });

    // 単位変換タブ
    tab_converter.addEventListener("click",function(event){
        event.preventDefault();
        // console.log(`converterクリック`);
        sectionHome.classList.add("hidden");
        sectionConverter.classList.remove("hidden");
    });

};
export default setupTabs;
