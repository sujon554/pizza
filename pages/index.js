import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food village</title>
        <meta name="description" content="Take your best services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Featured />
    <PizzaList />
  

    </div>
  )
}
