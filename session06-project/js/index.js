// lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));
console.log("111111", products);
//  function render product
function renderProduct() {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        element +=
            `
                    <div class="product__item">
                        <div class="image">
                            <img src="${products[i].image}" alt="">
                        </div>
                        <p>${products[i].name}</p>
                        <div>
                            <p>price:${products[i].price}</p>
                            <p><button onclick="addToCart(${products[i].id})">mua</button></p>
                        </div>
                    </div>
            `
    }

    // console.log("1111111111",element);
    document.getElementById("products").innerHTML = element
}
renderProduct();
// function đi mua hàng
function addToCart(productId) {
    // console.log("đã gọi hàm");
    /* 
        khi nào cho user đi mua hàng
        khi đăng nhập thì mới cho mua
     */
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if (checkLogin == null) {
        console.log("bạn phải đăng nhập để đi mua hàng");
        return // gặp return dừng chương trình luôn
    }
    console.log("đi mua hàng bình thường");
    /* 
        lấy giỏ hàng của user để đi mua hàng
        và lấy giỏ hàng user dựa vào id của user
     */
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {

            //lấy thông tin sản phẩm để đưa vào giỏ hàng
            // làm sao để lấy thông tin sản phẩm
            // console.log("11111", productId);
            // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
            let product = JSON.parse(localStorage.getItem("products"));
            for (let j = 0; j < product.length; j++) {
                if (productId == product[j].id) {
                    // lấy thông tin sản phẩm
                    console.log("1111", product[j]);
                    console.log("giỏ hàng của user sẽ là ", users[i].cart);
                    users[i].cart.push(product[j]);
                    // sau khi push xong thì lưu trên local
                    localStorage.setItem("users", JSON.stringify(users));

                    /* 
                        Trước khi thêm vào giỏ hàng thì kiểm tra xem sản phẩm có trong
                        giỏ hàng hay chưa
                         + nếu có thì tăng số lượng
                         + nếu chưa có thì thêm bình thường

                         thông tin sản phẩm trong giỏ hàng
                        {
                            id:"",
                            name:"",
                            price:"",
                            quantity:2
                        }
                    */
                }
            }

        }

    }
}