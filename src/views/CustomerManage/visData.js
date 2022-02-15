module.exports = {
  visNodes: [
    // {
    //   id: -1,
    //   label: "质贞集团",
    //   color: {
    //     background: "#91aeef",
    //   },
    // },
    // {
    //   id: -2,
    //   label: "ABC有限公司",
    //   color: {
    //     background: "#bff3bb",
    //   },
    // },
    {
      id: 0,
      label: "勇哥",
      color: {
        background: "pink",
      },
    },
    {
      id: 1,
      label: "张三",
      color: {
        background: "pink",
      },
    },
    {
      id: 2,
      label: "李四",
      color: {
        background: "pink",
      },
    },
    {
      id: 3,
      label: "赵武",
      color: {
        background: "pink",
      },
    },
    {
      id: 4,
      label: "质贞集团",
      company: "三大主流框架",
      color: {
        background: "yellow",
      },
    },
    {
      id: 5,
      label: "赵哥",
      color: {
        background: "pink",
      },
    },
    {
      id: 6,
      label: "勇三",
      color: {
        background: "pink",
      },
    },
    {
      id: 7,
      label: "勇五",
      color: {
        background: "pink",
      },
    },
  ],
  visEdges: [
    {
      from: 0,
      to: 1,
      label: "引荐",
    },
    // {
    //   from: 1,
    //   to: 0,
    //   label: "aaa",
    // },
    {
      from: 0,
      to: 2,
      label: "引荐",
    },
    {
      from: 0,
      to: 3,
      label: "引荐",
    },
    {
      from: 4,
      to: 0,
      label: "所属公司",
    },
    {
      from: 2,
      to: 5,
      label: "引荐",
    },
    {
      from: 4,
      to: 6,
      label: "所属公司",
    },
    {
      from: 2,
      to: 7,
      label: "引荐",
    },
  ],
};
