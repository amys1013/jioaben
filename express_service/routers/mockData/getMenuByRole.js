// 这里固定只返回一个的菜单信息

const userMenus = [
  {
    icon: "Menu",
    id: 38,
    name: "系统总览",
    sort: 1,
    type: 1, // 1表示可以展开的菜单  2是表示不可以展开的菜单
    url: "/main/analysis",
    children: [
      {
        icon: "Reading",
        children: null,
        id: 39,
        name: "核心技术1",
        parentId: 38,
        sort: 106,
        type: 2,
        url: "/main/analysis/overview",
      },
      {
        icon: "PriceTag",
        children: null,
        id: 37,
        name: "核心技术2",
        parentId: 38,
        sort: 107,
        type: 2,
        url: "/main/analysis/overview1",
      },
    ],
  },
  {
    icon: "Position",
    id: 40,
    name: "系统总览2",
    sort: 2,
    type: 1, // 1表示可以展开的菜单  2是表示不可以展开的菜单
    url: "/main/analysis2",
    children: [
      {
        icon: "Reading",
        children: null,
        id: 41,
        name: "核心技术3",
        parentId: 40,
        sort: 109,
        type: 2,
        url: "/main/analysis/overview2",
      },
      {
        icon: "PriceTag",
        children: null,
        id: 42,
        name: "核心技术4",
        parentId: 40,
        sort: 108,
        type: 2,
        url: "/main/analysis/overview12",
      },
    ],
  },
];

module.exports = userMenus;
