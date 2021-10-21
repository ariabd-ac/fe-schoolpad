import {
  Button, Form,
  Input, Checkbox
} from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import CustomLayout from '../../components/molecuels/Layout';
import styles from '../../styles/SignIn.module.scss';


const SignIn = () => {
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
              <h2>Masuk</h2>
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
              <Checkbox style={{ marginBottom: 16 }}>Remember me</Checkbox>
              <Form.Item style={{ marginBottom: 32 }} >
                <Button type="primary" htmlType="submit" className={styles.btnSubmit}>
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div className={styles.linkTo}>
              <h4>Belum punya akun? <Link href="/auth/signup">Daftar</Link></h4>
              <div className={styles.forgot}>
                <Link href="signup"><h3>Lupa Password?</h3></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default SignIn
