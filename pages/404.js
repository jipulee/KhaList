/*=================================================================================
* Author: Jipu Li
* Copyright (c) 2021, KhaliCode
* All right reserved.
* =================================================================================*/


import Link from 'next/Link'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oooooops...</h1>
            <h2>This page cannot be found.</h2>
            <p>Go back to the <Link href="/">Home page</Link></p>
        </div>
     );
}
 
export default NotFound;