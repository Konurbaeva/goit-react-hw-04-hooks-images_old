import { data } from "./model";

function Loader() {
    return (
        <>
            {data.map((loader, index) => (
                <div
                    data-tip={loader.name}
                    key={loader.name + index}
                    className="loaderBox"
                >
                    <loader.Component {...loader.props} />
                </div>
            ))}
        </>
    );
}

export default Loader;