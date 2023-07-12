import { useParams } from "react-router-dom";
import { SELECTIONS } from "../constans";

export const Selection = () => {
    const params = useParams();

    const page = SELECTIONS.find((page) => page.id === Number(params.id));

    return (
        <div>
            <h1>{page.pageTitle}</h1>
        </div>
    )
}