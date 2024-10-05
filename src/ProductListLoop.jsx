function ProductListLoop({ products }) {
  const wrapper = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
    marginTop: "10px",
  };

  const card = {
    width: "300px",
    border: "1px solid black",
  };

  const handleBuyClick = (product) => {
    console.log(`Anda membeli : ${product}`);
  };

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>
        Looping with map
      </h3>
      <div style={wrapper}>
        {products.map((product) => {
          return (
            <div style={card}>
              <h4>Nama: {product.name}</h4>
              <h5>Price: {product.price}</h5>
              <button onClick={() => handleBuyClick(product.name)}>Beli</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductListLoop;

{
  /*
Challenge: 
Buatlah komponen React yang menerima array product dan menampilkan setiap produk dalam bentuk kartu (card). 
Setiap kartu harus menampilkan nama produk, harga, dan tombol "Beli". Gunakan looping untuk menampilkan semua produk yang ada di array.

1. Buat array products yang berisi beberapa objek produk, masing-masing dengan properti id, name, dan price.
2. Buat komponen React yang menerima array tersebut sebagai props.
3. Lakukan looping pada array products untuk menampilkan setiap produk dalam bentuk kartu.

Setiap kartu produk harus memiliki:
Nama produk (name)
Harga produk (price)
Tombol "Beli"
Saat tombol "Beli" diklik, tampilkan pesan di console yang mengatakan "Anda membeli [nama produk]".     


div dulu baru map kalo didalam map, div akan dicetak sebanyak n(item) kali tapi kalo di luar dicetak 1 kali.
*/
}
