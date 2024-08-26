export async function createOrder(products: number[],token: string) {

    try{
        const res = await fetch("http://localhost:3000/orders",{
           method : 'POST',
           headers: {
            'Content-Type': 'application/json',
            Authorization: token,
           },
           body: JSON.stringify({
            products
           })
        }) 

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        console.log(data); // Muestra la respuesta para verificar

    } catch (error: any) {
        console.error('Error creating order:', error.message);
    }


}


export async function getOrders(token: string) {
    try {
        const res = await fetch("http://localhost:3000/users/orders", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token, 
            }
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        return data; // Devuelve los datos de las órdenes

    } catch (error: any) {
        console.error('Error fetching orders:', error.message);
        return []; 
    }
}