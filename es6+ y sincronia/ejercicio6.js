const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 6.1
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(totalScore);

// 6.2
const passingTotalScore = exams.reduce((acc, exam) => {
    return exam.score >= 5 ? acc + exam.score : acc;
}, 0);
console.log(passingTotalScore);

// 6.3
const averageScore = exams.reduce((acc, exam, index, array) => {
    acc += exam.score;
    return index === array.length - 1 ? acc / array.length : acc;
}, 0);
console.log(averageScore);