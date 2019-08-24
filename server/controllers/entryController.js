module.exports = {
    async getEntries(req, res) {
        let {userId} = req.params
        const db = req.app.get('db')
        let entries = await db.get_entries_by_user(+userId)
        console.log(entries)
        res.send(entries)
    },
    async deleteEntry(req, res) {
        let {entryId} = req.params
        const db = req.app.get('db')
        let entries = await db.delete_entry([+entryId, req.session.user.id])
        console.log(entries)
        res.send(entries)
    }, 
    async editEntry(req, res) {
        let {entryId} = req.params
        let {newDate, newTitle, newContent, newMood} = req.body
        const db = req.app.get('db')
        let entries = await db.edit_entry([
            +entryId,
            newDate,
            newTitle,
            newContent, 
            newMood,
            req.session.user.id
        ])
        res.send(entries)
    },
    async saveEntry(req, res) {
        let {date, title, content, mood} = req.body
        const db = req.app.get('db')
        let entries = await db.save_entry([date, title, content, mood, req.session.user.id])
        res.send(entries)
    }
}