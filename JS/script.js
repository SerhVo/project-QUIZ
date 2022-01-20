'use strict';
const main = document.querySelector('.main');
const title = document.querySelector('.main__title');
const selection = document.querySelector('.selection');

const getData = () => {
    const dataBase = [
        {
            id: '01',
            Theme: 'тема01',
            result: [
                [40, 'Есть задатки, нужно развиваться'],
                [80, 'Очень хорошо, но есть пробелы'],
                [100, 'Отличный результат']
            ],
            list: [
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 2,
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 2,
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 2,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 1,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 3,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 2,
                },
            ]
        },
        {
            id: '02',
            Theme: 'тема02',
            result: [
                [30, 'Есть задатки, нужно развиваться'],
                [60, 'Очень хорошо, но есть пробелы'],
                [100, 'Отличный результат']
            ],
            list: [
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                },
                
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 2,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 1,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 3,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'правильный2', 'неправильный', 'неправильный2']
                correct: 2,
                },
            ]
        }
    ];
    return dataBase;
};

const hideElem = () => {
    let opacity = getComputedStyle(Elem).getPropertyValue('opacity');

    const animation = () => {
        opacity -=0.05;
        elem.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animation);
        } else {
            elem.style.display = 'none';
        }
    };
    requestAnimationFrame(animation);
};

const renderTheme = Themes => {
    const list = document.querySelector('.selection__list');
    list.textContent = '';

    const button = [];

    for (let i = 0; i < themes.length; i += 1) {
        const li = document.createElement('li');
        li.className = 'selection__item';

        const button = document.createElement('button');
        button.className = 'selection__theme';
        button.dataset.id = themes[i].id;
        button.textContent = themes[i].theme;

        li.append(button);

        list.append(li);

        buttons.push(button);

        /*list.innerHTML += `
        <li class="selection__item">
        <button class="selection__theme">${themes[i].themes}</button>
        </li>
        `;*/
    }
    
    return buttons;

};

const renderQuiz = quiz => {
    hideElem(title);
    hideElem(selection);

    const questionBox = document.createElement('div');
    questionBox.className = 'main__box main__box-question';

    main.append(questionBox)
};

const addClick = (buttons, data) => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const quiz = data.find(item => item.id === btn.dataset.id);
            renderQuiz(quiz);
            
        });
    })
}; 

const initQuiz = () => {

    const data = getData();

    const buttons = renderTheme(data);

    addClick(buttons, data);

};

initQuiz();
