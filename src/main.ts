
const days = new Array(24).fill(0).map((_, x) => x + 1);

const main = async () => {
  try {
    
        const day = await (await import(`./days/d${(new Date).getDate()}.js`)).default
        await day()
      
    

  } catch (e) {
    console.error(e);
  }
};

main();
