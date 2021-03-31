import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Registry = () => {
    return (
        <ul className="flex-col justify-evenly divide-y divide-gray-100">
            <a href="http://www.amazon.com">
                <li className="flex flex-row my-8">
                    <FontAwesomeIcon size="5x" icon={faAmazon} />
                </li>
                <li className="flex flex-row my-8">
                    <FontAwesomeIcon size="5x" icon={faBullseye} />
                </li>
            </a>
        </ul>
    )
}

export default Registry;