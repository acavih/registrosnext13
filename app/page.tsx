import { sql } from "@vercel/postgres";
import { ClientComponent } from "./ClientComponent"

export default async function Home() {
  const { rows } = await sql`SELECT CURRENT_DATE`;

  console.log(rows)
  return (
    <div>
      <p>app de nextjs sss</p>
      <ClientComponent submit={async () => {
        "use server"
        console.log('holaa')

        return {name: 'aa'}
      }} />
      <button formAction={async () => {
        "use server"
        console.log('holaaa')
      }}>Ejecutar fucntion del servidor</button>
    </div>
  )
}
