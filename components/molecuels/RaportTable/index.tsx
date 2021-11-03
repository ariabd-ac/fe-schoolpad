import { Table, Button } from 'antd';
import Link from 'next/link';



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



const data2 = [
  {
    key: '1',
    name: 'John Doe',
    age: 35,
    address: 'New York No. 1 Lake Park'
  }
];

interface RaportProps {
  type: string;
}

const RaportTable = ({ type }: RaportProps) => {



  const columnsSaintek = [
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
      render: (text: any, record: any, type: any) => (
        <Button type="primary" style={{ backgroundColor: '#35ce54', border: 'none', borderRadius: 4 }}><Link href="/raports/detail_raport/saintek"> Detail</Link></Button>
      ),
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
      render: (text: any, record: any, type: any) => (
        <Button type="primary" style={{ backgroundColor: '#35ce54', border: 'none', borderRadius: 4 }}><Link href="/main_events/hasil_to/saintek"> Detail</Link></Button>
      ),
    },

  ];

  if (type === 'SOSHUM') {
    return (
      <>
        <Table columns={columns} dataSource={data} bordered pagination={false} />
        {/* <br /> */}
        <Table columns={columnsSaintek} dataSource={data2} showHeader={false} pagination={false} />

      </>
    )
  }

  return (
    <>
      <Table columns={columns} dataSource={data} bordered pagination={false} />
      {/* <br /> */}
      <Table columns={columns2} dataSource={data2} showHeader={false} pagination={false} />

    </>
  )
}


export default RaportTable
