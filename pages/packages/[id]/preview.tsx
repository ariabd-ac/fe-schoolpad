
import { Breadcrumb, Button, Space, Radio, Input, } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { useState } from 'react';
import CustomLayout from '../../../components/molecuels/Layout';
import styles from '../../../styles/PackagesPreview.module.scss';
import { MathJax, MathJaxContext } from "better-react-mathjax";




const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};



const LihatPackgaes = () => {
  const [isPrem, setIsPrem] = useState(true);
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Paket</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Pos Test BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/packages">Preview</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.card}>
              <div className={styles.form}>
                <div className={styles.cardTitle}>
                  <h5>
                    BAB 1. Persamaan dan Pertidaksamaan Linear Nilai Mutlak (Persamaan Nilai Mutlak)
                  </h5>
                </div>
                <div className={styles.cardText}>
                  <div className={styles.soal}>
                    <MathJaxContext version={3} config={config}>
                      <MathJax hideUntilTypeset={"first"}>
                        {`Inside a MathJax block element, one might use both Latex inline math, such
          as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
          to Latex display math, like
          \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
          ... and then continue with inline math.`}
                      </MathJax>
                    </MathJaxContext>
                  </div>
                  <br /> <br />
                  <div className={styles.answer}>
                    <MathJaxContext version={3} config={config}>
                      <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                          <Radio value={1}>
                            <div style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>
                              <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>
                            </div>
                          </Radio>
                          <Radio value={2}>
                            <div style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>
                              <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>
                            </div>
                          </Radio>
                          <Radio value={3}>
                            <div style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>
                              <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>
                            </div>
                          </Radio>
                          <Radio value={4}>
                            <div style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>
                              <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>
                            </div>
                          </Radio>
                          <Radio value={5}>
                            <div style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: '#4E5155' }}>
                              <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>
                            </div>
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </MathJaxContext>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default LihatPackgaes
