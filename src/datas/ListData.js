const data = [
  {
    quiz_id: 0,
    quiz_name: "Sınav Adı 0",
  },
  {
    quiz_id: 1,
    quiz_name: "Sınav Adı 1",
  },
  {
    quiz_id: 2,
    quiz_name: "Sınav Adı 2",
  },
  {
    quiz_id: 3,
    quiz_name: "Sınav Adı 3",
  },
  {
    quiz_id: 4,
    quiz_name: "Sınav Adı 4",
  },
  {
    quiz_id: 5,
    quiz_name: "Sınav Adı 5",
  },
  {
    quiz_id: 6,
    quiz_name: "Sınav Adı 6",
  },
  {
    quiz_id: 7,
    quiz_name: "Sınav Adı 7",
  },
  {
    quiz_id: 8,
    quiz_name: "Sınav Adı 8",
  },
  {
    quiz_id: 9,
    quiz_name: "Sınav Adı 9",
  },
  {
    quiz_id: 10,
    quiz_name: "Sınav Adı 10",
  },
  {
    quiz_id: 11,
    quiz_name: "Sınav Adı 11",
  },
  {
    quiz_id: 12,
    quiz_name: "Sınav Adı 12",
  },
  {
    quiz_id: 13,
    quiz_name: "Sınav Adı 13",
  },
  {
    quiz_id: 14,
    quiz_name: "Sınav Adı 14",
  },
  {
    quiz_id: 15,
    quiz_name: "Sınav Adı 15",
  },
  {
    quiz_id: 16,
    quiz_name: "Sınav Adı 16",
  },
  {
    quiz_id: 17,
    quiz_name: "Sınav Adı 17",
  },
  {
    quiz_id: 18,
    quiz_name: "Sınav Adı 18",
  },
  {
    quiz_id: 19,
    quiz_name: "Sınav Adı 19",
  },
  {
    quiz_id: 20,
    quiz_name: "Sınav Adı 20",
  },
  {
    quiz_id: 21,
    quiz_name: "Sınav Adı 21",
  },
  {
    quiz_id: 22,
    quiz_name: "Sınav Adı 22",
  },
  {
    quiz_id: 23,
    quiz_name: "Sınav Adı 23",
  },
  {
    quiz_id: 24,
    quiz_name: "Sınav Adı 24",
  },
  {
    quiz_id: 25,
    quiz_name: "Sınav Adı 25",
  },
  {
    quiz_id: 26,
    quiz_name: "Sınav Adı 26",
  },
  {
    quiz_id: 27,
    quiz_name: "Sınav Adı 27",
  },
  {
    quiz_id: 28,
    quiz_name: "Sınav Adı 28",
  },
  {
    quiz_id: 29,
    quiz_name: "Sınav Adı 29",
  },
  {
    quiz_id: 30,
    quiz_name: "Sınav Adı 30",
  },
  {
    quiz_id: 31,
    quiz_name: "Sınav Adı 31",
  },
  {
    quiz_id: 32,
    quiz_name: "Sınav Adı 32",
  },
  {
    quiz_id: 33,
    quiz_name: "Sınav Adı 33",
  },
  {
    quiz_id: 34,
    quiz_name: "Sınav Adı 34",
  },
  {
    quiz_id: 35,
    quiz_name: "Sınav Adı 35",
  },
  {
    quiz_id: 36,
    quiz_name: "Sınav Adı 36",
  },
  {
    quiz_id: 37,
    quiz_name: "Sınav Adı 37",
  },
  {
    quiz_id: 38,
    quiz_name: "Sınav Adı 38",
  },
  {
    quiz_id: 39,
    quiz_name: "Sınav Adı 39",
  },
  {
    quiz_id: 40,
    quiz_name: "Sınav Adı 40",
  },
  {
    quiz_id: 41,
    quiz_name: "Sınav Adı 41",
  },
  {
    quiz_id: 42,
    quiz_name: "Sınav Adı 42",
  },
  {
    quiz_id: 43,
    quiz_name: "Sınav Adı 43",
  },
  {
    quiz_id: 44,
    quiz_name: "Sınav Adı 44",
  },
  {
    quiz_id: 45,
    quiz_name: "Sınav Adı 45",
  },
  {
    quiz_id: 46,
    quiz_name: "Sınav Adı 46",
  },
  {
    quiz_id: 47,
    quiz_name: "Sınav Adı 47",
  },
  {
    quiz_id: 48,
    quiz_name: "Sınav Adı 48",
  },
  {
    quiz_id: 49,
    quiz_name: "Sınav Adı 49",
  },
];

const getDataQuiz = (quiz) => {
  const get = data.filter(item => item.quiz_id === quiz);
  if (get.length > 0) return get[0];
  return null;
};

const ListData = {
  data,
  getDataQuiz,
};


export default ListData;
