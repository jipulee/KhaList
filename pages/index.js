import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kha List | Home
        <meta name="keywords" content="ninjas"/>
        </title>
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias eveniet a nostrum? Vitae at facere illo voluptatem minima! Atque tempora aut repellat ut. Reiciendis ea repellat eveniet odio sit?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias eveniet a nostrum? Vitae at facere illo voluptatem minima! Atque tempora aut repellat ut. Reiciendis ea repellat eveniet odio sit?</p >
        <Link href="/kha">
          <a>See Kha Listing</a>
        </Link>
      </div>

    </>
  )
}
