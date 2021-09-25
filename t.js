require("reify")
import { Database } from 'firebase-firestore-lite'
const db = new Database({ projectId: 'iiilll' })
var ref = D.ref("_/_")



async function t() {

var g = await ref.get()




 
return console.log(g)

}
t()


//var { db } = require('./db')

var { Database } = require('firebase-firestore-lite')
const D = new Database({ projectId: 'pbl6an' })
var ref = D.ref("LiST/*")

// var notesList = async () => await db()

// async function cc(x) {
// return [x]
// }
var V = []

    var displayNotes = async () => {
notesList = await ref.get()
    notesList.forEach(function (note, index) {
       V.push(`${index+1}. ${note.title} || Completed: ${note.status}`)
    })
}

var updateNoteStatus = async (title, newStatus) => {

    notesList = await ref.get()
    notesList = Object.values(notesList)
    let noteToUpdate = notesList.findIndex(function (note) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
    notesList[noteToUpdate].status = newStatus
   return await ref.set(notesList)
 
}

let updateNote = async (oldtitle, newtitle) => {
    notesList = await notesList()
    let noteToUpdate = notesList.findIndex(function (note) {
        return note.title.toLowerCase() === oldtitle.toLowerCase() 
    })
    notesList[noteToUpdate].title = newtitle
    console.info(notesList)
   // await displayNotes()
    
}

let deleteNote = async (title) => {
    notesList = await notesList()
    let noteToDelete = notesList.findIndex(function (note) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
    notesList.splice(noteToDelete,1)
console.info(notesList)
} 

let addNote = async (title, status) => {
        notesList = await ref.get()
    notesList = Object.values(notesList)
    notesList.push({title: title, status: status})
    return await ref.set(notesList)

}

class C {

    async DISP() {
        return await displayNotes()
    }

    async LET(x) {
        return await cc(x)
    }
        async UPD(o,n) {
        return await updateNote(o,n)
    }
            async IS(t,s) {
        return await updateNoteStatus(t,s)
    }
                async DEL(t) {
        return await deleteNote(t)
    }
                async ADD(t,s) {
        return await addNote(t,s)
    }
}

module.exports = C
