export const enrichPassengerData = (passengers, routeInfo) => {
    // Yolcuların pickup noktaları ve rota bilgileri ile zenginleştirilmiş verileri döndürün
    return passengers.map((passenger, index) => {
        const enrichedData = {
            ...passenger,
            pickUpPointOrder: index, // İndeks doğrudan kullanılabilir veya algoritma uygulanabilir
            tripDuration: 0, // Burada her yolcu için yolculuk süresini hesaplayın
        };

        return enrichedData;
    });
};
