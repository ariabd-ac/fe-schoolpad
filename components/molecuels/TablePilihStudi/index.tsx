import styles from './TablePilihStudi.module.scss'
import { Breadcrumb, Tabs, Input, Form, Button, Select } from 'antd';

const TablePilihStudi = () => {
  const { Option } = Select;
  return (
    <div className={styles.tableContainer}>
      <h4>Pilihan 1</h4>
      <div className={styles.chooseKampus}>
        <div className={styles.select1}>
          <Form.Item name="campus" label="Kampus">
            <Select
              placeholder="Pilih kampus tujuanmu"
              allowClear
            >
              <Option value="ui">Universitas Indonesia</Option>
              <Option value="usm">Universitas Sebelas Maret</Option>
              <Option value="itb">Institut Teknologi Bandung</Option>
            </Select>
          </Form.Item>
        </div>
        <div className={styles.select2}>
          <Form.Item name="jurusan" label="Jurusan">
            <Select
              placeholder="Pilih Jurusanmu"
              allowClear
            >
              <Option value="ti">Teknik Informatika</Option>
              <Option value="dkv">Desain komunikasi visual</Option>
              <Option value="pertanian">Pertanian</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className={styles.tableKeterangan}>
        <div className={styles.detailData}>
          <span>Pertanian - Istitut Teknologi Bandung</span>
          <div className={styles.tableData}>
            <table >
              <thead>
                <tr>
                  <th colSpan={2}>
                    Data
                    2021
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KODE</td>
                  <td>3531054</td>
                </tr>
                <tr>
                  <td>NAMA</td>
                  <td>PETERNAKAN</td>
                </tr>
                <tr>
                  <td>JENIS</td>
                  <td>SAINTEK</td>
                </tr>
                <tr>
                  <td className="text-nowrap">DAYA TAMPUNG</td>
                  <td>58</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.peminat}>
            <table>
              <thead>
                <tr>
                  <th colSpan={11}>SEBARAN PEMINAT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tahun</td>
                  <td>2015</td>
                  <td>2016</td>
                  <td>2017</td>
                  <td>2018</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>Jumlah Peminat</td>
                  <td>968</td>
                  <td>1082</td>
                  <td>1197</td>
                  <td>1225</td>
                  <td>767</td>
                </tr>
                <tr>
                  <td>Daya Tampung</td>
                  <td>36</td>
                  <td>54</td>
                  <td>65</td>
                  <td>66</td>
                  <td>73</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablePilihStudi
