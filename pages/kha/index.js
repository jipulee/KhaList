import styles from '../../styles/Khas.module.css'

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await res.json()

    return {
        props: { khas: data }
    }
}


const Khalisting = ( {khas} ) => {
    return ( 
        <div>
            <h1>Kha Listing</h1>
            {khas.map(kha => (
                <div key={kha.id}>
                    <a className={styles.single}>
                        <h3> {kha.name} </h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default Khalisting;