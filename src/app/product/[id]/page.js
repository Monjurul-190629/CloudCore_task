import SingleProduct from "@/Component/Products/SingleProduct";


const page = ({params}) => {
    const id =  parseInt(params.id)
    return (
        <div>
            <SingleProduct id = {id} />
        </div>
    )
}

export default page;