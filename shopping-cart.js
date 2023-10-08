// Für das Berechnen des Gesamtpreises
function calculateTotalPrice() {
    let cartItems = document.getElementsByClassName("Container-for-Cart");
    let TotalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      let priceElement = cartItems[i].getElementsByClassName("Price")[0];
      let price = parseFloat(priceElement.textContent.replace("$", ""));
      TotalPrice += price;
    }
    return TotalPrice;
  }
// Für das Entfernen symbol
let remove = document.getElementsByClassName('trash fa-solid fa-trash')
for (let i = 0; i < remove.length; i++) {
    let icon = remove[i];
    icon.addEventListener('click', function(foricon) {
        let iconClicked = foricon.target;
        iconClicked.parentElement.remove();
        UpdateCart();
    })
}
// Funktion die den Gesamtpreis aktualisiert
function UpdateCart() {
    let TotalPrice = calculateTotalPrice();
    document.querySelector('.TotalPrice').textContent = TotalPrice.toFixed(2);
}