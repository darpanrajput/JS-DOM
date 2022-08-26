const ATTAK_VALUE = 10;
const STRONG_ATTAK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHeath = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTAK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHeath -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHeath < 0) {
        alert("You won!")
    }
    else if (currentPlayerHeath <= 0 && currentMonsterHealth < 0) {
        alert("You Lost!")
    } else if (currentPlayerHeath <= 0 && currentMonsterHealth <= 0) {
        alert("it's a draw!")
    }
}
function StrongAttackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTAK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHeath -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHeath < 0) {
        alert("You won!")
    }
    else if (currentPlayerHeath <= 0 && currentMonsterHealth < 0) {
        alert("You Lost!")
    } else if (currentPlayerHeath <= 0 && currentMonsterHealth <= 0) {
        alert("it's a draw!")
    }
}

function healPlayerHandler() {
    increasePlayerHealth(HEAL_VALUE);
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHeath -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHeath < 0) {
        alert("You won!")
    }
    else if (currentPlayerHeath <= 0 && currentMonsterHealth < 0) {
        alert("You Lost!")
    } else if (currentPlayerHeath <= 0 && currentMonsterHealth <= 0) {
        alert("it's a draw!")
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', StrongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);