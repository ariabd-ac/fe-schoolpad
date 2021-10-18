// import { Form, Input, InputNumber, Button } from 'antd';
import {
  Button, Form,
  Input
} from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import styles from '../../styles/SignUp.module.scss';


const SignUp = () => {

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };


  return (
    <CustomLayout>
      <div className={styles.container}>
        <div className={styles.pages}>
          <div className={styles.poster}>
            {/* <Image objectFit={'fill'} src="/assets/img/group-5.svg" alt="posterSignUp" height={640} width={600} /> */}

            <img src="/assets/img/group-5.svg" alt="posterSignUp" className={styles.imgPoster} />
            <h5 className={styles.welcome}>Selamat Datang di schoolpad</h5>

          </div>
          <div className={styles.formInput}>
            <div className={styles.titleForm}>
              <h2>Buat Akun</h2>
            </div>
            <Form
              className={styles.formName}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              layout="vertical">
              <Form.Item
                className={styles.label}
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please input your Full Name!', whitespace: true }]}>
                <Input className={styles.input} placeholder="Isi nama lengkap kamu disini" />
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
                < Input className={styles.input} placeholder="Silakan masukkan alamat email kamu" />
              </Form.Item>
              <Form.Item
                className={styles.label}
                name="noHp"
                label="No Whatsapp"
              >
                < Input className={styles.input} placeholder="Silakan masukkan alamat email kamu" />
              </Form.Item>
              <Form.Item
                className={styles.label}
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
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
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
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
            <div className={styles.linkTo}>
              <h4>Sudah punya akun? <Link href="/auth/signin">Masuk</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout >
  );
}

export default SignUp;