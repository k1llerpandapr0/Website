function getVals() {
    let flour = document.getElementById('flour');
    let water = document.getElementById('water');
    let starter = document.getElementById('starter');
    let salt = document.getElementById('salt');
    let hydration = document.getElementById('hydration');
    let start_percent = document.getElementById('ss_percent');
    return [flour,water,starter,salt,hydration,start_percent];
  }
  
document.addEventListener('DOMContentLoaded', function () {
    let [flour, water, starter, salt, hydration, start_percent] = getVals();
    

 // Function to update flour based on starter and ss-percent
    function updateFlour() {
        let starterValue = parseFloat(starter.value) || 0; // Convert to number, default to 0 if invalid
        let ssPercentValue = parseFloat(start_percent.value) || 0; // Convert to number, default to 0 if invalid

        if(ssPercentValue>0){
            flour.value = (starterValue / (ssPercentValue/ 100)).toFixed(); // Example formula: starter / ss_percent
        }
        else{
            flour.value = 0
        }
    };
    function updateWater() {
        let hydrationValue = parseFloat(hydration.value) || 0;
        let flourValue = parseFloat(flour.value) || 0;
        let starterValue = parseFloat(starter.value) ||0;

        
        water.value = (hydrationValue/100 * (flourValue+starterValue/2) - starterValue/2).toFixed();
        
        
    };
    function updateSalt() {
        let flourValue = parseFloat(flour.value) || 0;
        
        salt.value = (flourValue*0.02).toFixed(1);
    };
    function updateStarter() {
        let flourValue = parseFloat(flour.value) || 0;
        let ssPercentValue = parseFloat(start_percent.value) || 0; // Convert to number, default to 0 if invalid

        if(ssPercentValue>0){
            starter.value = (flourValue * (ssPercentValue/ 100)).toFixed(); // Example formula: starter / ss_percent
        }
        else{
            flour.value = 0
        }

    };
    function updateHydration() {
        let waterValue = parseFloat(water.value) || 0;
        let starterValue = parseFloat(starter.value)||0;
        let flourValue = parseFloat(flour.value)||0;

        if (flourValue >0){
            hydration.value = ((waterValue + starterValue/2)*100 /(flourValue + starterValue/2)).toFixed(1);
        }
        else{
            hydration.value = 0;
        }
    };
    function updateSsPercent() {
        let flourValue = parseFloat(flour.value) || 0;
        let starterValue = parseFloat(starter.value) || 0;

        if (flourValue>0){
            start_percent.value = (starterValue*100/flourValue).toFixed(1);
        }
        else{
            start_percent.value = 0;
        }
    };



// Add event listeners to the input fields
starter.addEventListener('input', function() {
    updateHydration();
    updateSsPercent();
});
start_percent.addEventListener('input', function() {
    updateFlour();
    updateWater();
    updateSalt();
    updateHydration();
    updateSsPercent();
});
flour.addEventListener('input', function() {
    updateWater();
    updateStarter();
    updateSalt();
    updateHydration();
    updateSsPercent();
});
hydration.addEventListener('input',function() {
    updateWater();
});
water.addEventListener('input', function () {
    updateHydration();  // Recalculate hydration when water changes
});
// Initialize flour value when page loads
updateFlour();
updateWater();
updateSalt();
updateStarter();
updateHydration();
updateSsPercent();
}

);
