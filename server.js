function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const env_value = process.env.ENV_VALUE
  while(true) {
    console.log('Containers rule!');
    console.log('env value is ', env_value)
    await sleep(5000);
  }
}

main();
