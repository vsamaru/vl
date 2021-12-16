const Telegraph = require('telegra.ph')
var token = '50ef68f71a36e25a45ee70c7dabef23afd45610b9c191b02cda33d9828f3'
const client = new Telegraph(token)
const md = require('telegraph.md')
var geourl = (x) => `https://www.mapquestapi.com/staticmap/v5/map?locations=${x}|flag-FLAG-lg-04fd6c-04fd6c&zoom=18&size=600,600@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb`
var str = "#$\n## h2 Heading\n> Blockquotes can also be\n\nsome text \n![Minion](https://octodex.github.com/images/minion.png)\n1.list item\n2.bold *list*\n- other list item\n  another list item\n\n[link with title](http://nodeca.github.io/pica/demo/)\nsome `Inline code` as final "

var ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var RND = '-' + ABC[Math.floor(Math.random() * 25)] + ABC[Math.floor(Math.random() * 25)] + ABC[Math.floor(Math.random() * 25)] + '-'

async function t() {




var array = await TO()

 console.log(array)
return array

}
t()


async function TO(str, user) {
    var x = ["50.4825,30.4887","https://i.ibb.co/DDg0jmh/21782.jpg","сверху"]
   var nodes = md(Tstr(x))
    //client.createPage('https://zws.im/‍‍‍‍‌‌‍‌‍‌‌‌i', nodes, 'authorName')
    // var v = await client.createPage(Date.now(),nodes,'JULio',x[1])
    //      console.info(v)
   var x = 5 
  //  client.editPage('1600402692713-09-18', 'https://zws.im/‍‍‍‍‌‌‍‌‍‌‌‌i',nodes, 'authorName', "https://console.firebase.google.com/u/0/project/iiilll/firestore/data")
let list = await client.getPageList()//.then((pages) => {
 list = list.pages
 //.filter(element => element.author_name) 
 //.filter((list,idx) => idx < x)
 //.reduce((acc, val) => `${acc}[${val.title}](${val.url}) /${val.title}\n`, '')

        console.info(list)
    return list
    
} 


function Tstr(x){
return `
# ${x[2]}
![G](${geourl(x[0])})

[iMG](${x[1]})
![i](${x[1]})
`
}
// exports.tgph = async (x) => {
// //let re = await client.getPageList(x)//.then((pages) => {
// // let list = pages.pages
// // var items = list.filter((list,idx) => idx < x)
// //   let recipes = items
     
// //     .map(({ path }) => (
// //      path 
// //     ))
//  // re = re.pages
//    x = x || 10
// let req = await client.getPageList()//.then((pages) => {
// let list = req.pages
// // 
// // const data2 = list.filter(element => element.author_name === "1ii")

// list = list.filter((list,idx) => idx < x)
// list = list.reduce((acc, val) => `${acc}[/${val.title}](${val.url})\n`, '')
// //   let recipes = items
    
// //     .map(({ path }) => (
// //      path 
// //     ))
// console.info(list)
// return list

// }
