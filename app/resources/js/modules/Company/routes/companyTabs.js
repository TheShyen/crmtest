const companyTabs = [
  {
    text: "Структура компании",
    route: "/company/structure",
    id: 1,
    type: "tab",
  },
  { text: "Сотрудники", route: "/company/users", id: 2, type: "tab" },
  {
    text: "Время и отчёты",
    route: "/",
    id: 3,
    type: "select",
    options: [
      {
        text: "Собрания и планерки",
        id: 1,
        route: "/",
      },
      {
        text: "График отсутствий",
        id: 2,
        route: "/",
      },
      {
        text: "История входов",
        id: 3,
        route: "/",
      },
    ],
  },
];

export default companyTabs;
