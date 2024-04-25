
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export async function sendOrder(order){
    console.log("order", order)
    await wait(9000)
    return {}
}