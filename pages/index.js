import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <div>
        <h1>Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias eveniet a nostrum? Vitae at facere illo voluptatem minima! Atque tempora aut repellat ut. Reiciendis ea repellat eveniet odio sit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias eveniet a nostrum? Vitae at facere illo voluptatem minima! Atque tempora aut repellat ut. Reiciendis ea repellat eveniet odio sit?</p >
        <Link href="/kha">
          <a>See Kha Listing</a>
        </Link>
      </div>

  )
}
