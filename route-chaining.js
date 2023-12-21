
// =============== route chaining ===================== //

app.route('/student')
.get((request,response)=>{
        return response.json({ message: 'Student get route working' })
})
.post((request,response)=>{
        return response.json({ message: 'Student post route working' })
})
.all((request,response)=>{
        return response.json({ message: 'Student all route working' })
})


// =============== route chaining ===================== //
