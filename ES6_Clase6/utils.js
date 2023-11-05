export function promise1 (number) {
  const promise = new Promise((resolve, reject) => {
    if (typeof number === 'number'){
      resolve (Math.pow (number,2));
    } else {
      reject (new Error ("El valor no es un numero"));
    }
  });
  return promise;
}

/*export async function usePromise1() {
  try {
    const promiseUse = await promise1();
    console.log(promiseUse);
  } catch (err) {
    console.log(err.message);
  }
}

  /*const promise = new Promise ((resolve, reject) => {
    if(typeof a === 'number'){
      resolve(Math.pow(a,2));
    } else {
      reject('Error: El parametro debe ser un número');
    }
  });*/