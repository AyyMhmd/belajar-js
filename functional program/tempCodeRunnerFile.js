return products.map(product => ({
      ...product,
      discountPrice: parseFloat((product.price * (1 - discount / 100)).toFixed(2)), // Harga setelah diskon
      discountPercentage: `${discount}%` // Menyimpan diskon dalam bentuk persentase
    }));