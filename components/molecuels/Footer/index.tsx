import Image from 'next/image'

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <div>
        <Image src="/assets/img/logo2.png" alt="logo2" width={229} height={42} />
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer
