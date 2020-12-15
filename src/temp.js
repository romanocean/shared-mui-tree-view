const data = {
  id: "root",
  name: "Root",

  items: [
    {
      id: "0",
      name: "data piece #0",
      items: [
        { id: "00", name: "data subpiece #00" },
        { id: "01", name: "data subpiece #01" }
      ]
    },
    {
      id: "1",
      name: "data piece #1",
      items: [
        {
          id: "11",
          name: "data subpiece #11",
          items: [{ id: "111", name: "data sub subpiece #111", type: "sensor" }]
        }
      ]
    },
    {
      id: "2",
      name: "data piece #2"
    },
    {
      id: "3",
      name: "data piece #3"
    },
    {
      id: "4",
      name: "data piece #4"
    },
    {
      id: "5",
      name: "data piece #5"
    }
  ]
};

const oneMorePieceOfData = {
  id: "root#1",
  name: "Root #1",
  items: [
    {
      id: "1_0",
      name: "data piece #1_0",
      items: [
        { id: "1_00", name: "data subpiece #1_00" },
        { id: "1_01", name: "data subpiece #1_01" }
      ]
    },
    {
      id: "1_1",
      name: "data piece #1_1",
      items: [
        {
          id: "1_11",
          name: "data subpiece #1_11",
          items: [{ id: "1_111", name: "data sub subpiece #1_111" }]
        }
      ]
    }
  ]
};

export default data;
// export default [data, oneMorePieceOfData];
