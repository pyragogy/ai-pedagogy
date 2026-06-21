const fs = require("fs")
const path = require("path")

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach((file) => {
    const dirFile = path.join(dir, file)
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist)
    } else {
      filelist.push(dirFile)
    }
  })
  return filelist
}

const files = walkSync("./content").filter((f) => f.endsWith(".md"))

files.forEach((file) => {
  let content = fs.readFileSync(file, "utf8")
  if (content.startsWith("---")) {
    const endOfFm = content.indexOf("\n---", 3)
    if (endOfFm > -1) {
      const fm = content.substring(4, endOfFm)

      let lines = fm.split("\n")
      let newLines = []
      let inBadDescription = false
      let changed = false

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        if (line.startsWith("description:")) {
          if (
            line.includes("CONTRADICTS") ||
            line.includes("REQUIRES") ||
            line.includes("Core Analysis") ||
            line.includes("*None")
          ) {
            inBadDescription = true
            newLines.push('description: ""')
            changed = true
          } else {
            newLines.push(line)
          }
        } else if (inBadDescription && !line.match(/^[a-z_]+:/)) {
          // skip this line as it's part of the bad multiline description
          changed = true
        } else {
          inBadDescription = false
          newLines.push(line)
        }
      }

      if (changed) {
        const newFm = newLines.join("\n")
        content = "---\n" + newFm + content.substring(endOfFm)
        fs.writeFileSync(file, content)
        console.log("Fixed:", file)
      }
    }
  }
})
