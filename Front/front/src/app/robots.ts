import { userAgent } from "next/server"

export const robotos = () =>{
    return {
        rules :[
            {
                userAgent: "GoogleBot",
                allow: ["/"],
                disallow:["/dashboard/"]
            },
            {
                userAgent: ["Applebot", "Bingbot"],
                allow: ["/"],
            }
        ]
    }
}