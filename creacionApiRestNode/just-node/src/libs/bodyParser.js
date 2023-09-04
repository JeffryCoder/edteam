async function bodyParser(request){


    return new Promise((resolve, reject) =>{


        let totalData = "";

        request.on("error", (error)=>{

            console.log(error);
            reject();
        })
        .on("data", (chunk)=>{

            totalData += chunk;



        }).on("end", ()=>{

            request.body = JSON.parse(totalData);
            resolve();
        })


    })



}

module.exports = {bodyParser};