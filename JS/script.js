'use strict';

const main =document.querySelector('.main');
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
}

const renderTheme = Themes => {
    const list = document.querySelector('.selection__list');
    list.textContent = '';

    for (let i = 0; i < themes.length; i += 1) {
        list.innerHTML += `
        <li class="selection__item">
        <button class="selection__theme">${themes[i].themes}</button>
        </li>
        `;
    }
    
}

const initQuiz = () => {

    const data = getData();

    renderTheme(data);
};

initQuiz();
