import Element from "../element/Element";

function List() {
    return (<ul>
            <Element text = "Was first released in 2013" />
            <Element text = "Was originally created by Jordan Walke" />
            <Element text = "Has well over 100K stars on GitHub" />
            <Element text = "Is maintained by Facebook" />
            <Element text = "Powers thousands of enterprise apps, including mobile apps" />
        </ul>);
}

export default List;
