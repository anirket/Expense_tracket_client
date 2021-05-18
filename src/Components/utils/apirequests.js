
//Make a post request

export const postrequest = async (url, payload) => {

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(payload)
        })
        const text = await response.json();
        return text;

    } catch (error) {
        return { error: "error making request" }
    }


}


//Make a get request

export const getrequest = async(url) =>{
    try {
        console.log(url);
        const response = await fetch(url)
        const text = await response.json();
        return text;

    } catch (error) {
        return { error: "error making request" }
    }


}


export const deleterequest = async(url) =>{
    try {
        console.log(url);
        const response = await fetch(url,{
            method:"DELETE"
        })
        const text = await response.json();
        console.log(text);
        return text;

    } catch (error) {
        return { error: "error making request" }
    }


}