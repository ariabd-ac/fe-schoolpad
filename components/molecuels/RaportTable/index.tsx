import { Table, Button } from 'antd';



// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const columns = [
  {
    title: '',
    dataIndex: 'total',


  },
  {
    title: 'TO1',
    children: [
      {
        title: 'Niai',
        dataIndex: 'nilai',
        key: 'nilai',
        width: 150,

      },
      {
        title: 'Ranking',
        dataIndex: 'rank',
        key: 'rank',
        width: 150,

      },
    ]
  },
  {
    title: 'TO 2',
    children: [
      {
        title: 'Niai',
        dataIndex: 'nilai',
        key: 'nilai',
        width: 150,

      },
      {
        title: 'Ranking',
        dataIndex: 'rank',
        key: 'rank',
        width: 150,

      },
    ]
  },
  {
    title: 'TO 3',
    children: [
      {
        title: 'Niai',
        dataIndex: 'nilai',
        key: 'nilai',
        width: 150,

      },
      {
        title: 'Ranking',
        dataIndex: 'rank',
        key: 'rank',
        width: 150,

      },
    ]
  },
  {
    title: 'TO 4',
    children: [
      {
        title: 'Niai',
        dataIndex: 'nilai',
        key: 'nilai',
        width: 150,

      },
      {
        title: 'Ranking',
        dataIndex: 'rank',
        key: 'rank',
        width: 150,
      },
    ]
  },
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   render: (text, row, index) => {
  //     if (index < 4) {
  //       return <a href="#">{text}</a>;
  //     }
  //     return {
  //       children: <a href="#">{text}</a>,
  //       props: {
  //         colSpan: 5,
  //       },
  //     };
  //   },
  // },
  // {
  //   title: 'Home phone',
  //   colSpan: 2,
  //   dataIndex: 'tel',
  //   render: (value, row, index) => {
  //     const obj = {
  //       children: value,
  //       props: {},
  //     };

  //     if (index === 2) {
  //       obj.props.rowSpan = 2;
  //     }
  //     // These two are merged into above cell
  //     if (index === 3) {
  //       obj.props.rowSpan = 0;
  //     }
  //     if (index === 4) {
  //       obj.props.colSpan = 0;
  //     }
  //     return obj;
  //   },
  // },
  // {
  //   title: 'Home phone',
  //   colSpan: 2,
  //   dataIndex: 'tel',
  //   render: (value, row, index) => {
  //     const obj = {
  //       children: value,
  //       props: {},
  //     };

  //     if (index === 2) {
  //       obj.props.rowSpan = 2;
  //     }
  //     // These two are merged into above cell
  //     if (index === 3) {
  //       obj.props.rowSpan = 0;
  //     }
  //     if (index === 4) {
  //       obj.props.colSpan = 0;
  //     }
  //     return obj;
  //   },
  // }

];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
    nilai: "...",
    rank: "...",
    total: 'Total'
  },

];


const columns2 = [
  {

    title: '',
    dataIndex: '',


  },
  {
    title: 'Button Test',
    key: 'key',
    dataIndex: 'key',
    render: (text: any, record: any) => (
      // <button onClick={() => console.log(record)}>
      //   {"Button Text"}
      // </button>
      <Button type="primary" style={{ backgroundColor: '#35ce54', border: 'none', borderRadius: 4 }}>Detail</Button>
    ),
  },
  {
    title: 'Button Test',
    key: 'key',
    dataIndex: 'key',
    render: (text: any, record: any) => (
      <Button type="primary" style={{ backgroundColor: '#35ce54', border: 'none', borderRadius: 4 }}>Detail</Button>
    ),
  },
  {
    title: 'Button Test',
    key: 'key',
    dataIndex: 'key',
    render: (text: any, record: any) => (
      <Button type="primary" style={{ backgroundColor: '#35ce54', border: 'none', borderRadius: 4 }}>Detail</Button>
    ),
  },
  {
    title: 'Button Test',
    key: 'key',
    dataIndex: 'key',
    render: (text: any, record: any) => (
      <Button type="primary" style={{ backgroundColor: '#35ce54', border: 'none', borderRadius: 4 }}>Detail</Button>
    ),
  },

];

const data2 = [
  {
    key: '1',
    name: 'John Doe',
    age: 35,
    address: 'New York No. 1 Lake Park'
  }
];


const RaportTable = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} bordered pagination={false} />
      {/* <br /> */}
      <Table columns={columns2} dataSource={data2} showHeader={false} pagination={false} />

    </>
  )
}


export default RaportTable
