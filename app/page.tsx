import fs from 'fs'
import path from 'path'

export default async function Home() {
  // Read the original HTML file
  const filePath = path.join(process.cwd(), 'public', 'medical-expert-original.html')
  const htmlContent = fs.readFileSync(filePath, 'utf8')

  // Return raw HTML
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}
