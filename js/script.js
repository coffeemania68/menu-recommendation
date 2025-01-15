// 메뉴 데이터 (JSON 형식으로 제공받는다고 가정)
const menuData = [
    {
        "theme": "오늘 뭐 먹지?",
        "items": [
            { "name": "김치찌개", "link": "https://www.10000recipe.com/recipe/12345", "type": "요리" },
            { "name": "피자", "link": "https://www.pizza.com", "type": "배달" },
            { "name": "치킨", "link": "https://www.chicken.com", "type": "배달" },
            { "name": "떡볶이", "link": "https://www.tteokbokki.com", "type": "배달" },
            { "name": "짜장면", "link": "https://www.jjajangmyeon.com", "type": "배달" },
            { "name": "스파게티", "link": "https://www.spaghetti.com", "type": "요리" },
            { "name": "초밥", "link": "https://www.sushi.com", "type": "배달" },
            { "name": "햄버거", "link": "https://www.hamburger.com", "type": "배달" },
            { "name": "비빔밥", "link": "https://www.bibimbap.com", "type": "요리" },
            { "name": "샐러드", "link": "https://www.salad.com", "type": "요리" }
        ]
    },
    {
        "theme": "간단하게 뚝딱",
        "items": [
            { "name": "컵라면", "link": "https://www.cupnoodles.com", "type": "배달" },
            { "name": "간장계란밥", "link": "https://www.10000recipe.com/recipe/67890", "type": "요리" },
            { "name": "토스트", "link": "https://www.toast.com", "type": "요리" },
            { "name": "시리얼", "link": "https://www.cereal.com", "type": "요리" },
            { "name": "주먹밥", "link": "https://www.jumeokbap.com", "type": "요리" },
            { "name": "샌드위치", "link": "https://www.sandwich.com", "type": "요리" },
            { "name": "볶음밥", "link": "https://www.bokkeumbap.com", "type": "요리" },
            { "name": "오니기리", "link": "https://www.onigiri.com", "type": "요리" },
            { "name": "과일 샐러드", "link": "https://www.fruitsalad.com", "type": "요리" },
            { "name": "요거트", "link": "https://www.yogurt.com", "type": "요리" }
        ]
    },
    {
        "theme": "오늘만큼은 특별하게",
        "items": [
            { "name": "스테이크", "link": "https://www.steak.com", "type": "요리" },
            { "name": "파스타", "link": "https://www.pasta.com", "type": "요리" },
            { "name": "초밥", "link": "https://www.sushi.com", "type": "배달" },
            { "name": "랍스터", "link": "https://www.lobster.com", "type": "배달" },
            { "name": "갈비찜", "link": "https://www.galbijjim.com", "type": "요리" },
            { "name": "사시미", "link": "https://www.sashimi.com", "type": "배달" },
            { "name": "파에야", "link": "https://www.paella.com", "type": "요리" },
            { "name": "푸아그라", "link": "https://www.foiegras.com", "type": "요리" },
            { "name": "캐비어", "link": "https://www.caviar.com", "type": "요리" },
            { "name": "트러플 요리", "link": "https://www.truffle.com", "type": "요리" }
        ]
    },
    {
        "theme": "다이어트 중인데...",
        "items": [
            { "name": "샐러드", "link": "https://www.salad.com", "type": "요리" },
            { "name": "닭가슴살", "link": "https://www.chickenbreast.com", "type": "요리" },
            { "name": "두부 요리", "link": "https://www.tofu.com", "type": "요리" },
            { "name": "저칼로리 도시락", "link": "https://www.lowcaldiet.com", "type": "배달" },
            { "name": "퀴노아 샐러드", "link": "https://www.quinoasalad.com", "type": "요리" },
            { "name": "그릴드 치킨과 채소", "link": "https://www.grilledchicken.com", "type": "요리" },
            { "name": "스무디 볼", "link": "https://www.smoothiebowl.com", "type": "요리" },
            { "name": "렌틸콩 스프", "link": "https://www.lentilsoup.com", "type": "요리" },
            { "name": "아보카도 토스트", "link": "https://www.avocadotoast.com", "type": "요리" },
            { "name": "채소 스틱과 후무스", "link": "https://www.veggiesticks.com", "type": "요리" }
        ]
    },
    {
        "theme": "혼밥 메뉴",
        "items": [
            { "name": "컵라면", "link": "https://www.cupnoodles.com", "type": "배달" },
            { "name": "간장계란밥", "link": "https://www.10000recipe.com/recipe/67890", "type": "요리" },
            { "name": "편의점 도시락", "link": "https://www.conveniencestore.com", "type": "배달" },
            { "name": "덮밥", "link": "https://www.deopbap.com", "type": "요리" },
            { "name": "주먹밥", "link": "https://www.jumeokbap.com", "type": "요리" },
            { "name": "볶음밥", "link": "https://www.bokkeumbap.com", "type": "요리" },
            { "name": "혼술 안주", "link": "https://www.honsul.com", "type": "배달" },
            { "name": "1인 피자", "link": "https://www.onepersonpizza.com", "type": "배달" },
            { "name": "1인 치킨", "link": "https://www.onepersonchicken.com", "type": "배달" },
            { "name": "1인 보쌈", "link": "https://www.onepersonbossam.com", "type": "배달" }
        ]
    },
    {
        "theme": "매운 거 좋아!",
        "items": [
            { "name": "불닭볶음면", "link": "https://www.buldak.com", "type": "배달" },
            { "name": "마라탕", "link": "https://www.maratang.com", "type": "배달" },
            { "name": "낙지볶음", "link": "https://www.nakji.com", "type": "요리" },
            { "name": "매운 갈비찜", "link": "https://www.spicygalbijjim.com", "type": "요리" },
            { "name": "떡볶이", "link": "https://www.tteokbokki.com", "type": "배달" },
            { "name": "매운 닭발", "link": "https://www.spicychickenfeet.com", "type": "배달" },
            { "name": "매운 라면", "link": "https://www.spicyramen.com", "type": "배달" },
            { "name": "매운 짬뽕", "link": "https://www.spicyjjampong.com", "type": "배달" },
            { "name": "매운 족발", "link": "https://www.spicyjokbal.com", "type": "배달" },
            { "name": "매운 오징어볶음", "link": "https://www.spicysquid.com", "type": "요리" }
        ]
    },
    {
        "theme": "해산물 땡겨!",
        "items": [
            { "name": "회", "link": "https://www.sashimi.com", "type": "배달" },
            { "name": "해물찜", "link": "https://www.seafoodjjim.com", "type": "요리" },
            { "name": "초밥", "link": "https://www.sushi.com", "type": "배달" },
            { "name": "조개구이", "link": "https://www.jogae.com", "type": "요리" },
            { "name": "해물탕", "link": "https://www.seafoodtang.com", "type": "요리" },
            { "name": "새우 요리", "link": "https://www.shrimp.com", "type": "요리" },
            { "name": "연어 요리", "link": "https://www.salmon.com", "type": "요리" },
            { "name": "전복 요리", "link": "https://www.abalone.com", "type": "요리" },
            { "name": "게 요리", "link": "https://www.crab.com", "type": "요리" },
            { "name": "문어 요리", "link": "https://www.octopus.com", "type": "요리" }
        ]
    },
    {
        "theme": "나는 채식주의자",
        "items": [
            { "name": "비빔밥", "link": "https://www.bibimbap.com", "type": "요리" },
            { "name": "두부 샐러드", "link": "https://www.tofu.com", "type": "요리" },
            { "name": "채식 라면", "link": "https://www.veganramen.com", "type": "배달" },
            { "name": "콩고기 스테이크", "link": "https://www.veggiemeat.com", "type": "요리" },
            { "name": "버섯 요리", "link": "https://www.mushroom.com", "type": "요리" },
            { "name": "채식 카레", "link": "https://www.vegancurry.com", "type": "요리" },
            { "name": "채식 만두", "link": "https://www.veganmandu.com", "type": "요리" },
            { "name": "채식 샌드위치", "link": "https://www.vegansandwich.com", "type": "요리" },
            { "name": "채식 김밥", "link": "https://www.vegankimbap.com", "type": "요리" },
            { "name": "채식 타코", "link": "https://www.vegantaco.com", "type": "요리" }
        ]
    },
    {
        "theme": "한식",
        "items": [
            { "name": "비빔밥", "link": "https://www.bibimbap.com", "type": "요리" },
            { "name": "불고기", "link": "https://www.bulgogi.com", "type": "요리" },
            { "name": "김치찌개", "link": "https://www.kimchistew.com", "type": "요리" },
            { "name": "잡채", "link": "https://www.japchae.com", "type": "요리" },
            { "name": "갈비찜", "link": "https://www.galbijjim.com", "type": "요리" },
            { "name": "된장찌개", "link": "https://www.doenjangjjigae.com", "type": "요리" },
            { "name": "떡볶이", "link": "https://www.tteokbokki.com", "type": "요리" },
            { "name": "김밥", "link": "https://www.gimbap.com", "type": "요리" },
            { "name": "순두부찌개", "link": "https://www.sundubu.com", "type": "요리" },
            { "name": "제육볶음", "link": "https://www.jeyukbokkeum.com", "type": "요리" }
        ]
    },
    {
        "theme": "중식",
        "items": [
            { "name": "짜장면", "link": "https://www.jjajangmyeon.com", "type": "배달" },
            { "name": "짬뽕", "link": "https://www.jjampong.com", "type": "배달" },
            { "name": "탕수육", "link": "https://www.tangsuyuk.com", "type": "배달" },
            { "name": "마파두부", "link": "https://www.mapatofu.com", "type": "요리" },
            { "name": "볶음밥", "link": "https://www.bokkeumbap.com", "type": "요리" },
            { "name": "유린기", "link": "https://www.yuringi.com", "type": "요리" },
            { "name": "군만두", "link": "https://www.gunmandu.com", "type": "요리" },
            { "name": "소고기 볶음면", "link": "https://www.beefbokkeummyeon.com", "type": "요리" },
            { "name": "양장피", "link": "https://www.yangjangpi.com", "type": "요리" },
            { "name": "샤오롱바오", "link": "https://www.xiaolongbao.com", "type": "요리" }
        ]
    },
    {
        "theme": "양식",
        "items": [
            { "name": "스파게티", "link": "https://www.spaghetti.com", "type": "요리" },
            { "name": "피자", "link": "https://www.pizza.com", "type": "배달" },
            { "name": "리조또", "link": "https://www.risotto.com", "type": "요리" },
            { "name": "스테이크", "link": "https://www.steak.com", "type": "요리" },
            { "name": "샐러드", "link": "https://www.salad.com", "type": "요리" },
            { "name": "파스타", "link": "https://www.pasta.com", "type": "요리" },
            { "name": "햄버거", "link": "https://www.hamburger.com", "type": "배달" },
            { "name": "치킨 알프레도", "link": "https://www.chickenalfredo.com", "type": "요리" },
            { "name": "퀘사디아", "link": "https://www.quesadilla.com", "type": "요리" },
            { "name": "크림 수프", "link": "https://www.creamsoup.com", "type": "요리" }
        ]
    },
    {
        "theme": "일식",
        "items": [
            { "name": "초밥", "link": "https://www.sushi.com", "type": "배달" },
            { "name": "라멘", "link": "https://www.ramen.com", "type": "요리" },
            { "name": "돈부리", "link": "https://www.donburi.com", "type": "요리" },
            { "name": "우동", "link": "https://www.udon.com", "type": "요리" },
            { "name": "규동", "link": "https://www.gyudon.com", "type": "요리" },
            { "name": "사시미", "link": "https://www.sashimi.com", "type": "배달" },
            { "name": "텐동", "link": "https://www.tendon.com", "type": "요리" },
            { "name": "오니기리", "link": "https://www.onigiri.com", "type": "요리" },
            { "name": "미소된장국", "link": "https://www.misosoup.com", "type": "요리" },
            { "name": "타코야끼", "link": "https://www.takoyaki.com", "type": "요리" }
        ]
    },
    {
        "theme": "디저트",
        "items": [
            { "name": "케이크", "link": "https://www.cake.com", "type": "배달" },
            { "name": "아이스크림", "link": "https://www.icecream.com", "type": "배달" },
            { "name": "푸딩", "link": "https://www.pudding.com", "type": "요리" },
            { "name": "마카롱", "link": "https://www.macaron.com", "type": "배달" },
            { "name": "과일 샐러드", "link": "https://www.fruitsalad.com", "type": "요리" },
            { "name": "타르트", "link": "https://www.tart.com", "type": "요리" },
            { "name": "쿠키", "link": "https://www.cookie.com", "type": "요리" },
            { "name": "브라우니", "link": "https://www.brownie.com", "type": "요리" },
            { "name": "파이", "link": "https://www.pie.com", "type": "요리" },
            { "name": "젤리", "link": "https://www.jelly.com", "type": "요리" }
        ]
    },
    {
        "theme": "건강식",
        "items": [
            { "name": "퀴노아 샐러드", "link": "https://www.quinoasalad.com", "type": "요리" },
            { "name": "그릴드 치킨과 채소", "link": "https://www.grilledchicken.com", "type": "요리" },
            { "name": "스무디 볼", "link": "https://www.smoothiebowl.com", "type": "요리" },
            { "name": "렌틸콩 스프", "link": "https://www.lentilsoup.com", "type": "요리" },
            { "name": "아보카도 토스트", "link": "https://www.avocadotoast.com", "type": "요리" },
            { "name": "채소 스틱과 후무스", "link": "https://www.veggiesticks.com", "type": "요리" },
            { "name": "오트밀", "link": "https://www.oatmeal.com", "type": "요리" },
            { "name": "스팀 야채", "link": "https://www.steamedveggies.com", "type": "요리" },
            { "name": "생선구이", "link": "https://www.grilledfish.com", "type": "요리" },
            { "name": "두부 스테이크", "link": "https://www.tofusteak.com", "type": "요리" }
        ]
    },
    {
        "theme": "지중해 요리",
        "items": [
            { "name": "그리스 샐러드", "link": "https://www.greeksalad.com", "type": "요리" },
            { "name": "파에야", "link": "https://www.paella.com", "type": "요리" },
            { "name": "타불레", "link": "https://www.tabbouleh.com", "type": "요리" },
            { "name": "후무스", "link": "https://www.hummus.com", "type": "요리" },
            { "name": "피타 브레드", "link": "https://www.pitabread.com", "type": "요리" },
            { "name": "모로코식 양고기 태그인", "link": "https://www.moroccantagine.com", "type": "요리" },
            { "name": "이탈리안 리조또", "link": "https://www.italianrisotto.com", "type": "요리" }
        ]
    },
    {
        "theme": "멕시코 요리",
        "items": [
            { "name": "타코", "link": "https://www.taco.com", "type": "요리" },
            { "name": "부리또", "link": "https://www.burrito.com", "type": "배달" },
            { "name": "엔칠라다", "link": "https://www.enchilada.com", "type": "요리" },
            { "name": "나초", "link": "https://www.nacho.com", "type": "요리" },
            { "name": "퀘사디아", "link": "https://www.quesadilla.com", "type": "요리" },
            { "name": "멕시칸 라이스", "link": "https://www.mexicanrice.com", "type": "요리" }
        ]
    },
    {
        "theme": "아시아 퓨전",
        "items": [
            { "name": "스시 롤", "link": "https://www.sushiroll.com", "type": "배달" },
            { "name": "팟타이", "link": "https://www.padthai.com", "type": "요리" },
            { "name": "카레 볶음밥", "link": "https://www.curryfriedrice.com", "type": "요리" },
            { "name": "쌀국수", "link": "https://www.pho.com", "type": "요리" },
            { "name": "볶음면", "link": "https://www.stirfriednoodles.com", "type": "요리" }
        ]
    }
];

// 테마별 추천 기능
const themeButtons = document.querySelectorAll('.theme-buttons button');
const themeResult = document.getElementById('theme-result');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.theme;
        const filteredMenu = menuData.find(item => item.theme === theme).items;
        displayMenu(filteredMenu, themeResult);
    });
});

// 취향 저격 추천 기능
const preferenceBtn = document.getElementById('preference-recommend');
const preferenceResult = document.getElementById('preference-result');
const spicyCheckbox = document.getElementById('spicy');
const seafoodCheckbox = document.getElementById('seafood');
const vegetarianCheckbox = document.getElementById('vegetarian');

preferenceBtn.addEventListener('click', () => {
    const selectedPreferences = [];
    if (spicyCheckbox.checked) selectedPreferences.push("매운 거 좋아!");
    if (seafoodCheckbox.checked) selectedPreferences.push("해산물 땡겨!");
    if (vegetarianCheckbox.checked) selectedPreferences.push("나는 채식주의자");

    let filteredMenu = [];
    if (selectedPreferences.length > 0) {
        selectedPreferences.forEach(preference => {
            const menu = menuData.find(item => item.theme === preference)?.items;
            if (menu) filteredMenu = filteredMenu.concat(menu);
        });
    } else {
        // 선택된 취향이 없을 경우, "오늘 뭐 먹지?" 테마에서 추천
        filteredMenu = menuData.find(item => item.theme === "오늘 뭐 먹지?").items;
    }

    // 중복 제거
    filteredMenu = filteredMenu.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.name === item.name
        ))
    );

    displayMenu(filteredMenu, preferenceResult);
});

// 메뉴 출력 함수
function displayMenu(menuList, resultElement) {
    resultElement.innerHTML = '';
    if (menuList.length === 0) {
        resultElement.innerHTML = '<p>조건에 맞는 메뉴가 없어요! 😭</p>';
        return;
    }
    menuList.forEach(menu => {
        const div = document.createElement('div');
        const link = document.createElement('a');
        link.href = menu.link;
        link.textContent = menu.name + " (" + menu.type + ")";
        link.target = "_self"; // 현재 창에서 열기
        link.onclick = () => {
            alert("전면광고: 광고내용"); // 전면 광고
        };
        div.appendChild(link);
        resultElement.appendChild(div);
    });
}

// 랜덤 추천 기능
const randomCardsContainer = document.getElementById('random-cards');
const randomRecommendBtn = document.getElementById('random-recommend');
const gameMessage = document.getElementById('game-message');
let recommendCount = parseInt(localStorage.getItem('recommendCount')) || 0; // 추천 횟수

function createRandomCards() {
    randomCardsContainer.innerHTML = '';
    const allMenuItems = menuData.flatMap(item => item.items);

    for (let i = 0; i < 3; i++) {
        const card = document.createElement('div');
        const cardFront = document.createElement('div');
        const cardBack = document.createElement('div');
        card.classList.add('card');
        cardFront.classList.add('card-front');
        cardBack.classList.add('card-back');
        cardFront.textContent = "?";
        card.appendChild(cardFront);
        card.appendChild(cardBack);

        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped')) {
                const randomIndex = Math.floor(Math.random() * allMenuItems.length);
                const randomMenu = allMenuItems[randomIndex];
                cardBack.textContent = randomMenu.name;
                card.classList.add('flipped');
                const link = document.createElement('a');
                link.href = randomMenu.link;
                link.textContent = " (" + randomMenu.type + ")";
                link.target = "_self";
                link.onclick = () => {
                    alert("전면광고: 광고내용");
                };
                cardBack.appendChild(link);

                recommendCount++;
                localStorage.setItem('recommendCount', recommendCount);
                updateGameMessage();
            }
        });

        randomCardsContainer.appendChild(card);
    }
}

function updateGameMessage() {
    if (recommendCount >= 3) {
        gameMessage.textContent = `벌써 ${recommendCount}번이나 추천받으셨네요! 당신은 진정한 메뉴 탐험가! 😎`;
        if (recommendCount % 3 === 0) {
            localStorage.setItem('recommendCount', 0);
            recommendCount = 0
        }
    } else {
        gameMessage.textContent = "";
    }
}

randomRecommendBtn.addEventListener('click', () => {
    createRandomCards();
    gameMessage.textContent = ""; // 추천 횟수 초기화
});

// 초기 카드 생성 및 게임 메시지 업데이트
createRandomCards();
updateGameMessage();
