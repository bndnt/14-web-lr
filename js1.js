    let arr=[];
    let n=909392390923223;
    for(let i=0; i<n;i++){
    let bbbb=prompt('Введите элемент массива','');
              if(bbbb==='') {break;}

                  let bbb = Number(bbbb);
                  if (Number.isInteger(bbb)) {
                      arr[i] = bbb;
                  }
                   else {
                      break;
                    }
                  //  else{
                  //    break;
                  //  }
              }
          for (let i=0;i<arr.length;i++)
        document.getElementById('addArr').innerHTML="Array:"+arr;
          let sum=0;
          for (let i=0;i<arr.length;i++){
              sum=sum+arr[i];
          }
          document.getElementById('sum').innerHTML="Sum = "+sum;

          arr.sort(function(a,b){return a-b});
          let max=arr[arr.length-1];
          let min=arr[0];
          document.getElementById('min/max').innerHTML="Sort:"+arr;
          // let rand=min+Math.floor(Math.random(arr)*(max+1-min));
          let rand =arr[Math.floor(Math.random()*arr.length)];
          document.getElementById('rand').innerHTML="Random number:"+rand;
          alert("Random number: "+rand);
