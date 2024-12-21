const {
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  PublicKey,
} = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));

async function airdrop(publicKey, amount) {
  const airdropSignature = await connection.requestAirdrop(
    new PublicKey(publicKey),
    amount
  );
  await connection.confirmTransaction({ signature: airdropSignature });
}

airdrop("4mBCj6RKxys97r9heGPsuejeZZfENeYyfoCBvbuMuWou", LAMPORTS_PER_SOL).then(
  (signature) => {
    console.log("Airdrop signature:", signature);
  }
);
