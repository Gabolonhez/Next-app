import { useRouter } from "next/router";

export default function Product() {

    const route = useRouter();

    const { id } = route.query;

    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}