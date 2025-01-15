$(document).ready(function(){
    // 테마별 추천 슬라이더 초기화
    $('.theme-buttons').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // 추천 메뉴 데이터
    const menuData = [
        // ... [이전과 동일한 메뉴 데이터]
    ];

    // 선택된 메뉴를 저장하기 위한 배열
    let selectedMenus = [];

    // '추천 받기' 버튼 이벤트 리스너
    document.getElementById('preference-recommend').addEventListener('click', function() {
        selectedMenus = []; // 선택된 메뉴 배열 초기화
        const selectedPreferences = document.querySelectorAll('.preference-buttons .preference-button.selected');
        
        if (selectedPreferences.length > 0) {
            // 선택된 취향을 기반으로 메뉴 필터링
            selectedPreferences.forEach(pref => {
                const preference = pref.textContent;
                const matchingMenus = menuData.find(item => item.theme === preference)?.items || [];
                selectedMenus = selectedMenus.concat(matchingMenus);
            });

            // 중복 메뉴 제거
            selectedMenus = selectedMenus.filter((menu, index, self) =>
                index === self.findIndex(m => m.name === menu.name)
            );

            // 최대 3개의 메뉴만 무작위로 선택
            while (selectedMenus.length > 3) {
                const randomIndex = Math.floor(Math.random() * selectedMenus.length);
                selectedMenus.splice(randomIndex, 1);
            }
        } else {
            // 선택된 취향이 없을 경우, 랜덤 메뉴 선택
            const allMenuItems = menuData.flatMap(item => item.items);
            while (selectedMenus.length < 3) {
                const randomIndex = Math.floor(Math.random() * allMenuItems.length);
                const randomMenu = allMenuItems[randomIndex];
                if (!selectedMenus.includes(randomMenu)) {
                    selectedMenus.push(randomMenu);
                }
            }
        }

        displayMenu(selectedMenus, document.getElementById('preference-result'));
    });

    // 메뉴 출력 함수
    function displayMenu(menuList, resultElement) {
        resultElement.innerHTML = '';
        if (menuList.length === 0) {
            resultElement.innerHTML = '<p>조건에 맞는 메뉴가 없어요! 😭</p>';
            return;
        }
        const ul = document.createElement('ul');
        menuList.forEach(menu => {
            const li = document.createElement('li');
            li.textContent = menu.name;
            ul.appendChild(li);
        });
        resultElement.appendChild(ul);
    }

    // 랜덤 카드 생성을 위한 함수
    function createRandomCard() {
        const card = document.createElement('div');
        card.classList.add('random-card');
        card.textContent = '랜덤 메뉴';
        card.addEventListener('click', () => handleRandomCardClick(card));
        return card;
    }

    // 랜덤 카드 클릭 핸들러
    function handleRandomCardClick(card) {
        if (!card.classList.contains('flipped')) {
            const allMenuItems = menuData.flatMap(item => item.items);
            const randomIndex = Math.floor(Math.random() * allMenuItems.length);
            const randomMenu = allMenuItems[randomIndex];

            card.textContent = '';
            card.classList.add('flipped');

            const menuName = document.createElement('div');
            menuName.textContent = randomMenu.name;
            menuName.style.fontWeight = 'bold';
            menuName.style.marginBottom = '10px';

            const menuLink = document.createElement('a');
            menuLink.href = '#';
            menuLink.textContent = '→';
            menuLink.style.textDecoration = 'none';
            menuLink.style.color = 'blue';
            menuLink.style.marginLeft = '5px';

            menuLink.addEventListener('click', function(event) {
                event.stopPropagation();
            });

            card.appendChild(menuName);
            card.appendChild(menuLink);
            
            // 여기에 팡파레 효과나 음식 이모지 애니메이션을 추가할 수 있습니다.
            // 예: 애니메이션 라이브러리 사용, CSS 애니메이션 적용 등
        }
    }
    

    // 초기 카드 3개 생성
    for (let i = 0; i < 3; i++) {
        document.getElementById('random-cards').appendChild(createRandomCard());
    }

    // '한 번 더!' 버튼 클릭 시 카드 다시 생성
    document.getElementById('random-recommend').addEventListener('click', () => {
        document.getElementById('random-cards').innerHTML = ''; // 기존 카드 제거
        for (let i = 0; i < 3; i++) {
            document.getElementById('random-cards').appendChild(createRandomCard());
        }
    });
});

$(document).ready(function(){
    // Slick Carousel 초기화
    $('.theme-buttons').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // 버튼 텍스트 배열
    const buttonTexts = [
        "매운 거 좋아! 🔥", "해산물 땡겨! 🦐", "나는 채식주의자 🥗", "고기 러버! 🥩",
        "달달한 거 🍯", "기름진 거 🍗", "담백한 거 🍚", "오늘은 특별하게 🎉",
        "다이어트 중 💪", "혼밥 메뉴 🧍", "가족 식사 👨‍👩‍👧‍👦", "데이트 음식 💑",
        "뜨끈한 국물 🍲", "시원한 면 요리 🍜", "간편식 최고 👍", "건강식이 좋아 🥦",
        "아시안 푸드 🥢", "양식 땡겨 🍝", "한식 좋아 🍚", "중식 먹고파 🥡",
        "일식 🍣", "분식 땡기는 날 🥟", "야식 먹고파 🍕", "맥주 안주 🍺",
        "와인 안주 🍷", "소주 안주 🍶", "막걸리 안주 🍶", "새로운 맛 도전 🌍",
        "집밥 느낌 그리워 🏠", "외식하는 기분 내고파 🍽️", "가성비 좋은 거 💰", "고급진 요리 🥂",
        "든든한 한 끼 💪", "가벼운 한 끼 🍃", "후식까지 완벽하게 🍰", "커피랑 어울리는 거 ☕",
        "차랑 어울리는 거 🍵", "비 오는 날엔 파전 🌧️", "눈 오는 날엔 호떡 ❄️", "더운 날엔 냉면 ☀️"
    ];

    // 버튼 생성 및 이벤트 리스너 추가
    const preferenceButtonsContainer = document.querySelector('.preference-buttons');
    buttonTexts.forEach(text => {
        const button = document.createElement('button');
        button.className = 'preference-button';
        button.textContent = text;
        button.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
        preferenceButtonsContainer.appendChild(button);
    });
});
