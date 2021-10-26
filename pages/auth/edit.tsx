import { style } from '@mui/system';
import { Breadcrumb, Tabs, Input, Form, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CustomLayout from '../../components/molecuels/Layout';
import TablePilihStudi from '../../components/molecuels/TablePilihStudi';
import styles from '../../styles/EditUser.module.scss';






const EditUser = () => {

  const [prime, setPrimer] = useState(true)

  const { TabPane } = Tabs;
  const { Option } = Select;

  // const [form] = Form.useForm();
  const nameRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    console.log('ref:', nameRef)
    nameRef.current?.focus();
    nameRef.current?.blur();
  }, [])


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };


  const callback = (key: any) => {
    console.log(key);
  }

  const handleBlur = (e: any) => {
    console.log("e", e)
    // e.target.classList.add("classOnBlur");
    if (e.target.value != '') {
      e.target.style.border = "1px solid #02bc77";
    }
  };

  const handleBlurSelect = (e: any) => {
    console.log("e", e)
    // e.target.classList.add("classOnBlur");
    if (e.target.value != '') {
      e.target.style.border = "1px solid #02bc77";
    }
  };


  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/auth/edit">Profil</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.filter}>
            <Tabs defaultActiveKey="1" onChange={callback} size="large" className={styles.tabBarStyle}>
              <TabPane tab="User Setings" key="1" className={styles.tabEvent}>
                <div className={styles.text}>
                  <h4>Schoolpad Prime</h4>
                  {
                    prime && <span>Siswa adalah member schoolpad prime.</span>
                  }
                </div>
                {
                  prime ? <></> : <><Button type="primary" className={styles.btnUpgrade}><span>Upgrade ke Schoolpad Prime</span></Button></>
                }
                <div className={styles.content}>
                  {/* form */}
                  <Form
                    className={styles.formName}
                    // form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    initialValues={{
                      name: 'Dinda Jangan Marah Marah',
                      email: 'dinda.jangan@gmail.com',
                    }}
                    layout="vertical">

                    <Form.Item
                      className={styles.label}
                      name="name"
                      label="Nama"
                      rules={[{ required: true, message: 'Please input your Full Name!', whitespace: true }]}
                    >
                      <Input ref={nameRef} className={styles.input} onBlur={handleBlur} />
                    </Form.Item>

                    <Form.Item
                      className={styles.label}
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}>
                      < Input onBlur={handleBlur} className={styles.input} placeholder="Silakan masukkan alamat email kamu" />
                    </Form.Item>
                    <Form.Item
                      className={styles.label}
                      name="noHp"
                      label="No HP"
                    >
                      < Input onBlur={handleBlur} className={styles.input} placeholder="Silakan masukkan alamat email kamu" />
                    </Form.Item>
                    <div className={styles.namaEmail}>
                      <div className={styles.wrapeprInput}>
                        <Form.Item name="province" label="Provinsi">
                          <Select
                            placeholder="Pilih provinsi tempat tinggalmu"
                            allowClear
                            onBlur={handleBlurSelect}
                          >
                            <Option value="banten">Banten</Option>
                            <Option value="jatim">Jawa Timur</Option>
                            <Option value="jateng">Jawa Tengah</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className={styles.wrapeprInput2}>
                        <Form.Item name="city" label="Kota">
                          <Select
                            placeholder="Pilih kota tempat tinggalmu"
                            allowClear
                            onBlur={handleBlurSelect}
                          >
                            <Option value="bb">Kabupaten Bandung Barat</Option>
                            <Option value="ngawi">Ngawi</Option>
                            <Option value="purwodadi">Purwodadi</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles.namaEmail}>
                      <div className={styles.wrapeprInput}>
                        <Form.Item
                          className={styles.label}
                          name="sekolah"
                          label="Nama Sekolah"
                        >
                          < Input onBlur={handleBlur} className={styles.input} placeholder="Silakan masukkan asal sekolah kamu" />
                        </Form.Item>
                      </div>
                      <div className={styles.wrapeprInput2}>
                        <Form.Item name="tl" label="Tahun Lulus">
                          <Select
                            placeholder="Pilih tahun lulusmu"
                            allowClear
                            onBlur={handleBlur}
                          >
                            <Option value="2022">2022</Option>
                            <Option value="2021">2021</Option>
                            <Option value="2020">2020</Option>
                            <Option value="2019">2019</Option>
                            <Option value="2018">2018</Option>
                            <Option value="2017">2017</Option>
                            <Option value="2016">2016</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <Form.Item
                      className={styles.label}
                      name="password"
                      label="Password"
                      hasFeedback>
                      <Input.Password className={styles.input} placeholder="Silakan buat kata sandi kamu" />
                    </Form.Item>
                    <Form.Item
                      style={{ marginBottom: 30 }}
                      className={styles.label}
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        ({ getFieldValue }) => ({

                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                          },
                        }),
                      ]}>
                      <Input.Password className={styles.input} placeholder="Silakan buat kata sandi kamu" />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 32 }} >
                      <Button type="primary" htmlType="submit" className={styles.btnSubmit}>
                        Register
                      </Button>
                    </Form.Item>
                  </Form>
                  {/* form */}
                </div>
              </TabPane>
              <TabPane tab="Pilihan Program Studi" key="2">
                <div className={styles.content2} >
                  <div className={styles.tableContainer}>
                    <h4>Pilihan 1</h4>
                    <div className={styles.chooseKampus}>
                      <Form
                        className={styles.formName}
                        // form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                        initialValues={{
                          name: 'Dinda Jangan Marah Marah',
                          email: 'dinda.jangan@gmail.com',
                        }}
                        layout="vertical">
                        <div className={styles.select1}>
                          <Form.Item name="campus" label="Kampus">
                            <Select
                              placeholder="Pilih kampus tujuanmu"
                              allowClear
                              onBlur={handleBlur}
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
                              onBlur={handleBlur}
                            >
                              <Option value="ti">Teknik Informatika</Option>
                              <Option value="dkv">Desain komunikasi visual</Option>
                              <Option value="pertanian">Pertanian</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </Form>
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
                  <div className={styles.tableContainer}>
                    <h4>Pilihan 2</h4>
                    <div className={styles.chooseKampus}>
                      <Form
                        className={styles.formName}
                        // form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                        initialValues={{
                          name: 'Dinda Jangan Marah Marah',
                          email: 'dinda.jangan@gmail.com',
                        }}
                        layout="vertical">
                        <div className={styles.select1}>
                          <Form.Item name="campus" label="Kampus">
                            <Select
                              placeholder="Pilih kampus tujuanmu"
                              allowClear
                              onBlur={handleBlur}
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
                              onBlur={handleBlur}
                            >
                              <Option value="ti">Teknik Informatika</Option>
                              <Option value="dkv">Desain komunikasi visual</Option>
                              <Option value="pertanian">Pertanian</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </Form>
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
                  <Button type="primary" className={styles.simpan}>Simpan</Button>
                </div>
              </TabPane>
            </Tabs>
          </div>

        </div>
      </div>
    </CustomLayout >
  )
}

export default EditUser
