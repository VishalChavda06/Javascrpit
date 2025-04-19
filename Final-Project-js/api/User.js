const BaseUrl = "http://localhost:3000/UserData";

const usertypes = {
    create: async (data) => {
        await fetch(BaseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
    getall: async () => {
        let req = await fetch(BaseUrl);
        return await req.json()
    },
    delete: async (id) => {
        await fetch(`${BaseUrl}/${id}`, {
            method: "DELETE"
        });
    }
}

export default usertypes;