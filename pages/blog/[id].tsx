
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Link from 'next/link';
import { useState } from 'react';
import CategoryBlog from '../../components/atoms/CategoryBlog';
import CarouselComponents from '../../components/molecuels/Carousel';
import CustomLayout from '../../components/molecuels/Layout';
import styles from '../../styles/Blog.module.scss';



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




const BlogDetail = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(10);



  return (
    <CustomLayout>
      <div className={styles.pages}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/blog">Blog</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.detailContainer}>
          <h6>Gerak 1 dimensi dibawah pengaruh gravitasi</h6>
          <h5>29 November 2021</h5>
          <div className={styles.filter}>

            <CategoryBlog />
            <CategoryBlog />
          </div>
          <div className={styles.content}>
            <div className={styles.cover}>
              <img src="/assets/dummy/DummyBlog.svg" alt="dummy" className={styles.photoContent} />
            </div>
            <div className={styles.detailBlog}>
              {/* <p>
                Budi melempar bola secara vertikal ke atas dengan kecepatan awal .  Bola itu berada dalam pengaruh medan gravitasi sedemikian sehingga mendapatkan percepatan sebesar  pada arah  negatif sepanjang waktu seperti ditunjukkan pada gambar. Hambatan udara diabaikan.
                Kecepatan awal dari objek tersebut dinyatakan sebagai
                <br />
                Diketahui ada pengaruh gaya eksternal yang memberikan percepatan pada bola tersebut pada arah  negatif sebesar .  Kecepatan bola tersebut pada arah  dapat kita tuliskan:

                <br />
                Di sini benda mula-mula bergerak ke arah atas ( positif) dan kecepatan  dan diperlambat sebesar . Posisi bola tersebut sebagai fungsi dari waktu diberikan oleh:
                <br />

                dengan  posisi awal benda (misalnya diambil )
                <br />



                Pada saat  , ketinggian maksimum  tercapai. Kita sebut waktu dimana ketinggian maksimum tercapai sebagai . Dari persamaan  kita peroleh:

                Dari sini, bola yang semula bergerak ke arah atas ( positif) selanjutnya akan bergerak ke arah  negatif dan mencapai ketinggian awal dalam waktu  pula (waktu naik = waktu turun).

                Perhatikan, kita dapat memperoleh hasil pada persamaan  dari  persamaan  melalui aplikasi turunan untuk mencari nilai maksimum/minimum [1].

                Selanjutnya kita hitung ketinggian maksimum  yang dapat dicapai sebagai berikut:
              </p> */}
              <MathJaxContext version={3} config={config}>
                <h2>MathJax example with Latex</h2>
                <i>
                  This page uses a very basic configuration of MathJax 3, neither of which
                  is necessarily optimal with respect to responsiveness and seamless
                  typesetting.
                </i>
                <br />
                <br />
                <div>
                  <MathJax hideUntilTypeset={"first"}>
                    {`Inside a MathJax block element, one might use both Latex inline math, such
          as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
          to Latex display math, like
          \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
          ... and then continue with inline math.`}
                  </MathJax>
                </div>
                <p>
                  One might also use the MathJax component as an inline element on a
                  single portion of a text, such as{" "}
                  <MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>, whichever suits
                  you.
                </p>
                <MathJax hideUntilTypeset={"first"}>
                  <div>
                    <div>
                      You don't have to worry about nesting components inside a MathJax
                      component, the math will be found and converted{" "}
                      <span>{`($10 / 3 \\approx 3.33$)`}</span>
                    </div>
                    <div>
                      <p style={{ textAlign: "center" }}>
                        <i>Equation:</i> <span>{`$10 + 2x = 150$`}</span>
                      </p>
                    </div>
                  </div>
                </MathJax>

                <h3>Dynamic content</h3>
                <p>
                  If you want to use dynamic math content, make sure to follow the
                  guidelines under "General Considerations" which are in part summarized
                  below:
                  <br />
                  <br />
                  Current value used in this section: {num1}
                </p>
                <ul>
                  <li>
                    <b>Don't</b>:{" "}
                    <MathJax inline dynamic>
                      An example is the equation ${num1}x^4 = 100$
                    </MathJax>{" "}
                    (expression with math not in separate element nor expression)
                  </li>
                  <li>
                    <b>Don't</b>:{" "}
                    <MathJax inline dynamic>
                      An example is the equation {`$${num1}x^4 = 100$`}
                    </MathJax>{" "}
                    (expression with math not in separate element)
                  </li>
                  <li>
                    <b>Don't</b>:{" "}
                    <MathJax inline dynamic>
                      An example is the equation <span>${num1}x^4 = 100$</span>
                    </MathJax>{" "}
                    (expression with math not in separate expression - mixed inside span)
                  </li>
                  <li>
                    <b>Don't</b>:{" "}
                    <MathJax inline dynamic>
                      An example is the equation <span> {`$${num1}x^4 = 100$`}</span>
                    </MathJax>{" "}
                    (expression with math not in separate element - note the space)
                  </li>
                  <li>
                    <b>Do</b>:{" "}
                    <MathJax
                      inline
                      dynamic
                    >{`An example is the equation $${num1}x^4 = 100$`}</MathJax>{" "}
                    (expression with math in separate element and expression)
                  </li>
                  <li>
                    <b>Do</b>:{" "}
                    <MathJax inline dynamic>
                      An example is the equation <span>{`$${num1}x^4 = 100$`}</span>
                    </MathJax>{" "}
                    (expression with math in separate element and expression)
                  </li>
                </ul>
                <button onClick={() => setNum1((oldNum) => oldNum + 10)}>
                  Add 10 to value used
                </button>

                <h3>Hiding non-typeset math</h3>
                <p>
                  If you want make an extra effort to hide non-typeset content, there are
                  several options. Typically, the first option should be enough (hide
                  initial typesetting only) and most likely, you will not see a difference
                  between the configurations below.
                  <br />
                  <br />
                  Current value used in this section: {num2}
                </p>
                <ul>
                  <li>
                    <tt>hideUntilTypeset</tt> set to <tt>first</tt>:{" "}
                    <MathJax
                      hideUntilTypeset={"first"}
                      inline
                      dynamic
                    >{`An example is the equation $${num2}x^4 = 100$`}</MathJax>
                  </li>
                  <li>
                    <tt>hideUntilTypeset</tt> set to <tt>every</tt>:{" "}
                    <MathJax
                      hideUntilTypeset={"every"}
                      inline
                      dynamic
                    >{`An example is the equation $${num2}x^4 = 100$`}</MathJax>
                  </li>
                  <li>
                    <tt>renderMode</tt> set to <tt>pre</tt>: An example is the equation{" "}
                    <MathJax
                      renderMode={"pre"}
                      typesettingOptions={{ fn: "tex2chtml" }}
                      text={`${num2}x^4 = 100`}
                      inline
                      dynamic
                    />
                  </li>
                </ul>
                <button onClick={() => setNum2((oldNum) => oldNum + 10)}>
                  Add 10 to value used
                </button>
              </MathJaxContext>
            </div>
            <div className={styles.footer}>
              <CarouselComponents />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout >
  )
}

export default BlogDetail;
