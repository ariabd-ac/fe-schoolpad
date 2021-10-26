import { Col, Row } from 'antd'
import styles from './TableResultSimulation.module.scss'
const TableResultSimulation = () => {
  return (
    <Row className={styles.page}>
      <Col span={24}>
        <h4>TEKNIK MESIN - UNIVERSITAS BANGKA BELITUNG</h4>
      </Col>
      <Col span={24}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Tryout</th>
                <th>TPS (dalam %)</th>
                <th>TKA (dalam %)</th>
                <th>TPS + TKA (dalam %)</th>
                <th>Passing Grade (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TO 4 - UTBK Saintek 2022</td>
                <td className={styles.nan}>NaN</td>
                <td></td>
                <td className={styles.nan}>NaN</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div >
      </Col>
    </Row>
  )
}

export default TableResultSimulation
