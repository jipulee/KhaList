/*=================================================================================
* Author: Jipu Li
* Copyright (c) 2021, KhaliCode
* All right reserved.
* =================================================================================*/

import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
