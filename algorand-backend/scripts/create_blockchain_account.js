import algosdk from "algosdk";

try{
const myaccount = algosdk.generateAccount();
console.log("Account created. Save address & Mnemonic!");
console.log("Account Address = " + myaccount.addr);
let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
console.log("Account Mnemonic = " + account_mnemonic);
console.log("IMPORTANT: Make sure to store the mnemonic in a secure location!");
} catch (error) {
    console.error("Failed to create account:", error);
} 