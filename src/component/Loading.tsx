import useJsonFetch from "../hook/useJsonFetch";

export default function Data() {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/loading")

    return (
        <div>
            <h2>Data</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error...{error}</p>}
            {data && <p>{JSON.stringify(data)}</p>}
        </div>
    )
}