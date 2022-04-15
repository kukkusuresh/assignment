export const fetchProductDetails = () =>
{
    return (fetch('https://fakestoreapi.com/products').then(res => res.json()).catch(e => console.log(e)))

}