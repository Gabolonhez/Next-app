import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
export default function Product() {

    const route = useRouter();

    const { id } = route.query;

    const { data: session} = useSession();

    if(!session.user) {
        route.back("/");
    }

    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}