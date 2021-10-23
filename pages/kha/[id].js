export const getStaticPaths = async () => {
    const res  = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    
    const paths = data.map(kha => {
        return {
            params: {id: kha.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json() 

    return {
        props: {kha: data}
    }
}

const Details = ({kha}) => {
    return ( 
        <div>
            <h1>{ kha.name }</h1>
            <p>{ kha.email }</p>
            <p>{ kha.website }</p>
            <p>{ kha.address.city }</p>
        </div>
     );
}
export default Details;
