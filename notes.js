const fs = require('fs')
const { title } = require('process')

//const addNote = (title,body) =>{
    //const notes = loadNotes() // []    [{title:"new1",body:"body1"}]
   // notes.push({  // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
     //   title:title,
     //   body
        
 //   })
  //  saveNotes(notes)
//}

const loadNotes = () =>{
    // error (first time run)
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer) // Object
    try{

    const dataBuffer = fs.readFileSync('notes.json').toString()
    console.log(dataBuffer) //json
    return JSON.parse(dataBuffer) // Object // [{title:"new1",body:"body1"}]
    }
    catch{
        return []
    }
}
const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicate=notes.filter((obj)=>{
        return obj.title==title
})
console.log(duplicate) //array[]
if (duplicate.length==0){
    notes.push({
        title:title,
        body
    })
    saveNotes(notes)
    console.log("save successfully")
}
else {
    console.log("error duplicate")
}
}

const saveNotes = (notes) =>{
    console.log(notes)
 // [{title:"new1",body:"body1"}] --> [{"title":"new1","body":"body1"}]
 // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
    const saveData = JSON.stringify(notes)
    console.log(saveData)
    fs.writeFileSync('notes.json',saveData)
}
const deleteNote=(title)=>{
    const note= loadNotes()
    const noteToKeep=note.filter((obj)=>{
        return obj.title !==title
    })
    console.log(noteToKeep)
    saveNotes(noteToKeep)
    console.log("delete")

}
const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((obj)=>{
        obj.title==title
    })
    console.log(note)
    if(note){
    console.log(note.body)}
    else{
    console.log("not found")
}

}


const list=()=>{
    const notes=loadNotes()
    notes.forEach(ele => {
        console.log(ele)
        
    });
}

module.exports =
 {
    addNote,
    deleteNote,
    readNote,
    list
}